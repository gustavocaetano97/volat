import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, Mail, Search, BarChart3, BookOpen, ArrowRight } from 'lucide-react';

const BioPage = () => {
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);

  const buttonSubtitles = {
    diagnostico: "construa um plano para crescer sua empresa",
    livro: "Mundo Automático - como ganhar tempo e dinheiro?"
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="profile-card w-full max-w-sm bg-white rounded-3xl shadow-2xl overflow-hidden relative"
        style={{ 
          width: '380px',
          borderRadius: '24px',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12)'
        }}
      >
        {/* Cover Photo */}
        <div 
          className="cover relative h-44 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-600"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=400&fit=crop&auto=format")',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-slate-800/60 via-slate-700/40 to-slate-600/60"></div>
          
          {/* Avatar */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="avatar absolute left-1/2 -translate-x-1/2 -bottom-12"
          >
            <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face&auto=format"
                alt="Gustavo Rhidon"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* Content */}
        <div className="pt-16 pb-8 px-6">
          {/* Name & Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center mb-4"
          >
            <h1 className="text-xl font-semibold text-gray-900 mb-1">Gustavo Rhidon</h1>
            <p className="text-sm text-gray-500">Especialista em Automação & Growth</p>
          </motion.div>

          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="quick-actions flex justify-center gap-4 mb-5"
          >
            <button 
              className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-purple-600 hover:bg-gray-200 transition-all duration-200 hover:scale-105"
              aria-label="Open website"
            >
              <Globe className="w-6 h-6" />
            </button>
            <button 
              className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-purple-600 hover:bg-gray-200 transition-all duration-200 hover:scale-105"
              aria-label="Send email"
            >
              <Mail className="w-6 h-6" />
            </button>
          </motion.div>

          {/* CTA Buttons */}
          <div className="space-y-3 mb-5">
            {/* Diagnóstico Button */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              onMouseEnter={() => setHoveredButton('diagnostico')}
              onMouseLeave={() => setHoveredButton(null)}
              className="cta-button w-full h-12 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-xl font-semibold text-sm flex items-center justify-center gap-3 hover:shadow-lg transition-all duration-200 hover:-translate-y-1 active:scale-95 relative overflow-hidden"
              style={{
                background: 'linear-gradient(90deg, #7c3aed 0%, #ec4899 100%)',
                boxShadow: hoveredButton === 'diagnostico' ? '0 8px 25px rgba(124, 58, 237, 0.4)' : '0 4px 15px rgba(124, 58, 237, 0.2)'
              }}
            >
              <BarChart3 className="w-5 h-5" />
              <span>Diagnóstico gratuito da sua empresa</span>
              
              <AnimatePresence>
                {hoveredButton === 'diagnostico' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute inset-x-0 -bottom-8 bg-gray-900 text-white text-xs py-2 px-3 rounded-lg shadow-lg z-10"
                  >
                    {buttonSubtitles.diagnostico}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>

            {/* Livro Button */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              onMouseEnter={() => setHoveredButton('livro')}
              onMouseLeave={() => setHoveredButton(null)}
              className="cta-button w-full h-12 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-xl font-semibold text-sm flex items-center justify-center gap-3 hover:shadow-lg transition-all duration-200 hover:-translate-y-1 active:scale-95 relative overflow-hidden"
              style={{
                background: 'linear-gradient(90deg, #7c3aed 0%, #ec4899 100%)',
                boxShadow: hoveredButton === 'livro' ? '0 8px 25px rgba(124, 58, 237, 0.4)' : '0 4px 15px rgba(124, 58, 237, 0.2)'
              }}
            >
              <BookOpen className="w-5 h-5" />
              <span>Livro: Mundo Automático</span>
              
              <AnimatePresence>
                {hoveredButton === 'livro' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute inset-x-0 -bottom-8 bg-gray-900 text-white text-xs py-2 px-3 rounded-lg shadow-lg z-10"
                  >
                    {buttonSubtitles.livro}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>

          {/* Mailing List */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="text-center"
          >
            <button
              onClick={() => setShowEmailForm(!showEmailForm)}
              className="text-gray-600 text-sm font-medium hover:text-gray-800 transition-colors duration-200"
            >
              Tome o próximo passo para seu melhor posicionamento
            </button>

            <AnimatePresence>
              {showEmailForm && (
                <motion.form
                  initial={{ opacity: 0, height: 0, marginTop: 0 }}
                  animate={{ opacity: 1, height: 'auto', marginTop: 16 }}
                  exit={{ opacity: 0, height: 0, marginTop: 0 }}
                  className="overflow-hidden"
                >
                  <div className="flex gap-2">
                    <input
                      type="email"
                      placeholder="Seu melhor e-mail"
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                    <button
                      type="submit"
                      className="px-4 py-2 bg-white border border-purple-500 text-purple-600 rounded-lg text-sm font-medium hover:bg-purple-50 transition-colors duration-200 flex items-center gap-1"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default BioPage;