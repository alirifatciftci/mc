import { motion } from 'framer-motion';
import { projectsData } from '../data/projectsData';
import { ArrowRight } from 'lucide-react';

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut'
      }
    }
  };

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
            Our Projects
          </h1>
          <div className="h-1 w-24 bg-orange-600 mx-auto mb-6" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explore our portfolio of exceptional constructions that redefine modern architecture and luxury living.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 gap-8"
        >
          {projectsData.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="group relative overflow-hidden bg-zinc-900 rounded-sm"
            >
              <div className="relative h-96 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />

                <div className="absolute top-6 right-6">
                  <span className={`px-4 py-2 text-xs uppercase tracking-wider font-semibold ${
                    project.status === 'Completed'
                      ? 'bg-orange-600/90 text-white'
                      : 'bg-white/20 text-white backdrop-blur-sm'
                  }`}>
                    {project.status}
                  </span>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="mb-2">
                  <span className="text-orange-600 text-sm uppercase tracking-widest font-semibold">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-3xl font-bold text-white mb-3 tracking-tight">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex items-center text-orange-600 group-hover:translate-x-2 transition-transform duration-300">
                  <span className="text-sm uppercase tracking-wider font-semibold mr-2">
                    View Details
                  </span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
