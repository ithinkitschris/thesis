// Centralized content management
import { researchPosts } from './research.js';
import { readingsPosts } from './readings.js';
import { resourcesPosts } from './resources.js';
import { thoughtSandboxPosts } from './thoughtSandbox.js';
import { conceptsPosts } from './concepts.js';

// Clean markdown to HTML converter for client-side use
export function markdownToHtml(markdown) {
  if (!markdown) return '';
  
  const lines = markdown.split('\n');
  const blocks = [];
  let i = 0;
  
  // First pass: convert lines to blocks with preserved spacing
  while (i < lines.length) {
    const line = lines[i];
    const trimmed = line.trim();
    
    // Empty lines become spacing blocks
    if (!trimmed) {
      blocks.push({ type: 'spacing' });
      i++;
      continue;
    }
    
    // Headers
    if (trimmed.startsWith('### ')) {
      blocks.push({ type: 'header', level: 3, content: trimmed.slice(4) });
      i++;
    } else if (trimmed.startsWith('## ')) {
      blocks.push({ type: 'header', level: 2, content: trimmed.slice(3) });
      i++;
    } else if (trimmed.startsWith('# ')) {
      blocks.push({ type: 'header', level: 1, content: trimmed.slice(2) });
      i++;
    }
    // Code blocks
    else if (trimmed.startsWith('```')) {
      const codeLines = [];
      i++; // Skip opening ```
      while (i < lines.length && !lines[i].trim().startsWith('```')) {
        codeLines.push(lines[i]);
        i++;
      }
      i++; // Skip closing ```
      blocks.push({ type: 'code', content: codeLines.join('\n') });
    }
    // List items
    else if (/^(\d+\.|\*|-)\s/.test(trimmed)) {
      const isNumbered = /^\d+\./.test(trimmed);
      const content = trimmed.replace(/^(\d+\.|\*|-)\s/, '');
      blocks.push({ 
        type: 'list-item', 
        numbered: isNumbered, 
        content: content,
        indent: 0 
      });
      i++;
    }
    // Indented content (potential list continuation)
    else if (/^\s+/.test(line)) {
      blocks.push({ 
        type: 'indented', 
        content: trimmed,
        indent: line.match(/^\s*/)[0].length 
      });
      i++;
    }
    // Regular paragraph content
    else {
      blocks.push({ type: 'paragraph', content: trimmed });
      i++;
    }
  }
  
  // Second pass: group blocks and convert to HTML
  const result = [];
  let j = 0;
  
  while (j < blocks.length) {
    const block = blocks[j];
    
    if (block.type === 'spacing') {
      result.push('<br>');
      j++;
    }
    else if (block.type === 'header') {
      result.push(`<h${block.level}>${processInlineFormatting(block.content)}</h${block.level}>`);
      j++;
    }
    else if (block.type === 'code') {
      result.push(`<pre><code>${block.content}</code></pre>`);
      j++;
    }
    else if (block.type === 'list-item') {
      // Collect all list items and their content
      const listItems = [];
      const isNumbered = block.numbered;
      
      while (j < blocks.length && blocks[j].type === 'list-item' && blocks[j].numbered === isNumbered) {
        const listItem = [processInlineFormatting(blocks[j].content)];
        j++;
        
        // Collect associated content (spacing and indented blocks)
        while (j < blocks.length && 
               (blocks[j].type === 'spacing' || 
                (blocks[j].type === 'indented' && blocks[j].indent > 0))) {
          
          if (blocks[j].type === 'spacing') {
            listItem.push('<br>');
          } else if (blocks[j].type === 'indented') {
            listItem.push(processInlineFormatting(blocks[j].content));
          }
          j++;
        }
        
        listItems.push(`<li>${listItem.join(' ')}</li>`);
      }
      
      const listTag = isNumbered ? 'ol' : 'ul';
      result.push(`<${listTag}>${listItems.join('')}</${listTag}>`);
    }
    else if (block.type === 'paragraph') {
      result.push(`<p>${processInlineFormatting(block.content)}</p>`);
      j++;
    }
    else {
      // Skip unhandled blocks
      j++;
    }
  }
  
  return result.join('');
}

// Process inline formatting (bold, italic, links, code)
function processInlineFormatting(text) {
  return text
    // Links (must come before bold/italic to avoid conflicts)
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-link hover:underline" target="_blank" rel="noopener noreferrer">$1</a>')
    
    // Bold
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    
    // Italic (avoid matching already processed bold)
    .replace(/(?<!\*)\*([^*]+)\*(?!\*)/g, '<em>$1</em>')
    
    // Inline code
    .replace(/`([^`]+)`/g, '<code class="bg-foreground/10 px-1 py-0.5 rounded text-sm">$1</code>');
}

// Combine all posts
export const allPosts = [
  ...researchPosts,
  ...conceptsPosts,
  ...thoughtSandboxPosts,
  ...readingsPosts,
  ...resourcesPosts,
];

// Get all posts (client-side)
export function getAllPosts() {
  return allPosts.map(post => ({
    ...post,
    htmlContent: markdownToHtml(post.content)
  }));
}

// Get posts by category
export function getPostsByCategory(category) {
  return getAllPosts().filter(post => post.category === category);
}

// Get posts by tag
export function getPostsByTag(tag) {
  return getAllPosts().filter(post => 
    post.tags && post.tags.includes(tag)
  );
}

// Get all categories
export function getAllCategories() {
  const categories = new Set();
  allPosts.forEach(post => categories.add(post.category));
  return Array.from(categories);
}

// Get all tags
export function getAllTags() {
  const tags = new Set();
  allPosts.forEach(post => {
    if (post.tags) {
      post.tags.forEach(tag => tags.add(tag));
    }
  });
  return Array.from(tags).sort();
}

// Get post by slug
export function getPostBySlug(category, slug) {
  return getAllPosts().find(post => 
    post.category === category && post.slug === slug
  );
}
