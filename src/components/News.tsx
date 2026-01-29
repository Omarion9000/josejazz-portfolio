import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';

const News: React.FC = () => {
  const { t } = useTranslation();
  const newsItems = t('news.newsItems', { returnObjects: true }) as Array<{
    date: string;
    title: string;
    excerpt: string;
    link: string;
  }>;

  return (
    <section id="news" className="py-20 bg-jazz-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">{t('news.title')}</h2>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            {newsItems.slice(0, 2).map((item, index) => (
              <motion.div
                key={index}
                className="news-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-2">
                  <Calendar size={16} className="text-jazz-gold mr-2" />
                  <span className="text-jazz-light text-sm">{item.date}</span>
                </div>
                <h3 className="text-xl font-serif font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-jazz-light mb-4">{item.excerpt}</p>
                <a 
                  href={item.link} 
                  className="inline-flex items-center text-jazz-gold hover:underline"
                >
                  {t('news.readMore')}
                  <ArrowRight size={16} className="ml-1" />
                </a>
              </motion.div>
            ))}
          </div>
          
          <div>
            {newsItems.slice(2, 4).map((item, index) => (
              <motion.div
                key={index}
                className="news-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: (index + 2) * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-2">
                  <Calendar size={16} className="text-jazz-gold mr-2" />
                  <span className="text-jazz-light text-sm">{item.date}</span>
                </div>
                <h3 className="text-xl font-serif font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-jazz-light mb-4">{item.excerpt}</p>
                <a 
                  href={item.link} 
                  className="inline-flex items-center text-jazz-gold hover:underline"
                >
                  {t('news.readMore')}
                  <ArrowRight size={16} className="ml-1" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
        
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="max-w-md mx-auto">
            <h3 className="text-xl font-serif font-semibold text-white mb-4">{t('footer.subscribe')}</h3>
            <div className="flex">
              <input 
                type="email" 
                placeholder={t('footer.emailPlaceholder')}
                className="flex-1 px-4 py-3 bg-jazz-accent text-white rounded-l-md focus:outline-none focus:ring-1 focus:ring-jazz-gold"
              />
              <button className="px-6 py-3 bg-jazz-gold text-jazz-black rounded-r-md font-medium hover:bg-opacity-90 transition-colors">
                {t('footer.subscribeButton')}
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default News;