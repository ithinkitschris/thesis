import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'content');

export function getAllCategories() {
  const categories = fs.readdirSync(contentDirectory);
  return categories.filter(category => 
    fs.statSync(path.join(contentDirectory, category)).isDirectory()
  );
}

export async function getPostsByCategory(category) {
  const categoryPath = path.join(contentDirectory, category);
  
  if (!fs.existsSync(categoryPath)) {
    return [];
  }
  
  const fileNames = fs.readdirSync(categoryPath);
  const posts = await Promise.all(
    fileNames
      .filter(fileName => fileName.endsWith('.md'))
      .map(async fileName => {
        const fullPath = path.join(categoryPath, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data, content } = matter(fileContents);
        
        return {
          slug: fileName.replace(/\.md$/, ''),
          category,
          title: data.title || fileName.replace(/\.md$/, ''),
          date: data.date || new Date().toISOString(),
          tags: data.tags || [],
          excerpt: data.excerpt || content.substring(0, 150) + '...',
          content,
          ...data
        };
      })
  );
  
  return posts.sort((a, b) => new Date(b.date) - new Date(a.date));
}

export async function getAllPosts() {
  const categories = getAllCategories();
  const allPosts = [];
  
  for (const category of categories) {
    const posts = await getPostsByCategory(category);
    allPosts.push(...posts);
  }
  
  return allPosts.sort((a, b) => new Date(b.date) - new Date(a.date));
}

export function getPostBySlug(category, slug) {
  const fullPath = path.join(contentDirectory, category, `${slug}.md`);
  
  if (!fs.existsSync(fullPath)) {
    return null;
  }
  
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  
  return {
    slug,
    category,
    title: data.title || slug,
    date: data.date || new Date().toISOString(),
    tags: data.tags || [],
    content,
    ...data
  };
}


export function getAllTags() {
  const allPosts = getAllPosts();
  const tags = new Set();
  
  allPosts.forEach(post => {
    if (post.tags) {
      post.tags.forEach(tag => tags.add(tag));
    }
  });
  
  return Array.from(tags).sort();
}

export function getPostsByTag(tag) {
  const allPosts = getAllPosts();
  return allPosts.filter(post => 
    post.tags && post.tags.includes(tag)
  );
}
