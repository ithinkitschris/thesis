import SurveyVisualization from '@/components/SurveyVisualization';
import Sidebar from '@/components/Sidebar';
import { getAllCategories, getAllTags } from '@/lib/client-content';

export const metadata = {
  title: 'Phone Survey Visualization | Thesis',
  description: 'Interactive visualization of phone usage survey responses',
};

export default function SurveyVizPage() {
  const categories = getAllCategories();
  const tags = getAllTags();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 min-h-screen p-8 lg:p-12">
      {/* Sidebar */}
      <div className="lg:col-span-1">
        <Sidebar categories={categories} tags={tags} />
      </div>

      {/* Main Content Area */}
      <main className="lg:col-span-3 flex items-center justify-center">
        <SurveyVisualization />
      </main>
    </div>
  );
}

