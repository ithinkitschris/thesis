'use client';

import { useNavigation } from '@/lib/navigation-context';

export default function TagContent({ tag, posts }) {
  const { navigateToPost, navigateToTag, navigateToHome } = useNavigation();

  if (posts.length === 0) {
    return (
      <div>
        <p className="text-foreground">No posts found with this tag.</p>
      </div>
    );
  }

  return (
    <div>
      <nav className="mb-8">
        <button
          onClick={navigateToHome}
          className="text-link hover:scale-97 origin-left inline-flex items-center text-sm underline"
        >
          ← Back to Home
        </button>
      </nav>
      
      <header className="mb-12 border-b border-foreground/20 pb-8">
        <h1 className="text-3xl font-medium text-foreground mb-2 tracking-[-0.02rem]">Posts tagged "{tag}"</h1>
        <p className="text-foreground/70 text-sm">{posts.length} {posts.length === 1 ? 'entry' : 'entries'}</p>
      </header>
      
      <main>
        <div className="space-y-8">
          {posts.map((post, index) => (
            <article 
              key={`${post.category}-${post.slug}`} 
              className="border-b border-foreground/10 pb-8 last:border-b-0"
            >
              <div className="flex items-center gap-4 mb-2 text-sm text-foreground/70">
                <span className="bg-foreground/10 text-foreground px-2 py-1 text-xs font-medium capitalize">
                  {post.category}
                </span>
                <span>{new Date(post.date).toLocaleDateString()}</span>
              </div>
              
              <h3 className="mb-2">
                <button
                  onClick={() => navigateToPost(post.category, post.slug)}
                  className="text-xl font-semibold text-foreground hover:text-link transition-colors text-left underline"
                >
                  {post.title}
                </button>
              </h3>
              
              {post.tags && post.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-3">
                  {post.tags.map(postTag => (
                    <button
                      key={postTag}
                      onClick={() => navigateToTag(postTag)}
                      className={`px-3 py-1 text-sm transition-colors underline ${
                        postTag === tag 
                          ? 'bg-foreground/15 text-foreground font-medium' 
                          : 'bg-foreground/5 hover:bg-foreground/10 text-foreground/70 hover:text-foreground'
                      }`}
                    >
                      {postTag}
                    </button>
                  ))}
                </div>
              )}
              
              <p className="text-foreground/80 text-sm leading-relaxed">{post.excerpt}</p>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}
