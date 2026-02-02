import { motion } from 'framer-motion';
import { Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';
import namelogo from '../assets/namelogo.png';

const Footer = () => {
  const services = [
    'Konut Projeleri',
    'Ticari Binalar',
    'Altyapı İnşaatı',
    'Restorasyon',
    'Proje Yönetimi',
    'Mimari Danışmanlık'
  ];

  const quickLinks = [
    { name: 'Ana Sayfa', path: '/' },
    { name: 'Kurumsal', path: '/corporate' },
    { name: 'Projeler', path: '/projects' },
    { name: 'İletişim', path: '/contact' }
  ];

  return (
    <footer className="bg-black border-t border-white/10">
      {/* Üst Kısım - Resimli Bölüm */}
      <div className="relative h-64 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/40" />
        
        <div className="relative z-10 h-full flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center px-6"
          >
            <p className="text-gray-300 text-lg md:text-xl">
              Geleceği Birlikte İnşa Edelim
            </p>
          </motion.div>
        </div>
      </div>

      {/* Alt Kısım - Tek Satır Bilgiler */}
      <div className="bg-zinc-900 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            {/* Logo ve Sosyal Medya */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-start gap-4 min-w-[180px]"
            >
              <img 
                src={namelogo} 
                alt="ALFA İNŞAAT" 
                className="w-44 h-auto object-contain"
              />
              <p className="text-gray-400 text-sm max-w-xs">
                ALFA İNŞAAT - İnşaat ve Mimari
              </p>
              <div className="flex space-x-3">
                <a href="#" className="w-9 h-9 bg-white/5 hover:bg-orange-600 flex items-center justify-center transition-colors duration-300 rounded-full">
                  <Instagram className="w-4 h-4 text-white" />
                </a>
                <a href="#" className="w-9 h-9 bg-white/5 hover:bg-orange-600 flex items-center justify-center transition-colors duration-300 rounded-full">
                  <Linkedin className="w-4 h-4 text-white" />
                </a>
              </div>
            </motion.div>

            {/* Merkez Ofis */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h4 className="text-white font-bold text-base mb-3 tracking-tight">
                Merkez Ofis
              </h4>
              <div className="space-y-1 text-gray-400 text-sm">
                <a href="tel:+905071027665" className="block hover:text-orange-600 transition-colors duration-300">
                  0507 102 7665
                </a>
                <a href="mailto:info@alfainsaat.com" className="block hover:text-orange-600 transition-colors duration-300">
                  info@alfainsaat.com
                </a>
                <p className="leading-relaxed">
                  Maslak Mahallesi, Büyükdere Caddesi No: 255<br />
                  Sarıyer, İstanbul, Türkiye
                </p>
              </div>
            </motion.div>

            {/* Hızlı Erişim */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="text-white font-bold text-base mb-3 tracking-tight">
                Hızlı Erişim
              </h4>
              <ul className="space-y-1">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.path}
                      className="text-gray-400 text-sm hover:text-orange-600 transition-colors duration-300 block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Hizmetlerimiz */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h4 className="text-white font-bold text-base mb-3 tracking-tight">
                Hizmetlerimiz
              </h4>
              <ul className="space-y-1">
                {services.slice(0, 4).map((service, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-gray-400 text-sm hover:text-orange-600 transition-colors duration-300 block"
                    >
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Çalışma Saatleri */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h4 className="text-white font-bold text-base mb-3 tracking-tight">
                Çalışma Saatleri
              </h4>
              <div className="space-y-1 text-gray-400 text-sm">
                <p>Pzt - Cum: 09:00 - 18:00</p>
                <p>Cumartesi: 10:00 - 16:00</p>
                <p>Pazar: Kapalı</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* En Alt - Copyright */}
      <div className="bg-black py-6 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} ALFA İNŞAAT. Tüm hakları saklıdır.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 text-sm hover:text-orange-600 transition-colors duration-300">
                Gizlilik Politikası
              </a>
              <a href="#" className="text-gray-500 text-sm hover:text-orange-600 transition-colors duration-300">
                Kullanım Koşulları
              </a>
              <a href="#" className="text-gray-500 text-sm hover:text-orange-600 transition-colors duration-300">
                Çerez Politikası
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
