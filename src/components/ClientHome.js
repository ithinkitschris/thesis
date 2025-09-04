'use client';

import { NavigationProvider } from '@/lib/navigation-context';
import Sidebar from '@/components/Sidebar';
import MainContent from '@/components/MainContent';

export default function ClientHome({ posts, categories, tags }) {
  return (
    <NavigationProvider>
      {/* Page Container */}
      <div className="max-w-5xl mt-32 grid grid-cols-1 lg:grid-cols-4 gap-12 mx-auto flex-col items-start justify-center">
        <Sidebar categories={categories} tags={tags} />
        <MainContent 
          posts={posts}
          allPosts={posts}
        />
      </div>
    </NavigationProvider>
  );
}
