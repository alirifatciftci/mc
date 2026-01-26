import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Building2 } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();

  const navLinks = [
    { name: 'Ana Sayfa', path: '/' },
    { name: 'Kurumsal', path: '/corporate' },
    { name: 'Projeler', path: '/projects' },
    { name: 'İletişim', path: '/contact' }
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/30 border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3 group">
            <Building2 className="w-8 h-8 text-orange-600 transition-transform group-hover:scale-110 duration-300" />
            <span className="text-2xl font-bold tracking-wider text-white">
              MÇ İNŞAAT
            </span>
          </Link>

          <div className="flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="relative text-sm uppercase tracking-widest text-gray-300 hover:text-white transition-colors duration-300"
              >
                {link.name}
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-orange-600"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
