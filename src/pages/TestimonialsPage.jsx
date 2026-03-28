import { useEffect, useState } from 'react';
import api from '../utils/api';

export default function TestimonialsPage() {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get('/testimonials')
      .then(res => setTestimonials(res.data))
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div style={{ paddingTop: '80px', minHeight: '100vh', backgroundColor: '#f8f9fa' }}>
      <div style={{ backgroundColor: '#1B4F72', padding: '60px 20px', textAlign: 'center' }}>
        <h1 style={{ color: '#fff', fontSize: '2.5rem', marginBottom: '16px' }}>Testimonials</h1>
        <p style={{ color: '#ccc', fontSize: '1.1rem' }}>What our clients say about us</p>
      </div>
      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '60px 20px' }}>
        {loading ? (
          <p style={{ textAlign: 'center', color: '#1B4F72' }}>Loading testimonials...</p>
        ) : (
          <div style={{ display: 'grid', gap: '24px' }}>
            {testimonials.map(t => (
              <div key={t.id} style={{
                backgroundColor: '#fff',
                borderRadius: '12px',
                padding: '32px',
                boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
                borderLeft: '4px solid #1B4F72',
              }}>
                <p style={{ color: '#FFD700', fontSize: '1.2rem', marginBottom: '12px' }}>★★★★★</p>
                <p style={{ color: '#444', lineHeight: '1.8', fontStyle: 'italic', marginBottom: '20px' }}>
                  "{t.quote}"
                </p>
                <p style={{ fontWeight: '700', color: '#1B4F72' }}>{t.author_name}</p>
                <p style={{ color: '#888', fontSize: '0.9rem' }}>
                  {t.author_title}{t.organization ? `, ${t.organization}` : ''}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}