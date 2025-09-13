import { getAllPosts, getAllCategories, getAllTags } from '@/lib/client-content';
import ClientHome from '@/components/ClientHome';

export default function Home() {
  const posts = getAllPosts();
  const categories = getAllCategories();
  const tags = getAllTags();

  return (
    <ClientHome 
      posts={posts}
      categories={categories}
      tags={tags}
    />
  );
}