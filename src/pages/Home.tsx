import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import salmazlarnamelogo from '../assets/salmazlarnamelogo.png';
import { updatePageSEO, addStructuredData } from '../utils/seo';

const heroImages = [
  {
    url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=90',
    alt: 'Modern skyscraper'
  },
  {
    url: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&q=90',
    alt: 'Construction site'
  },
  {
    url: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1920&q=90',
    alt: 'Contemporary building'
  },
  {
    url: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=1920&q=90',
    alt: 'Urban architecture'
  }
];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // SEO Configuration
    updatePageSEO({
      title: 'Salmazlar İnşaat | İstanbul Pendik İnşaat Firması | TOKİ ve Villa Projeleri',
      description: 'Salmazlar İnşaat, İstanbul Pendik merkezli profesyonel inşaat firması. TOKİ projeleri, villa inşaatı, konut projeleri ve mimari danışmanlık hizmetleri. 10+ yıllık tecrübe ile kaliteli inşaat çözümleri.',
      keywords: 'salmazlar inşaat, istanbul inşaat, pendik inşaat, toki inşaat, villa inşaatı, konut projeleri, inşaat firması istanbul',
      canonical: 'https://salmazlarinsaat.com/',
      type: 'website'
    });

    // Structured Data
    addStructuredData({
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Salmazlar İnşaat",
      "url": "https://salmazlarinsaat.com",
      "logo": "https://salmazlarinsaat.com/src/assets/salmazlarnamelogo.png",
      "description": "İstanbul Pendik merkezli profesyonel inşaat firması",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Yenişehir Mah. Osmanlı Bul. Çağdaş Center Sitesi B Blok No: 10/1 İç Kapı No: 12",
        "addressLocality": "Pendik",
        "addressRegion": "İstanbul",
        "addressCountry": "TR"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "email": "infosalmazlarinsaat@gmail.com",
        "contactType": "customer service"
      }
    });

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative">
      <section className="relative h-screen w-full overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
            className="absolute inset-0"
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${heroImages[currentIndex].url})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
          </motion.div>
        </AnimatePresence>

        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center px-6 max-w-6xl mx-auto">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
              className="flex flex-col items-center"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-orange-600/10 blur-3xl rounded-full"></div>
                <img 
                  src={salmazlarnamelogo} 
                  alt="Salmazlar İnşaat Logo - İstanbul Pendik İnşaat Firması" 
                  className="relative w-96 md:w-[500px] h-auto drop-shadow-2xl"
                  loading="eager"
                />
              </div>
          
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ChevronDown className="w-8 h-8 text-white/70" />
          </motion.div>
        </motion.div>

        <div className="absolute bottom-8 right-8 z-20 flex space-x-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-1 transition-all duration-500 ${
                index === currentIndex ? 'w-12 bg-orange-600' : 'w-8 bg-white/30'
              }`}
            />
          ))}
        </div>
      </section>

      <section className="bg-zinc-900 py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-3 gap-12"
          >
            <div className="text-center">
              <div className="text-5xl font-bold text-orange-600 mb-4">10+</div>
              <div className="text-gray-400 uppercase tracking-wider text-sm">Yıllık Tecrübe</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-orange-600 mb-4">10+</div>
              <div className="text-gray-400 uppercase tracking-wider text-sm">Aktif Proje</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-orange-600 mb-4">100%</div>
              <div className="text-gray-400 uppercase tracking-wider text-sm">Müşteri Memnuniyeti</div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-black py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              Yarının Simge Yapılarını İnşa Ediyoruz
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              SALMAZLAR İNŞAAT olarak sadece bina inşa etmiyoruz; zamanın testine dayanacak mimari şaheserler yaratıyoruz. Yirmi yılı aşkın mükemmellik mirasımızla, vizyoner tasarımları benzersiz işçilik ve detaylara gösterilen özenle hayata geçiriyoruz.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
