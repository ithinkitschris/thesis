# Phone Survey Data

## Survey Questions
1. **What's one thing you absolutely rely on your phone for?**
2. **What's one thing you wish you didn't need your phone for?**

## File Structure

### `phone_survey.jsonl`
This is your survey data file. Each line represents one survey response.

**Format:**
Each line contains a single answer to either question 1 or question 2.
```json
{"q1": "answer_here"}
{"q1": "answer_here"}
{"q2": "answer_here"}
{"q2": "answer_here"}
```

**To add a new response:**
1. Open `phone_survey.jsonl`
2. Add Q1 answers: `{"q1": "answer"}`
3. Add Q2 answers: `{"q2": "answer"}`
4. Each answer on its own line
5. No comma needed between lines!

**Example:**
```json
{"q1": "Navigation"}
{"q1": "Communication"}
{"q1": "Calendar"}
{"q2": "Social Media"}
{"q2": "Email"}
{"q2": "Banking"}
```

The Python script automatically handles:
- Missing fields (if `q1` or `q2` is not in the JSON)
- Empty strings (`""`)
- Null values (`null`)
- Placeholder responses (`"What?"`, `"–"`, `"-"`, `"N/A"`)

### `read_survey.py`
Python script to read and analyze the survey data.

**To run:**
```bash
cd data
python read_survey.py
```

**What it does:**
- Reads all responses from `phone_survey.jsonl`
- Counts frequency of each answer
- Shows most common responses
- Exports a `survey_data_viz.json` file formatted for visualization tools

## Using the Data for Visualization

After running `read_survey.py`, you'll get a `survey_data_viz.json` file that contains:
- All individual responses
- Aggregated counts of each answer
- Metadata about the survey

This JSON file can be easily imported into:
- Python visualization libraries (matplotlib, seaborn, plotly)
- JavaScript visualization libraries (D3.js, Chart.js)
- Motion graphics tools (After Effects with data import scripts)
- Data analysis tools (pandas, R)

## Tips
- Keep answers short and simple (single words or short phrases work best)
- Be consistent with capitalization and spelling
- The script will group identical answers together

