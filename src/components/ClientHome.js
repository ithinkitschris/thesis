'use client';

import { useNavigation } from '@/lib/navigation-context';
import Sidebar from '@/components/Sidebar';
import MainContent from '@/components/MainContent';
import NotesContent from '@/components/content/NotesContent';

function ClientHomeContent({ posts, categories, tags }) {
  return (
    <div className="mb-40 relative flex flex-row p-20 ">

      {/* Sidebar */}
      <div className="fixed xl:left-[27.5%] top-16 xl:w-[12.5%] w-[20%] left-5 md:left-10">
        <Sidebar categories={categories} tags={tags} />
      </div>


      {/* Main Content */}
      <div className="absolute xl:left-[40%] left-[28%] lg:left-[24%] top-52 xl:w-[32.5%] w-[75] md:w-[55%]">
        <MainContent 
          posts={posts}
          allPosts={posts}
        />
      </div>

      {/* Notes  */}
      {/* <div className="hidden xl:block absolute top-8 left-0 w-[24%]">
        <NotesContent isMainPage={false} showBackButton={false} />
      </div> */}
    </div>
  );
}

export default function ClientHome({ posts, categories, tags }) {
  return (
    <ClientHomeContent posts={posts} categories={categories} tags={tags} />
  );
}
