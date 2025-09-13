import { getPostBySlug, getAllPosts } from '@/lib/client-content';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map(post => ({
    category: post.category,
    slug: post.slug,
  }));
}

export default function PostPage({ params }) {
  const { category, slug } = params;
  const post = getPostBySlug(category, slug);
  
  if (!post) {
    notFound();
  }
  
  const content = post.htmlContent;
  
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
      
      <article>
        <header className="mb-8 border-b border-gray-200 dark:border-gray-700 pb-6">
          <div className="flex items-center gap-4 mb-4 text-sm text-gray-500 dark:text-gray-400">
            <span className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-3 py-1 rounded text-sm font-medium capitalize">
              {post.category}
            </span>
            <span>{new Date(post.date).toLocaleDateString()}</span>
          </div>
          
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{post.title}</h1>
          
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
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
        </header>
        
        <div 
          className="prose prose-lg max-w-none dark:prose-invert prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-a:text-blue-600 dark:prose-a:text-blue-400 prose-strong:text-gray-900 dark:prose-strong:text-white prose-code:bg-gray-100 dark:prose-code:bg-gray-800 prose-code:text-gray-800 dark:prose-code:text-gray-200 prose-pre:bg-gray-50 dark:prose-pre:bg-gray-800"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </article>
    </div>
  );
}