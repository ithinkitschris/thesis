'use client';

import { useNavigation } from '@/lib/navigation-context';
import ThemeToggle from '@/components/ThemeToggle';

export default function Sidebar({ categories, tags }) {
  const { currentView, navigateToHome, navigateToCategory, navigateToTag } = useNavigation();

  return (
    <aside className="lg:sticky lg:top-8">
      <div className="space-y-8">
        {/* Header */}
        <header className="mb-12 w-full">
          <h1 
            className="text-3xl font-medium text-left tracking-[-0.03rem] mb-2 text-foreground pr-12 leading-[2rem]"
            onClick={navigateToHome}
          >
            A study into the future of User Interfaces
          </h1>
          <p className="text-lg text-foreground"></p>
        </header>
        
        {/* Categories */}
        <div>
          <h3 className="text-xl font-semibold tracking-[-0.02rem] mb-2 text-foreground">Categories</h3>
          <ul className="flex flex-col">
            {categories.map(category => (
              <li key={category}>
                <button
                  onClick={() => navigateToCategory(category)}
                  className={`block py-1 text-sm text-left w-full underline hover:scale-96  origin-left ${
                    currentView.type === 'category' && currentView.data === category 
                      ? 'text-foreground font-medium' 
                      : 'text-link'
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Tags */}
        {tags.length > 0 && (
          <div>
            <h3 className="text-xl font-semibold tracking-[-0.02rem] mb-2 text-foreground">Tags</h3>
            <div className="flex flex-col">
              {tags.map(tag => (
                <button
                  key={tag}
                  onClick={() => navigateToTag(tag)}
                  className={`block py-1 text-sm text-left w-full underline hover:scale-96  origin-left ${
                    currentView.type === 'tag' && currentView.data === tag 
                      ? 'text-foreground font-medium' 
                      : 'text-link'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        )}

        <ThemeToggle/>
      </div>
    </aside>
  );
}
