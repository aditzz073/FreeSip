/**
 * Simple placeholder image generator
 * For a real production site, you would replace these with actual images
 */

export const generatePlaceholderImage = (index, category) => {
  const colors = {
    'Music Festivals': '#3498db',
    'College Events': '#2ecc71',
    'Marathons': '#e74c3c',
    'Corporate Events': '#9b59b6',
  };
  
  const baseColor = colors[category] || '#0088cc';
  
  return `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600' viewBox='0 0 800 600'%3E%3Crect fill='${baseColor}' width='800' height='600'/%3E%3Ctext fill='%23ffffff' font-family='Arial' font-size='32' x='50%25' y='50%25' text-anchor='middle' dominant-baseline='middle'%3E${category} Image ${index}%3C/text%3E%3C/svg%3E`;
};

export const bottleImagePlaceholder = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='500' viewBox='0 0 300 500'%3E%3Cpath fill='%230088cc30' d='M100,50 L200,50 L220,100 L220,450 C220,470 200,490 180,490 L120,490 C100,490 80,470 80,450 L80,100 Z'/%3E%3Cpath fill='%230088cc60' d='M100,50 L200,50 L220,100 L220,300 L80,300 L80,100 Z'/%3E%3Ctext fill='%23ffffff' font-family='Arial' font-size='24' x='50%25' y='200' text-anchor='middle'%3EFreeSip%3C/text%3E%3C/svg%3E`;