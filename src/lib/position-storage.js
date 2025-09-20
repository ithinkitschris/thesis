// Utility functions for managing post-it note positions via API

export const loadPositions = async () => {
  try {
    const response = await fetch('/api/positions');
    if (!response.ok) {
      throw new Error('Failed to load positions');
    }
    return await response.json();
  } catch (error) {
    console.error('Error loading positions:', error);
    return {};
  }
};

export const savePositions = async (positions) => {
  try {
    const response = await fetch('/api/positions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ positions }),
    });
    
    if (!response.ok) {
      throw new Error('Failed to save positions');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error saving positions:', error);
    return { success: false };
  }
};

export const resetPositions = async () => {
  try {
    const response = await fetch('/api/positions', {
      method: 'DELETE',
    });
    
    if (!response.ok) {
      throw new Error('Failed to reset positions');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error resetting positions:', error);
    return { success: false };
  }
};
