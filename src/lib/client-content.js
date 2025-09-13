// Client-side content management
// This file now imports from organized content files

// Import all content functions from the organized structure
export {
  getAllPosts,
  getPostsByCategory,
  getPostsByTag,
  getAllCategories,
  getAllTags,
  getPostBySlug
} from './content/index.js';

// All content is now organized in separate files under /content/
// This file serves as the main export point for backward compatibility
