"""
Script to read and process phone survey responses from JSONL file
Format: Each line contains either {"q1": "answer"} OR {"q2": "answer"}
Usage: python read_survey.py
"""

import json
from collections import Counter, defaultdict
from pathlib import Path
from difflib import SequenceMatcher


def read_jsonl(file_path):
    """Read JSONL file and separate q1 and q2 responses"""
    q1_responses = []
    q2_responses = []
    
    with open(file_path, 'r', encoding='utf-8') as f:
        for line in f:
            line = line.strip()
            if line:  # Skip empty lines
                data = json.loads(line)
                if 'q1' in data:
                    q1_responses.append(data['q1'])
                if 'q2' in data:
                    q2_responses.append(data['q2'])
    
    return q1_responses, q2_responses


def is_valid_answer(answer):
    """Check if an answer is valid (not a placeholder or empty)"""
    if not answer:
        return False
    # Filter out common placeholders
    invalid_responses = ['what?', '–', '-', 'n/a', 'na', '']
    return answer.lower().strip() not in invalid_responses


def similarity_ratio(a, b):
    """Calculate similarity ratio between two strings"""
    return SequenceMatcher(None, a.lower(), b.lower()).ratio()


def find_similar_words(word, word_list, threshold=0.7):
    """Find words in word_list that are similar to word"""
    similar = []
    word_lower = word.lower()
    
    for other in word_list:
        other_lower = other.lower()
        
        # Check if one contains the other
        if word_lower in other_lower or other_lower in word_lower:
            similar.append(other)
        # Check similarity ratio
        elif similarity_ratio(word_lower, other_lower) >= threshold:
            similar.append(other)
    
    return similar


def create_semantic_categories(unique_responses):
    """
    Automatically create semantic categories from unique responses.
    Returns a dict mapping response -> category name
    """
    # Define semantic keyword mappings for categorization
    category_keywords = {
        'Communication': ['communication', 'messaging', 'message', 'calling', 'call', 'talk', 
                         'connection', 'connect', 'family', 'friend', 'human connection'],
        'Social Media': ['social', 'grindr', 'dating', 'instagram', 'facebook', 'twitter'],
        'Navigation': ['navigation', 'maps', 'directions', 'wayfinding'],
        'Entertainment': ['entertainment', 'music', 'film', 'movie', 'watching', 'reading', 'books', 'brainrot'],
        'Productivity': ['work', 'calendar', 'alarm', 'clock', 'second brain', 'content creation'],
        'Information': ['information', 'knowledge', 'weather', 'news'],
        'Utility': ['calculator', 'camera', 'qr code', 'authenticator'],
        'Stimulation': ['stimulation', 'dopamine'],
    }
    
    categorization = {}
    
    for response in unique_responses:
        response_lower = response.lower().strip()
        
        # Try to match to a category
        best_category = None
        best_match_score = 0
        
        for category, keywords in category_keywords.items():
            for keyword in keywords:
                # Check if keyword is in response or response is in keyword
                if keyword in response_lower or response_lower in keyword:
                    # Calculate match strength
                    match_score = len(keyword) if keyword in response_lower else len(response_lower)
                    if match_score > best_match_score:
                        best_match_score = match_score
                        best_category = category
        
        # If no match found, use the response itself as category
        if best_category:
            categorization[response] = best_category
        else:
            # Capitalize first letter for uncategorized items
            categorization[response] = response.title()
    
    return categorization


def categorize_responses(responses):
    """
    Categorize responses while keeping original text intact.
    Returns: (category_counts, response_to_category_map, responses_by_category)
    """
    if not responses:
        return Counter(), {}, {}
    
    # Get unique responses
    unique_responses = list(set(responses))
    
    # Create categories
    response_to_category = create_semantic_categories(unique_responses)
    
    # Group responses by category
    responses_by_category = defaultdict(list)
    category_list = []
    
    for response in responses:
        category = response_to_category.get(response, response.title())
        category_list.append(category)
        responses_by_category[category].append(response)
    
    # Count categories
    category_counts = Counter(category_list)
    
    return category_counts, response_to_category, dict(responses_by_category)


def calculate_percentages(counts, total):
    """Calculate percentages for each count"""
    return [(item, count, (count / total * 100) if total > 0 else 0) 
            for item, count in counts.most_common()]


