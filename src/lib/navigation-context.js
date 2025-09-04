'use client';

import { createContext, useContext, useState } from 'react';

const NavigationContext = createContext();

export function NavigationProvider({ children }) {
  const [currentView, setCurrentView] = useState({
    type: 'home', // 'home', 'category', 'tag', 'post'
    data: null // category name, tag name, or post object
  });

  const navigateToHome = () => {
    setCurrentView({ type: 'home', data: null });
  };

  const navigateToCategory = (category) => {
    setCurrentView({ type: 'category', data: category });
  };

  const navigateToTag = (tag) => {
    setCurrentView({ type: 'tag', data: tag });
  };

  const navigateToPost = (category, slug) => {
    setCurrentView({ type: 'post', data: { category, slug } });
  };

  return (
    <NavigationContext.Provider value={{
      currentView,
      navigateToHome,
      navigateToCategory,
      navigateToTag,
      navigateToPost
    }}>
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigation() {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
}
