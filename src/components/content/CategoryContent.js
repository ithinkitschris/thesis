'use client';

import { useNavigation } from '@/lib/navigation-context';

export default function CategoryContent({ category, posts }) {
  const { navigateToPost, navigateToTag, navigateToHome } = useNavigation();
  if (posts.length === 0) {
    return (
      <div>
        <p className="text-foreground">No posts found in this category.</p>
      </div>
    );
  }

  return (
    <div>

      {/* Back to Home */}
      <nav className="mb-8">
        <button
          onClick={navigateToHome}
          className="text-link hover:scale-96 origin-left inline-flex items-center text-sm underline"
        >
          ← Back to Home
        </button>
      </nav>
      
      {/* Category Title and Count */}
      <header className="mb-12 border-b-[1.5px] border-foreground pb-10">
        <h1 className="text-3xl font-medium text-foreground mb-2 capitalize tracking-[-0.02rem]">{category}</h1>
        <p className="ml-0.5 text-foreground/70 font-mono text-sm tracking-[-0.03rem]">{posts.length} {posts.length === 1 ? 'Entry' : 'Entries'}</p>
      </header>
      
      {/* Posts */}
      <main>
        <div className="space-y-8">

          {/* Post */}
          {posts.map((post, index) => (
            <article 
              key={post.slug} 
              className="pb-2 last:border-b-0"
            >
              {/* Title and Date */}
              <div className="flex items-center justify-between gap-4 mb-2 text-sm">

                {/* Title */}
                <h3>
                  <button
                    onClick={() => navigateToPost(post.category, post.slug)}
                    className="text-xl font-medium text-link underline hover:scale-99 text-left"
                  >
                    {post.title}
                  </button>
                </h3>

                {/* Date */}
                <span className="text-foreground/70 font-mono text-xs tracking-tight">
                  {new Date(post.date).toLocaleDateString()}
                </span>

              </div>
              
              {/* Tags */}
              {/* {post.tags && post.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-3">
                  {post.tags.map(tag => (
                    <button
                      key={tag}
                      onClick={() => navigateToTag(tag)}
                      className="bg-foreground/5 hover:bg-foreground/10 text-foreground/70 hover:text-foreground px-3 py-1 text-sm transition-colors underline"
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              )} */}
              
              <p className="text-foreground/80 text-sm leading-[1.5] w-[90%]">{post.excerpt}</p>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}
