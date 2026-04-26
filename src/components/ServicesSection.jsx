import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import api from '../utils/api';

export default function ServicesSection() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get('/services')
      .then(res => setServices(res.data))
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  const icons = {
    'graduation-cap': '🎓', 'laptop-code': '💻', 'chart-line': '📊',
    'users': '👥', 'bullhorn': '📣', 'microscope': '🔬',
    'handshake': '🤝', 'chalkboard-teacher': '📚',
  };

  if (loading) return null;

  return (
    <section className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-navy mb-4">Core Expertise</h2>
          <div className="w-20 h-1 bg-gold mx-auto mb-6" />
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-sans">
            Comprehensive consulting solutions tailored to drive institutional excellence and sustainable impact.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                to={`/services/${service.slug}`}
                className="group block bg-light p-8 rounded-2xl border border-gray-100 transition-all duration-300 hover:shadow-premium hover:bg-white h-full"
              >
                <div className="text-3xl mb-6">{icons[service.icon] || '⭐'}</div>
                <h3 className="text-xl font-serif text-navy mb-3 group-hover:text-gold transition-colors">
                  {service.name}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6 font-sans text-sm">
                  {service.summary}
                </p>
                <span className="inline-flex items-center text-sm font-semibold text-navy group-hover:text-gold transition-colors">
                  Explore Service <span className="ml-2">→</span>
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}