import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [usersOnline, setUsersOnline] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Simulação de contador de usuários sem servidor
    
    // Gerar um número aleatório entre min e max
    const getRandomInt = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    
    // Definir um número inicial de usuários (entre 3 e 8)
    const initialUsers = getRandomInt(3, 8);
    setUsersOnline(initialUsers);
    
    // Simular flutuações no número de usuários a cada 5-20 segundos
    const simulateUserFluctuation = () => {
      // 70% de chance de aumentar, 30% de diminuir
      const shouldIncrease = Math.random() > 0.3;
      
      setUsersOnline(current => {
        if (shouldIncrease) {
          // Aumentar em 1-2 usuários
          return current + getRandomInt(1, 2);
        } else {
          // Diminuir em 1 usuário, mas nunca abaixo de 1
          return Math.max(1, current - 1);
        }
      });
      
      // Agendar a próxima atualização em um intervalo aleatório (5-20 segundos)
      const nextInterval = getRandomInt(5000, 20000);
      timeoutRef.current = setTimeout(simulateUserFluctuation, nextInterval);
    };
    
    // Referência para o timeout
    const timeoutRef = { current: null };
    
    // Iniciar a simulação após um pequeno delay
    timeoutRef.current = setTimeout(simulateUserFluctuation, getRandomInt(5000, 10000));
    
    // Limpar o timeout quando o componente for desmontado
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/80 backdrop-blur-md py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <motion.a
            href="#"
            className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text"
            whileHover={{ scale: 1.05 }}
          >
            AstroDev
          </motion.a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {['Home', 'About', 'Projects', 'Contact'].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-300 hover:text-white transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                {item}
              </motion.a>
            ))}

            {/* Contador de usuários online */}
            <div className="flex items-center space-x-2">
              <div className="relative flex items-center">
                {/* Círculo neon verde pulsante */}
                <div className="relative">
                  <div className="h-3 w-3 rounded-full bg-green-400"></div>
                  <div className="absolute inset-0 h-3 w-3 rounded-full bg-green-400 animate-ping opacity-75"></div>
                  <div className="absolute -inset-1 rounded-full bg-green-400 opacity-20 blur-sm"></div>
                </div>
                <span className="ml-2 text-gray-300">
                  Estou online!
                </span>
              </div>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            {/* Contador de usuários online para mobile */}
            <div className="flex items-center space-x-2">
              <div className="relative flex items-center">
                {/* Círculo neon verde pulsante */}
                <div className="relative">
                  <div className="h-2.5 w-2.5 rounded-full bg-green-400"></div>
                  <div className="absolute inset-0 h-2.5 w-2.5 rounded-full bg-green-400 animate-ping opacity-75"></div>
                  <div className="absolute -inset-1 rounded-full bg-green-400 opacity-20 blur-sm"></div>
                </div>
                <span className="ml-2 text-xs text-gray-300">
                  {usersOnline}
                </span>
              </div>
            </div>
            
            <button
              className="text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-4 pb-4"
          >
            {['Home', 'About', 'Projects', 'Contact'].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block py-2 text-gray-300 hover:text-white transition-colors"
                whileHover={{ scale: 1.05 }}
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </motion.a>
            ))}
          </motion.nav>
        )}
      </div>
    </motion.header>
  );
}