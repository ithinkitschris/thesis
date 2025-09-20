'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { loadPositions, savePositions } from '@/lib/position-storage';

export default function PostIt({ 
  id, 
  header, 
  content, 
  color = "bg-yellow-100",
  className = "",
  onPositionUpdate,
  textSize = "small"
}) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  
  // Text size mapping
  const getTextSizeClasses = (size) => {
    switch (size) {
      case 'small':
        return {
          header: 'text-xs',
          content: 'text-xs'
        };
      case 'medium':
        return {
          header: 'text-sm',
          content: 'text-sm'
        };
      case 'large':
        return {
          header: 'text-base',
          content: 'text-base'
        };
      default:
        return {
          header: 'text-xs',
          content: 'text-xs'
        };
    }
  };
  
  const textClasses = getTextSizeClasses(textSize);
  
  // Load position from file storage on component mount
  useEffect(() => {
    const loadPosition = async () => {
      const positions = await loadPositions();
      if (positions[id]) {
        setPosition(positions[id]);
      }
    };
    loadPosition();
  }, [id]);
  
  // Update position and save to file storage
  const updatePosition = async (newPosition) => {
    setPosition(newPosition);
    
    // Load current positions and update with new position
    const positions = await loadPositions();
    positions[id] = newPosition;
    
    // Save updated positions to file
    await savePositions(positions);
    
    // Call parent callback if provided
    if (onPositionUpdate) {
      onPositionUpdate(id, newPosition);
    }
  };

  return (
    <motion.div 
      className={`w-full aspect-square p-5 border-l-1 border-t-1 border-b-4 border-r-4 border-black drop-shadow hover:drop-shadow-xl flex flex-col cursor-grab active:cursor-grabbing ${color} ${className}`}
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
        <h3 className={`${textClasses.header} font-semibold text-black`}>{header}</h3>
      </div>

      {/* Content */}
      <div className={`text-black/80 ${textClasses.content} flex-1`}>
        {content}
      </div>
    </motion.div>
  );
}
