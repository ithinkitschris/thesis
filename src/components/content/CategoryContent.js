'use client';

import { useNavigation } from '@/lib/navigation-context';
import { useState, useEffect } from 'react';
import { ArrowPathIcon } from '@heroicons/react/24/outline';
import PostIt from '@/components/PostIt';

export default function CategoryContent({ category, posts }) {
  const { navigateToPost, navigateToTag, navigateToHome } = useNavigation();
  const [forceUpdate, setForceUpdate] = useState(0);
  
  // Reset positions to original grid layout
  const resetPositions = () => {
    localStorage.removeItem('notesPositions');
    // Force re-render by updating state
    setForceUpdate(prev => prev + 1);
  };

  // NOTES
  if (category === 'notes') {
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
        
        {/* Category Title */}
        <header className="pb-8 flex justify-start items-center gap-3">
          <h1 className="text-3xl font-medium text-foreground mb-2 capitalize tracking-[-0.02rem]">Notes</h1>
          <button
            onClick={resetPositions}
            className="flex items-center gap-2 text-sm text-foreground/70 hover:text-foreground transition-colors"
          >
            <ArrowPathIcon className="w-6 h-6 mb-1 hover:rotate-180 transition-transform duration-200" />
          </button>
        </header>
        
          {/* HARDCODED NOTES */}
          <main>
            <div className="grid grid-cols-3 gap-4">

              <PostIt
                key={`todo-notes-${forceUpdate}`}
                id="todo-notes"
                header="To-do"
                content={
                  <p>Next steps: Analyze case studies and gather quantitative data. Next steps: Analyze case studies and gather quantitative data. Next steps: Analyze case studies and gather quantitative data. Next steps: Analyze case studies and gather quantitative data. Next steps: Analyze case studies and gather quantitative data.</p>
                }
              />

              <PostIt
                key={`research-notes-${forceUpdate}`}
                id="research-notes"
                header="Research"
                content={
                  <p>Key findings from initial research phase. Documentation benefits for developer productivity and impact of clear project structure on team collaboration.</p>
                }
              />

              <PostIt
                key={`workflow-notes-${forceUpdate}`}
                id="workflow-notes"
                header="Workflow"
                content={
                  <p>Development workflow optimization ideas and best practices for maintaining code quality through automated testing and continuous integration.</p>
                }
              />

              

              
            </div>
          </main>
      </div>
    );
  }

  // OTHER CATEGORIES
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
      <header className="mb-12 pb-8">
        <h1 className="text-3xl font-medium text-foreground mb-2 capitalize tracking-[-0.02rem]">{category}</h1>
        <p className="ml-0.5 text-foreground/70 text-sm">{posts.length} {posts.length === 1 ? 'entry' : 'entries'}</p>
      </header>
      
      {/* Posts */}
      <main>
        <div className="space-y-8">

          {/* Post */}
          {posts.map((post, index) => (
            <article 
              key={post.slug} 
              className="border-b border-foreground/10 pb-8 last:border-b-0"
            >
              {/* Title and Date */}
              <div className="flex items-center justify-between gap-4 mb-2 text-sm">

                {/* Title */}
                <h3>
                  <button
                    onClick={() => navigateToPost(post.category, post.slug)}
                    className="text-xl font-semibold text-link underline hover:scale-99"
                  >
                    {post.title}
                  </button>
                </h3>

                {/* Date */}
                <span className="text-foreground/70">
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
              
              <p className="text-foreground/80 text-sm leading-relaxed">{post.excerpt}</p>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}
