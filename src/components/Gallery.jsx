import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Gallery.css';

const Gallery = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  // Cases categories
  const categories = ['All','Product',];
  const [activeCategory, setActiveCategory] = useState('All');

  // Gallery cases
  const cases = [
    {
      id: 1,
      title: 'Mockup ',
      category: 'Product',
      description: 'Mockup of a bottle with a logo and a message',
      image: '/mockups/1.png'
    },
    {
      id: 2,
      title: 'Our Impact',
      category: 'Product',
      description: 'Our impact with your product',
      image: '/mockups/2.png'
    },
    {
      id: 3,
      title: 'Mockup',
      category: 'Product',
      description: 'Mockup of a bottle with a logo and a message',
      image: '/mockups/3.png'
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
            <strong>Success Stories:</strong> Showcasing brands that elevated their presence through 
            refreshing hydration experiences, leaving lasting impressions on event attendees.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;