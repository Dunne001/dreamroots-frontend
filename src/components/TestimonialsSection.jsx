import { useEffect, useState } from 'react';
import api from '../utils/api';

export default function TestimonialsSection() {
  const [testimonials, setTestimonials] = useState([]);
  const [current, setCurrent] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get('/testimonials')
      .then(res => setTestimonials(res.data))
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    if (testimonials.length === 0) return;
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials]);

  if (loading) return (
    <section style={{ padding: '60px 20px', textAlign: 'center' }}>
      <p style={{ color: '#1B4F72' }}>Loading testimonials...</p>
    </section>
  );

  if (testimonials.length === 0) return null;

  const t = testimonials[current];

  return (
    <section style={{ padding: '60px 20px', backgroundColor: '#1B4F72' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ color: '#fff', fontSize: '2rem', marginBottom: '40px' }}>
          What Our Clients Say
        </h2>
        <div style={{
          backgroundColor: 'rgba(255,255,255,0.1)',
          borderRadius: '16px',
          padding: '40px',
          color: '#fff',
        }}>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '24px', fontStyle: 'italic' }}>
            "{t.quote}"
          </p>
          <div style={{ color: '#FFD700', fontSize: '1.2rem', marginBottom: '12px' }}>
            ★★★★★
          </div>
          <p style={{ fontWeight: '700', fontSize: '1rem' }}>{t.author_name}</p>
          <p style={{ color: '#ccc', fontSize: '0.9rem' }}>
            {t.author_title}{t.organization ? `, ${t.organization}` : ''}
          </p>
        </div>
        <div style={{ marginTop: '24px', display: 'flex', justifyContent: 'center', gap: '8px' }}>
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              style={{
                width: '10px', height: '10px', borderRadius: '50%',
                border: 'none', cursor: 'pointer',
                backgroundColor: i === current ? '#fff' : 'rgba(255,255,255,0.4)',
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}