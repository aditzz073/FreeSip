import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './CallToAction.css';

const CallToAction = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
    
    // Clear any error that might be showing
    if (formStatus.error) {
      setFormStatus({
        submitted: false,
        error: false,
        message: ''
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Validate form inputs
      if (!formData.name || !formData.email || !formData.company || !formData.message) {
        setFormStatus({
          submitted: false,
          error: true,
          message: 'Please fill in all fields.'
        });
        return;
      }
      
      // In a real implementation, you would make an API call to your backend
      // For example:
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData)
      // });
      
      // Instead, we'll simulate a successful submission after a brief delay
      setFormStatus({
        submitted: false,
        error: false,
        message: 'Sending your message...'
      });
      
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setFormStatus({
        submitted: true,
        error: false,
        message: 'Thank you! We will be in touch soon.'
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        message: '',
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      setFormStatus({
        submitted: false,
        error: true,
        message: 'Something went wrong. Please try again.'
      });
    }
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8 }
    }
  };

  return (
    <section className="cta-section section" ref={ref}>
      <div className="container">
        <motion.div 
          className="section-header"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeIn}
        >
          <h2 className="section-title">Partner With Us</h2>
          <p className="section-subtitle">
            Be the brand they reach for. Start your FreeSip journey today.
          </p>
        </motion.div>

        <div className="cta-content grid">
          <motion.div 
            className="cta-text"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeIn}
            transition={{ delay: 0.2 }}
          >
            <h3>Ready to Make a Splash?</h3>
            <p>
              Take your brand visibility to the next level with FreeSip's innovative marketing solution.
              We'll help you connect with your audience in meaningful ways at events where they're most engaged.
            </p>
            <ul className="cta-benefits">
              <li>Reach thousands of potential customers</li>
              <li>Create positive brand associations</li>
              <li>Stand out from traditional marketing</li>
              <li>Measurable ROI and brand lift</li>
            </ul>
            <p className="testimonial">
              <em>"FreeSip transformed our event presence. We saw a 40% increase in social media mentions and incredible brand recall."</em>
              <br />
              <strong>— Marketing Director, Arivae Clothing </strong>
            </p>
          </motion.div>
          
          <motion.div 
            className="contact-form-container"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeIn}
            transition={{ delay: 0.4 }}
          >
            {formStatus.submitted ? (
              <div className="form-success">
                <div className="success-icon">✓</div>
                <h3>Thank You!</h3>
                <p>{formStatus.message}</p>
                <button 
                  className="btn btn-outline"
                  onClick={() => setFormStatus({ submitted: false, error: false, message: '' })}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                {formStatus.error && (
                  <div className="error-message">
                    {formStatus.message}
                  </div>
                )}
                {formStatus.message && !formStatus.error && !formStatus.submitted && (
                  <div className="info-message">
                    {formStatus.message}
                  </div>
                )}
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    autoComplete="name"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    autoComplete="email"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="company">Company</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your company name"
                    autoComplete="organization"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="How can FreeSip help your brand?"
                  ></textarea>
                </div>
                
                <motion.button 
                  type="submit" 
                  className="btn btn-primary btn-block"
                  whileHover={!formStatus.message ? { scale: 1.05 } : {}}
                  whileTap={!formStatus.message ? { scale: 0.95 } : {}}
                  disabled={formStatus.message && !formStatus.error && !formStatus.submitted}
                >
                  {formStatus.message && !formStatus.error && !formStatus.submitted 
                    ? "Sending..." 
                    : "Send Message"}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;