import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const values = [
  { title: 'Integrity', desc: 'Upholding honesty, transparency, and ethical conduct.', icon: '⚖️' },
  { title: 'Excellence', desc: 'Committing to solutions that exceed global benchmarks.', icon: '🏆' },
  { title: 'Collaboration', desc: 'Powering success through shared institutional intelligence.', icon: '🤝' },
  { title: 'Innovation', desc: 'Embracing forward-thinking strategies for complex challenges.', icon: '💡' },
  { title: 'Inclusivity', desc: 'Ensuring our work creates value across all society.', icon: '🌍' },
  { title: 'Sustainability', desc: 'Prioritizing long-term impact and responsible growth.', icon: '🌱' },
];

export default function AboutPage() {
  return (
    <div className="bg-light pb-24">
      {/* Hero Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-gold font-semibold tracking-[0.2em] uppercase text-xs mb-6">
            Who We Are
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-5xl md:text-6xl font-serif text-navy mb-8">
            Strategic Consulting for a Smarter Future
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-xl text-gray-600 leading-relaxed font-sans">
            DreamRoots Kenya operates at the intersection of strategic consulting, capacity building, and community development. We provide actionable insights and innovative solutions to drive sustainable growth.
          </motion.p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          {[
            { title: "Our Mission", text: "To empower individuals and organizations through innovative consulting and sustainable solutions.", icon: "🎯" },
            { title: "Our Vision", text: "To be a leading catalyst for development, where every dream is rooted in knowledge and integrity.", icon: "👁️" }
          ].map((item, i) => (
            <div key={i} className="bg-white p-10 rounded-2xl shadow-premium border border-gray-100">
              <div className="text-3xl mb-6">{item.icon}</div>
              <h3 className="text-2xl font-serif text-navy mb-4">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed font-sans">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-navy mb-4">Core Principles</h2>
            <div className="w-16 h-1 bg-gold mx-auto" />
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-premium transition-shadow">
                <div className="text-2xl mb-4">{v.icon}</div>
                <h4 className="text-lg font-bold text-navy mb-2 font-serif">{v.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation Footer */}
      <section className="max-w-3xl mx-auto px-6 text-center">
        <h3 className="text-2xl font-serif text-navy mb-8">Discover Our Leadership</h3>
        <div className="flex flex-wrap gap-4 justify-center">
          {[
            {label: 'Board of Directors', path: '/about/board'},
            {label: 'Management Team', path: '/about/team'},
          ].map((item, i) => (
            <Link key={i} to={item.path} className="px-8 py-3 bg-navy text-white rounded-lg font-semibold hover:bg-navy/90 transition-all text-sm">
              {item.label} →
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}