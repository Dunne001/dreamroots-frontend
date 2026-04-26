import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import SectionHeader from '../components/ui/SectionHeader';

const boardMembers =[
  {
    id: 1,
    name: 'Dr. Sarah Wanjiku',
    role: 'Chairperson of the Board',
    bio: 'Over 20 years of experience in corporate governance and strategic financial advisory across East Africa. Former executive at top-tier global consulting firms.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 2,
    name: 'David Omondi',
    role: 'Non-Executive Director',
    bio: 'Pioneer in ICT infrastructure and digital transformation. David advises enterprise organizations on scaling technological architecture for the modern economy.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop'
  },
  // Add more members as needed
];

export default function BoardOfDirectors() {
  return (
    <div className="bg-light min-h-screen py-24">
      <Helmet>
        <title>Board of Directors | Dream Roots Kenya</title>
      </Helmet>

      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader 
          title="Board of Directors" 
          subtitle="Guided by decades of cross-industry expertise, our board ensures strict adherence to international best practices, strategic foresight, and sustainable growth."
        />

        <div className="grid md:grid-cols-2 gap-12 mt-12">
          {boardMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6, ease: 'easeOut' }}
              className="bg-surface rounded-2xl p-8 flex flex-col md:flex-row gap-8 shadow-premium border border-gray-100"
            >
              <div className="w-32 h-32 shrink-0">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover rounded-xl shadow-sm"
                />
              </div>
              <div>
                <h3 className="text-2xl font-serif text-navy mb-1">{member.name}</h3>
                <p className="text-gold font-medium text-sm mb-4 tracking-wide uppercase">{member.role}</p>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {member.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}