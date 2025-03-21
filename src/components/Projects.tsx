import { motion } from 'framer-motion';
import { ExternalLink, Github, ShoppingCart, Truck, MessageSquare, Terminal, Code, Shield, Briefcase } from 'lucide-react';

const projects = [
  {
    title: 'Caixa Fácil',
    description: 'Sistema PDV completo para mercados, focado em eficiência e automação.',
    icon: <ShoppingCart className="w-12 h-12" />,
    tech: ['React Native', 'Node.js', 'MySQL'],
    features: [
      'Cadastro e gerenciamento de produtos',
      'Integração com Estoque Fácil',
      'Automação de cadastros',
      'Terminal exclusivo (cf-bash)'
    ]
  },
  {
    title: 'Estoque Fácil',
    description: 'Plataforma para conectar caminhoneiros a mercados e otimizar entregas.',
    icon: <Truck className="w-12 h-12" />,
    tech: ['React', 'Express.js', 'MySQL'],
    features: [
      'Marketplace de fretes',
      'Solicitações recorrentes',
      'Dashboard em tempo real',
      'Integração com Caixa Fácil'
    ]
  },
  {
    title: 'API de Mensagens',
    description: 'Sistema de comunicação entre operadores de mercados e fornecedores.',
    icon: <MessageSquare className="w-12 h-12" />,
    tech: ['Node.js', 'Express', 'MySQL'],
    features: [
      'Chat em tempo real',
      'Gerenciamento de conversas',
      'Compartilhamento de códigos',
      'Integração com cf-bash'
    ]
  },
  {
    title: 'cf-bash',
    description: 'Terminal personalizado para o Caixa Fácil, otimizado para operações de mercado.',
    icon: <Terminal className="w-12 h-12" />,
    tech: ['Shell Script', 'Golang'],
    features: [
      'Ambiente seguro',
      'Comandos simplificados',
      'Integração com APIs',
      'Suporte Windows/Linux'
    ]
  },
  {
    title: 'CB Script',
    description: 'Linguagem de automação em português para scripts no cf-bash.',
    icon: <Code className="w-12 h-12" />,
    tech: ['JavaScript'],
    features: [
      'Sintaxe intuitiva',
      'Comandos especializados',
      'Extensão .cb',
      'IDE integrada'
    ]
  },
  {
    title: 'Prototype',
    description: 'Scanner de segurança para identificar vulnerabilidades em APIs.',
    icon: <Shield className="w-12 h-12" />,
    tech: ['Node.js', 'Express'],
    features: [
      'Testes automatizados',
      'Detecção de vulnerabilidades',
      'Relatórios detalhados',
      'Sugestões de correção'
    ]
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text"
        >
          Projetos em Desenvolvimento
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-900/50 rounded-xl overflow-hidden backdrop-blur-sm border border-gray-800 p-6"
            >
              <div className="text-blue-400 mb-4">{project.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-300 mb-2">Principais recursos:</h4>
                <ul className="space-y-1">
                  {project.features.map((feature, i) => (
                    <li key={i} className="text-sm text-gray-400 flex items-center">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2 mt-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-sm bg-gray-800 rounded-full text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}