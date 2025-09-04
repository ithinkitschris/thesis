'use client';

import { useNavigation } from '@/lib/navigation-context';
import { useEffect, useState } from 'react';

export default function PostContent({ category, slug, allPosts }) {
  const { navigateToTag, navigateToHome } = useNavigation();
  const [post, setPost] = useState(null);
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadPost() {
      setLoading(true);
      const postData = allPosts?.find(p => p.category === category && p.slug === slug);
      if (postData) {
        setPost(postData);
        // For now, just use the raw content - we can implement markdown rendering later
        setContent(postData.content);
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
      
      <article>
        <header className="mb-8 border-b border-foreground/20 pb-6">
          <div className="flex items-center gap-4 mb-4 text-sm text-foreground/70">
            <span className="bg-foreground/10 text-foreground px-3 py-1 text-sm font-medium capitalize">
              {post.category}
            </span>
            <span>{new Date(post.date).toLocaleDateString()}</span>
          </div>
          
          <h1 className="text-3xl font-medium text-foreground mb-4 tracking-[-0.02rem]">{post.title}</h1>
          
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
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
          )}
        </header>
        
        <div className="prose prose-lg max-w-none text-foreground prose-headings:text-foreground prose-p:text-foreground/90 prose-a:text-link prose-strong:text-foreground prose-code:bg-foreground/10 prose-code:text-foreground prose-pre:bg-foreground/5">
          <pre className="whitespace-pre-wrap text-foreground/90 text-sm leading-relaxed">
            {content}
          </pre>
        </div>
      </article>
    </div>
  );
}
