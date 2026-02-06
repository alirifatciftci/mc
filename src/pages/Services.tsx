import { motion } from 'framer-motion';
import { Building2, Home, Hammer, Wrench, ClipboardCheck, Lightbulb } from 'lucide-react';
import { useEffect } from 'react';
import { updatePageSEO, addStructuredData } from '../utils/seo';

const Services = () => {
  useEffect(() => {
    // SEO Configuration
    updatePageSEO({
      title: 'Hizmetlerimiz | Salmazlar İnşaat - Konut, Villa, TOKİ İnşaatı',
      description: 'Salmazlar İnşaat hizmetleri: Konut projeleri, TOKİ inşaatları, villa inşaatı, restorasyon, proje yönetimi ve mimari danışmanlık. Profesyonel inşaat çözümleri.',
      keywords: 'konut inşaatı, villa inşaatı, toki inşaatı, restorasyon, proje yönetimi, mimari danışmanlık, inşaat hizmetleri',
      canonical: 'https://salmazlarinsaat.com/services',
      type: 'website'
    });

    // Structured Data for Services
    addStructuredData({
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "İnşaat Hizmetleri",
      "provider": {
        "@type": "Organization",
        "name": "Salmazlar İnşaat"
      },
      "areaServed": {
        "@type": "Country",
        "name": "Türkiye"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "İnşaat Hizmetleri",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Konut Projeleri"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "TOKİ İnşaatları"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Villa İnşaatı"
            }
          }
        ]
      }
    });
  }, []);

  const services = [
    {
      icon: Home,
      title: 'Konut Projeleri',
      description: 'Modern yaşam alanları ve konforlu konutlar inşa ediyoruz. Ailelerin hayallerindeki evleri gerçeğe dönüştürüyoruz.',
      features: ['Villa İnşaatı', 'Apartman Projeleri', 'Rezidans İnşaatı', 'Site Projeleri']
    },
    {
      icon: Building2,
      title: 'TOKİ İnşaatları',
      description: 'TOKİ projeleri kapsamında kaliteli ve uygun fiyatlı konutlar üretiyoruz. Devlet destekli projelerde uzman kadromuzla hizmet veriyoruz.',
      features: ['Toplu Konut Projeleri', 'Kentsel Dönüşüm', 'Altyapı Çalışmaları', 'Zamanında Teslim']
    },
    {
      icon: Hammer,
      title: 'Villa İnşaatı',
      description: 'Özel tasarım villalar ve lüks yaşam alanları inşa ediyoruz. Her detayı özenle planlıyor, müşteri memnuniyetini ön planda tutuyoruz.',
      features: ['Özel Tasarım', 'Lüks Malzeme', 'Peyzaj Düzenlemesi', 'Akıllı Ev Sistemleri']
    },
    {
      icon: Wrench,
      title: 'Restorasyon',
      description: 'Tarihi ve eski binaların restorasyonunu gerçekleştiriyoruz. Özgün dokuyu koruyarak modern standartlara uygun hale getiriyoruz.',
      features: ['Tarihi Bina Restorasyonu', 'Cephe Yenileme', 'İç Mekan Yenileme', 'Statik Güçlendirme']
    },
    {
      icon: ClipboardCheck,
      title: 'Proje Yönetimi',
      description: 'İnşaat projelerinizi baştan sona profesyonel ekibimizle yönetiyoruz. Planlama, koordinasyon ve denetim hizmetleri sunuyoruz.',
      features: ['Proje Planlama', 'Maliyet Kontrolü', 'Kalite Denetimi', 'Zaman Yönetimi']
    },
    {
      icon: Lightbulb,
      title: 'Mimari Danışmanlık',
      description: 'Mimari tasarım ve danışmanlık hizmetleri sunuyoruz. Projelerinizi en verimli ve estetik şekilde hayata geçirmenize yardımcı oluyoruz.',
      features: ['Mimari Tasarım', 'Ruhsat İşlemleri', 'Teknik Danışmanlık', 'Fizibilite Çalışmaları']
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=90)'
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
            Hizmetlerimiz
          </h1>
          <div className="h-1 w-24 bg-orange-600 mx-auto mb-6" />
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            İnşaat sektöründe geniş hizmet yelpazesiyle projelerinizi hayata geçiriyoruz
          </p>
        </motion.div>
      </section>

      <section className="bg-zinc-900 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-black p-8 group hover:bg-zinc-800 transition-all duration-300 border border-zinc-800 hover:border-orange-600/50"
              >
                <div className="w-16 h-16 bg-orange-600/10 flex items-center justify-center mb-6 group-hover:bg-orange-600/20 transition-colors duration-300">
                  <service.icon className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-gray-500 text-sm flex items-center">
                      <span className="w-1.5 h-1.5 bg-orange-600 mr-3 flex-shrink-0"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              Neden SALMAZLAR İNŞAAT?
            </h2>
            <div className="h-1 w-24 bg-orange-600 mx-auto mb-8" />
            <div className="grid md:grid-cols-3 gap-8 text-left">
              <div>
                <div className="text-orange-600 text-5xl font-bold mb-3">01</div>
                <h3 className="text-xl font-bold text-white mb-3">Kalite Garantisi</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Her projede en yüksek kalite standartlarını uyguluyoruz
                </p>
              </div>
              <div>
                <div className="text-orange-600 text-5xl font-bold mb-3">02</div>
                <h3 className="text-xl font-bold text-white mb-3">Zamanında Teslimat</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Projelerimizi belirlenen sürede teslim ediyoruz
                </p>
              </div>
              <div>
                <div className="text-orange-600 text-5xl font-bold mb-3">03</div>
                <h3 className="text-xl font-bold text-white mb-3">Uzman Kadro</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Deneyimli mühendis ve ustalarımızla hizmet veriyoruz
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
