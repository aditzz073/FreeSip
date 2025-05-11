import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-scroll';
import { FaEye, FaUsers, FaChartLine, FaShareAlt } from 'react-icons/fa';
import './Benefits.css';

const Benefits = () => {
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

  const benefits = [
    {
      icon: <FaEye size={32} />,
      title: "Brand Impressions",
      description: "Each bottle creates multiple impressions as it's carried through events, generating high-impact visibility.",
    },
    {
      icon: <FaUsers size={32} />,
      title: "Targeted Demographics",
      description: "Reach specific audiences by selecting events that align with your brand's target customer profile.",
    },
    {
      icon: <FaChartLine size={32} />,
      title: "Affordable & High-Utility",
      description: "Cost-effective marketing with practical value—providing hydration while promoting your brand.",
    },
    {
      icon: <FaShareAlt size={32} />,
      title: "Social Virality",
      description: "Bottles often appear in social media posts, extending your reach beyond the event itself.",
    },
  ];

  return (
    <section className="benefits-section section" ref={ref}>
      <div className="container">
        <motion.div 
          className="section-header"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeIn}
        >
          <h2 className="section-title">Benefits for Brands</h2>
          <p className="section-subtitle">
            Why FreeSip is the smart choice for event-based marketing that makes a lasting impression.
          </p>
        </motion.div>

        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <motion.div 
              className="benefit-card"
              key={index}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeIn}
              transition={{ delay: 0.2 + index * 0.15 }}
            >
              <div className="benefit-icon">
                {benefit.icon}
              </div>
              <h3 className="benefit-title">{benefit.title}</h3>
              <p className="benefit-description">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="cta-box"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ delay: 0.8 }}
        >
          <h3>Transform Your Event Marketing Strategy</h3>
          <p>
            Don't just be another forgotten logo on an event banner. 
            Be the brand that provides actual value and creates a tangible connection with your audience.
          </p>
          <Link to="contact" spy={true} smooth={true} duration={500}>
            <motion.button 
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get A Quote Right Now
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Benefits;