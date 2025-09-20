'use client';

import { useNavigation } from '@/lib/navigation-context';
import { useState } from 'react';
import { ArrowPathIcon } from '@heroicons/react/24/outline';
import PostIt from '@/components/PostIt';
import { resetPositions } from '@/lib/position-storage';

export default function NotesContent({ showBackButton = true, isMainPage = false }) {
  const { navigateToHome } = useNavigation();
  const [forceUpdate, setForceUpdate] = useState(0);
  
  // PostIt color constants
  const WHITE = 'bg-[#FFFFFF]';
  const GRAY = 'bg-[#E6E6EE]';
  const ORANGE = 'bg-[#FFD3A8]';
  const PINK = 'bg-[#FFA8DB]';
  const BLUE = 'bg-[#A8DAFF]';
  const CYAN = 'bg-[#B3F4EF]';
  const TEAL = 'bg-[#B3F4EF]';
  const PURPLE = 'bg-[#D3BDFF]';
  const RED = 'bg-[#FFB8A8]';
  
  // Notes data - easily manageable array
  const notesData = [
    {
      header: "Art Direction in UI",
      content: "Does Art Direction UI matter to the layperson? Who does it matter to?",
      color: ORANGE,
      textSize: "medium"
    },
    {
      header: "Affordances", 
      content: "Affordances already exist, do not change them. However can I further refine them?",
      color: PINK,
      textSize: "small"
    },
    {
      header: "History",
      content: "Research on the history of UI",
      color: BLUE,
      textSize: "large"
    },
    {
      header: "Rounded Rectangles, how did we get here?",
      content: "",
      color: ORANGE,
      textSize: "large"
    },
    {
      header: "History", 
      content: "What if we relooked some of the decisions on UI made in the past? What did we leave behind?",
      color: BLUE,
      textSize: "small"
    },
    {
      header: "Friction for good",
      content: "If I am redesigning a pre-existing behavior, it introduces friction. Can this be used for good?",
      color: PURPLE,
      textSize: "small"
    },
    {
      header: "Intentionality",
      content: "Being intentional with UI. A bank transaction could be a dialog box that you accept, but yet it is a swipe. It is enjoyable. Can we have more enjoyable friction in UI?",
      color: PURPLE,
      textSize: "small"
    },
    {
      header: "Emotion",
      content: "What is 'enjoyable' in UI?",
      color: ORANGE,
      textSize: "large"
    },
    {
      header: "",
      content: "Cognitive Psychology in Spatial Metaphors.",
      color: CYAN,
      textSize: "small"
    },
    {
      header: "'The Digital Place'",
      content: "Establishing UI as a space with concepts like z-depth, containment, spatial metaphors and screen transitions.",
      color: CYAN,
      textSize: "small"
    },
    {
      header: "",
      content: "Is it possible to create a 2D UI so intuitive it feels like a navigable space?",
      color: CYAN,
      textSize: "small"
    },
    {
      header: "Human-Centered Design",
      content: "Forces designers to confront their assumptions and build solutions based on real-world user behavior, not on their own mental models.",
      color: RED,
      textSize: "small"
    },
    {
      header: "Convergence of Design",
      content: "Consistency in UI is crucial due to users Mental Models, drastically reducing the Gulf of Execution.",
      color: GRAY,
      textSize: "small"
    },
    {
      header: "",
      content: "However, this leads to a convergence of UI design, which can be limiting. Or is this an interesting field of opportunity to work within extremely tight constraints?",
      color: GRAY,
      textSize: "small"
    },
    {
      header: "",
      content: "Through the careful use of signifiers, you create a perceived affordance. A button with a shadow perceives to afford pushing. For designers, perception is reality.",
      color: PINK,
      textSize: "small"
    },
    {
      header: "Learned Signifiers",
      content: "How do you influence 'Learned Signifiers'? Can we go back to the Obvious from the Abstract? Is there more potential within Micro-interactions in guiding Signifiers and in turn Affordances in the future?",
      color: RED,
      textSize: "small"
    },
    {
      header: "Affording a Digital Interaction (AR)",
      content: "How do you build affordances for digital interactions around real-world objects?",
      color: RED,
      textSize: "small"
    },
    { 
      header: "Material 3 Expressive vs Liquid Glass",
      content: "Why is Material 3 Expressive so different in art direction and design philosophy to Liquid Glass?",
      color: PURPLE,
      textSize: "small"
    },
    {
      header: "A TOOLKIT OF UI PRINCIPLES FOR A MULTIMODAL FUTURE.",
      content: "A set of UI principles informed by UX research and Human-Centered Design that can be applied towards an increasingly digital, information-rich multimodal future.",
      color: PINK,
      textSize: "small"
    },
    {
      header: "",
      content: "The approach of the original Material Design guidelines in 2014 could be a good starting point for this.",
      color: PINK,
      textSize: "small"
    },
    {
      header: "Apple Workout Rings",
      content: "Research all about Apple Workout Rings as a case study in designing a brand new revolutionary UI/UX.",
      color: BLUE,
      textSize: "small"
    },
    {
      header: "Digital Pace",
      content: "What happens if UI is intentionally flawed, slower? Max performance for your workday, a throttled performance / calmer more intentional focus mode in the evening.",
      color: PURPLE,
      textSize: "small"
    },
    {
      header: "Postmodern UI",
      content: "Is there room for a more 'analog' interface? Something that is more flawed, slower, intentional. Not too quick, convenient and mindless. Something that is perhaps more transparent and intentional.",
      color: PURPLE,
      textSize: "small"
    },
    {
      header: "Apple Macbook Breathing Light, Notification LEDs, Dashboard Affordances, Airport Wayfinding.",
      content: "",
      color: BLUE,
      textSize: "medium"
    }
  ];
  
  // Reset positions to original grid layout
  const handleResetPositions = async () => {
    const confirmed = window.confirm('Are you sure you want to reset all PostIt positions to their original layout?');
    if (confirmed) {
      const result = await resetPositions();
      if (result.success) {
        // Force re-render by updating state
        setForceUpdate(prev => prev + 1);
      } else {
        alert('Failed to reset positions. Please try again.');
      }
    }
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
          onClick={handleResetPositions}
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
                textSize={note.textSize}
              />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
} 