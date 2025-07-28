import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Clock, Target, Zap, Brain, Users, DollarSign, CheckCircle, ArrowRight, Star, Play, MessageSquare, Calendar, Mail } from 'lucide-react';
import Layout from '../components/Layout';

const DougDemarcoPage = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 15,
    hours: 7,
    minutes: 23,
    seconds: 45
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { days, hours, minutes, seconds } = prev;

        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else if (days > 0) {
          days--;
          hours = 23;
          minutes = 59;
          seconds = 59;
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const results = [
    { period: "30 dias depois", value: "R$ 35.000" },
    { period: "10 meses depois", value: "R$ 880.000" },
    { period: "24 meses depois", value: "R$ 5.6 milhões" },
    { period: "Hoje", value: "R$ 15 milhões" }
  ];

  const targetAudience = [
    "Mentor que tá cansado de ser invisível",
    "Consultor que sabe que vale mais do que cobra",
    "Prestador de serviço que quer sair da correria",
    "Profissional liberal que quer escalar",
    "Infoprodutor que quer vender de verdade"
  ];

  const systemPillars = [
    {
      title: "NARRATIVA",
      subtitle: "Fazer as pessoas pensarem em você na hora que o problema aparece",
      description: "Quando você fala de um jeito tão claro, tão direto, tão... seu, que o cliente para e pensa: 'Caralho, é exatamente isso que eu preciso. Como esse cara leu minha mente?'"
    },
    {
      title: "PRESENÇA",
      subtitle: "Ficar na mente do cliente o tempo todo, mas do jeito certo",
      description: "Presença de verdade é fazer conteúdo que GRUDA na mente da pessoa. Você aparece e ela pensa: 'Esse cara é um gênio... tudo que ele fala faz sentido total.'"
    },
    {
      title: "MONETIZAÇÃO",
      subtitle: "Fazer dinheiro cair na sua conta sem precisar ficar implorando",
      description: "Você vai criar uma TEIA DE OFERTAS tão bem feita, tão óbvia, que o cliente vai falar: 'Cara, como é que eu faço pra comprar isso AGORA?'"
    }
  ];

  const features = [
    {
      icon: Brain,
      title: "DOUG.EXE 3.0 — Seu mentor + braço direito digital",
      description: "Ele te dá ideia, te responde, te corrige, te provoca, te ajuda a escrever, montar oferta, pensar campanha... É literalmente o cérebro que você usaria se já tivesse ganhando mais de R$ 500 mil por mês."
    },
    {
      icon: Target,
      title: "Implementação do Código do Domínio — passo a passo sem enrolação",
      description: "Vídeos curtinhos de 4-5 minutos que mostram exatamente o que fazer pra posicionar, postar, vender e escalar seu conhecimento. Sem blá-blá-blá. É: assiste, faz, ganha."
    },
    {
      icon: MessageSquare,
      title: "BACKROOM.EXE — Acesso direto comigo por 1 ano inteiro",
      description: "Lá dentro, eu posto meus bastidores, mostro o que tô testando, o que deu certo, o que deu merda... e respondo suas perguntas. Você fala comigo. Eu falo com você. Simples assim."
    },
    {
      icon: Users,
      title: "Reuniões ao vivo comigo — 1 ou 2 vezes por mês no Zoom",
      description: "Você mostra onde travou. Eu te destravo AO VIVO e te digo exatamente o que fazer depois."
    },
    {
      icon: Zap,
      title: "AgenteGPT VEX — O gênio dos prompts",
      description: "Você fala o que quer criar. Ele cospe copy, ideia, campanha, roteiro, email... tudo prontinho. Sem pensar. Só copiar e colar."
    },
    {
      icon: Star,
      title: "Atualizações pra sempre — Comprou uma vez, recebe tudo",
      description: "Sem mensalidade. Sem 'upgrade premium'. Sem pegadinha. Comprou? É seu pra sempre."
    }
  ];

  return (
    <Layout
      title="Código do Domínio - Gustavo Rhidon"
      description="Transforme seu conhecimento em dinheiro de verdade. O sistema que pega especialistas invisíveis e transforma em ímãs de conversão."
    >
      {/* Hero Section */}
      <div className="pt-32 pb-16 md:pt-40 md:pb-24 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black mb-8 leading-tight">
              Olha... não importa se você é um <span className="text-[#6b2c84]">mentor que tá há meses tentando decolar</span> e não consegue
            </h1>

            <p className="text-xl md:text-2xl font-bold mb-8 text-gray-200">
              Se você tem conhecimento de verdade — daqueles que faz diferença mesmo — eu pego isso e <span className="text-green-400">transformo em dinheiro</span>. E olha, não tô falando de "um dia vai dar certo". Tô falando de <span className="text-yellow-400">rápido mesmo</span>.
            </p>

            <div className="bg-gradient-to-r from-red-900/50 to-orange-900/50 p-6 rounded-2xl mb-8">
              <p className="text-lg md:text-xl font-bold text-yellow-300">
                (Compre esse programa: O pessoal vai achar que você contratou um copywriter, um estrategista e... cara, talvez até um demônio no mesmo pacote)
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* 3:47 AM Section */}
      <section className="py-16 px-4 bg-black/70">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-black mb-8 text-red-400">
              São 3:47 da manhã.
            </h2>

            <div className="text-left max-w-3xl mx-auto space-y-6 text-lg md:text-xl font-semibold">
              <p>E você tá aí. Acordado. De novo.</p>

              <p>Aquela sensação conhecida, né? Scrollando o feed que nem um zumbi, com aquela luz azul queimando os olhos...</p>

              <p>Aí você vê aquele cara. Ah, você SABE qual é. Aquele que você tem certeza absoluta que não entende nem 30% do que você entende...</p>

              <p className="text-green-400 font-bold">E lá está ele. Sorrindo feito bobo com as chaves da BMW que "comprou pra esposa". R$ 380 mil. À vista. Postou foto e tudo.</p>

              <p className="text-red-400 font-bold">Enquanto isso, você? Você tá aqui, meio que... esperando aquele PIX de R$ 200 cair pra conseguir fechar o mês sem passar aperto.</p>

              <p className="text-2xl font-black text-center text-yellow-400">Ai, que raiva, né?</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Truth Bomb Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-black mb-8 text-red-400">
              Vou te contar uma verdade que vai doer:
            </h2>

            <h3 className="text-4xl md:text-5xl font-black mb-8 text-yellow-400">
              O OUTRO CARA É MELHOR QUE VOCÊ.
            </h3>

            <div className="text-left max-w-3xl mx-auto space-y-6 text-lg md:text-xl font-semibold">
              <p>Espera, espera... antes de você fechar essa janela com raiva, me escuta.</p>

              <p>Ele não é melhor porque sabe mais. Longe disso. <span className="text-[#6b2c84] font-bold">Ele é melhor porque ele joga melhor.</span></p>

              <p>Sacou a diferença?</p>

              <p className="text-green-400 font-bold">Ele entendeu uma parada que você ainda não entendeu: o jogo não é sobre o que você sabe. É sobre como você faz as pessoas SENTIREM sobre o que você sabe.</p>

              <p className="text-xl font-black text-center bg-gradient-to-r from-[#6b2c84]/30 to-[#ec6429]/30 p-6 rounded-2xl">
                O mercado não paga por conhecimento, meu amigo. Nunca pagou. Ele paga por quem consegue fazer ele SENTIR alguma coisa.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Doug's Story */}
      <section className="py-16 px-4 bg-black/50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-black mb-8">
              Meu nome é <span className="text-[#6b2c84]">Gustavo Rhidon</span> — e olha, provavelmente você já sabe disso.
            </h2>

            <div className="text-left max-w-3xl mx-auto space-y-6 text-lg md:text-xl font-semibold mb-12">
              <p>O que você talvez não saiba é que há uns 3 anos atrás, eu era... bem, ninguém. Literalmente ninguém.</p>

              <p>Eu era só mais um diretor de estratégia perdido numa holding de consultorias gigante. Sabe como é? Bom salário, crachá bonitinho, cargo que impressiona na reunião de família...</p>

              <p className="text-red-400 font-bold">Mas completamente invisível.</p>

              <p>Tipo, se eu sumisse da empresa, iam demorar uns 3 dias pra perceber.</p>

              <p>Até que um dia... descobri que ia ser pai.</p>

              <p className="text-yellow-400 font-bold">E aí, bateu aquele desespero existencial, sabe? Pensei: "Caramba, Gustavo, você precisa ganhar mais dinheiro. E precisa ser agora."</p>
            </div>

            <div className="bg-gradient-to-r from-green-900/50 to-blue-900/50 p-8 rounded-2xl mb-8">
              <h3 className="text-2xl font-black mb-6">E olha só o que aconteceu:</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {results.map((result, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-lg font-bold text-gray-300">{result.period}:</div>
                    <div className="text-2xl md:text-3xl font-black text-green-400">{result.value}</div>
                  </motion.div>
                ))}
              </div>
              <p className="text-xl font-bold mt-6 text-yellow-400">
                Tudo vendendo uma coisa que você também tem: CONHECIMENTO.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-black mb-8 text-[#6b2c84]">
              O QUE EU TENHO AQUI FUNCIONA PRA QUALQUER TIPO DE ESPECIALISTA:
            </h2>

            <div className="space-y-4">
              {targetAudience.map((audience, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-center gap-4 bg-gradient-to-r from-white/10 to-transparent p-4 rounded-2xl"
                >
                  <CheckCircle className="w-8 h-8 text-green-400 flex-shrink-0" />
                  <span className="text-lg md:text-xl font-bold">{audience}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Código do Domínio */}
      <section className="py-16 px-4 bg-black/70">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black mb-8 text-[#6b2c84]">
              Eu chamo isso de: CÓDIGO DO DOMÍNIO.
            </h2>

            <p className="text-xl md:text-2xl font-bold mb-12 max-w-4xl mx-auto">
              Pra você nunca mais ser ignorado no seu mercado, você precisa de três sistemas trabalhando juntos:
            </p>

            <h3 className="text-3xl md:text-4xl font-black text-yellow-400 mb-12">
              NARRATIVA — PRESENÇA — MONETIZAÇÃO
            </h3>
          </motion.div>

          <div className="space-y-12">
            {systemPillars.map((pillar, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-gradient-to-r from-white/10 to-transparent p-8 rounded-2xl"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#6b2c84]/20 flex items-center justify-center">
                    <span className="text-[#6b2c84] font-black text-xl">{index + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-black mb-2 text-[#6b2c84]">
                      {pillar.title}
                    </h3>
                    <h4 className="text-lg md:text-xl font-bold mb-4 text-yellow-400">
                      {pillar.subtitle}
                    </h4>
                    <p className="text-lg font-semibold text-gray-200">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Magnetism Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-black mb-8 text-green-400">
              É isso que você vira.
            </h2>

            <p className="text-xl md:text-2xl font-bold mb-8">
              Não um "influenciador". Não um "produtor de conteúdo".
            </p>

            <h3 className="text-5xl md:text-6xl font-black mb-12 text-[#6b2c84]">
              Um IMÃ DE DINHEIRO.
            </h3>

            <div className="bg-gradient-to-r from-yellow-900/50 to-orange-900/50 p-8 rounded-2xl mb-8">
              <p className="text-lg md:text-xl font-bold mb-4">
                Enquanto os outros ainda tão aí, rezando pra viralizar... você já tá espalhando armadilhas por todo canto.
              </p>
              <p className="text-2xl font-black text-yellow-400">
                Onde a pessoa pisar, ela compra.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* DOUG.EXE Section */}
      <section className="py-16 px-4 bg-black/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black mb-8">
              E pra isso, você vai ter acesso a uma coisa que mais ninguém tem:
            </h2>

            <h3 className="text-3xl md:text-4xl font-black mb-8 text-[#6b2c84]">
              Um cérebro artificial. Treinado. Que pensa junto com você — e executa junto com você.
            </h3>

            <div className="bg-gradient-to-r from-[#6b2c84]/30 to-[#ec6429]/30 p-8 rounded-2xl mb-12">
              <h4 className="text-4xl md:text-5xl font-black mb-4 text-yellow-400">
                RHIDON.EXE 3.0
              </h4>
              <p className="text-xl md:text-2xl font-bold">
                O agente mais impaciente e eficiente do mercado digital.
              </p>
            </div>

            <p className="text-lg md:text-xl font-semibold max-w-4xl mx-auto">
              Parece robô? É. Mas por trás dele tem um mentor de carne e osso, meio obcecado e bastante impaciente (eu mesmo).
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-white/10 to-transparent p-6 rounded-2xl"
              >
                <feature.icon className="w-12 h-12 text-[#6b2c84] mb-4" />
                <h3 className="text-lg font-black mb-3 text-yellow-400">{feature.title}</h3>
                <p className="text-base font-semibold text-gray-200">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Countdown & CTA */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-black mb-8 text-red-400">
              PRÓXIMA ABERTURA:
            </h2>

            <div className="bg-gradient-to-r from-red-900/50 to-orange-900/50 p-8 rounded-2xl mb-12">
              <h3 className="text-2xl md:text-3xl font-bold mb-6">Segunda semana de junho</h3>
              <div className="text-3xl md:text-4xl font-black mb-4 text-yellow-400">
                ⏰ {String(timeLeft.days).padStart(2, '0')}d {String(timeLeft.hours).padStart(2, '0')}h {String(timeLeft.minutes).padStart(2, '0')}m {String(timeLeft.seconds).padStart(2, '0')}s
              </div>
            </div>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-r from-[#6b2c84] via-[#98356b] to-[#ec6429] text-black px-12 py-6 rounded-full hover:opacity-90 transition-all text-2xl md:text-3xl font-black shadow-lg shadow-[#6b2c84]/20 mb-8"
            >
              🚀 ENTRAR NA LISTA DE ESPERA!
            </motion.button>

            <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-lg font-bold">
              <div className="flex items-center gap-2">
                <Mail className="w-6 h-6 text-[#6b2c84]" />
                <span>contato@gustavorhidon.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageSquare className="w-6 h-6 text-green-400" />
                <span>@gustavorhidon</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <section className="py-8 px-4 bg-black/70 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm font-semibold text-gray-400">
            Copyright © black sheep global consulting, LLC. Todos os direitos reservados.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default DougDemarcoPage;