import { motion } from 'framer-motion'
import React from 'react'

const services = [
     {
          title: "JBS Dedetizadora",
          description: "Um site para uma empresa focada na área de dedetização e eliminação de insetos e pragas.",
          tech: ["React.js", "Tailwind CSS"]
     }
]

export default function Services() {

     return (
          <section id="projects" className="py-20 px-4">
                <div className="container mx-auto max-w-6xl">
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text"
                  >
                    Serviços em andamento
                  </motion.h2>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((project, index) => (
                      <motion.div
                        key={project.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-gray-900/50 rounded-xl overflow-hidden backdrop-blur-sm border border-gray-800 p-4"
                      >
                         <img src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=428,fit=crop,q=95/dJoB1Qp4zjfVbBOw/jbs-png-3d.298-Yan92wvNJvcNe9xN.png" className="bg-white max-w-full rounded-t-xl rounded-b-lg"></img>
                        <h3 className="text-xl font-semibold mt-6">{project.title}</h3>
                        <p className="text-gray-400 mt-2">{project.description}</p>

                        <div className="flex flex-wrap gap-2 mt-6">
                          {project.tech.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 text-sm bg-gray-800 rounded-full text-gray-300"
                            >
                              {tech}
                            </span>
                          ))}

                         <button className="bg-blue-500 mx-3 h-8 w-[35%] rounded-xl cursor-pointer hover:bg-blue-600 hover:shadow-xl transition-all duration-300">Ver mais</button>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </section>
     )
}
