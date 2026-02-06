import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, MapPin, Calendar, Building, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Çanakkale TOKİ Projesi Resimleri
import canakkale1 from '../assets/canakkale/083e4a5f-12bd-4b5f-81d2-2cea765d0bdd.jpg';
import canakkale2 from '../assets/canakkale/0e035d59-9c3c-420a-bdb3-181766f715ca.jpg';
import canakkale3 from '../assets/canakkale/76b0496a-7709-42ff-a690-52aff9b4f241.jpg';
import canakkale4 from '../assets/canakkale/7a592c65-134a-43af-9022-fd7cf352a9c7.jpg';
import canakkale5 from '../assets/canakkale/8ddc90f6-b82f-4532-b0e8-7db3b93fbedf.jpg';
import canakkale6 from '../assets/canakkale/b863388b-cae9-4374-97c1-262fd6a07005.jpg';
import canakkale7 from '../assets/canakkale/d0bf1288-1dc9-47df-b939-93f2319de91c.jpg';
import canakkale8 from '../assets/canakkale/e5befd4c-d3c3-4d63-a0dd-356f9e409ee5.jpg';
import canakkale9 from '../assets/canakkale/f592fa11-526b-47eb-9a0d-f8f36aed0d5b.jpg';

// Sevindikli Villa Projesi Resimleri
import sevindikli1 from '../assets/sevindikli/014fb7e0-cb86-4782-b6de-dec50d74c66b.jpg';
import sevindikli2 from '../assets/sevindikli/02fcb310-4600-477d-90c1-7ad43ea53838.jpg';
import sevindikli3 from '../assets/sevindikli/1c972497-d575-4f68-9ba9-ffadd966c0a6.jpg';
import sevindikli4 from '../assets/sevindikli/33242814-d267-41d6-b147-7e14488c7c6d.jpg';
import sevindikli5 from '../assets/sevindikli/46b9f6c2-9dc0-46b7-a1a9-cf551ca60521.jpg';
import sevindikli6 from '../assets/sevindikli/49b8392a-8b64-49f1-8f5f-dec39faf36fb.jpg';
import sevindikli7 from '../assets/sevindikli/83bc92db-ca8c-4429-ab5c-6393befe15f8.jpg';
import sevindikli8 from '../assets/sevindikli/89ab3d7a-f473-4b86-b99a-5867ea0e05a4.jpg';
import sevindikli9 from '../assets/sevindikli/ab7a1233-a1b1-44fa-91fe-48c5597030d0.jpg';
import sevindikli10 from '../assets/sevindikli/b68728f0-7393-4c06-b26b-4651c2b0bf7c.jpg';
import sevindikli11 from '../assets/sevindikli/ce2ed0ec-6eaa-4a7f-9cdf-2f7bed37098c.jpg';
import sevindikli12 from '../assets/sevindikli/d3e4d10c-b319-421b-9d06-78271a94bce8.jpg';
import sevindikli13 from '../assets/sevindikli/dd856bd1-d094-4b83-b4a3-8fc9b5ea540f.jpg';
import sevindikli14 from '../assets/sevindikli/e0d23ace-5fcf-480b-9250-e10b046ac25d.jpg';
import sevindikli15 from '../assets/sevindikli/ed8784e2-c120-432e-8a19-43b63b49cb04.jpg';

// Erzincan Projesi Resimleri
import erzincan1 from '../assets/erzincan/WhatsApp Image 2026-02-05 at 16.38.41 (1).jpeg';
import erzincan2 from '../assets/erzincan/WhatsApp Image 2026-02-05 at 16.38.41 (2).jpeg';
import erzincan3 from '../assets/erzincan/WhatsApp Image 2026-02-05 at 16.38.41 (3).jpeg';
import erzincan4 from '../assets/erzincan/WhatsApp Image 2026-02-05 at 16.38.41.jpeg';
import erzincan5 from '../assets/erzincan/WhatsApp Image 2026-02-05 at 16.38.42 (1).jpeg';
import erzincan6 from '../assets/erzincan/WhatsApp Image 2026-02-05 at 16.38.42 (2).jpeg';
import erzincan7 from '../assets/erzincan/WhatsApp Image 2026-02-05 at 16.38.42 (3).jpeg';
import erzincan8 from '../assets/erzincan/WhatsApp Image 2026-02-05 at 16.38.42 (4).jpeg';
import erzincan9 from '../assets/erzincan/WhatsApp Image 2026-02-05 at 16.38.42.jpeg';
import erzincan10 from '../assets/erzincan/WhatsApp Image 2026-02-05 at 16.41.40.jpeg';
import erzincan11 from '../assets/erzincan/WhatsApp Image 2026-02-05 at 16.41.42 (1).jpeg';
import erzincan12 from '../assets/erzincan/WhatsApp Image 2026-02-05 at 16.41.42 (2).jpeg';
import erzincan13 from '../assets/erzincan/WhatsApp Image 2026-02-05 at 16.41.42 (3).jpeg';
import erzincan14 from '../assets/erzincan/WhatsApp Image 2026-02-05 at 16.41.42 (4).jpeg';
import erzincan15 from '../assets/erzincan/WhatsApp Image 2026-02-05 at 16.41.42.jpeg';

