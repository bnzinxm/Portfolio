import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';
import { useEffect, useState } from 'react';

const titles = [
  'Desenvolvedor Full-Stack',
  'Criador do Caixa Fácil',
  'Arquiteto de APIs robustas',
  'Explorador do futuro da tecnologia'
];

export function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen flex flex-col items-center justify-center text-center px-4 relative"
    >
      <motion.h1 
        className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-blue-400 to-purple-600 text-transparent bg-clip-text mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        Eu sou AstroDev
      </motion.h1>
      
      <motion.h2 
        className="text-2xl md:text-3xl text-gray-300 mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        e crio soluções modernas e inovadoras!
      </motion.h2>

      <motion.div
        className="h-12 mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <motion.p
          key={titleIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="text-xl md:text-2xl text-blue-400"
        >
          {titles[titleIndex]}
        </motion.p>
      </motion.div>

      <motion.div 
        className="flex gap-4 mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <motion.a
          href="#projects"
          className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-semibold
                     relative group overflow-hidden"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="relative z-10">Ver Projetos</span>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </motion.a>

        <motion.a
          href="#contact"
          className="px-8 py-3 border border-blue-500 rounded-full text-blue-400 font-semibold
                     hover:bg-blue-500/10 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Entrar em Contato
        </motion.a>
      </motion.div>

      <motion.div 
        className="flex space-x-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <a href="https://github.com/bnzinxm" target="_blank" rel="noopener noreferrer" 
           className="text-gray-400 hover:text-white transition-colors transform hover:scale-110 duration-200">
          <Github size={24} />
        </a>
        <a href="https://www.linkedin.com/in/astrodev" target="_blank" rel="noopener noreferrer"
           className="text-gray-400 hover:text-white transition-colors transform hover:scale-110 duration-200">
          <Linkedin size={24} />
        </a>
        <a href="mailto:brenobarbosa269@gmail.com"
           className="text-gray-400 hover:text-white transition-colors transform hover:scale-110 duration-200">
          <Mail size={24} />
        </a>
      </motion.div>

      <motion.div 
        className="absolute bottom-8 animate-bounce"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ delay: 1.2 }}
      >
        <ChevronDown size={32} className="text-gray-400" />
      </motion.div>
    </motion.div>
  );
}