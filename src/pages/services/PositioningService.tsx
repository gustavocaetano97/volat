import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Calendar, Target, TrendingUp, Users, Award } from 'lucide-react';
import Layout from '../../components/Layout';
import ConsultingAnimation from '../../components/DashboardAnimations/ConsultingAnimation';

const PositioningService = () => {
  const features = [
    {
      icon: Target,
      title: "Análise de Mercado",
      description: "Estudo profundo do seu mercado e concorrência para identificar oportunidades únicas."
    },
    {
      icon: Users,
      title: "Definição de Persona",
      description: "Criação de personas detalhadas para comunicação direcionada e eficaz."
    },
    {
      icon: TrendingUp,
      title: "Estratégia de Diferenciação",
      description: "Desenvolvimento de proposta de valor única que destaca sua marca."
    },
    {
      icon: Award,
      title: "Implementação Consistente",
      description: "Aplicação do posicionamento em todos os pontos de contato da marca."
    }
  ];

  return (
    <Layout
      title="Posicionamento Estratégico"
      description="Defina e fortaleça o posicionamento da sua marca no mercado com estratégias personalizadas que destacam sua empresa da concorrência."
    >
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
                <span className="font-syncopate text-[#6b2c84] tracking-wider">POSICIONAMENTO ESTRATÉGICO</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-4xl md:text-6xl font-syncopate mb-6"
              >
                Destaque sua marca no mercado
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-gray-300 text-lg mb-8"
              >
                Defina e fortaleça o posicionamento da sua marca no mercado. Estratégias personalizadas para destacar sua empresa da concorrência e conquistar seu público-alvo de forma única e memorável.
              </motion.p>

              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="bg-gradient-to-r from-[#6b2c84] via-[#98356b] to-[#ec6429] text-black px-8 py-4 rounded-full hover:opacity-90 transition-all flex items-center gap-2 text-lg font-medium shadow-lg shadow-[#6b2c84]/20"
              >
                <Calendar className="w-5 h-5" />
                Agende uma consultoria
              </motion.button>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative aspect-square max-w-xl mx-auto"
            >
              <ConsultingAnimation />
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

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-syncopate mb-16 text-center"
          >
            Por que o posicionamento é fundamental?
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h3 className="text-xl font-syncopate mb-4">Diferenciação Clara</h3>
              <p className="text-gray-300">Destaque-se da concorrência com uma proposta de valor única e memorável que ressoa com seu público.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <h3 className="text-xl font-syncopate mb-4">Comunicação Eficaz</h3>
              <p className="text-gray-300">Mensagens consistentes e direcionadas que conectam emocionalmente com seus clientes ideais.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center"
            >
              <h3 className="text-xl font-syncopate mb-4">Crescimento Sustentável</h3>
              <p className="text-gray-300">Base sólida para expansão e crescimento a longo prazo com identidade bem definida.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-black/50">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-syncopate mb-6"
          >
            Pronto para posicionar sua marca estrategicamente?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-300 mb-8"
          >
            Agende uma consultoria gratuita e descubra como podemos ajudar sua marca a se destacar no mercado e conquistar a mente dos seus clientes.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-r from-[#6b2c84] via-[#98356b] to-[#ec6429] text-black px-8 py-4 rounded-full hover:opacity-90 transition-all flex items-center gap-2 text-lg font-medium mx-auto shadow-lg shadow-[#6b2c84]/20"
          >
            <Calendar className="w-5 h-5" />
            Agende uma consultoria
          </motion.button>
        </div>
      </section>
    </Layout>
  );
};

export default PositioningService;