const projectsData = [
  {
    id: 1,
    title: 'Çanakkale TOKİ Projesi',
    location: 'Çanakkale',
    category: 'TOKİ İnşaatı',
    year: '2023',
    description: 'Çanakkale bölgesinde gerçekleştirdiğimiz TOKİ projesi, modern yaşam standartlarını karşılayan, kaliteli ve konforlu konutlardan oluşmaktadır.',
    images: [canakkale1, canakkale2, canakkale3, canakkale4, canakkale5, canakkale6, canakkale7, canakkale8, canakkale9],
    status: 'Tamamlandı'
  },
  {
    id: 2,
    title: 'Sevindikli Villa Projesi',
    location: 'Kocaeli, Sevindikli',
    category: 'Villa İnşaatı',
    year: '2024',
    description: 'Kocaeli Sevindikli bölgesinde inşa ettiğimiz lüks villa projesi, modern mimari ve doğayla iç içe yaşam konseptini bir araya getirmektedir.',
    images: [sevindikli1, sevindikli2, sevindikli3, sevindikli4, sevindikli5, sevindikli6, sevindikli7, sevindikli8, sevindikli9, sevindikli10, sevindikli11, sevindikli12, sevindikli13, sevindikli14, sevindikli15],
    status: 'Devam Ediyor'
  },
  {
    id: 3,
    title: 'Erzincan Konut Projesi',
    location: 'Erzincan',
    category: 'Konut İnşaatı',
    year: '2025',
    description: 'Erzincan bölgesinde gerçekleştirdiğimiz konut projesi, modern yaşam alanları ve kaliteli işçilikle öne çıkmaktadır.',
    images: [erzincan1, erzincan2, erzincan3, erzincan4, erzincan5, erzincan6, erzincan7, erzincan8, erzincan9, erzincan10, erzincan11, erzincan12, erzincan13, erzincan14, erzincan15],
    status: 'Devam Ediyor'
  }
];

