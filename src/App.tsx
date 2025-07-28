import React from 'react';
import { Menu, X, ChevronRight, Calendar, LineChart, Code, Rocket, MessageSquare, FileText, Target, Database, Users, DollarSign, TrendingUp, Zap, Settings, Compass } from 'lucide-react';
import { motion } from 'framer-motion';
import Layout from './components/Layout';
import MovingWords from './components/MovingWords';
import AnimatedDots from './components/AnimatedDots';
import ProcessCard from './components/ProcessCard';
import ServiceCard from './components/ServiceCard';
import BenefitCard from './components/BenefitCard';
import FAQ from './components/FAQ';
import TechServiceCards from './components/TechServiceCards';
import TypingAnimation from './components/TypingAnimation';

function App() {
  const processCards = [
    {
      title: "Diagnóstico",
      description: "Primeiro, a gente escuta. Mergulhamos no seu negócio para entender onde você quer chegar e quais são os obstáculos no caminho. Cada estratégia nasce dessa conversa honesta.",
      icon: LineChart,
      showDashboard: true,
      animationType: 'analytics',
    },
    {
      title: "Desenvolvimento",
      description: "Aqui é onde a mágica acontece. Criamos soluções que fazem sentido para o SEU negócio - não para qualquer empresa. Testamos tudo antes de entregar porque sua reputação vale mais que nossa pressa.",
      icon: Code,
      showDashboard: true,
      animationType: 'development',
    },
    {
      title: "Manutenção",
      description: "Lançar é só o começo. Acompanhamos cada passo, ajustamos o que precisa e garantimos que sua solução continue entregando resultados mês após mês.",
      icon: Rocket,
      showDashboard: true,
      animationType: 'maintenance',
    },
  ];

  const serviceCards = [
    {
      title: "Otimização de Processos",
      description: "Nossos especialistas trabalham lado a lado com você para criar estratégias de vendas que realmente simplificam sua operação. Resultado? Mais vendas com menos dor de cabeça.",
      icon: Users,
      size: "wide",
      showDashboard: true,
      animationType: 'consulting',
      link: '/servicos/consultoria',
    },
    {
      title: "Geração de Demanda e Previsibilidade",
      description: "Atraia exatamente quem precisa do que você oferece. Com tráfego pago inteligente e remarketing estruturado, você sabe exatamente quanto cada real investido vai retornar.",
      icon: Target,
      showDashboard: true,
      animationType: 'leads',
      link: '/servicos/receita',
    },
    {
      title: "Implementação de CRM e Dados",
      description: "Transforme números confusos em decisões claras. Extraímos insights que fazem sentido dos seus dados para acelerar o crescimento do seu negócio.",
      icon: Database,
      size: "wide",
      showDashboard: true,
      animationType: 'insights',
      link: '/servicos/insights',
    },
    {
      title: "Chatbot inteligente e automação",
      description: "Seus clientes merecem respostas rápidas, mesmo quando você está dormindo. Nossos chatbots aprendem sobre seu negócio e oferecem atendimento de qualidade 24/7. Não substítuimos humanos, mas potencializamos eles.",
      icon: MessageSquare,
      showDashboard: true,
      animationType: 'chatbot',
      link: '/servicos/chatbot',
    },
    {
      title: "Treinamento e conteúdo",
      description: "Criamos uma cultura de solução de problemas na sua empresa. Consultorias práticas, dinâmicas que funcionam e conteúdos que aproximam seu público da sua marca.",
      icon: FileText,
      showDashboard: true,
      animationType: 'content',
      link: '/servicos/conteudo',
    },
    {
      title: "Automação Inteligente",
      description: "Liberte sua equipe das tarefas que um sistema pode fazer melhor. Nossa automação aprende e se adapta conforme seu negócio evolui.",
      icon: Settings,
      showDashboard: true,
      animationType: 'automation',
      link: '/servicos/automacoes',
    },
    {
      title: "Posicionamento Estratégico",
      description: "Defina e fortaleça o posicionamento da sua marca no mercado. Estratégias personalizadas para destacar sua empresa da concorrência e conquistar seu público-alvo.",
      icon: Compass,
      showDashboard: true,
      animationType: 'positioning',
      link: '/servicos/posicionamento',
    },
  ];

  const benefitCards = [
    {
      title: "Redução de custos",
      description: "Otimizamos seus processos para cortar custos desnecessários sem perder qualidade. Cada centavo economizado volta para o que realmente importa: fazer seu negócio crescer.",
      icon: DollarSign,
    },
    {
      title: "Resultados aprimorados",
      description: "Dados não mentem. Nossas estratégias baseadas em inteligência de mercado entregam performance superior e resultados que seus concorrentes vão querer copiar.",
      icon: TrendingUp,
    },
    {
      title: "Maior produtividade",
      description: "Automatizamos o que é chato, refinamos o que funciona e aceleramos o que gera resultado. Sua equipe trabalha menos horas, mas produz muito mais.",
      icon: Zap,
    },
  ];

  const SectionHeader = ({ badge, title, subtitle }: { badge: string; title: string; subtitle: string }) => (
    <div className="text-center mb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="inline-block mb-6 px-4 md:px-6 py-2 bg-black/30 backdrop-blur-sm rounded-full border border-[#6b2c84]/10"
      >
        <span className="font-syncopate text-[#6b2c84] tracking-wider text-sm md:text-base">{badge}</span>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-2xl md:text-4xl font-syncopate mb-6"
      >
        {title}
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto"
      >
        {subtitle}
      </motion.p>
    </div>
  );

  return (
    <Layout
      title="Volat - Marketing e Tecnologia"
      description="Transforme seu negócio com soluções inovadoras de crescimento comercial. Chatbot inteligente, criação de conteúdo, geração de receita previsível e mais."
    >
      {/* Hero Section */}
      <div className="relative min-h-[100svh] flex items-center justify-center overflow-hidden px-4 py-20 md:py-0 pt-32">
        {/* Gradient Effects */}
        <div className="absolute top-0 left-0 w-[40rem] h-[40rem] bg-gradient-to-r from-[#6b2c84]/20 to-transparent rounded-full filter blur-3xl animate-gradient-x"></div>
        <div className="absolute bottom-0 right-0 w-[40rem] h-[40rem] bg-gradient-to-l from-[#6b2c84]/20 to-transparent rounded-full filter blur-3xl animate-gradient-x"></div>

        {/* Animated Dots Overlay */}
        <AnimatedDots />

        {/* Main Content */}
        <div className="relative z-10 text-center max-w-7xl mx-auto w-full">
          {/* Brand Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-6 md:mb-8 px-4 md:px-6 py-2 bg-black/30 backdrop-blur-sm rounded-full border border-[#ec6429]/10"
          >
            <span className="font-syncopate text-[#ec6429] tracking-wider text-sm md:text-base">VOLAT</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="responsive-title font-bold text-white mb-4 tracking-wider font-syncopate px-4 break-words flex flex-col items-center gap-2"
          >
            <span>GESTÃO DE</span>
            <TypingAnimation />
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-base sm:text-lg md:text-xl text-white mb-8 md:mb-16 font-space-grotesk px-4"
          >
            descubra oportunidades escondidas que contam a história do seu negócio
          </motion.p>

          {/* Moving Words Panel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="w-full max-w-sm md:max-w-2xl mx-auto bg-black/30 backdrop-blur-sm rounded-2xl p-4 md:p-8"
          >
            <MovingWords />
          </motion.div>
        </div>
      </div>

      {/* Processo Section */}
      <section
        className="py-16 md:py-32 px-4 bg-black/50 relative bg-responsive"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black/80"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <SectionHeader
            badge="PROCESSO"
            title="O caminho que leva você ao crescimento"
            subtitle="Sem complicação. Só resultados que funcionam de verdade."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {processCards.map((card, index) => (
              <ProcessCard
                key={card.title}
                {...card}
                delay={index * 0.2}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Tech Service Cards */}
      <TechServiceCards />

      {/* Serviços Section */}
      <section
        className="py-16 md:py-32 px-4 relative bg-responsive"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black/80"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <SectionHeader
            badge="SERVIÇOS"
            title="Nossos Serviços"
            subtitle="Crescimento real para quem quer sair do lugar. Cada empresa é única. Nossas soluções também são."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCards.slice(0, 3).map((card, index) => (
              <ServiceCard
                key={card.title}
                {...card}
                delay={index * 0.1}
              />
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            {serviceCards.slice(3, 5).map((card, index) => (
              <ServiceCard
                key={card.title}
                {...card}
                delay={(index + 3) * 0.1}
              />
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            {serviceCards.slice(5).map((card, index) => (
              <ServiceCard
                key={card.title}
                {...card}
                delay={(index + 5) * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Benefícios Section */}
      <section
        className="py-16 md:py-32 px-4 bg-black/50 relative bg-responsive"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black/80"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <SectionHeader
            badge="BENEFÍCIOS"
            title="Resultados que você pode ver e sentir no bolso."
            subtitle="Veja o que acontece quando você trabalha com quem entende do assunto"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefitCards.map((card, index) => (
              <BenefitCard
                key={card.title}
                {...card}
                delay={index * 0.2}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-16 md:py-32 px-4 relative bg-responsive"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black/80"></div>
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-6 px-4 md:px-6 py-2 bg-black/30 backdrop-blur-sm rounded-full border border-[#6ec6429]/10"
          >
            <span className="font-syncopate text-[#ec6429] tracking-wider text-sm md:text-base">VOLAT</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-2xl md:text-4xl font-syncopate mb-6"
          >
            Pronto para a próxima fase do seu negócio?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-gray-300 mb-8"
          >
            Vamos conversar sobre como podemos acelerar seu crescimento de verdade.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col items-center gap-4"
          >
            <button className="bg-gradient-to-r from-[#6b2c84] via-[#98356b] to-[#ec6429] text-black px-8 py-4 rounded-full hover:opacity-90 transition-all flex items-center gap-2 text-lg font-medium shadow-lg shadow-[#6b2c84]/20">
              <Calendar className="w-5 h-5" />
              Agende uma conversa rápida
            </button>
            <span className="text-sm text-gray-400">É grátis e sem compromisso</span>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section
        className="py-16 md:py-32 px-4 relative bg-responsive"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black/80"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <SectionHeader
            badge="FAQ"
            title="Suas dúvidas, nossas respostas"
            subtitle="As perguntas que todo mundo faz antes de começar."
          />
          <FAQ />
        </div>
      </section>
    </Layout>
  );
}

export default App;