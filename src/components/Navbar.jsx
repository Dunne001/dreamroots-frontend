import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Navbar() {
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about/overview' },
    { name: 'Board', path: '/about/board' },
    { name: 'Team', path: '/about/team' },
    { name: 'Services', path: '/services' },
  ];

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-xl border-b border-gray-100/50"
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <span className="font-serif font-bold text-2xl text-navy tracking-tight">
            Dream Roots.
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-sm font-medium transition-colors duration-200 hover:text-gold ${
                location.pathname === link.path ? 'text-gold' : 'text-navy'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link
            to="/booking"
            className="bg-navy text-white px-6 py-2.5 rounded-lg text-sm font-semibold hover:bg-navy/90 transition-all shadow-sm hover:shadow-md active:scale-95"
          >
            Book Consultation
          </Link>
        </div>
      </div>
    </motion.header>
  );
}