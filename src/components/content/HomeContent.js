'use client';

import { useNavigation } from '@/lib/navigation-context';

export default function HomeContent({ posts }) {
  const { navigateToPost } = useNavigation();

  return (
    <div className="space-y-8">
      {posts.map((post, index) => (
        <article 
          key={`${post.category}-${post.slug}`} 
          className="pb-12"
        >
          {/* Title and Date */}
          <div className="flex items-center justify-between gap-4 mb-2 text-sm">
            {/* Title */}
            <h3 className="mb-6">
              <button
                onClick={() => navigateToPost(post.category, post.slug)}
                className="inline-block text-2xl font-semibold tracking-[-0.02rem] text-link underline hover:scale-99 text-left"
              >
                {post.title}
              </button>
            </h3>

            {/* Date */}
            <span className="text-foreground tracking-[-0.02rem]">
              {(() => {
                const date = new Date(post.date);
                const day = date.getDate();
                const month = date.getMonth() + 1;
                const year = String(date.getFullYear()).slice(-2);
                return `${month}/${day}/${year}`;
              })()}
            </span>
          </div>
          
          <p className="text-foreground text-sm">{post.excerpt}</p>
        </article>
      ))}
    </div>
  );
}
