'use client';

import { useNavigation } from '@/lib/navigation-context';
import HomeContent from './content/HomeContent';
import CategoryContent from './content/CategoryContent';
import TagContent from './content/TagContent';
import PostContent from './content/PostContent';

export default function MainContent({ posts, allPosts }) {
  const { currentView } = useNavigation();

  const getCategoryPosts = (category) => {
    return allPosts.filter(post => post.category === category);
  };

  const getTagPosts = (tag) => {
    return allPosts.filter(post => post.tags && post.tags.includes(tag));
  };

  return (
    <main className="lg:col-span-3">
      {currentView.type === 'home' && (
        <HomeContent key="home" posts={posts} />
      )}
      {currentView.type === 'category' && (
        <CategoryContent 
          key={`category-${currentView.data}`} 
          category={currentView.data}
          posts={getCategoryPosts(currentView.data)}
        />
      )}
      {currentView.type === 'tag' && (
        <TagContent 
          key={`tag-${currentView.data}`} 
          tag={currentView.data}
          posts={getTagPosts(currentView.data)}
        />
      )}
      {currentView.type === 'post' && (
        <PostContent 
          key={`post-${currentView.data.category}-${currentView.data.slug}`} 
          category={currentView.data.category} 
          slug={currentView.data.slug}
          allPosts={allPosts}
        />
      )}
    </main>
  );
}
