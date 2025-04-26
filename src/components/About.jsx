import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './About.css';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8 }
    }
  };

  return (
    <section className="about-section section" ref={ref}>
      <div className="container">
        <motion.div 
          className="section-header"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeIn}
        >
          <h2 className="section-title">About FreeSip</h2>
          <p className="section-subtitle">
            We connect brands with real people in real moments, turning hydration into memorable brand experiences.
          </p>
        </motion.div>

        <div className="about-content grid">
          <motion.div 
            className="about-text"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeIn}
            transition={{ delay: 0.2 }}
          >
            <h3>Who We Are</h3>
            <p>
              FreeSip is an innovative B2B event-based marketing startup that uses branded bottled water as a physical advertising medium. We help brands connect with their audience at music festivals, college fests, marathons, and more.
            </p>
            <p>
              Our mission is to solve the dual problem of hydration for event attendees and brand visibility for companies in a way that creates meaningful connections.
            </p>
          </motion.div>
          
          <motion.div 
            className="about-pillars"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeIn}
            transition={{ delay: 0.4 }}
          >
            <div className="pillar">
              <div className="pillar-icon hydration"></div>
              <h4>Hydration + Brand Visibility</h4>
              <p>We deliver essential hydration while maximizing your brand's exposure in the hands of your target audience.</p>
            </div>
            
            <div className="pillar">
              <div className="pillar-icon roi"></div>
              <h4>High ROI</h4>
              <p>Turn a necessary event expense into a powerful marketing tool with lasting impressions.</p>
            </div>
            
            <div className="pillar">
              <div className="pillar-icon connection"></div>
              <h4>Emotional Connection</h4>
              <p>Create positive brand associations by meeting a basic need at the right moment.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;