def analyze_responses(q1_responses, q2_responses, enable_categorization=True):
    """Analyze survey responses and return statistics with optional auto-categorization"""
    
    # Filter valid answers
    q1_valid = [ans for ans in q1_responses if is_valid_answer(ans)]
    q2_valid = [ans for ans in q2_responses if is_valid_answer(ans)]
    
    # Count frequency of answers (original)
    q1_counts = Counter(q1_valid)
    q2_counts = Counter(q2_valid)
    
    # Count invalid/missing responses
    q1_invalid = len(q1_responses) - len(q1_valid)
    q2_invalid = len(q2_responses) - len(q2_valid)
    
    # Categorize responses (keeps original text, assigns to categories)
    q1_category_counts, q1_response_to_category, q1_responses_by_category = {}, {}, {}
    q2_category_counts, q2_response_to_category, q2_responses_by_category = {}, {}, {}
    
    if enable_categorization and q1_valid:
        q1_category_counts, q1_response_to_category, q1_responses_by_category = categorize_responses(q1_valid)
    
    if enable_categorization and q2_valid:
        q2_category_counts, q2_response_to_category, q2_responses_by_category = categorize_responses(q2_valid)
    
    # Calculate percentages
    q1_percentages = calculate_percentages(q1_counts, len(q1_valid))
    q2_percentages = calculate_percentages(q2_counts, len(q2_valid))
    
    q1_category_percentages = calculate_percentages(q1_category_counts, len(q1_valid)) if q1_category_counts else []
    q2_category_percentages = calculate_percentages(q2_category_counts, len(q2_valid)) if q2_category_counts else []
    
    return {
        'total_q1': len(q1_responses),
        'total_q2': len(q2_responses),
        'q1': {
            'valid_answers': len(q1_valid),
            'invalid_answers': q1_invalid,
            'unique_answers': len(q1_counts),
            'unique_categories': len(q1_category_counts) if q1_category_counts else 0,
            'most_common': q1_counts.most_common(10),
            'most_common_with_percentages': q1_percentages[:10],
            'categories': q1_category_counts.most_common(10) if q1_category_counts else [],
            'categories_with_percentages': q1_category_percentages[:10],
            'response_to_category': q1_response_to_category,
            'responses_by_category': q1_responses_by_category,
            'all_answers': q1_valid
        },
        'q2': {
            'valid_answers': len(q2_valid),
            'invalid_answers': q2_invalid,
            'unique_answers': len(q2_counts),
            'unique_categories': len(q2_category_counts) if q2_category_counts else 0,
            'most_common': q2_counts.most_common(10),
            'most_common_with_percentages': q2_percentages[:10],
            'categories': q2_category_counts.most_common(10) if q2_category_counts else [],
            'categories_with_percentages': q2_category_percentages[:10],
            'response_to_category': q2_response_to_category,
            'responses_by_category': q2_responses_by_category,
            'all_answers': q2_valid
        }
    }


def print_analysis(analysis):
    """Pretty print the analysis results"""
    print(f"\n{'='*70}")
    print(f"PHONE SURVEY ANALYSIS")
    print(f"{'='*70}\n")
    
    print(f"Total Q1 responses: {analysis['total_q1']}")
    print(f"Total Q2 responses: {analysis['total_q2']}\n")
    
    # Question 1
    print(f"{'='*70}")
    print(f"Question 1: What's one thing you absolutely rely on your phone for?")
    print(f"{'='*70}")
    print(f"Valid answers: {analysis['q1']['valid_answers']}")
    print(f"Invalid: {analysis['q1']['invalid_answers']}")
    print(f"Unique answers: {analysis['q1']['unique_answers']}")
    
    print(f"\n📊 Original Responses (with percentages):")
    for answer, count, percentage in analysis['q1']['most_common_with_percentages'][:10]:
        print(f"  {answer:30s} {count:3d} responses ({percentage:5.1f}%)")
    
    if analysis['q1']['categories']:
        print(f"\n🏷️  Categories (Auto-grouped):")
        print(f"  {analysis['q1']['unique_categories']} categories identified\n")
        for category, count, percentage in analysis['q1']['categories_with_percentages']:
            print(f"  [{category}] {count} responses ({percentage:.1f}%)")
            # Show which responses are in this category
            if category in analysis['q1']['responses_by_category']:
                responses_in_cat = Counter(analysis['q1']['responses_by_category'][category])
                for resp, resp_count in responses_in_cat.most_common():
                    print(f"    → {resp} ({resp_count})")
        print()
    
    # Question 2
    print(f"\n{'='*70}")
    print(f"Question 2: What's one thing you wish you didn't need your phone for?")
    print(f"{'='*70}")
    print(f"Valid answers: {analysis['q2']['valid_answers']}")
    print(f"Invalid: {analysis['q2']['invalid_answers']}")
    print(f"Unique answers: {analysis['q2']['unique_answers']}")
    
    print(f"\n📊 Original Responses (with percentages):")
    for answer, count, percentage in analysis['q2']['most_common_with_percentages'][:10]:
        print(f"  {answer:30s} {count:3d} responses ({percentage:5.1f}%)")
    
    if analysis['q2']['categories']:
        print(f"\n🏷️  Categories (Auto-grouped):")
        print(f"  {analysis['q2']['unique_categories']} categories identified\n")
        for category, count, percentage in analysis['q2']['categories_with_percentages']:
            print(f"  [{category}] {count} responses ({percentage:.1f}%)")
            # Show which responses are in this category
            if category in analysis['q2']['responses_by_category']:
                responses_in_cat = Counter(analysis['q2']['responses_by_category'][category])
                for resp, resp_count in responses_in_cat.most_common():
                    print(f"    → {resp} ({resp_count})")
        print()
    
    print(f"{'='*70}\n")


