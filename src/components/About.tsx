import { motion } from 'framer-motion';
import { Code2, Database, Palette } from 'lucide-react';

const timeline = [
  {
    year: '2024',
    title: 'Início dos estudos em desenvolvimento full-stack',
    description: 'Foco em JavaScript, React, Node.js e Go'
  },
  {
    year: '2025',
    title: 'Criação do Caixa Fácil',
    description: 'Sistema PDV completo para mercados'
  },
  {
    year: '2025',
    title: 'Expansão do ecossistema',
    description: 'Desenvolvimento do cf-bash e API de Mensagens'
  }
];

const skills = [
  {
    icon: <Code2 className="w-6 h-6" />,
    title: "Frontend Development",
    description: "React, React Native, TypeScript",
  },
  {
    icon: <Database className="w-6 h-6" />,
    title: "Backend Development",
    description: "Node.js, Express, MySQL",
  },
  {
    icon: <Palette className="w-6 h-6" />,
    title: "UI/UX Design",
    description: "Design de interfaces modernas",
  },
];

export function About() {
  return (
    <section className="py-20 px-4 relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text">
          Sobre Mim
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-gray-300 leading-relaxed">
              Sou um desenvolvedor apaixonado por criar soluções eficientes e inovadoras. Com experiência
              em JavaScript, React, Node.js e Go, estou sempre buscando aprimorar minhas habilidades e
              construir projetos impactantes.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Meu objetivo é tornar processos mais rápidos, fáceis e acessíveis através da tecnologia,
              como demonstrado no ecossistema Caixa Fácil.
            </p>

            <div className="grid gap-4">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="p-4 rounded-lg bg-gradient-to-r from-gray-900 to-gray-800 border border-gray-700"
                >
                  <div className="flex items-center space-x-3">
                    <div className="text-blue-400">{skill.icon}</div>
                    <h3 className="font-semibold text-white">{skill.title}</h3>
                  </div>
                  <p className="mt-2 text-gray-400 text-sm">{skill.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-semibold mb-6">Linha do Tempo</h3>
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative pl-8 pb-8 border-l border-gray-800"
              >
                <div className="absolute left-0 top-0 w-3 h-3 -translate-x-1.5 rounded-full bg-blue-500" />
                <div className="text-sm text-blue-400 mb-2">{item.year}</div>
                <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                <p className="text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}