import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './HowItWorks.css';

const HowItWorks = () => {
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

  const steps = [
    {
      number: '01',
      title: 'Brands choose the message',
      description: 'Work with our team to design custom labels that showcase your brand message and resonate with your target audience.',
      icon: 'design-icon'
    },
    {
      number: '02',
      title: 'We bottle and distribute',
      description: 'We handle production and strategic distribution at key events where your target demographic is present and engaged.',
      icon: 'distribution-icon'
    },
    {
      number: '03',
      title: 'Your brand is seen & shared',
      description: 'Each bottle becomes a mobile billboard—held, photographed, shared on social media, and positively remembered.',
      icon: 'sharing-icon'
    }
  ];

  return (
    <section className="how-it-works-section section" ref={ref}>
      <div className="container">
        <motion.div 
          className="section-header"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeIn}
        >
          <h2 className="section-title">How It Works</h2>
          <p className="section-subtitle">
            A simple three-step process to amplify your brand's presence at events.
          </p>
        </motion.div>

        <div className="steps-container">
          {steps.map((step, index) => (
            <motion.div 
              className="step-card"
              key={index}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeIn}
              transition={{ delay: 0.2 + index * 0.2 }}
            >
              <div className="step-number">{step.number}</div>
              <div className={`step-icon ${step.icon}`}></div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="multi-event-strategy"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ delay: 0.8 }}
        >
          <h3>Multi-Event Reach Strategy</h3>
          <p>
            Maximize your impact by creating a consistent brand presence across multiple events. 
            Our strategic approach ensures your message reaches diverse audiences while maintaining brand consistency,
            amplifying recognition and recall.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;