def export_for_visualization(analysis, output_file='survey_data_viz.json'):
    """Export data in a format ready for visualization libraries"""
    
    # Prepare category data for export
    q1_categories_with_responses = {}
    if analysis['q1']['responses_by_category']:
        for category, responses in analysis['q1']['responses_by_category'].items():
            q1_categories_with_responses[category] = {
                'count': len(responses),
                'responses': dict(Counter(responses))
            }
    
    q2_categories_with_responses = {}
    if analysis['q2']['responses_by_category']:
        for category, responses in analysis['q2']['responses_by_category'].items():
            q2_categories_with_responses[category] = {
                'count': len(responses),
                'responses': dict(Counter(responses))
            }
    
    viz_data = {
        'metadata': {
            'total_q1_responses': analysis['total_q1'],
            'total_q2_responses': analysis['total_q2'],
            'questions': {
                'q1': "What's one thing you absolutely rely on your phone for?",
                'q2': "What's one thing you wish you didn't need your phone for?"
            },
            'valid_counts': {
                'q1': analysis['q1']['valid_answers'],
                'q2': analysis['q2']['valid_answers']
            }
        },
        'responses': {
            'q1': {
                'raw': analysis['q1']['all_answers'],
                'counts': dict(analysis['q1']['most_common']),
                'percentages': {item: f"{pct:.1f}%" for item, count, pct in analysis['q1']['most_common_with_percentages']}
            },
            'q2': {
                'raw': analysis['q2']['all_answers'],
                'counts': dict(analysis['q2']['most_common']),
                'percentages': {item: f"{pct:.1f}%" for item, count, pct in analysis['q2']['most_common_with_percentages']}
            }
        },
        'categories': {
            'q1': {
                'category_counts': dict(analysis['q1']['categories']) if analysis['q1']['categories'] else {},
                'category_percentages': {cat: f"{pct:.1f}%" for cat, count, pct in analysis['q1']['categories_with_percentages']},
                'response_to_category': analysis['q1']['response_to_category'],
                'categories_with_responses': q1_categories_with_responses
            },
            'q2': {
                'category_counts': dict(analysis['q2']['categories']) if analysis['q2']['categories'] else {},
                'category_percentages': {cat: f"{pct:.1f}%" for cat, count, pct in analysis['q2']['categories_with_percentages']},
                'response_to_category': analysis['q2']['response_to_category'],
                'categories_with_responses': q2_categories_with_responses
            }
        }
    }
    
    output_path = Path(__file__).parent / output_file
    with open(output_path, 'w', encoding='utf-8') as f:
        json.dump(viz_data, f, indent=2, ensure_ascii=False)
    
    print(f"Visualization data exported to: {output_path}")
    return viz_data


if __name__ == "__main__":
    # Path to the JSONL file
    jsonl_file = Path(__file__).parent / 'phone_survey.jsonl'
    
    try:
        # Read responses
        print(f"Reading responses from: {jsonl_file}")
        q1_responses, q2_responses = read_jsonl(jsonl_file)
        
        if not q1_responses and not q2_responses:
            print("No responses found in the file.")
        else:
            # Analyze
            analysis = analyze_responses(q1_responses, q2_responses)
            
            # Print results
            print_analysis(analysis)
            
            # Export for visualization
            export_for_visualization(analysis)
    
    except FileNotFoundError:
        print(f"Error: Could not find {jsonl_file}")
    except json.JSONDecodeError as e:
        print(f"Error: Invalid JSON format in file: {e}")
    except Exception as e:
        print(f"Error: {e}")

