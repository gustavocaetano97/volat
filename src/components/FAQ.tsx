import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItem> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-brand-purple/10">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left"
      >
        <span className="text-lg font-medium pr-8">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="w-5 h-5 gradient-icon" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-gray-300">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  const faqs: FAQItem[] = [
    {
      question: "Como posso começar a trabalhar com vocês?",
      answer: "Entre em contato conosco através do formulário ou agende uma consulta inicial. Vamos discutir suas necessidades e objetivos para criar um plano personalizado."
    },
    {
      question: "Quanto tempo leva para ver resultados?",
      answer: "O tempo varia dependendo do projeto e objetivos específicos. Geralmente, nossos clientes começam a ver melhorias significativas em 2-3 meses."
    },
    {
      question: "Vocês oferecem suporte contínuo?",
      answer: "Sim, oferecemos suporte contínuo e monitoramento para garantir que sua solução continue funcionando perfeitamente e se adaptando às suas necessidades."
    },
    {
      question: "Como vocês garantem a qualidade do serviço?",
      answer: "Utilizamos metodologias comprovadas, ferramentas avançadas e realizamos testes rigorosos em cada etapa do processo para garantir resultados excepcionais."
    }
  ];

  return (
    <div className="max-w-3xl mx-auto">
      {faqs.map((faq, index) => (
        <FAQItem key={index} {...faq} />
      ))}
    </div>
  );
};

export default FAQ