import React, { useState, useEffect } from 'react';
import { Calendar, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    document.body.classList.toggle('menu-open', isMenuOpen);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.classList.remove('menu-open');
    };
  }, [isMenuOpen]);

  const menuItems = [
    { label: 'Processos', href: '#processos' },
    {
      label: 'Serviços',
      href: '#servicos',
      submenu: [
        { label: 'Automações', href: '/servicos/automacoes' },
        { label: 'Otimização', href: '/servicos/consultoria' },
        { label: 'Geração de Demanda', href: '/servicos/receita' },
        { label: 'CRM e Dados', href: '/servicos/insights' },
        { label: 'Chatbot', href: '/servicos/chatbot' },
        { label: 'Conteúdo', href: '/servicos/conteudo' },
        { label: 'Posicionamento', href: '/servicos/posicionamento' },
        { label: 'Código do Domínio', href: '/protocolo-dominio' }
      ]
    },
    { label: 'Benefícios', href: '#beneficios' },
    { label: 'Blog', href: '#blog' }
  ];

  const menuVariants = {
    closed: {
      opacity: 0,
      x: '100%',
      transition: {
        type: 'tween',
        duration: 0.3,
      },
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'tween',
        duration: 0.3,
      },
    },
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled ? 'py-2' : 'py-6'
      }`}
    >
      <div className="container mx-auto px-4">
        <nav
          className={`relative bg-black/50 backdrop-blur-sm rounded-full transition-all duration-500 ease-in-out ${
            isScrolled ? 'px-4 md:px-8 py-2 max-w-2xl mx-auto' : 'px-4 md:px-6 py-3'
          }`}
        >
          <div
            className={`flex items-center transition-all duration-500 ease-in-out ${
              isScrolled ? 'justify-center gap-8 md:gap-12' : 'justify-between'
            }`}
          >
            <div className={`transition-all duration-500 ${isScrolled ? 'scale-90' : ''} mt-6`}>
              <Link
                to="/"
                className="font-extrabold text-2xl px-6 py-2 rounded-full"
                style={{
                  background: 'linear-gradient(90deg, #e3e3e3 0%, #bdbdbd 50%, #f8f8f8 100%)',
                  boxShadow: '0 2px 12px 0 rgba(180,180,180,0.15)',
                  color: '#222',
                  letterSpacing: '0.05em',
                  fontWeight: 900,
                  border: '1px solid #d1d1d1',
                  textShadow: '0 1px 2px #fff, 0 0px 8px #bdbdbd'
                }}
              >
                VOLAT
              </Link>
            </div>

            <ul className="hidden md:flex items-center gap-6 lg:gap-8">
              {menuItems.map((item) => (
                <li key={item.label} className={item.submenu ? 'dropdown relative group' : ''}>
                  {item.submenu ? (
                    <>
                      <a
                        href={item.href}
                        className="text-sm lg:text-base text-white hover:text-brand-purple transition-colors flex items-center gap-1"
                      >
                        {item.label}
                      </a>
                      <ul className="submenu absolute left-0 top-full mt-2 bg-black/90 backdrop-blur-sm rounded-lg py-2 min-w-[200px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                        {item.submenu.map((subItem) => (
                          <li key={subItem.label}>
                            <Link
                              to={subItem.href}
                              className="text-sm text-white hover:text-brand-purple transition-colors block px-4 py-2"
                            >
                              {subItem.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <Link
                      to={item.href}
                      className="text-sm lg:text-base text-white hover:text-brand-purple transition-colors"
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>

            <button
              className="md:hidden text-white hover:text-brand-purple transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>

            <div className={`hidden md:block transition-all duration-500 ${isScrolled ? 'scale-90' : ''}`}>
              <button
                className={`gradient-button rounded-full flex items-center gap-2 text-sm lg:text-base ${
                  isScrolled ? 'px-3 py-1.5' : 'px-4 py-2'
                }`}
              >
                <Calendar className={`${isScrolled ? 'w-4 h-4' : 'w-5 h-5'}`} />
                {!isScrolled && 'Agendar'}
              </button>
            </div>
          </div>
        </nav>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              className="fixed inset-0 top-[5.5rem] bg-black/95 backdrop-blur-lg md:hidden z-50"
            >
              <div className="container mx-auto px-4 py-8">
                <ul className="flex flex-col gap-6">
                  {menuItems.map((item) => (
                    <motion.li
                      key={item.label}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      {item.submenu ? (
                        <div className="space-y-2">
                          <span className="text-2xl font-syncopate text-white block mb-4">
                            {item.label}
                          </span>
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.label}
                              to={subItem.href}
                              className="text-lg text-white hover:text-brand-purple transition-colors block py-2"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </div>
                      ) : (
                        <Link
                          to={item.href}
                          className="text-2xl font-syncopate text-white hover:text-brand-purple transition-colors block"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {item.label}
                        </Link>
                      )}
                    </motion.li>
                  ))}
                  <motion.li
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                  >
                    <button
                      className="w-full gradient-button rounded-full flex items-center justify-center gap-2 text-lg font-medium py-4 mt-4"
                    >
                      <Calendar className="w-5 h-5" />
                      Agendar
                    </button>
                  </motion.li>
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}

export default Header;