import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Calendar, PenTool, Target, Sparkles, Share2 } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ContentAnimation from '../../components/DashboardAnimations/ContentAnimation';

const ContentService = () => {
  const features = [
    {
      icon: PenTool,
      title: "Conteúdo Personalizado",
      description: "Criação de conteúdo adaptado à voz e identidade da sua marca."
    },
    {
      icon: Target,
      title: "Otimização SEO",
      description: "Conteúdo otimizado para melhor classificação nos mecanismos de busca."
    },
    {
      icon: Sparkles,
      title: "Criatividade com IA",
      description: "Uso de inteligência artificial para gerar ideias inovadoras."
    },
    {
      icon: Share2,
      title: "Distribuição Estratégica",
      description: "Planejamento eficiente para máximo alcance do seu conteúdo."
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <Header />

      {/* Hero Section */}
      <div className="pt-32 pb-20 md:pt-40 md:pb-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-block mb-6 px-4 py-2 bg-black/30 backdrop-blur-sm rounded-full border border-[#6b2c84]/10"
              >
                <span className="font-syncopate text-[#6b2c84] tracking-wider">CRIAÇÃO DE CONTEÚDO</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-4xl md:text-6xl font-syncopate mb-6"
              >
                Conteúdo que engaja e converte
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-gray-300 text-lg mb-8"
              >
                Crie conteúdo relevante e envolvente que ressoa com seu público-alvo e impulsiona resultados mensuráveis para seu negócio.
              </motion.p>

              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="bg-gradient-to-r from-[#6b2c84] via-[#32ff80] to-[#2bff80] text-black px-8 py-4 rounded-full hover:opacity-90 transition-all flex items-center gap-2 text-lg font-medium shadow-lg shadow-[#6b2c84]/20"
              >
                <Calendar className="w-5 h-5" />
                Agende uma consulta
              </motion.button>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative aspect-square max-w-xl mx-auto"
            >
              <ContentAnimation />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-20 px-4 bg-black/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-sm rounded-2xl p-6 border border-white/10"
              >
                <feature.icon className="w-12 h-12 text-[#6b2c84] mb-4" />
                <h3 className="text-xl font-syncopate mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-syncopate mb-6"
          >
            Pronto para criar conteúdo impactante?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-300 mb-8"
          >
            Agende uma consulta gratuita e descubra como podemos transformar sua estratégia de conteúdo.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-r from-[#6b2c84] via-[#32ff80] to-[#2bff80] text-black px-8 py-4 rounded-full hover:opacity-90 transition-all flex items-center gap-2 text-lg font-medium mx-auto shadow-lg shadow-[#6b2c84]/20"
          >
            <Calendar className="w-5 h-5" />
            Agende uma consulta
          </motion.button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContentService;