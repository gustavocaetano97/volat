import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black/30 backdrop-blur-sm border-t border-brand-purple/10">
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-syncopate text-brand-purple mb-4">VOLAT</h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Transformando negócios através de soluções inovadoras e estratégias personalizadas para crescimento sustentável.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-brand-purple transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-white hover:text-brand-purple transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-white hover:text-brand-purple transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-300">
                <Mail className="w-4 h-4 mr-2 gradient-icon" />
                <a href="mailto:contato@volat.com" className="hover:text-brand-purple transition-colors">
                  contato@volat.com
                </a>
              </li>
              <li className="flex items-center text-gray-300">
                <Phone className="w-4 h-4 mr-2 gradient-icon" />
                <a href="tel:+551199999999" className="hover:text-brand-purple transition-colors">
                  +55 11 9999-9999
                </a>
              </li>
              <li className="flex items-center text-gray-300">
                <MapPin className="w-4 h-4 mr-2 gradient-icon" />
                <span>São Paulo, SP</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/servicos/automacao" className="text-gray-300 hover:text-brand-purple transition-colors">
                  Automação
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-brand-purple transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <a href="#servicos" className="text-gray-300 hover:text-brand-purple transition-colors">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#beneficios" className="text-gray-300 hover:text-brand-purple transition-colors">
                  Benefícios
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-brand-purple/10 text-center text-gray-400">
          <p>&copy; {currentYear} Volat. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer