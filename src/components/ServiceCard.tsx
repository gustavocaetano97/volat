import React from 'react';
import { motion } from 'framer-motion';
import { DivideIcon as LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import ChatbotAnimation from './DashboardAnimations/ChatbotAnimation';
import ContentAnimation from './DashboardAnimations/ContentAnimation';
import LeadsAnimation from './DashboardAnimations/LeadsAnimation';
import InsightsAnimation from './DashboardAnimations/InsightsAnimation';
import ConsultingAnimation from './DashboardAnimations/ConsultingAnimation';
import AutomationAnimation from './DashboardAnimations/AutomationAnimation';
import PositioningAnimation from './DashboardAnimations/PositioningAnimation';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  delay?: number;
  size?: 'normal' | 'wide';
  showDashboard?: boolean;
  animationType?: 'chatbot' | 'content' | 'leads' | 'insights' | 'consulting' | 'automation' | 'positioning';
  link?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  title, 
  description, 
  icon: Icon, 
  delay = 0, 
  size = 'normal', 
  showDashboard = false,
  animationType,
  link
}) => {
  const getAnimation = () => {
    switch (animationType) {
      case 'chatbot':
        return <ChatbotAnimation />;
      case 'content':
        return <ContentAnimation />;
      case 'leads':
        return <LeadsAnimation />;
      case 'insights':
        return <InsightsAnimation />;
      case 'consulting':
        return <ConsultingAnimation />;
      case 'automation':
        return <AutomationAnimation />;
      case 'positioning':
        return <PositioningAnimation />;
      default:
        return <Icon className="w-6 h-6 gradient-icon" />;
    }
  };

  const CardContent = () => (
    <>
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.5, opacity: 0 }}
        viewport={{ once: false, margin: "-20%" }}
        transition={{ duration: 0.6, delay: delay + 0.2 }}
        className={`${showDashboard ? '' : 'w-12 h-12 rounded-full bg-slate-600/30 backdrop-blur-sm flex items-center justify-center group-hover:bg-slate-500/40 transition-colors border border-slate-500/30'} mb-6`}
      >
        {showDashboard ? getAnimation() : <Icon className="w-6 h-6 gradient-icon" />}
      </motion.div>
      
      <h3 className="text-lg md:text-xl font-syncopate mb-4 text-white group-hover:text-brand-purple transition-colors">{title}</h3>
      <p className="text-gray-100 leading-relaxed text-sm md:text-base">{description}</p>
    </>
  );

  const cardClasses = `bg-gradient-to-br from-slate-600/35 via-slate-700/30 to-slate-800/25 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-slate-500/30 group relative overflow-hidden ${
    size === 'wide' ? 'col-span-1' : ''
  }`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      viewport={{ once: false, margin: "-20%" }}
      transition={{ duration: 0.6, delay }}
    >
      {link ? (
        <Link to={link} className={`block ${cardClasses} hover:border-brand-purple/50 hover:bg-gradient-to-br hover:from-slate-500/40 hover:via-slate-600/35 hover:to-slate-700/30 transition-all duration-300`}>
          <CardContent />
        </Link>
      ) : (
        <div className={cardClasses}>
          <CardContent />
        </div>
      )}
    </motion.div>
  );
};

export default ServiceCard