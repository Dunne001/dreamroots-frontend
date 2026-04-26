import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import api from '../utils/api';

export default function TeamPage() {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const isBoard = location.pathname.includes('board');

  useEffect(() => {
    const endpoint = isBoard ? '/team/board' : '/team/management';
    api.get(endpoint)
      .then(res => setMembers(res.data))
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, [isBoard]);

  return (
    <div className="bg-light min-h-screen">
      {/* Hero Section */}
      <div className="bg-navy py-24 px-6 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-serif text-white mb-6"
        >
          {isBoard ? 'Board of Directors' : 'Executive Management'}
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-gray-300 text-lg font-sans max-w-xl mx-auto"
        >
          {isBoard 
            ? "Strategic governance and visionary leadership driving sustainable institutional success."
            : "Operational excellence and industry expertise dedicated to your organizational growth."}
        </motion.p>
      </div>

      {/* Team Grid */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        {loading ? (
          <div className="text-center py-20 text-navy font-serif">Loading expertise...</div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {members.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-surface rounded-2xl overflow-hidden border border-gray-100 shadow-premium group"
              >
                {/* Executive Image Container */}
                <div className="h-80 overflow-hidden">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    onError={e => { e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=0B1F3B&color=fff&size=400`; }}
                  />
                </div>
                
                {/* Content */}
                <div className="p-8 text-center">
                  <h3 className="text-xl font-serif text-navy mb-1">{member.name}</h3>
                  <p className="text-gold font-medium text-sm tracking-wide uppercase mb-4">{member.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed font-sans italic">
                    "{member.bio}"
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}