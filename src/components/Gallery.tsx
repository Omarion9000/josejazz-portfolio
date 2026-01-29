import React from 'react';
import { motion } from 'framer-motion';

const Gallery: React.FC = () => {
  const images = [
    {
            url: 'https://i.postimg.cc/FzbbgCWR/Whats-App-Image-2025-03-08-at-00-17-13.jpg',
      caption: 'International Tour'

    },
    {
      url: 'https://i.postimg.cc/wBJpVhpP/Whats-App-Image-2025-03-08-at-00-20-33.jpg',
      caption: 'Studio Recording Session'
    },
    {
      url: 'https://i.postimg.cc/ZRrM9HSb/Whats-App-Image-2025-03-08-at-00-20-32.jpg',
      caption: 'Live Performance at Jazz Festival'
    },
    {
      url: 'https://i.postimg.cc/htQL2G36/Whats-App-Image-2025-03-08-at-00-12-42.jpg',
      caption: 'Masterclass Workshop'
    },
    {
      url: 'https://i.postimg.cc/SNb0VXsY/Screenshot-2025-03-10-at-4-39-20-PM.png',
      caption: 'Composing New Material'
    },
    {
      url: 'https://i.postimg.cc/GhWKwYYd/Whats-App-Image-2025-03-08-at-00-20-33-2.jpg',
      caption: 'Concert Hall Performance'
    },
  ];

  return (
    <section id="gallery" className="py-20 bg-jazz-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Gallery</h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="relative group overflow-hidden rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <img
                src={`${image.url}?auto=format&fit=crop&w=800&q=80`}
                alt={image.caption}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white font-serif text-lg">{image.caption}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;