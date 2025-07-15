import React from 'react';
import { motion } from 'framer-motion';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface BenefitCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  delay?: number;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ title, description, icon: Icon, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      viewport={{ once: false, margin: "-20%" }}
      transition={{ duration: 0.6, delay }}
      className="bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10 hover:border-brand-purple/30 transition-colors group"
    >
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.5, opacity: 0 }}
        viewport={{ once: false, margin: "-20%" }}
        transition={{ duration: 0.6, delay: delay + 0.2 }}
        className="w-16 h-16 mb-6 rounded-full bg-brand-purple/10 flex items-center justify-center group-hover:bg-brand-purple/20 transition-colors"
      >
        <Icon className="w-8 h-8 gradient-icon" />
      </motion.div>
      
      <h3 className="text-xl md:text-2xl font-syncopate mb-4 text-white group-hover:text-brand-purple transition-colors">{title}</h3>
      <p className="text-gray-300 leading-relaxed">{description}</p>
    </motion.div>
  );
};

export default BenefitCard