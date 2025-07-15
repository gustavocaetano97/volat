import React from 'react';
import { ArrowRight, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Layout from '../../components/Layout';

const Blog = () => {
  return (
    <Layout
      title="Blog - Insights e Novidades"
      description="Descubra as últimas tendências, estratégias e insights em transformação digital, automação e crescimento comercial."
    >
      {/* Hero Section */}
      <div
        className="relative min-h-[60vh] flex items-center justify-center overflow-hidden px-4 py-20 md:py-32"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        {/* Gradient Effects */}
        <div className="absolute top-0 left-0 w-[40rem] h-[40rem] bg-gradient-to-r from-[#6b2c84]/20 to-transparent rounded-full filter blur-3xl animate-gradient-x"></div>
        <div className="absolute bottom-0 right-0 w-[40rem] h-[40rem] bg-gradient-to-l from-[#6b2c84]/20 to-transparent rounded-full filter blur-3xl animate-gradient-x"></div>

        {/* Main Content */}
        <div className="relative z-10 text-center max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-6 px-4 py-2 bg-black/30 backdrop-blur-sm rounded-full border border-[#6b2c84]/10"
          >
            <span className="font-syncopate text-[#6b2c84] tracking-wider">BLOG</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-6xl font-syncopate mb-6"
          >
            Insights e Novidades
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-gray-300 max-w-2xl mx-auto"
          >
            Descubra as últimas tendências, estratégias e insights em transformação digital, automação e crescimento comercial.
          </motion.p>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((post) => (
              <motion.article
                key={post}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: post * 0.1 }}
                className="bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden group hover:border-[#6b2c84]/30 transition-colors"
              >
                <Link to={`/blog/post-${post}`}>
                  <div className="relative">
                    <img
                      className="h-48 w-full object-cover"
                      src={`https://images.unsplash.com/photo-167${post}238491-f9${post}b92a5d${post}cc?auto=format&fit=crop&q=80`}
                      alt="Blog post thumbnail"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="px-3 py-1 text-sm bg-[#6b2c84]/10 text-[#6b2c84] rounded-full">
                        Categoria
                      </span>
                      <span className="text-sm text-gray-400">5 min de leitura</span>
                    </div>

                    <h3 className="text-xl font-syncopate mb-4 group-hover:text-[#6b2c84] transition-colors">
                      Título do Post {post}
                    </h3>

                    <p className="text-gray-300 mb-6 line-clamp-3">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <img
                          className="h-10 w-10 rounded-full border-2 border-[#6b2c84]/20"
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt="Author avatar"
                        />
                        <div>
                          <p className="text-sm font-medium">Nome do Autor</p>
                          <p className="text-sm text-gray-400">Mar 16, 2024</p>
                        </div>
                      </div>
                      <ArrowRight className="w-5 h-5 text-[#6b2c84] transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
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
              className="bg-gradient-to-r from-[#6b2c84] via-[#6b2c84] to-[#6b2c84] text-black px-8 py-3 rounded-full hover:opacity-90 transition-all flex items-center justify-center gap-2 font-medium shadow-lg shadow-[#6b2c84]/20"
            >
              Inscrever
            </button>
          </motion.form>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;