import { getPostsByCategory, getAllCategories } from '@/lib/client-content';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  const categories = getAllCategories();
  return categories.map(category => ({
    category,
  }));
}

export default function CategoryPage({ params }) {
  const { category } = params;
  const posts = getPostsByCategory(category);
  
  if (posts.length === 0) {
    notFound();
  }
  
  return (
    <div className="max-w-4xl mx-auto p-8">
      <nav className="mb-8">
        <Link 
          href="/" 
          className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors inline-flex items-center"
        >
          ← Back to Home
        </Link>
      </nav>
      
      <header className="mb-12 border-b border-gray-200 dark:border-gray-700 pb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2 capitalize">{category}</h1>
        <p className="text-gray-600 dark:text-gray-400">{posts.length} {posts.length === 1 ? 'entry' : 'entries'}</p>
      </header>
      
      <main>
        <div className="space-y-8">
          {posts.map(post => (
            <article key={post.slug} className="border-b border-gray-200 dark:border-gray-700 pb-8 last:border-b-0">
              <div className="flex items-center gap-4 mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span>{new Date(post.date).toLocaleDateString()}</span>
              </div>
              
              <h3 className="mb-2">
                <Link 
                  href={`/posts/${post.category}/${post.slug}`}
                  className="text-xl font-semibold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  {post.title}
                </Link>
              </h3>
              
              {post.tags && post.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-3">
                  {post.tags.map(tag => (
                    <Link 
                      key={tag} 
                      href={`/tag/${tag}`} 
                      className="bg-blue-50 dark:bg-blue-900/30 hover:bg-blue-100 dark:hover:bg-blue-900/50 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-sm transition-colors"
                    >
                      {tag}
                    </Link>
                  ))}
                </div>
              )}
              
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{post.excerpt}</p>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}