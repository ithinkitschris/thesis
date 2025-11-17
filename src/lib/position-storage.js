// Utility functions for managing post-it note positions via localStorage
// Using localStorage for static site compatibility (GitHub Pages)

const STORAGE_KEY = 'postit-positions';

export const loadPositions = async () => {
  try {
    if (typeof window === 'undefined') {
      return {};
    }
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : {};
  } catch (error) {
    console.error('Error loading positions:', error);
    return {};
  }
};

export const savePositions = async (positions) => {
  try {
    if (typeof window === 'undefined') {
      return { success: false };
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(positions));
    return { success: true };
  } catch (error) {
    console.error('Error saving positions:', error);
    return { success: false };
  }
};

export const resetPositions = async () => {
  try {
    if (typeof window === 'undefined') {
      return { success: false };
    }
    localStorage.removeItem(STORAGE_KEY);
    return { success: true };
  } catch (error) {
    console.error('Error resetting positions:', error);
    return { success: false };
  }
};
