'use client';

import { useEffect, useRef, useState } from 'react';
import Script from 'next/script';

export default function SurveyVisualization() {
  const [surveyData, setSurveyData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedQuestion, setSelectedQuestion] = useState('q1');
  const [p5Loaded, setP5Loaded] = useState(false);
  const canvasRef = useRef(null);
  const p5Instance = useRef(null);

  useEffect(() => {
    fetch('/survey_data_viz.json')
      .then((res) => res.json())
      .then((data) => {
        setSurveyData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error loading survey data:', error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (!p5Loaded || !surveyData || !canvasRef.current) return;

    const sketch = (p5) => {
      let words = [];
      let canvasHeight;
      let canvasWidth;
      let offset = 0;

      p5.setup = () => {
        // Calculate 9:16 aspect ratio to fit page height
        canvasHeight = p5.windowHeight - 100;
        canvasWidth = canvasHeight * (9 / 16);
        
        p5.createCanvas(canvasWidth, canvasHeight).parent(canvasRef.current);
        p5.colorMode(p5.RGB, 255, 255, 255, 255); // Use RGB mode for simpler opacity
        setupWordCloud();
      };
      
      p5.windowResized = () => {
        canvasHeight = p5.windowHeight - 100;
        canvasWidth = canvasHeight * (9 / 16);
        p5.resizeCanvas(canvasWidth, canvasHeight);
        setupWordCloud();
      };

      const setupWordCloud = () => {
        words = [];
        
        const questionData = selectedQuestion === 'q1' ? surveyData.categories.q1 : surveyData.categories.q2;
        const categoryData = questionData.categories_with_responses;
        const categoryEntries = Object.entries(categoryData).sort((a, b) => b[1].count - a[1].count);
        
        const totalResponses = surveyData.metadata.valid_counts[selectedQuestion];
        const margin = 40;
        const maxSpacing = 20; // Spacing for outer rectangles
        const minSpacing = 20; // Spacing for inner rectangles
        
        let cumulativeInset = margin;
        
        categoryEntries.forEach(([categoryName, data], index) => {
          const hue = (index * 35) % 360;
          const percentage = data.count / totalResponses;
          
          // Outer categories get larger text, inner categories get smaller text
          const maxFontSize = 22.6;
          const minFontSize = 24;
          const categoryFontSize = p5.map(index, 0, categoryEntries.length - 1, maxFontSize, minFontSize);
          
          // Variable spacing: larger on outside, smaller on inside
          const rectSpacing = p5.map(index, 0, categoryEntries.length - 1, maxSpacing, minSpacing);
          
          // Opacity: 25% on outside, 100% on inside (RGB alpha range 0-255)
          const opacity = p5.map(index, 0, categoryEntries.length - 1, 255, 100); // 64 = 25% of 255
          
          // Animation speed: faster on outside, slower on inside
          const speedMultiplier = p5.map(index, 0, categoryEntries.length - 1, 1.5, 0.55);
          
          // Calculate rectangle bounds (concentric from outside in)
          const inset = cumulativeInset;
          cumulativeInset += rectSpacing;
          const x = inset;
          const y = inset;
          const w = canvasWidth - inset * 2;
          const h = canvasHeight - inset * 2;
          
          // Skip if rectangle is too small
          if (w <= 0 || h <= 0) return;
          
          // Ensure corner radius is valid: positive and not larger than half the smallest dimension
          const maxCornerRadius = Math.min(200, w / 5, h / 5);
          const cornerRadius = Math.max(0, Math.min(maxCornerRadius, w / 2, h / 2));
          
          // Calculate perimeter with rounded corners
          const straightEdges = 2 * (w + h) - 8 * cornerRadius;
          const cornerArcs = 2 * p5.PI * cornerRadius;
          const perimeter = straightEdges + cornerArcs;
          
          // Collect all response text for this category into one continuous string
          const responses = Object.entries(data.responses);
          let allText = '';
          responses.forEach(([response, count]) => {
            for (let i = 0; i < count; i++) {
              allText += response + ' ';
            }
          });
          
          // Store text and rectangle info for rendering
          words.push({
            text: allText,
            rectBounds: { x, y, w, h, cornerRadius },
            size: categoryFontSize,
            hue: hue,
            perimeter: perimeter,
            opacity: opacity,
            speed: speedMultiplier
          });
        });
      };

      p5.draw = () => {
        p5.background(0);
        
        // Increment offset for animation (speed: 5 pixels per frame)
        offset += 2;
        
        // Draw characters along rectangle perimeters
        words.forEach((category, categoryIndex) => {
          const { x, y, w, h, cornerRadius } = category.rectBounds;
          const perimeter = category.perimeter;
          const opacity = category.opacity;
          const speed = category.speed;
          
          // Setup text drawing
          p5.textSize(category.size);
          // In RGB mode: (red, green, blue, alpha)
          // White = (255, 255, 255)
          p5.fill(255, 255, 255, opacity); // White text with opacity
          p5.noStroke();
          p5.textAlign(p5.LEFT, p5.CENTER);
          
          // Start position with offset normalized to this category's perimeter
          // Apply speed multiplier for variable animation speed
          const startOffset = (offset * speed) % perimeter;
          let currentDistance = startOffset;
          
          // Edge lengths (minus corners)
          const topEdge = w - 2 * cornerRadius;
          const rightEdge = h - 2 * cornerRadius;
          const bottomEdge = w - 2 * cornerRadius;
          const leftEdge = h - 2 * cornerRadius;
          const quarterCircle = p5.PI * cornerRadius / 2;
          
          // Use actual font metrics for natural text spacing
          const wordSpacing = 10; // Extra spacing between words
          
          let drawnDistance = 0;
          
          for (let i = 0; i < category.text.length; i++) {
            const char = category.text[i];
            
            // Use actual character width from the font
            let charWidth = p5.textWidth(char);
            
            // Add extra spacing for word breaks
            if (char === ' ') {
              charWidth += wordSpacing;
            }
            
            // Stop drawing after one full perimeter
            if (drawnDistance >= perimeter) {
              break;
            }
            
            const dist = (startOffset + drawnDistance) % perimeter;
            let px, py, angle;
            
            let d = dist;
            
            // Top edge
            if (d < topEdge) {
              px = x + cornerRadius + d;
              py = y;
              angle = 0;
            }
            // Top-right corner
            else if (d < topEdge + quarterCircle) {
              const arcProgress = (d - topEdge) / quarterCircle;
              const theta = arcProgress * p5.HALF_PI;
              px = x + w - cornerRadius + p5.sin(theta) * cornerRadius;
              py = y + cornerRadius - p5.cos(theta) * cornerRadius;
              angle = theta;
            }
            // Right edge
            else if (d < topEdge + quarterCircle + rightEdge) {
              const edgeDist = d - topEdge - quarterCircle;
              px = x + w;
              py = y + cornerRadius + edgeDist;
              angle = p5.HALF_PI;
            }
            // Bottom-right corner
            else if (d < topEdge + quarterCircle + rightEdge + quarterCircle) {
              const arcProgress = (d - topEdge - quarterCircle - rightEdge) / quarterCircle;
              const theta = arcProgress * p5.HALF_PI;
              px = x + w - cornerRadius + p5.cos(theta) * cornerRadius;
              py = y + h - cornerRadius + p5.sin(theta) * cornerRadius;
              angle = p5.HALF_PI + theta;
            }
            // Bottom edge
            else if (d < topEdge + 2 * quarterCircle + rightEdge + bottomEdge) {
              const edgeDist = d - topEdge - 2 * quarterCircle - rightEdge;
              px = x + w - cornerRadius - edgeDist;
              py = y + h;
              angle = p5.PI;
            }
            // Bottom-left corner
            else if (d < topEdge + 3 * quarterCircle + rightEdge + bottomEdge) {
              const arcProgress = (d - topEdge - 2 * quarterCircle - rightEdge - bottomEdge) / quarterCircle;
              const theta = arcProgress * p5.HALF_PI;
              px = x + cornerRadius - p5.sin(theta) * cornerRadius;
              py = y + h - cornerRadius + p5.cos(theta) * cornerRadius;
              angle = p5.PI + theta;
            }
            // Left edge
            else if (d < topEdge + 3 * quarterCircle + rightEdge + bottomEdge + leftEdge) {
              const edgeDist = d - topEdge - 3 * quarterCircle - rightEdge - bottomEdge;
              px = x;
              py = y + h - cornerRadius - edgeDist;
              angle = -p5.HALF_PI;
            }
            // Top-left corner
            else {
              const arcProgress = (d - topEdge - 3 * quarterCircle - rightEdge - bottomEdge - leftEdge) / quarterCircle;
              const theta = arcProgress * p5.HALF_PI;
              px = x + cornerRadius - p5.cos(theta) * cornerRadius;
              py = y + cornerRadius - p5.sin(theta) * cornerRadius;
              angle = -p5.HALF_PI + theta;
            }
            
            p5.push();
            p5.translate(px, py);
            p5.rotate(angle);
            p5.text(char, 0, 0);
            p5.pop();
            
            drawnDistance += charWidth;
          }
        });
      };
    };

    if (window.p5) {
      p5Instance.current = new window.p5(sketch);
    }

    return () => {
      if (p5Instance.current) {
        p5Instance.current.remove();
      }
    };
  }, [p5Loaded, surveyData, selectedQuestion]);

  if (loading) {
    return <div className="flex items-center justify-center h-96">Loading survey data...</div>;
  }

  if (!surveyData) {
    return <div className="flex items-center justify-center h-96">Failed to load survey data</div>;
  }

  return (
    <>
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.7.0/p5.min.js"
        onLoad={() => setP5Loaded(true)}
      />
      
      <div className="flex flex-col items-center gap-4 py-8">
        <div className="flex gap-4 mb-4">
          <button
            onClick={() => setSelectedQuestion('q1')}
            className={`px-6 py-3 rounded-lg transition-all font-medium ${
              selectedQuestion === 'q1'
                ? 'bg-black text-white dark:bg-white dark:text-black shadow-lg scale-105'
                : 'bg-gray-200 text-black dark:bg-gray-800 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700'
            }`}
          >
            Question 1
          </button>
          <button
            onClick={() => setSelectedQuestion('q2')}
            className={`px-6 py-3 rounded-lg transition-all font-medium ${
              selectedQuestion === 'q2'
                ? 'bg-black text-white dark:bg-white dark:text-black shadow-lg scale-105'
                : 'bg-gray-200 text-black dark:bg-gray-800 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700'
            }`}
          >
            Question 2
          </button>
        </div>
        
        <div ref={canvasRef} className="" />
      </div>
    </>
  );
}
