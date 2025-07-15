import React from 'react';
import { motion } from 'framer-motion';
import { DivideIcon as LucideIcon } from 'lucide-react';
import AnalyticsAnimation from './DashboardAnimations/AnalyticsAnimation';
import DevelopmentAnimation from './DashboardAnimations/DevelopmentAnimation';
import MaintenanceAnimation from './DashboardAnimations/MaintenanceAnimation';

interface ProcessCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  delay?: number;
  showDashboard?: boolean;
  animationType?: 'analytics' | 'development' | 'maintenance';
}

const ProcessCard: React.FC<ProcessCardProps> = ({ 
  title, 
  description, 
  icon: Icon, 
  delay = 0, 
  showDashboard = false,
  animationType
}) => {
  const getAnimation = () => {
    switch (animationType) {
      case 'analytics':
        return <AnalyticsAnimation />;
      case 'development':
        return <DevelopmentAnimation />;
      case 'maintenance':
        return <MaintenanceAnimation />;
      default:
        return <Icon className="w-8 h-8 gradient-icon" />;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      viewport={{ once: false, margin: "-20%" }}
      transition={{ duration: 0.6, delay }}
      className="bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10"
    >
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.5, opacity: 0 }}
        viewport={{ once: false, margin: "-20%" }}
        transition={{ duration: 0.6, delay: delay + 0.2 }}
        className={`${showDashboard ? '' : 'w-16 h-16 rounded-full bg-brand-purple/10 flex items-center justify-center'} mb-6`}
      >
        {showDashboard ? getAnimation() : <Icon className="w-8 h-8 gradient-icon" />}
      </motion.div>
      
      <h3 className="text-xl md:text-2xl font-syncopate mb-4 text-white">{title}</h3>
      <p className="text-gray-300 leading-relaxed">{description}</p>
    </motion.div>
  );
};

export default ProcessCard