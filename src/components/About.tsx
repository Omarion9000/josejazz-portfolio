import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  const { t } = useTranslation();
  const achievements = t('about.achievements', { returnObjects: true }) as Array<{
    year: string;
    title: string;
    description: string;
  }>;

  return (
    <section id="about" className="py-20 bg-jazz-blue">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">{t('about.title')}</h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <img 
                src="https://i.postimg.cc/3R3Cg0KQ/Profesional.jpg" 
                alt="Jose Luis Barajas" 
                className="rounded-lg shadow-xl w-full h-auto"
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-jazz-gold rounded-full flex items-center justify-center">
                <span className="font-serif text-jazz-black text-lg font-bold">40+</span>
                <span className="font-serif text-jazz-black text-xs ml-1">Years</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <p className="text-jazz-light text-lg mb-6">{t('about.bio')}</p>
            <p className="text-jazz-light text-lg">{t('about.bio2')}</p>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-2xl font-serif font-bold text-jazz-gold mb-10">{t('about.timeline')}</h3>
          
          <div className="pl-4">
            {achievements.map((achievement, index) => (
              <motion.div 
                key={index}
                className="timeline-item"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                viewport={{ once: true }}
              >
                <div className="mb-2">
                  <span className="text-jazz-gold font-bold">{achievement.year}</span>
                </div>
                <h4 className="text-xl font-serif font-semibold text-white mb-2">{achievement.title}</h4>
                <p className="text-jazz-light">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;