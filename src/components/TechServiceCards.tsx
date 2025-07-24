import React from 'react';
import { motion } from 'framer-motion';
import { Settings, TrendingUp, Code, Heart as Gear, MapPin, Smartphone } from 'lucide-react';

const TechServiceCards = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-syncopate mb-6">
            Soluções Tecnológicas Avançadas
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Transforme seu negócio com nossas soluções tecnológicas inovadoras e personalizadas.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Automation Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group relative bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-[#6b2c84]/30 transition-all duration-500 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#6b2c84]/20"
          >
            {/* Glow Effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#6b2c84]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Animated Gears */}
            <div className="relative mb-6 h-20 flex items-center justify-center overflow-hidden">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute"
              >
                <Settings className="w-12 h-12 text-[#6b2c84]" />
              </motion.div>
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                className="absolute translate-x-6 translate-y-3"
              >
                <Gear className="w-8 h-8 text-[#6b2c84]/60" />
              </motion.div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute -translate-x-6 translate-y-2"
              >
                <Gear className="w-6 h-6 text-[#6b2c84]/40" />
              </motion.div>
            </div>

            <h3 className="text-xl md:text-2xl font-syncopate mb-4 text-white group-hover:text-[#6b2c84] transition-colors duration-300">
              Process Automation
            </h3>
            
            <p className="text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300">
              Automatize processos repetitivos e libere sua equipe para focar em atividades estratégicas. 
              Sistemas inteligentes que aumentam a eficiência e reduzem erros operacionais.
            </p>

            {/* Animated Background Elements */}
            <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="w-16 h-16 rounded-full bg-[#6b2c84]/20"
              ></motion.div>
            </div>
          </motion.div>

          {/* Digital Positioning Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group relative bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-[#6b2c84]/30 transition-all duration-500 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#6b2c84]/20"
          >
            {/* Glow Effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#6b2c84]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Animated Chart Elements */}
            <div className="relative mb-6 h-20 flex items-center justify-center">
              <div className="relative w-16 h-16">
                {/* Rising Graph Bars */}
                {[1, 2, 3, 4].map((bar, index) => (
                  <motion.div
                    key={bar}
                    initial={{ height: 0 }}
                    animate={{ height: [0, (bar * 8) + 16, (bar * 8) + 16] }}
                    transition={{
                      duration: 2,
                      delay: index * 0.2,
                      repeat: Infinity,
                      repeatDelay: 2
                    }}
                    className="absolute bg-gradient-to-t from-[#6b2c84] to-[#6b2c84]/60 w-2 rounded-t"
                    style={{ left: `${index * 12}px`, bottom: 0 }}
                  />
                ))}
                
                {/* Map Pin */}
                <motion.div
                  animate={{ y: [-2, 2, -2] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute top-0 right-0"
                >
                  <MapPin className="w-6 h-6 text-[#6b2c84]" />
                </motion.div>
                
                {/* Trending Arrow */}
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="absolute bottom-0 right-2"
                >
                  <TrendingUp className="w-8 h-8 text-[#6b2c84]" />
                </motion.div>
              </div>
            </div>

            <h3 className="text-xl md:text-2xl font-syncopate mb-4 text-white group-hover:text-[#6b2c84] transition-colors duration-300">
              Digital Positioning
            </h3>
            
            <p className="text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300">
              Posicione sua marca estrategicamente no ambiente digital. SEO avançado, marketing de conteúdo 
              e estratégias de visibilidade que colocam seu negócio no topo dos resultados.
            </p>

            {/* Animated Background Elements */}
            <div className="absolute top-4 left-4 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-12 h-12 border-2 border-[#6b2c84]/30 rounded-full"
              ></motion.div>
            </div>
          </motion.div>

          {/* Development Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="group relative bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-[#6b2c84]/30 transition-all duration-500 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#6b2c84]/20"
          >
            {/* Glow Effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#6b2c84]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Animated Code Elements */}
            <div className="relative mb-6 h-20 flex items-center justify-center">
              <div className="relative">
                {/* Code Icon */}
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Code className="w-12 h-12 text-[#6b2c84]" />
                </motion.div>
                
                {/* Mobile Device */}
                <motion.div
                  animate={{ x: [0, 10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -top-2 -right-8"
                >
                  <Smartphone className="w-8 h-8 text-[#6b2c84]/60" />
                </motion.div>
                
                {/* Code Lines Animation */}
                <div className="absolute -bottom-4 -left-6 space-y-1">
                  {[1, 2, 3].map((line, index) => (
                    <motion.div
                      key={line}
                      initial={{ width: 0 }}
                      animate={{ width: [0, 20 + (index * 8), 20 + (index * 8)] }}
                      transition={{
                        duration: 1.5,
                        delay: index * 0.3,
                        repeat: Infinity,
                        repeatDelay: 2
                      }}
                      className="h-1 bg-gradient-to-r from-[#6b2c84] to-[#6b2c84]/40 rounded"
                    />
                  ))}
                </div>
              </div>
            </div>

            <h3 className="text-xl md:text-2xl font-syncopate mb-4 text-white group-hover:text-[#6b2c84] transition-colors duration-300">
              Web & Mobile Development
            </h3>
            
            <p className="text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300">
              Desenvolvimento de websites e aplicações modernas, responsivas e de alta performance. 
              Soluções tecnológicas sob medida que impulsionam seu negócio no ambiente digital.
            </p>

            {/* Animated Background Elements */}
            <div className="absolute bottom-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360]
                }}
                transition={{ duration: 4, repeat: Infinity }}
                className="w-8 h-8 border border-[#6b2c84]/30 rounded"
              ></motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TechServiceCards;