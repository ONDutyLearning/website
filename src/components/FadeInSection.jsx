import React from 'react';
import { motion } from 'framer-motion';

const FadeInSection = ({ children, delay = 0, duration = 0.7, y = 40 }) => (
  <motion.div
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration, delay }}
    viewport={{ once: true, amount: 0.25 }}
    style={{ width: '100%' }}
  >
    {children}
  </motion.div>
);

export default FadeInSection;