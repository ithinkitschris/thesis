// Animation configuration for Framer Motion
// Centralized place for all animation variants and transitions

// Page transitions
export const pageTransitions = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.1 }
};

// Content transitions
export const contentTransitions = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
  transition: { duration: 0.1 }
};

// Staggered list animations
export const listTransitions = {
  container: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.1 }
  },
  item: {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.1 }
  }
};

// Button interactions
export const buttonAnimations = {
  hover: { scale: 0.95 },
  tap: { scale: 0.9 },
  transition: { duration: 0.1 }
};

// Header animations
export const headerAnimations = {
  hover: { scale: 0.98 },
  tap: { scale: 0.95 },
  transition: { duration: 0.1 }
};

// Link animations
export const linkAnimations = {
  hover: { scale: 0.97 },
  tap: { scale: 0.95 },
  transition: { duration: 0.1 }
};

// Stagger delay calculation for list items
export const getStaggerDelay = (index, baseDelay = 0.05) => {
  return index * baseDelay;
};

// Animation presets for common use cases
export const animationPresets = {
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.1 }
  },
  slideUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: { duration: 0.1 }
  },
  slideDown: {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 },
    transition: { duration: 0.1 }
  },
  scaleIn: {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.9 },
    transition: { duration: 0.1 }
  }
};
