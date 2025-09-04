'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function PostIt({ 
  id, 
  header, 
  content, 
  className = "",
  onPositionUpdate 
}) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  
  // Load position from localStorage on component mount
  useEffect(() => {
    const savedPositions = localStorage.getItem('notesPositions');
    if (savedPositions) {
      const positions = JSON.parse(savedPositions);
      if (positions[id]) {
        setPosition(positions[id]);
      }
    }
  }, [id]);
  
  // Update position and save to localStorage
  const updatePosition = (newPosition) => {
    setPosition(newPosition);
    
    // Update localStorage
    const savedPositions = localStorage.getItem('notesPositions');
    const positions = savedPositions ? JSON.parse(savedPositions) : {};
    positions[id] = newPosition;
    localStorage.setItem('notesPositions', JSON.stringify(positions));
    
    // Call parent callback if provided
    if (onPositionUpdate) {
      onPositionUpdate(id, newPosition);
    }
  };

  return (
    <motion.div 
      className={`w-full aspect-square p-5 border-l-1 border-t-1 border-b-4 border-r-4 border-foreground bg-background shadow flex flex-col cursor-grab active:cursor-grabbing ${className}`}
      drag
      dragMomentum={false}
      dragElastic={0}
      whileDrag={{ scale: 1.04, zIndex: 10 }}
      whileHover={{ scale: 1.04 }}
      transition={{ type: "spring", stiffness: 1500, damping: 30 }}
      initial={position}
      animate={position}
      onDragEnd={(event, info) => {
        const newPosition = {
          x: position.x + info.offset.x,
          y: position.y + info.offset.y
        };
        updatePosition(newPosition);
      }}
    >
      {/* Header */}
      <div className="mb-2">
        <h3 className="text-xl font-semibold text-foreground">{header}</h3>
        <p className="text-foreground/70 text-xs"></p>
      </div>

      {/* Content */}
      <div className="text-foreground/80 text-sm leading-relaxed flex-1">
        {content}
      </div>
    </motion.div>
  );
}
