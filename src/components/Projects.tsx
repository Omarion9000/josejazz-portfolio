import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const Projects: React.FC = () => {
  const { t } = useTranslation();
  const projects = t('projects.projects', { returnObjects: true }) as Array<{
    title: string;
    description: string;
    link: string;
    image: string;
  }>;

  return (
    <section id="projects" className="py-20 bg-jazz-blue">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">{t('projects.title')}</h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div 
                className="h-48 bg-cover bg-center"
                style={{ 
                  backgroundImage: `url(${project.image})`,
                  backgroundBlendMode: 'overlay',
                  backgroundColor: 'rgba(15, 23, 42, 0.7)'
                }}
              ></div>
              
              <div className="p-6">
                <h3 className="text-xl font-serif font-semibold text-white mb-3">{project.title}</h3>
                <p className="text-jazz-light mb-4">{project.description}</p>
                <a 
                  href={project.link} 
                  className="inline-flex items-center text-jazz-gold hover:underline"
                >
                  {t('projects.viewProject')}
                  <ExternalLink size={16} className="ml-1" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          className="mt-16 p-8 rounded-lg gold-gradient"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-serif font-bold text-white mb-2">Interested in Collaboration?</h3>
              <p className="text-jazz-light">Let's create something beautiful together.</p>
            </div>
            <motion.a
              href="mailto:barajijazz@gmail.com"
              className="px-6 py-3 bg-jazz-gold text-jazz-black rounded-full font-medium hover:bg-opacity-90 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get in Touch
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;