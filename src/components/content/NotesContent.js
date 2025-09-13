'use client';

import { useNavigation } from '@/lib/navigation-context';
import { useState } from 'react';
import { ArrowPathIcon } from '@heroicons/react/24/outline';
import PostIt from '@/components/PostIt';

export default function NotesContent({ showBackButton = true, isMainPage = false }) {
  const { navigateToHome } = useNavigation();
  const [forceUpdate, setForceUpdate] = useState(0);
  
  // PostIt color constants
  const ORANGE = 'bg-orange-100';
  const PINK = 'bg-pink-100';
  const BLUE = 'bg-blue-100';
  const CYAN = 'bg-sky-100';
  const TEAL = 'bg-teal-100';
  const PURPLE = 'bg-purple-100';
  const RED = 'bg-red-100';
  
  // Notes data - easily manageable array
  const notesData = [
    {
      header: "Art Direction in UI",
      content: "Does Art Direction UI matter to the layperson? Who does it matter to?",
      color: ORANGE
    },
    {
      header: "Affordances", 
      content: "Affordances already exist, do not change them. However can I further refine them?",
      color: PINK
    },
    {
      header: "History",
      content: "Research on the history of UI",
      color: BLUE
    },
    {
      header: "Rounded Rectangles",
      content: "How did we get there?",
      color: ORANGE
    },
    {
      header: "History", 
      content: "What if we relooked some of the decisions on UI made in the past? What did we leave behind?",
      color: BLUE
    },
    {
      header: "Friction for good",
      content: "If I am redesigning a pre-existing behavior, it introduces friction. Can this be used for good?",
      color: PINK
    },
    {
      header: "Intentionality",
      content: "Being intentional with UI. A bank transaction could be a dialog box that you accept, but yet it is a swipe. It is enjoyable. Can we have more enjoyable friction in UI?",
      color: PINK
    },
    {
      header: "Emotion",
      content: "What is 'enjoyable' in UI?",
      color: ORANGE
    },
    {
      header: "",
      content: "Cognitive Psychology in Spatial Metaphors.",
      color: CYAN
    },
    {
      header: "'The Digital Place'",
      content: "Establishing UI as a space with concepts like z-depth, containment, spatial metaphors and screen transitions.",
      color: CYAN
    },
    {
      header: "",
      content: "Is it possible to create a 2D UI so intuitive it feels like a navigable space?",
      color: CYAN
    },
    {
      header: "Human-Centered Design",
      content: "Forces designers to confront their assumptions and build solutions based on real-world user behavior, not on their own mental models.",
      color: RED
    },
    {
      header: "Convergence of Design",
      content: "Consistency in UI is crucial due to users Mental Models, drastically reducing the Gulf of Execution.",
      color: TEAL
    },
    {
      header: "",
      content: "However, this leads to a convergence of UI design, which can be limiting. Or is this an interesting field of opportunity to work within extremely tight constraints?",
      color: TEAL
    },
    {
      header: "",
      content: "Through the careful use of signifiers, you create a perceived affordance. A button with a shadow perceives to afford pushing. For designers, perception is reality.",
      color: PINK
    },
    {
      header: "Learned Signifiers",
      content: "How do you influence 'Learned Signifiers'? Can we go back to the Obvious from the Abstract? Is there more potential within Micro-interactions in guiding Signifiers and in turn Affordances in the future?",
      color: RED
    }
  ];
  
  // Reset positions to original grid layout
  const resetPositions = () => {
    localStorage.removeItem('notesPositions');
    // Force re-render by updating state
    setForceUpdate(prev => prev + 1);
  };

  return (
    <div className="w-full h-full pointer-events-none">
      {/* Back to Home */}
      {/* {showBackButton && (
        <nav className="mb-8 pointer-events-auto inline-block">
          <button
            onClick={navigateToHome}
            className="text-link hover:scale-96 origin-left inline-flex items-center text-sm underline"
          >
            ← Back to Home
          </button>
        </nav>
      )} */}
      
      {/* Category Title */}
      <header className={`pb-3 flex justify-start items-center gap-3 ${isMainPage ? 'hidden' : 'block'}`}>

        {/* Notes Title */}
        {/* <h1 className={`font-medium text-foreground mb-2 capitalize tracking-[-0.02rem] text-3xl pointer-events-auto`}>Notes</h1> */}

        {/* Reset Positions Button */}
        <button
          onClick={resetPositions}
          className="flex ml-8 gap-2 text-sm text-foreground/70 hover:text-foreground transition-colors pointer-events-auto"
        >
          <ArrowPathIcon className="w-6 h-6 mb-1 hover:rotate-180 transition-transform duration-200" />
        </button>

      </header>
      
      {/* Post Its */}
      <main className="relative">
        <div className="grid grid-cols-2 gap-2 pr-10">
          {notesData.map((note, index) => (
            <div key={`wrapper-${index}-${forceUpdate}`} className="pointer-events-auto">
              <PostIt
                key={`note-${index}-${forceUpdate}`}
                id={`note-${index}`}
                header={note.header}
                content={<p>{note.content}</p>}
                color={note.color}
              />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
} 