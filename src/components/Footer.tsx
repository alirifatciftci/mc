import { motion } from 'framer-motion';
import { Building2, Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

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
            <Building2 className="w-16 h-16 text-orange-600 mx-auto mb-4" />
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-3 tracking-tight">
              MÇ İNŞAAT
            </h3>
            <p className="text-gray-300 text-lg">
              Geleceği Birlikte İnşa Edelim
            </p>
          </motion.div>
        </div>
      </div>

      {/* Alt Kısım - Bilgiler */}
      <div className="bg-zinc-900 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Hakkımızda */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h4 className="text-white font-bold text-lg mb-6 tracking-tight">
                Hakkımızda
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                25 yılı aşkın tecrübemizle, lüks konut ve ticari projelerde öncü bir inşaat firmasıyız. Kalite ve mükemmellik bizim işimizin temelidir.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-white/5 hover:bg-orange-600 flex items-center justify-center transition-colors duration-300">
                  <Facebook className="w-5 h-5 text-white" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/5 hover:bg-orange-600 flex items-center justify-center transition-colors duration-300">
                  <Instagram className="w-5 h-5 text-white" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/5 hover:bg-orange-600 flex items-center justify-center transition-colors duration-300">
                  <Linkedin className="w-5 h-5 text-white" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/5 hover:bg-orange-600 flex items-center justify-center transition-colors duration-300">
                  <Twitter className="w-5 h-5 text-white" />
                </a>
              </div>
            </motion.div>

            {/* Hizmetlerimiz */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h4 className="text-white font-bold text-lg mb-6 tracking-tight">
                Hizmetlerimiz
              </h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-gray-400 text-sm hover:text-orange-600 transition-colors duration-300 flex items-center group"
                    >
                      <span className="w-1.5 h-1.5 bg-orange-600 mr-3 group-hover:w-3 transition-all duration-300" />
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Hızlı Linkler */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="text-white font-bold text-lg mb-6 tracking-tight">
                Hızlı Linkler
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.path}
                      className="text-gray-400 text-sm hover:text-orange-600 transition-colors duration-300 flex items-center group"
                    >
                      <span className="w-1.5 h-1.5 bg-orange-600 mr-3 group-hover:w-3 transition-all duration-300" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <h5 className="text-white font-semibold text-sm mb-3">Çalışma Saatleri</h5>
                <div className="space-y-2 text-gray-400 text-sm">
                  <p>Pzt - Cum: 09:00 - 18:00</p>
                  <p>Cumartesi: 10:00 - 16:00</p>
                  <p>Pazar: Kapalı</p>
                </div>
              </div>
            </motion.div>

            {/* İletişim Bilgileri */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h4 className="text-white font-bold text-lg mb-6 tracking-tight">
                İletişim
              </h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-orange-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Maslak Mahallesi<br />
                      Büyükdere Caddesi No: 255<br />
                      Sarıyer, İstanbul, Türkiye
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-orange-600 flex-shrink-0 mt-1" />
                  <div>
                    <a href="tel:+902125550123" className="text-gray-400 text-sm hover:text-orange-600 transition-colors duration-300 block">
                      +90 212 555 0123
                    </a>
                    <a href="tel:+902125550124" className="text-gray-400 text-sm hover:text-orange-600 transition-colors duration-300 block">
                      +90 212 555 0124
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-orange-600 flex-shrink-0 mt-1" />
                  <div>
                    <a href="mailto:info@mcinsaat.com" className="text-gray-400 text-sm hover:text-orange-600 transition-colors duration-300 block">
                      info@mcinsaat.com
                    </a>
                    <a href="mailto:projects@mcinsaat.com" className="text-gray-400 text-sm hover:text-orange-600 transition-colors duration-300 block">
                      projects@mcinsaat.com
                    </a>
                  </div>
                </div>
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
              © {new Date().getFullYear()} MÇ İNŞAAT. Tüm hakları saklıdır.
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
