import React from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Layout from '../../components/Layout';

const BlogPost = () => {
  const { slug } = useParams();

  return (
    <Layout
      title="Título do Post - Blog"
      description="Descrição detalhada do post do blog com informações relevantes sobre o conteúdo."
    >
      {/* Hero Section */}
      <div className="relative min-h-[60vh] flex items-center justify-center overflow-hidden px-4 py-20 md:py-32">
        {/* Gradient Effects */}
        <div className="absolute top-0 left-0 w-[40rem] h-[40rem] bg-gradient-to-r from-[#6b2c84]/20 to-transparent rounded-full filter blur-3xl animate-gradient-x"></div>
        <div className="absolute bottom-0 right-0 w-[40rem] h-[40rem] bg-gradient-to-l from-[#6b2c84]/20 to-transparent rounded-full filter blur-3xl animate-gradient-x"></div>

        {/* Main Content */}
        <div className="relative z-10 text-center max-w-3xl mx-auto w-full">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-[#6b2c84] hover:text-[#6b2c84]/80 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar para o Blog
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-6 px-4 py-2 bg-black/30 backdrop-blur-sm rounded-full border border-[#6b2c84]/10"
          >
            <span className="font-syncopate text-[#6b2c84] tracking-wider">CATEGORIA</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-6xl font-syncopate mb-6"
          >
            Título do Post
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center justify-center gap-6 text-gray-400"
          >
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>Mar 16, 2024</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>5 min de leitura</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>Nome do Autor</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Post Content */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="prose prose-invert prose-lg max-w-none"
          >
            <img
              src="https://images.unsplash.com/photo-1671238491897-f9b92a5d5cc4?auto=format&fit=crop&q=80"
              alt="Post featured image"
              className="w-full h-[400px] object-cover rounded-2xl mb-12"
            />

            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>

            <h2 className="text-2xl font-syncopate mb-4 mt-12">Subtítulo do Post</h2>

            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>

            <ul className="list-disc list-inside text-gray-300 text-lg leading-relaxed mb-6">
              <li>Ponto importante 1</li>
              <li>Ponto importante 2</li>
              <li>Ponto importante 3</li>
            </ul>

            <blockquote className="border-l-4 border-[#6b2c84] pl-6 my-8">
              <p className="text-xl text-gray-300 italic">
                "Citação importante relacionada ao conteúdo do post."
              </p>
            </blockquote>
          </motion.div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-4 bg-black/50">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-6 px-4 py-2 bg-black/30 backdrop-blur-sm rounded-full border border-[#6b2c84]/10"
          >
            <span className="font-syncopate text-[#6b2c84] tracking-wider">NEWSLETTER</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl md:text-4xl font-syncopate mb-6"
          >
            Receba nossos insights
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-gray-300 mb-8"
          >
            Inscreva-se para receber as últimas atualizações, tendências e insights diretamente em seu e-mail.
          </motion.p>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
          >
            <input
              type="email"
              placeholder="Seu melhor e-mail"
              className="flex-1 px-6 py-3 bg-white/5 border border-white/10 rounded-full focus:outline-none focus:border-[#6b2c84]/30 text-white placeholder-gray-400"
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-[#6b2c84] via-[#98356b] to-[#ec6429] text-black px-8 py-3 rounded-full hover:opacity-90 transition-all flex items-center justify-center gap-2 font-medium shadow-lg shadow-[#6b2c84]/20"
            >
              Inscrever
            </button>
          </motion.form>
        </div>
      </section>
    </Layout>
  );
};

export default BlogPost;