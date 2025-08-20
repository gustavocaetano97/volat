import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Mail, Search, FileText, BarChart3 } from 'lucide-react';

const BioPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-sm bg-white rounded-3xl shadow-2xl overflow-hidden"
      >
        {/* Header com gradiente escuro */}
        <div className="bg-gradient-to-br from-slate-800 via-slate-700 to-slate-600 px-6 pt-8 pb-6 text-center relative">
          {/* Avatar principal */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative mb-4"
          >
            <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-4 border-white/20 shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face&auto=format"
                alt="Gustavo Rhidon"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Avatar menor sobreposto */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute -bottom-2 -right-2 w-12 h-12 rounded-full overflow-hidden border-3 border-white shadow-lg"
            >
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face&auto=format"
                alt="Gustavo Rhidon"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>

          {/* Nome */}
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl font-bold text-white mb-4"
          >
            Gustavo Rhidon
          </motion.h1>

          {/* Ícones sociais */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex justify-center gap-4"
          >
            <button className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors">
              <Globe className="w-5 h-5" />
            </button>
            <button className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors">
              <Mail className="w-5 h-5" />
            </button>
          </motion.div>
        </div>

        {/* Conteúdo principal */}
        <div className="p-6 space-y-4">
          {/* Campo de busca */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="relative"
          >
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search or type a keyword"
                className="w-full pl-10 pr-12 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-black rounded-lg flex items-center justify-center text-white hover:bg-gray-800 transition-colors">
                <Search className="w-4 h-4" />
              </button>
            </div>
          </motion.div>

          {/* Botões principais */}
          <div className="space-y-3">
            {/* Diagnóstico gratuito */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl font-semibold text-sm hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
            >
              <BarChart3 className="w-5 h-5" />
              Diagnóstico gratuito da sua empresa
            </motion.button>

            {/* Livro */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4 rounded-xl font-semibold text-sm hover:from-purple-700 hover:to-blue-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
            >
              <FileText className="w-5 h-5" />
              Livro: Mundo Automático - como ganhar tempo e dinheiro?
            </motion.button>
          </div>

          {/* Link para mailing list */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="w-full text-gray-600 py-3 text-sm font-medium hover:text-gray-800 transition-colors"
          >
            Subscribe to my mailing list
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default BioPage;