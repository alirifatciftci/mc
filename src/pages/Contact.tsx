import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Telefon',
      details: ['0507 102 7665']
    },
    {
      icon: Mail,
      title: 'E-posta',
      details: ['info@alfainsaat.com']
    },
    {
      icon: MapPin,
      title: 'Adres',
      details: ['Maslak Mahallesi, Büyükdere Caddesi', 'No: 255, Sarıyer, İstanbul, Türkiye']
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&q=90)'
          }}
        />
        <div className="absolute inset-0 bg-black/70" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative z-10 text-center px-6"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight">
            İletişime Geçin
          </h1>
          <div className="h-1 w-24 bg-orange-600 mx-auto" />
        </motion.div>
      </section>

      <section className="bg-zinc-900 py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-2 space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold text-white mb-6 tracking-tight">
                  Hadi Konuşmaya Başlayalım
                </h2>
                <p className="text-gray-400 leading-relaxed">
                  Yeni bir proje planlıyor veya danışmanlık arıyor olun, ekibimiz vizyonunuzu hayata geçirmenizde size yardımcı olmaya hazırdır.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-start space-x-4"
                  >
                    <div className="w-12 h-12 bg-orange-600/10 rounded-sm flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-2">{info.title}</h3>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-gray-400 text-sm">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="pt-8">
                <h3 className="text-white font-semibold mb-4">Çalışma Saatleri</h3>
                <div className="space-y-2 text-gray-400 text-sm">
                  <p>Pazartesi - Cuma: 09:00 - 18:00</p>
                  <p>Cumartesi: 10:00 - 16:00</p>
                  <p>Pazar: Kapalı</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-3"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-400 text-sm mb-2 uppercase tracking-wider">
                      Ad Soyad
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-black border border-zinc-700 text-white px-4 py-4 focus:outline-none focus:border-orange-600 transition-colors duration-300"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-400 text-sm mb-2 uppercase tracking-wider">
                      E-posta Adresi
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-black border border-zinc-700 text-white px-4 py-4 focus:outline-none focus:border-orange-600 transition-colors duration-300"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-gray-400 text-sm mb-2 uppercase tracking-wider">
                    Telefon Numarası
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-black border border-zinc-700 text-white px-4 py-4 focus:outline-none focus:border-orange-600 transition-colors duration-300"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-400 text-sm mb-2 uppercase tracking-wider">
                    Mesajınız
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full bg-black border border-zinc-700 text-white px-4 py-4 focus:outline-none focus:border-orange-600 transition-colors duration-300 resize-none"
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-orange-600 text-white py-4 px-8 font-semibold uppercase tracking-wider flex items-center justify-center space-x-2 hover:bg-orange-700 transition-colors duration-300"
                >
                  <span>Mesaj Gönder</span>
                  <Send className="w-4 h-4" />
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
