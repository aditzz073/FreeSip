import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import './SocialMedia.css';

const SocialMedia = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const socialLinks = [
    { 
      name: 'Instagram', 
      icon: <FaInstagram size={28} />, 
      url: 'https://instagram.com/freesip_in',
      color: '#E1306C'
    },
    { 
      name: 'LinkedIn', 
      icon: <FaLinkedin size={28} />, 
      url: 'https://linkedin.com/company/freesip',
      color: '#0077B5'
    },
    { 
      name: 'X.com', 
      icon: <FaXTwitter size={28} />, 
      url: 'https://x.com/Freesipl26430',
      color: '#000000'
    },
    { 
      name: 'Email', 
      icon: <FaEnvelope size={28} />, 
      url: 'mailto:contact.freesip@gmail.com',
      color: '#0088cc'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="social-media-section" ref={ref}>
      <div className="container">
        <motion.h3 
          className="social-heading"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          Connect With Us
        </motion.h3>
        
        <motion.div 
          className="social-links"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {socialLinks.map((social, index) => (
            <motion.a 
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`social-link ${!social.name ? 'icon-only' : ''}`}
              variants={itemVariants}
              whileHover={{ scale: 1.1 }}
              style={{ backgroundColor: social.color }}
            >
              {social.icon}
              {social.name && <span>{social.name}</span>}
            </motion.a>
          ))}
        </motion.div>
        
        <motion.p 
          className="social-tagline"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          Join our community and stay updated with the latest events and partnerships!
        </motion.p>
      </div>
    </section>
  );
};

export default SocialMedia;