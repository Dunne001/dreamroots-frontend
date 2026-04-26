import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import SectionHeader from '../components/ui/SectionHeader';

const teamMembers =[
  {
    id: 1,
    name: 'James Kamau',
    role: 'Managing Partner',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 2,
    name: 'Grace Njoroge',
    role: 'Head of Human Resource Consulting',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 3,
    name: 'Michael Mutua',
    role: 'Director of ICT Solutions',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop'
  }
];

export default function ManagementTeam() {
  return (
    <div className="bg-light min-h-screen py-24">
      <Helmet>
        <title>Management Team | Dream Roots Kenya</title>
      </Helmet>

      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader 
          title="Executive Management" 
          subtitle="Our operational leadership combines local intelligence with global execution standards to deliver measurable business outcomes."
        />

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="bg-surface rounded-2xl overflow-hidden shadow-premium group border border-gray-50"
            >
              <div className="h-72 overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-8 text-center">
                <h3 className="text-xl font-serif text-navy mb-2">{member.name}</h3>
                <p className="text-gold font-medium text-sm">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}