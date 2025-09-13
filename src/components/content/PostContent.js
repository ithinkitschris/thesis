'use client';

import { useNavigation } from '@/lib/navigation-context';
import { useEffect, useState } from 'react';

export default function PostContent({ category, slug, allPosts }) {
  const { navigateToTag, navigateToHome } = useNavigation();
  const [post, setPost] = useState(null);
  const [htmlContent, setHtmlContent] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    function loadPost() {
      setLoading(true);
      const postData = allPosts?.find(p => p.category === category && p.slug === slug);
      if (postData) {
        setPost(postData);
        // Use the pre-rendered HTML content
        setHtmlContent(postData.htmlContent || '');
      }
      setLoading(false);
    }
    
    loadPost();
  }, [category, slug, allPosts]);

  if (loading) {
    return (
      <div className="text-foreground">
        Loading...
      </div>
    );
  }

  if (!post) {
    return (
      <div>
        <p className="text-foreground">Post not found.</p>
      </div>
    );
  }

  return (
    <div>
      <nav className="mb-8">
        <button
          onClick={navigateToHome}
          className="text-link hover:scale-96 transition-colors inline-flex origin-left items-center text-sm underline"
        >
          ← Back to Home
        </button>
      </nav>
      
      {/* Body */}
      <article>

        {/* Header */}
        <header className="mb-8 border-b-[1.5px] border-foreground pb-10">

          {/* Category and Date */} 
          <div className="flex items-center gap-4 mb-4 text-xs font-mono">
            {/* <span className="bg-foreground/10 text-foreground py-1 text-sm font-medium capitalize">
              {post.category}
            </span> */}
            <span>{new Date(post.date).toLocaleDateString()}</span>
          </div>

          {/* Title */}
          <h1 className="text-3xl font-medium text-foreground mb-4 tracking-[-0.02rem]">{post.title}</h1>
          
          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-3">
              {post.tags.map(tag => (
                <button
                  key={tag}
                  onClick={() => navigateToTag(tag)}
                  className="text-link hover:scale-96 text-xs underline leading-[1]"
                >
                  {tag}
                </button>
              ))}
            </div>
          )}
        </header>

        {/* Content */}
        <div 
          className={`
            prose prose-sm max-w-none text-foreground leading-[1.2rem]
            prose-headings:text-foreground prose-headings:font-medium
            prose-h2:text-2xl prose-h3:text-md
            prose-p:text-foreground/50
            prose-a:text-link
            prose-strong:text-foreground
            prose-code:bg-foreground/10 prose-code:text-foreground
            prose-pre:bg-foreground/5
          `}
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />
      </article>
    </div>
  );
}
