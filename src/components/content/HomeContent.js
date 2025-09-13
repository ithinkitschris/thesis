'use client';

import { useNavigation } from '@/lib/navigation-context';

export default function HomeContent({ posts }) {
  const { navigateToPost } = useNavigation();

  return (
    <div className="relative">
      
      {/* Posts Feed - Positioned first in DOM */}
      <div className="pt-0 space-y-8">

        {/* Header */}
        {/* <header className="mb-12 border-b-[0px] border-foreground pb-10">
          <h1 className="text-3xl font-medium text-foreground mb-2 tracking-[-0.02rem]">Home</h1>
          <p className="text-foreground/70 font-mono text-sm">{posts.length} {posts.length === 1 ? 'entry' : 'entries'}</p>
        </header> */}

        {/* Posts */}
        {posts.map((post, index) => (
        <article 
          key={`${post.category}-${post.slug}`} 
          className="pb-3 border-b-[0px] border-foreground"
        >
          {/* Title and Date */}
          <div className="flex items-start justify-between mb-2 text-sm">

            {/* Title */}
            <h3 className="mb-2 w-full">
              <button
                onClick={() => navigateToPost(post.category, post.slug)}
                className="inline-block text-lg font-medium tracking-[-0.02rem] w-[85%] leading-[1.4] text-link underline hover:scale-99 text-left"
              >
                {post.title}
              </button>
            </h3>

            {/* Category */}
            {/* <span className="text-foreground text-xs tracking-tight">
              {post.category}
            </span> */}

            {/* Date */}
            <span className="text-foreground text-xs font-mono tracking-tight">
              {(() => {
                const date = new Date(post.date);
                const day = date.getDate() + 1;
                const month = date.getMonth() + 1;
                const year = String(date.getFullYear()).slice(-2);
                return `${String(month).padStart(2, '0')}/${day}/${year}`;
              })()}
            </span>
          </div>

          {/* Title */}
          {/* <h3 className="mb-2 w-full">
            <button
              onClick={() => navigateToPost(post.category, post.slug)}
              className="inline-block text-lg font-medium tracking-[-0.02rem] w-[85%] leading-[1.4] text-link underline hover:scale-99 text-left"
            >
              {post.title}
            </button>
          </h3> */}
          
          <p className="text-foreground text-sm">{post.excerpt}</p>
        </article>
        ))}
      </div>
    </div>
  );
}
