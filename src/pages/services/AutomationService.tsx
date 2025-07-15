import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, LineChart, Code, Rocket, MessageSquare, FileText, Target, Database, Users, DollarSign, TrendingUp, Zap, Brain, Clock, FileSpreadsheet, Bot, Mail, Repeat } from 'lucide-react';
import Layout from '../../components/Layout';

function AutomationService() {
  const painPoints = [
    {
      icon: Clock,
      title: "Tempo Desperdiçado",
      description: "Seus vendedores perdem horas preenchendo e analisando dados no CRM, e qualquer minuto perdido pode ser uma oportunidade de negócio a menos."
    },
    {
      icon: FileSpreadsheet,
      title: "Confiabilidade dos Dados",
      description: "Mesmo em meio a correria para bater as metas, a automatização elimina erros e gera dados confiáveis para basear suas decisões gerenciais."
    },
    {
      icon: Mail,
      title: "Demora no Follow-up",
      description: "A demora para responder faz com que vendedores percam o timing, e leads frios raramente se convertem."
    },
    {
      icon: Repeat,
      title: "Leads Desqualificados",
      description: "O atendimento inicial não pode ser negligenciado, mas a atenção de seus vendedores é gasta em leads sem perfil, e não em fechamentos."
    }
  ];

  const metrics = [
    {
      value: "5.238",
      label: "Total de Leads"
    },
    {
      value: "65%",
      label: "Taxa de Engajamento"
    },
    {
      value: "3.028",
      label: "Leads Qualificados"
    },
    {
      value: "14,8%",
      label: "Taxa de Conversão"
    }
  ];

  const process = [
    {
      title: "Briefing",
      description: "Este é o ponto de partida, em que coletamos informações cruciais do projeto, como objetivos, requisitos e restrições. Isso cria a base sólida para o desenvolvimento."
    },
    {
      title: "Prototipagem",
      description: "Em seguida, prototipamos criando uma versão preliminar do sistema para validar conceitos e obter feedback inicial. Isso ajuda a ajustar o curso antes do desenvolvimento completo."
    },
    {
      title: "Desenvolvimento",
      description: "Nessa etapa, construímos o sistema conforme os requisitos, com codificação, integração e implementação de recursos, garantindo colaboração eficiente da equipe."
    },
    {
      title: "QA",
      description: "Antes do lançamento, passamos pela QA, em que testamos o sistema, corrigimos bugs, avaliamos o desempenho e garantimos conformidade com os padrões de qualidade."
    },
    {
      title: "Deploy",
      description: "Com a aprovação da QA, implantamos o sistema no ambiente de produção, assegurando uma transição suave do desenvolvimento para o uso real."
    }
  ];

  const benefits = [
    {
      icon: Bot,
      title: "CRM Automatizado",
      description: "Seu sistema ou planilha é atualizado a cada interação, sem que precise digitar uma linha sequer."
    },
    {
      icon: Repeat,
      title: "Integração Simples",
      description: "Mantenha as ferramentas que você já usa, sem necessidade de mudanças drásticas."
    },
    {
      icon: MessageSquare,
      title: "Transcreva Conversas On e Offline",
      description: "O sistema coleta e traduz as informações de reuniões presenciais, vídeo chamadas ou telefonemas."
    },
    {
      icon: Zap,
      title: "Respostas Imediatas",
      description: "Diminua drasticamente o tempo de resposta e mantenha leads sempre quentes."
    },
    {
      icon: Brain,
      title: "SDR de Qualificação Inteligente",
      description: "Nossa IA faz o atendimento inicial, qualificando os leads e filtrando os melhores para o seu time."
    },
    {
      icon: Users,
      title: "Retenção de Clientes",
      description: "A análise dos dados de cada cliente baseia fluxos de contato e follow-ups automáticos, impulsionando as vendas recorrentes."
    }
  ];

  const results = [
    {
      value: "40h",
      label: "Economizadas a cada mês por vendedor"
    },
    {
      value: "28%",
      label: "De aumento na sua taxa de conversão"
    },
    {
      value: "31%",
      label: "De redução no ciclo de vendas"
    }
  ];

  return (
    <Layout
      title="Automação de Processos"
      description="Pare de Perder Tempo com Tarefas Repetitivas."
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
                <span className="font-syncopate text-[#6b2c84] tracking-wider">AUTOMAÇÃO INTELIGENTE</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-4xl md:text-6xl font-syncopate mb-6"
              >
                Pare de Perder Tempo com Tarefas Repetitivas
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-gray-300 text-lg mb-8"
              >
                Diga adeus a processos chatos que te deixam presos e não permitem seu time explorar o todo o seu potencial humano. Deixe robôs fazerem o básico e se concentre no que realmente importa.
              </motion.p>

              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="bg-gradient-to-r from-[#6b2c84] via-[#98356b] to-[#ec6429] text-black px-8 py-4 rounded-full hover:opacity-90 transition-all flex items-center gap-2 text-lg font-medium shadow-lg shadow-[#6b2c84]/20"
              >
                <Calendar className="w-5 h-5" />
                Crie seu primeiro funil
              </motion.button>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative aspect-square max-w-xl mx-auto"
            >
              <div className="w-full h-full bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-sm rounded-2xl p-8 flex items-center justify-center">
                <img 
                  src="https://images.pexels.com/photos/7504837/pexels-photo-7504837.jpeg"
                  alt="Chess strategy"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Metrics Section */}
      <section className="py-20 px-4 bg-black/50">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-syncopate mb-16 text-center"
          >
            Acompanhe os resultados em tempo real com dados poderosos
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-[#6b2c84] mb-2">{metric.value}</div>
                <div className="text-gray-300">{metric.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-2xl font-syncopate mb-4">Leads mais qualificados e engajados</h3>
              <p className="text-gray-300">Com a automações, você vai além da simples na captura de leads. Nossos agentes de IA criam funis de vendas interativos e inteligentes, que não só qualificam seus leads automaticamente, mas também os mantêm engajados durante toda a jornada.</p>
            </div>
            <div>
              <h3 className="text-2xl font-syncopate mb-4">Funis personalizados que conectam</h3>
              <p className="text-gray-300">Cada lead é único e, com o nosso serviço, cada interação conta. Nosso desenvolvimento de automações permite criar funis de vendas totalmente personalizados que acompanham os leads em sua jornada.</p>
            </div>
            <div>
              <h3 className="text-2xl font-syncopate mb-4">Facilidade que transforma leads em clientes</h3>
              <p className="text-gray-300">Com a automação, você cria funis interativos de maneira simples e eficiente. Nosso planejamento e execução de projeto permite que qualquer pessoa construa funis de vendas de alto desempenho.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 bg-black/50">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-syncopate mb-16 text-center"
          >
            Como funciona?
          </motion.h2>

          <div className="space-y-12">
            {process.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex gap-8 items-start"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#6b2c84]/20 flex items-center justify-center">
                  <span className="text-[#6b2c84] font-bold">{index + 1}</span>
                </div>
                <div>
                  <h3 className="text-xl font-syncopate mb-2">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-syncopate mb-16 text-center"
          >
            O que está impedindo sua empresa de vender mais?
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {painPoints.map((point, index) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-sm rounded-2xl p-6 border border-white/10"
              >
                <point.icon className="w-12 h-12 text-[#6b2c84] mb-4" />
                <h3 className="text-xl font-syncopate mb-3">{point.title}</h3>
                <p className="text-gray-300">{point.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 px-4 bg-black/50">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-syncopate mb-16 text-center"
          >
            Transforme o seu fluxo de vendas e maximize seus resultados
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {results.map((result, index) => (
              <motion.div
                key={result.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-[#6b2c84] mb-2">{result.value}</div>
                <div className="text-gray-300">{result.label}</div>
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
            A automação é a solução que seu time comercial precisa
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-sm rounded-2xl p-6 border border-white/10"
              >
                <benefit.icon className="w-12 h-12 text-[#6b2c84] mb-4" />
                <h3 className="text-xl font-syncopate mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </motion.div>
            ))}
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
            Os processos são o motor de toda empresa
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-300 mb-8"
          >
            A Inteligência Artificial não vai substituir seu time, mas sim, maximizar a sua produtividade através da automatização de tarefas manuais, coleta e análise de dados, para sua equipe focar no que importa: vender mais e melhor!
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-r from-[#6b2c84] via-[#98356b] to-[#ec6429] text-black px-8 py-4 rounded-full hover:opacity-90 transition-all flex items-center gap-2 text-lg font-medium mx-auto shadow-lg shadow-[#6b2c84]/20"
          >
            <Calendar className="w-5 h-5" />
            Agende uma demonstração
          </motion.button>
        </div>
      </section>
    </Layout>
  );
}

export default AutomationService;