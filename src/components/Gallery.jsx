import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { generatePlaceholderImage } from '../utils/imageUtils';
import './Gallery.css';

const Gallery = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  // Cases categories
  const categories = ['All', 'Music Festivals', 'College Events', 'Marathons', 'Corporate Events'];
  const [activeCategory, setActiveCategory] = useState('All');

  // Gallery cases
  const cases = [
    {
      id: 1,
      title: 'SoundWave Festival',
      category: 'Music Festivals',
      description: 'Branded bottles for 15,000 attendees at an electronic music festival.',
      image: generatePlaceholderImage(1, 'Music Festivals')
    },
    {
      id: 2,
      title: 'University Spring Fest',
      category: 'College Events',
      description: 'Custom designs for student organizations reaching 8,000 students.',
      image: generatePlaceholderImage(1, 'College Events')
    },
    {
      id: 3,
      title: 'City Marathon',
      category: 'Marathons',
      description: 'Hydration station featuring branded bottles for 5,000 runners.',
      image: generatePlaceholderImage(1, 'Marathons')
    },
    {
      id: 4,
      title: 'Tech Conference',
      category: 'Corporate Events',
      description: 'Premium branded water for industry leaders and innovators.',
      image: generatePlaceholderImage(1, 'Corporate Events')
    },
    {
      id: 5,
      title: 'Summer Music Tour',
      category: 'Music Festivals',
      description: 'Multi-city campaign reaching over 50,000 music enthusiasts.',
      image: generatePlaceholderImage(2, 'Music Festivals')
    },
    {
      id: 6,
      title: 'Sports Championship',
      category: 'College Events',
      description: 'Branded bottles for athletes and spectators at college finals.',
      image: generatePlaceholderImage(2, 'College Events')
    }
  ];

  // Filter cases based on active category
  const filteredCases = (activeCategory === 'All' 
    ? cases 
    : cases.filter(item => item.category === activeCategory)).slice(0, 3);

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8 }
    }
  };

  return (
    <section className="gallery-section section" ref={ref}>
      <div className="container">
        <motion.div 
          className="section-header"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeIn}
        >
          <h2 className="section-title">Gallery & Use Cases</h2>
          <p className="section-subtitle">
            See how brands have made a splash with FreeSip at various events.
          </p>
        </motion.div>

        <motion.div 
          className="category-filter"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeIn}
        >
          {categories.map((category, index) => (
            <button 
              key={index}
              className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </motion.div>

        <div className="gallery-grid">
          {filteredCases.map((item, index) => (
            <motion.div 
              className="gallery-item"
              key={item.id}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeIn}
              transition={{ delay: 0.1 * index }}
            >
              <div className="gallery-image-container">
                <div className="gallery-image" style={{ backgroundImage: `url("${item.image}")` }}>
                  <div className="gallery-overlay">
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                    <span className="category-tag">{item.category}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="gallery-note"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ delay: 0.6 }}
        >
          <p>
            Note: Each case represents a successful campaign where brands achieved significant exposure
            while providing valuable hydration to event attendees.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;