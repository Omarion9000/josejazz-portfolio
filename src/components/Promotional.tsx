import React, { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Play, Pause, Volume2, Mail, FileVideo } from 'lucide-react';

const Promotional: React.FC = () => {
  const { t } = useTranslation();
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value);
    if (audioRef.current) {
      audioRef.current.currentTime = time;
      setCurrentTime(time);
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const venues = t('promotional.venues', { returnObjects: true }) as string[];

  return (
    <section id="promotional" className="py-20 bg-jazz-blue">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">{t('promotional.title')}</h2>
          <p className="text-jazz-light text-lg max-w-3xl mb-12">
            {t('promotional.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-jazz-accent rounded-lg p-8 shadow-xl">
              <h3 className="text-2xl font-serif font-semibold text-jazz-gold mb-6">
                {t('promotional.audioTitle')}
              </h3>

              <div className="bg-jazz-black rounded-lg p-6 mb-6">
                <audio
                  ref={audioRef}
                  onTimeUpdate={handleTimeUpdate}
                  onLoadedMetadata={handleLoadedMetadata}
                  onEnded={() => setIsPlaying(false)}
                  src="/audio/promotional.mp3"
                />

                <div className="flex items-center mb-4">
                  <button
                    onClick={togglePlayPause}
                    className="w-12 h-12 flex items-center justify-center bg-jazz-gold text-jazz-black rounded-full hover:bg-opacity-90 transition-all mr-4"
                  >
                    {isPlaying ? <Pause size={20} /> : <Play size={20} className="ml-0.5" />}
                  </button>

                  <div className="flex-1">
                    <input
                      type="range"
                      min="0"
                      max={duration || 0}
                      value={currentTime}
                      onChange={handleSeek}
                      className="w-full h-1 bg-jazz-accent rounded-lg appearance-none cursor-pointer slider"
                      style={{
                        background: `linear-gradient(to right, #D4AF37 0%, #D4AF37 ${(currentTime / duration) * 100}%, #1E293B ${(currentTime / duration) * 100}%, #1E293B 100%)`
                      }}
                    />
                  </div>

                  <Volume2 size={20} className="text-jazz-gold ml-4" />
                </div>

                <div className="flex justify-between text-sm text-jazz-light">
                  <span>{formatTime(currentTime)}</span>
                  <span>{formatTime(duration)}</span>
                </div>
              </div>

              <div className="bg-jazz-blue bg-opacity-50 rounded-lg p-6 mb-6">
                <div className="flex items-start mb-4">
                  <FileVideo className="text-jazz-gold mr-3 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="text-lg font-serif font-semibold text-white mb-2">
                      {t('promotional.videoTitle')}
                    </h4>
                    <p className="text-jazz-light text-sm">
                      {t('promotional.videoDescription')}
                    </p>
                  </div>
                </div>
              </div>

              <motion.a
                href="mailto:barajijazz@gmail.com?subject=Consulta%20sobre%20presentación%20artística"
                className="w-full inline-flex items-center justify-center px-8 py-4 bg-jazz-gold text-jazz-black rounded-lg font-medium text-lg hover:bg-opacity-90 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Mail className="mr-2" size={20} />
                {t('promotional.contactButton')}
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-serif font-semibold text-white mb-6">
              {t('promotional.idealFor')}
            </h3>

            <div className="space-y-4 mb-8">
              {venues.map((venue, index) => (
                <motion.div
                  key={index}
                  className="flex items-start"
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  viewport={{ once: true }}
                >
                  <div className="w-2 h-2 rounded-full bg-jazz-gold mt-2 mr-4 flex-shrink-0"></div>
                  <p className="text-jazz-light text-lg">{venue}</p>
                </motion.div>
              ))}
            </div>

            <div className="bg-jazz-accent rounded-lg p-6">
              <h4 className="text-xl font-serif font-semibold text-jazz-gold mb-4">
                {t('promotional.experienceTitle')}
              </h4>
              <p className="text-jazz-light mb-4">
                {t('promotional.experienceDescription')}
              </p>
              <ul className="space-y-2 text-jazz-light">
                {(t('promotional.features', { returnObjects: true }) as string[]).map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-jazz-gold mr-2">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Promotional;
