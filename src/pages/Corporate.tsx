import { motion } from 'framer-motion';
import { Award, Users, Target, Shield } from 'lucide-react';

const Corporate = () => {
  const values = [
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for perfection in every project, ensuring the highest quality standards.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working closely with clients and partners to bring visionary projects to life.'
    },
    {
      icon: Target,
      title: 'Innovation',
      description: 'Embracing cutting-edge technology and modern construction methodologies.'
    },
    {
      icon: Shield,
      title: 'Integrity',
      description: 'Building trust through transparency, reliability, and ethical business practices.'
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
            About MÇ İNŞAAT
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
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              Our Vision
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              To be the leading force in transforming skylines and shaping the future of urban development through innovative construction practices, sustainable design, and unwavering commitment to excellence.
            </p>
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
                Who We Are
              </h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                Founded over two decades ago, MÇ İNŞAAT has established itself as a premier construction company specializing in luxury residential and commercial developments. Our journey began with a simple vision: to create structures that inspire and endure.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Today, we stand proud with a portfolio of over 150 completed projects, each a testament to our dedication to architectural excellence and innovative engineering solutions.
              </p>
            </div>
            <div className="relative h-96 rounded-sm overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=90"
                alt="Construction team"
                className="w-full h-full object-cover"
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
              Our Core Values
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

      <section className="bg-zinc-900 py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-black p-12 border-l-4 border-orange-600"
          >
            <div className="mb-6">
              <span className="text-orange-600 text-sm uppercase tracking-widest font-semibold">
                CEO Message
              </span>
            </div>
            <h2 className="text-3xl font-bold text-white mb-6 tracking-tight">
              A Message from Our Leadership
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              "At MÇ İNŞAAT, we believe that construction is not merely about erecting buildings—it's about creating spaces where people live, work, and thrive. Every project we undertake is approached with meticulous attention to detail and an unwavering commitment to quality."
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              "Our success is measured not just by the structures we build, but by the lasting relationships we forge with our clients and the positive impact we make on the communities we serve."
            </p>
            <div>
              <div className="text-white font-bold text-xl mb-1">Mehmet Çelik</div>
              <div className="text-orange-600 text-sm uppercase tracking-wider">Founder & CEO</div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Corporate;
