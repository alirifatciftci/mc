import { motion } from 'framer-motion';
import { Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';
import salmazlarnamelogo from '../assets/salmazlarnamelogo.png';

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
    { name: 'Hizmetler', path: '/services' },
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
          <div className="flex flex-col lg:flex-row items-start lg:items-start justify-between gap-8">
            {/* Logo ve Sosyal Medya */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-start gap-4 w-full lg:w-auto lg:min-w-[220px]"
            >
              <img 
                src={salmazlarnamelogo} 
                alt="SALMAZLAR İNŞAAT" 
                className="w-44 h-auto object-contain brightness-0 invert"
              />
              <p className="text-gray-400 text-sm max-w-xs">
                SALMAZLAR İNŞAAT - İnşaat ve Mimari
              </p>
              <div className="flex space-x-3">
                <a 
                  href="https://www.instagram.com/salmazlarinsaat" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-white/5 hover:bg-orange-600 flex items-center justify-center transition-colors duration-300 rounded-full"
                >
                  <Instagram className="w-4 h-4 text-white" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/salmazlar-insaat-19b9613aa" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-white/5 hover:bg-orange-600 flex items-center justify-center transition-colors duration-300 rounded-full"
                >
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
              className="w-full lg:w-auto"
            >
              <h4 className="text-white font-bold text-base mb-3 tracking-tight">
                Merkez Ofis
              </h4>
              <div className="space-y-1 text-gray-400 text-sm">
                <a href="mailto:infosalmazlarinsaat@gmail.com" className="block hover:text-orange-600 transition-colors duration-300">
                  infosalmazlarinsaat@gmail.com
                </a>
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=YENİŞEHİR+MAH.+OSMANLI+BUL.+ÇAĞDAŞ+CENTER+SİTESİ+B+BLOK+NO:+10/1+İÇ+KAPI+NO:+12+PENDİK+İSTANBUL"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:text-orange-600 transition-colors duration-300 leading-relaxed"
                >
                  YENİŞEHİR MAH. OSMANLI BUL.<br />
                  ÇAĞDAŞ CENTER SİTESİ B BLOK NO: 10/1<br />
                  İÇ KAPI NO: 12 PENDİK / İSTANBUL
                </a>
              </div>
            </motion.div>

            {/* Hızlı Erişim */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full lg:w-auto"
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
              className="w-full lg:w-auto"
            >
              <h4 className="text-white font-bold text-base mb-3 tracking-tight">
                Hizmetlerimiz
              </h4>
              <ul className="space-y-1">
                {services.slice(0, 4).map((service, index) => (
                  <li key={index}>
                    <Link
                      to="/services"
                      className="text-gray-400 text-sm hover:text-orange-600 transition-colors duration-300 block"
                    >
                      {service}
                    </Link>
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
              className="w-full lg:w-auto"
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
          <div className="flex flex-col items-center space-y-2">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} SALMAZLAR İNŞAAT. Tüm hakları saklıdır.
            </p>
            <a 
              href="https://www.linkedin.com/in/alirifatciftci" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 text-xs hover:text-orange-600 transition-colors duration-300"
            >
              Designed by alirifatciftci
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
