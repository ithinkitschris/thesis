'use client';

import { useNavigation } from '@/lib/navigation-context';
import Sidebar from '@/components/Sidebar';
import MainContent from '@/components/MainContent';

function ClientHomeContent({ posts, categories, tags }) {
  return (
    <div className="max-w-[50rem] mt-32 mx-auto mb-40 relative">
      <Sidebar categories={categories} tags={tags} />
      <div className="lg:ml-64 lg:pr-8">
        <MainContent 
          posts={posts}
          allPosts={posts}
        />
      </div>
    </div>
  );
}

export default function ClientHome({ posts, categories, tags }) {
  return (
    <ClientHomeContent posts={posts} categories={categories} tags={tags} />
  );
}
