import { getPostsByTag, getAllTags } from '@/lib/client-content';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  const tags = getAllTags();
  return tags.map(tag => ({
    tag,
  }));
}

export default function TagPage({ params }) {
  const { tag } = params;
  const posts = getPostsByTag(tag);
  
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
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Posts tagged &quot;{tag}&quot;</h1>
        <p className="text-gray-600 dark:text-gray-400">{posts.length} {posts.length === 1 ? 'entry' : 'entries'}</p>
      </header>
      
      <main>
        <div className="space-y-8">
          {posts.map(post => (
            <article key={`${post.category}-${post.slug}`} className="border-b border-gray-200 dark:border-gray-700 pb-8 last:border-b-0">
              <div className="flex items-center gap-4 mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-2 py-1 rounded text-xs font-medium capitalize">
                  {post.category}
                </span>
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
                  {post.tags.map(postTag => (
                    <Link 
                      key={postTag} 
                      href={`/tag/${postTag}`} 
                      className={`px-3 py-1 rounded-full text-sm transition-colors ${
                        postTag === tag 
                          ? 'bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 font-medium' 
                          : 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300'
                      }`}
                    >
                      {postTag}
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