const Projects = () => {
  const navigate = useNavigate();
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [cardImageIndex, setCardImageIndex] = useState<{[key: number]: number}>({
    1: 0,
    2: 0,
    3: 0
  });

  // Kart üzerindeki fotoğrafları otomatik değiştir
  useEffect(() => {
    const interval = setInterval(() => {
      setCardImageIndex(prev => ({
        1: (prev[1] + 1) % projectsData[0].images.length,
        2: (prev[2] + 1) % projectsData[1].images.length,
        3: (prev[3] + 1) % projectsData[2].images.length
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const openProject = (projectId: number) => {
    setSelectedProject(projectId);
    setCurrentImageIndex(0);
  };

  const closeProject = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedProject !== null) {
      const project = projectsData.find(p => p.id === selectedProject);
      if (project) {
        setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
      }
    }
  };

  const prevImage = () => {
    if (selectedProject !== null) {
      const project = projectsData.find(p => p.id === selectedProject);
      if (project) {
        setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
      }
    }
  };

  const currentProject = selectedProject !== null ? projectsData.find(p => p.id === selectedProject) : null;

  return (
    <div className="min-h-screen bg-black pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight">
            Projelerimiz
          </h1>
          <div className="h-1 w-24 bg-orange-600 mx-auto mb-6" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Gerçekleştirdiğimiz projelerle modern yaşam alanları yaratıyor, kalite ve mükemmelliği bir araya getiriyoruz.
          </p>
        </motion.div>

        {/* Proje Kartları */}
        <div className="grid md:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group relative overflow-hidden bg-zinc-900 cursor-pointer"
              onClick={() => openProject(project.id)}
            >
              {/* Kart Resmi */}
              <div className="relative h-96 overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={cardImageIndex[project.id]}
                    src={project.images[cardImageIndex[project.id]]}
                    alt={project.title}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />

                {/* Fotoğraf Sayısı */}
                <div className="absolute top-6 left-6 bg-black/70 backdrop-blur-sm px-3 py-2 text-white text-sm">
                  {project.images.length} Fotoğraf
                </div>
              </div>

              {/* Kart İçeriği */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="mb-2 flex items-center gap-2">
                  <Building className="w-4 h-4 text-orange-600" />
                  <span className="text-orange-600 text-sm uppercase tracking-widest font-semibold">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-3xl font-bold text-white mb-3 tracking-tight">
                  {project.title}
                </h3>
                <div className="flex items-center gap-4 text-gray-400 text-sm mb-4">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span>{project.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{project.year}</span>
                  </div>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed line-clamp-2">
                  {project.description}
                </p>
                <div className="flex items-center text-orange-600 group-hover:translate-x-2 transition-transform duration-300">
                  <span className="text-sm uppercase tracking-wider font-semibold mr-2">
                    Detayları Görüntüle
                  </span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}

          {/* Yeni Proje Kartı */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: projectsData.length * 0.2 }}
            className="group relative overflow-hidden cursor-pointer h-96"
            onClick={() => navigate('/contact')}
          >
            {/* Arka Plan Resmi */}
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: 'url(https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&q=90)'
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-blue-900/95 via-blue-900/85 to-blue-900/70" />
            
            {/* İçerik */}
            <div className="relative z-10 h-full flex flex-col justify-between p-8">
              <div>
                <h3 className="text-4xl font-bold text-white mb-6 tracking-tight">
                  Daha Nice Projelere
                </h3>
                <p className="text-white/90 text-lg mb-8 leading-relaxed">
                  Burada gördüğünüz projeler sadece bir kısmı. Daha fazla başarılı projemizi keşfetmek için iletişime geçin.
                </p>
                
                {/* Özellikler Listesi */}
                <div className="space-y-3 mb-8">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-white/90 text-sm">
                      Portföyümüz yalnızca tamamlanan projelerden oluşur.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-white/90 text-sm">
                      Disiplinli ekip ve planlı çalışma ile ilerleriz.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-white/90 text-sm">
                      Süreç şeffaftır, teslim tarihlerini koruruz.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Buton */}
              <div>
                <div className="inline-flex items-center bg-white text-blue-900 px-8 py-4 font-semibold group-hover:bg-orange-600 group-hover:text-white transition-colors duration-300">
                  <span className="mr-2">İletişime Geç</span>
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Proje Detay Modal */}
      <AnimatePresence>
        {selectedProject !== null && currentProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 overflow-y-auto"
          >
            <div className="min-h-screen py-20 px-6">
              <div className="max-w-7xl mx-auto">
                {/* Kapatma Butonu */}
                <button
                  onClick={closeProject}
                  className="fixed top-6 right-6 text-white hover:text-orange-600 transition-colors duration-300 z-50"
                >
                  <X className="w-8 h-8" />
                </button>

                {/* Proje Başlığı */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="mb-12"
                >
                  <div className="flex items-center gap-3 text-orange-600 text-sm uppercase tracking-wider font-semibold mb-4">
                    <Building className="w-5 h-5" />
                    <span>{currentProject.category}</span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
                    {currentProject.title}
                  </h2>
                  <div className="flex flex-wrap gap-6 text-gray-400 text-sm mb-6">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-orange-600" />
                      <span>{currentProject.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-orange-600" />
                      <span>{currentProject.year}</span>
                    </div>
                    <div className={`px-3 py-1 text-xs uppercase tracking-wider font-semibold ${
                      currentProject.status === 'Tamamlandı'
                        ? 'bg-orange-600/20 text-orange-600'
                        : 'bg-blue-600/20 text-blue-400'
                    }`}>
                      {currentProject.status}
                    </div>
                  </div>
                  <p className="text-gray-300 text-lg leading-relaxed max-w-4xl">
                    {currentProject.description}
                  </p>
                </motion.div>

                {/* Büyük Görsel */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="relative mb-8"
                >
                  <div className="relative h-[60vh] bg-zinc-900 overflow-hidden">
                    <img
                      src={currentProject.images[currentImageIndex]}
                      alt={`${currentProject.title} - ${currentImageIndex + 1}`}
                      className="w-full h-full object-contain"
                    />
                    
                    {/* Navigasyon Okları */}
                    <button
                      onClick={(e) => { e.stopPropagation(); prevImage(); }}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-orange-600 transition-colors duration-300 bg-black/50 p-3 backdrop-blur-sm"
                    >
                      <ChevronLeft className="w-8 h-8" />
                    </button>
                    <button
                      onClick={(e) => { e.stopPropagation(); nextImage(); }}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-orange-600 transition-colors duration-300 bg-black/50 p-3 backdrop-blur-sm"
                    >
                      <ChevronRight className="w-8 h-8" />
                    </button>

                    {/* Fotoğraf Sayacı */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 backdrop-blur-sm px-4 py-2 text-white text-sm">
                      {currentImageIndex + 1} / {currentProject.images.length}
                    </div>
                  </div>
                </motion.div>

                {/* Thumbnail Galerisi */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4"
                >
                  {currentProject.images.map((image, index) => (
                    <div
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`relative aspect-square cursor-pointer overflow-hidden bg-zinc-900 ${
                        currentImageIndex === index ? 'ring-2 ring-orange-600' : ''
                      }`}
                    >
                      <img
                        src={image}
                        alt={`Thumbnail ${index + 1}`}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Projects;
