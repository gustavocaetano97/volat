import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Target, Calendar, TrendingUp, Users, BarChart, Repeat, CheckCircle, Clock, DollarSign, Zap, Shield, Phone, Mail, ChevronDown, ChevronUp } from 'lucide-react';
import Layout from '../../components/Layout';

const RevenueService = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 47,
    seconds: 15
  });

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { hours, minutes, seconds } = prev;
        
        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        }
        
        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const testimonials = [
    {
      business: "Clínica de Estética - São Paulo",
      investment: "R$ 8.000/mês",
      return: "R$ 45.000/mês",
      roi: "562% em apenas 4 meses"
    },
    {
      business: "Consultoria Jurídica - Rio de Janeiro", 
      investment: "R$ 5.000/mês",
      return: "R$ 28.000/mês",
      roi: "460% em 3 meses"
    },
    {
      business: "Agência de Marketing - Belo Horizonte",
      investment: "R$ 12.000/mês", 
      return: "R$ 68.000/mês",
      roi: "567% em 5 meses"
    }
  ];

  const faqs = [
    {
      question: "Quanto tempo para ver os primeiros resultados?",
      answer: "Os primeiros resultados aparecem entre 7 e 14 dias. ROI positivo em 30 dias ou seu dinheiro de volta."
    },
    {
      question: "Funciona para qualquer tipo de negócio?",
      answer: "Sim! Nosso método já foi testado e aprovado em mais de 50 nichos diferentes."
    },
    {
      question: "Preciso pausar minhas campanhas atuais?",
      answer: "Não precisa. A gente otimiza gradualmente para não prejudicar seu faturamento atual."
    },
    {
      question: "E se eu não entender nada de técnico?",
      answer: "Relaxa! Fazemos tudo para você. Você só precisa aprovar as estratégias."
    }
  ];

  const companies = [
    "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=120&h=60&fit=crop&auto=format",
    "https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=120&h=60&fit=crop&auto=format",
    "https://images.unsplash.com/photo-1560472355-536de3962603?w=120&h=60&fit=crop&auto=format",
    "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=120&h=60&fit=crop&auto=format",
    "https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=120&h=60&fit=crop&auto=format"
  ];

  return (
    <Layout
      title="Geração de Demanda e Receita Previsível"
      description="Sua empresa pode estar perdendo R$ 15.000 por mês sem você saber. Transforme cada real investido em ads em 5 reais de retorno."
    >
      {/* Hero Section */}
      <div className="pt-32 pb-16 md:pt-40 md:pb-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 text-red-400"
          >
            Sua empresa pode estar perdendo R$ 15.000 por mês sem você saber
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl lg:text-3xl text-white mb-6 font-semibold"
          >
            Empresas que faturam mais de R$ 40 mil descobriram como transformar cada real investido em ads em <span className="text-green-400 font-bold">5 reais de retorno</span>. E tudo isso em apenas 30 dias.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-red-600 text-white px-8 py-4 rounded-full text-lg md:text-xl font-bold mb-12 inline-block"
          >
            Restam apenas 8 vagas para janeiro - as próximas só em abril
          </motion.div>
        </div>
      </div>

      {/* Quick Test Section */}
      <section className="py-16 px-4 bg-black/50">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-center"
          >
            🎯 Me diz uma coisa: você está literalmente jogando dinheiro fora?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl font-semibold mb-8 text-center"
          >
            Vamos fazer um teste rápido:
          </motion.p>

          <div className="space-y-6">
            {[
              "Você gasta mais de R$ 3.600 por mês em marketing, mas não consegue rastrear direito o retorno?",
              "Fatura + de 41 mil. Seu custo por cliente tá alto, as vendas baixas, e você não faz ideia do que está acontecendo?",
              "Aquelas campanhas que funcionavam bem pararam de converter do nada?"
            ].map((question, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="flex items-start gap-4 bg-gradient-to-r from-white/10 to-transparent p-6 rounded-2xl"
              >
                <CheckCircle className="w-8 h-8 text-green-400 flex-shrink-0 mt-1" />
                <p className="text-lg md:text-xl font-semibold">{question}</p>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-xl md:text-2xl font-bold text-center mt-8 text-yellow-400"
          >
            Se você respondeu "sim" para duas ou mais perguntas, precisa continuar lendo...
          </motion.p>
        </div>
      </section>

      {/* Method Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              🔥 O Método VOLAT para Tráfego Pago
            </h2>
            <p className="text-xl md:text-2xl font-semibold text-[#6b2c84]">
              Como 127 empresas multiplicaram seu retorno por 5 em apenas 90 dias
            </p>
          </motion.div>

          {/* Company Logos Carousel */}
          <div className="overflow-hidden mb-12">
            <motion.div
              className="flex gap-8 items-center"
              animate={{ x: [0, -1000] }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              {[...companies, ...companies].map((logo, index) => (
                <div key={index} className="flex-shrink-0">
                  <img
                    src={logo}
                    alt={`Company ${index + 1}`}
                    className="h-16 w-32 object-contain opacity-60 hover:opacity-100 transition-opacity"
                  />
                </div>
              ))}
            </motion.div>
          </div>

          {/* ROI Comparison */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-red-900/30 to-green-900/30 p-8 rounded-2xl mb-16"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center">
              Olha só a diferença no retorno médio dos nossos clientes:
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-center">
                <p className="text-lg font-semibold text-red-400 mb-2">Antes de trabalhar conosco:</p>
                <p className="text-2xl md:text-3xl font-bold">Cada R$ 1 investido retornava R$ 1,20</p>
              </div>
              <div className="text-center">
                <p className="text-lg font-semibold text-green-400 mb-2">Depois:</p>
                <p className="text-2xl md:text-3xl font-bold">Cada R$ 1 investido passou a retornar R$ 15,40</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 px-4 bg-black/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "PRIMEIRA ETAPA: Auditoria Completa (100% Gratuita)",
                subtitle: "Em 48 horas, a gente identifica exatamente onde você está perdendo dinheiro:",
                items: [
                  "Analisamos todo o seu funil de vendas",
                  "Fazemos um diagnóstico completo das suas campanhas", 
                  "Encontramos todos os vazamentos no seus investimentos",
                  "Mapeamos as oportunidades que você está perdendo"
                ]
              },
              {
                title: "SEGUNDA ETAPA: Implementação Acelerada",
                subtitle: "Sistema completo instalado e funcionando em 30 dias:",
                items: [
                  "Campanhas otimizadas para conversão máxima",
                  "Funis de alta performance que realmente vendem",
                  "Automação completa de leads qualificados", 
                  "Dashboards que mostram seu ROI em tempo real"
                ]
              },
              {
                title: "TERCEIRA ETAPA: Otimização Contínua",
                subtitle: "Crescimento garantido mês após mês:",
                items: [
                  "Monitoramento 24 horas por dia, 7 dias por semana",
                  "Ajustes baseados em dados reais, não em 'achismos'",
                  "Escalabilidade inteligente conforme seu negócio cresce",
                  "Suporte dedicado por 12 meses completos"
                ]
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-gradient-to-br from-white/10 to-transparent p-8 rounded-2xl"
              >
                <h3 className="text-xl md:text-2xl font-bold mb-4 text-[#6b2c84]">{step.title}</h3>
                <p className="text-lg font-semibold mb-6">{step.subtitle}</p>
                <ul className="space-y-3">
                  {step.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                      <span className="text-base font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 text-center"
          >
            💰 Resultados Reais de Clientes Reais
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-gradient-to-br from-green-900/30 to-transparent p-8 rounded-2xl border border-green-500/30"
              >
                <h3 className="text-xl font-bold mb-4 text-green-400">{testimonial.business}</h3>
                <div className="space-y-2">
                  <p className="text-lg font-semibold">Investimento: <span className="text-red-400">{testimonial.investment}</span></p>
                  <p className="text-lg font-semibold">Retorno: <span className="text-green-400">{testimonial.return}</span></p>
                  <p className="text-xl font-bold text-yellow-400">ROI: {testimonial.roi}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-16 px-4 bg-black/50">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 text-center"
          >
            🚀 Nossa Stack Tecnológica Exclusiva
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Automação Inteligente 24/7",
                items: [
                  "Sistema que pontua leads automaticamente",
                  "Remarketing em múltiplas plataformas", 
                  "Chatbot que qualifica prospects",
                  "CRM totalmente integrado e que faz o trabalho chato"
                ]
              },
              {
                title: "Campanhas de Alta Conversão",
                items: [
                  "Campanhas de Ads integradas: Google, Meta, TikTok, LinkedIn"
                ]
              },
              {
                title: "Dashboards Executivos",
                items: [
                  "Métricas atualizadas em tempo real",
                  "Custo de aquisição por canal",
                  "Valor do cliente projetado",
                  "Previsão de faturamento"
                ]
              }
            ].map((stack, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-gradient-to-br from-white/10 to-transparent p-8 rounded-2xl"
              >
                <h3 className="text-xl md:text-2xl font-bold mb-6 text-[#6b2c84]">{stack.title}</h3>
                <ul className="space-y-3">
                  {stack.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3">
                      <Zap className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
                      <span className="text-base font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              ⏰ Oferta Especial - Apenas 8 Vagas Disponíveis
            </h2>
            
            <div className="bg-gradient-to-r from-[#6b2c84]/30 to-[#ec6429]/30 p-8 rounded-2xl mb-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">PACOTE COMPLETO TRÁFEGO PAGO</h3>
              <div className="text-4xl md:text-5xl font-bold mb-4">
                <span className="line-through text-red-400">De R$ 46.000</span>
                <span className="text-green-400 ml-4">por apenas R$ 35.700</span>
              </div>
              <p className="text-xl font-semibold">Ou 12x de R$ 2.975 (sem juros)</p>
            </div>

            <div className="bg-gradient-to-br from-white/10 to-transparent p-8 rounded-2xl mb-8">
              <h4 className="text-2xl font-bold mb-6">O que você leva:</h4>
              <div className="grid md:grid-cols-2 gap-4 text-left">
                {[
                  "Auditoria completa (R$ 3.000)",
                  "Setup de todas as campanhas (R$ 5.000)",
                  "Automação completa (R$ 8.000)",
                  "Mentorias estratégicas (R$ 12.000)",
                  "Suporte especializado por 1 ano (R$ 2.000)"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-green-400" />
                    <span className="text-lg font-semibold">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 text-center">
                <p className="text-xl font-semibold">Valor total: <span className="line-through text-red-400">R$ 46.000</span></p>
                <p className="text-2xl font-bold text-green-400">Você paga: R$ 35.700</p>
              </div>
            </div>
          </motion.div>

          {/* Bonus */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-r from-yellow-900/30 to-orange-900/30 p-8 rounded-2xl mb-12"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-6">🎁 Bônus Exclusivos (Só Se Você Fechar Hoje)</h3>
            <p className="text-xl font-semibold mb-6">Se você garantir sua vaga hoje, ainda leva:</p>
            <div className="grid md:grid-cols-2 gap-4 text-left mb-6">
              {[
                "Agente GPT para qualificação de leads (R$ 2.000)",
                "Templates de alta conversão (R$ 1.500)",
                "Treinamento completo da sua equipe (R$ 3.000)",
              ].map((bonus, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-yellow-400" />
                  <span className="text-lg font-semibold">{bonus}</span>
                </div>
              ))}
            </div>
            <p className="text-2xl font-bold text-yellow-400">Valor total dos bônus: R$ 8.000</p>
          </motion.div>

          {/* Guarantee */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-r from-green-900/30 to-blue-900/30 p-8 rounded-2xl mb-12"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-6">💯 Garantia Blindada</h3>
            <h4 className="text-xl font-bold mb-4">Resultado ou Seu Dinheiro de Volta</h4>
            <div className="grid md:grid-cols-2 gap-4 text-left">
              {[
                "30 dias para ver os primeiros resultados",
                "96 dias para ROI de 300% ou reembolso total",
                "1 ano de suporte garantido",
                "Zero pegadinhas ou letras miúdas"
              ].map((guarantee, index) => (
                <div key={index} className="flex items-center gap-3">
                  <Shield className="w-6 h-6 text-green-400" />
                  <span className="text-lg font-semibold">{guarantee}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Countdown */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-gradient-to-r from-red-900/50 to-orange-900/50 p-8 rounded-2xl mb-12"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-6">🔥 Últimas 8 vagas - Tempo se esgotando:</h3>
            <div className="text-4xl md:text-5xl font-bold mb-4 text-red-400">
              ⏰ {String(timeLeft.hours).padStart(2, '0')}:{String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}
            </div>
            <p className="text-xl font-semibold">Próximas vagas disponíveis apenas em abril</p>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-2xl md:text-3xl font-bold">📞 Quero Minha Auditoria Gratuita Agora</h3>
            <p className="text-xl font-semibold">Clique no botão abaixo e reserve sua vaga:</p>
            
            <button className="bg-gradient-to-r from-[#6b2c84] via-[#98356b] to-[#ec6429] text-black px-12 py-6 rounded-full hover:opacity-90 transition-all text-2xl font-bold shadow-lg shadow-[#6b2c84]/20 mb-6">
              🎯 QUERO MULTIPLICAR MEU ROI AGORA
            </button>

            <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-lg font-semibold">
              <div className="flex items-center gap-2">
                <Phone className="w-6 h-6 text-green-400" />
                <span>WhatsApp: (11) 99999-9999</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-6 h-6 text-blue-400" />
                <span>E-mail: trafego@volat.com</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-black/50">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 text-center"
          >
            ❓ Perguntas Que Sempre Fazem
          </motion.h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-white/10 to-transparent rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
                >
                  <span className="text-lg md:text-xl font-bold">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="w-6 h-6 text-[#6b2c84]" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-[#6b2c84]" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6">
                    <p className="text-lg font-medium text-gray-300">{faq.answer}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-red-900/50 to-orange-900/50 p-8 rounded-2xl mb-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">⚠️ ATENÇÃO: Esta oferta expira em 24 horas</h2>
            <p className="text-xl font-semibold mb-4">Últimas 8 vagas disponíveis</p>
            <p className="text-lg font-medium">Próximas vagas só em abril devido à alta demanda</p>
          </motion.div>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-r from-[#6b2c84] via-[#98356b] to-[#ec6429] text-black px-12 py-6 rounded-full hover:opacity-90 transition-all text-2xl font-bold shadow-lg shadow-[#6b2c84]/20 mb-8"
          >
            🚀 QUERO GARANTIR MINHA VAGA AGORA
          </motion.button>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-4">VOLAT - Transformamos Investimento em Ads em Máquinas de Lucro</h3>
            <p className="text-sm font-medium text-gray-400">© 2025 Volat. Todos os direitos reservados.</p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default RevenueService;