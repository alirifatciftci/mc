import { motion } from 'framer-motion';
import { Award, Users, Target, Shield } from 'lucide-react';
import { useEffect } from 'react';
import { updatePageSEO, addStructuredData } from '../utils/seo';

const Corporate = () => {
  useEffect(() => {
    // SEO Configuration
    updatePageSEO({
      title: 'Kurumsal | Salmazlar İnşaat - Hakkımızda, Vizyonumuz, Misyonumuz',
      description: 'Salmazlar İnşaat hakkında bilgi edinin. 10+ yıllık tecrübe, kalite standartları, vizyonumuz ve misyonumuz. İstanbul Pendik merkezli güvenilir inşaat firması.',
      keywords: 'salmazlar hakkında, inşaat firması istanbul, kurumsal, vizyon, misyon, değerlerimiz, pendik inşaat',
      canonical: 'https://salmazlarinsaat.com/corporate',
      type: 'website'
    });

    // Structured Data for Corporate
    addStructuredData({
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "name": "Salmazlar İnşaat Hakkında",
      "description": "Salmazlar İnşaat kurumsal bilgileri, vizyon ve misyon",
      "mainEntity": {
        "@type": "Organization",
        "name": "Salmazlar İnşaat",
        "foundingDate": "2014",
        "description": "İstanbul Pendik merkezli profesyonel inşaat firması"
      }
    });
  }, []);

  const values = [
    {
      icon: Award,
      title: 'Mükemmellik',
      description: 'Her projede mükemmelliği hedefliyor, en yüksek kalite standartlarını sağlıyoruz.'
    },
    {
      icon: Users,
      title: 'İşbirliği',
      description: 'Vizyoner projeleri hayata geçirmek için müşteriler ve ortaklarla yakın çalışıyoruz.'
    },
    {
      icon: Target,
      title: 'İnovasyon',
      description: 'Son teknoloji ve modern inşaat metodolojilerini benimsiyoruz.'
    },
    {
      icon: Shield,
      title: 'Dürüstlük',
      description: 'Şeffaflık, güvenilirlik ve etik iş uygulamalarıyla güven inşa ediyoruz.'
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=90)'
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
            SALMAZLAR İNŞAAT Hakkında
          </h1>
          <div className="h-1 w-24 bg-orange-600 mx-auto" />
        </motion.div>
      </section>

      <section className="bg-zinc-900 py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight text-center">
              Vizyonumuz
            </h2>
            <div className="h-1 w-24 bg-orange-600 mx-auto mb-8" />
            <p className="text-gray-300 text-lg leading-relaxed mb-8 text-center">
              Yenilikçi inşaat uygulamaları, sürdürülebilir tasarım ve mükemmelliğe olan sarsılmaz bağlılığımızla siluetleri dönüştürmede ve kentsel gelişimin geleceğini şekillendirmede öncü güç olmak.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="bg-black p-6 border-l-4 border-orange-600">
                <h3 className="text-xl font-bold text-white mb-3">Sürdürülebilirlik</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Çevre dostu malzemeler ve enerji verimli çözümlerle gelecek nesillere yaşanabilir bir dünya bırakmayı hedefliyoruz.
                </p>
              </div>
              <div className="bg-black p-6 border-l-4 border-orange-600">
                <h3 className="text-xl font-bold text-white mb-3">Yenilikçilik</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Modern teknolojileri ve yenilikçi inşaat yöntemlerini projelerimize entegre ederek sektörde öncü olmayı sürdürüyoruz.
                </p>
              </div>
              <div className="bg-black p-6 border-l-4 border-orange-600">
                <h3 className="text-xl font-bold text-white mb-3">Güvenilirlik</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Müşterilerimize verdiğimiz sözleri tutarak, kaliteli ve zamanında teslim edilen projelerle güven inşa ediyoruz.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight text-center">
              Misyonumuz
            </h2>
            <div className="h-1 w-24 bg-orange-600 mx-auto mb-8" />
            <p className="text-gray-300 text-lg leading-relaxed text-center mb-8">
              İnşaat sektöründe kalite, güvenilirlik ve müşteri memnuniyetini ön planda tutarak, yaşam alanlarını dönüştürmek ve topluma değer katmak.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-black p-6">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-orange-600 mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">Müşteri Odaklılık</h4>
                    <p className="text-gray-400 text-sm">
                      Her projeyi müşterilerimizin ihtiyaçları ve beklentileri doğrultusunda şekillendiriyoruz.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-black p-6">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-orange-600 mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">Kalite Standartları</h4>
                    <p className="text-gray-400 text-sm">
                      Uluslararası kalite standartlarına uygun malzeme ve işçilik garantisi sunuyoruz.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-black p-6">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-orange-600 mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">Toplumsal Sorumluluk</h4>
                    <p className="text-gray-400 text-sm">
                      Çevreye ve topluma duyarlı projeler üreterek sosyal sorumluluğumuzu yerine getiriyoruz.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-black p-6">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-orange-600 mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">Sürekli Gelişim</h4>
                    <p className="text-gray-400 text-sm">
                      Ekibimizi sürekli eğiterek ve sektördeki yenilikleri takip ederek kendimizi geliştiriyoruz.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid md:grid-cols-2 gap-16 items-center"
          >
            <div>
              <h3 className="text-3xl font-bold text-white mb-6 tracking-tight">
                Biz Kimiz
              </h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                Yirmi yılı aşkın bir süre önce kurulan SALMAZLAR İNŞAAT, konut ve ticari gelişmelerde uzmanlaşmış önde gelen bir inşaat şirketi olarak kendini kanıtlamıştır. Yolculuğumuz basit bir vizyonla başladı: ilham veren ve kalıcı yapılar yaratmak.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Bugün, her biri mimari mükemmelliğe ve yenilikçi mühendislik çözümlerine olan bağlılığımızın bir kanıtı olan 150'den fazla tamamlanmış projeyle gururla ayaktayız.
              </p>
            </div>
            <div className="relative h-96 rounded-sm overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=90"
                alt="Salmazlar İnşaat Ekibi - Profesyonel İnşaat Çalışması"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-black py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
              Temel Değerlerimiz
            </h2>
            <div className="h-1 w-24 bg-orange-600 mx-auto" />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zinc-900 p-8 text-center group hover:bg-zinc-800 transition-colors duration-300"
              >
                <value.icon className="w-12 h-12 text-orange-600 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-bold text-white mb-4 tracking-tight">
                  {value.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Corporate;
