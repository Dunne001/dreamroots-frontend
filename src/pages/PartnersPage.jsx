import { useEffect, useState } from 'react';
import api from '../utils/api';

export default function PartnersPage() {
  const [partners, setPartners] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get('/partners')
      .then(res => setPartners(res.data))
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div style={{ paddingTop: '80px', minHeight: '100vh', backgroundColor: '#f8f9fa' }}>
      <div style={{ backgroundColor: '#1B4F72', padding: '60px 20px', textAlign: 'center' }}>
        <h1 style={{ color: '#fff', fontSize: '2.5rem', marginBottom: '16px' }}>Partners & Affiliations</h1>
        <p style={{ color: '#ccc', fontSize: '1.1rem' }}>Organisations we proudly work with</p>
      </div>
      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '60px 20px' }}>
        {loading ? (
          <p style={{ textAlign: 'center', color: '#1B4F72' }}>Loading partners...</p>
        ) : (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '24px'
          }}>
            {partners.map(partner => (
              
                key={partner.id}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none' }}
              >
                <div style={{
                  backgroundColor: '#fff',
                  borderRadius: '12px',
                  padding: '32px 24px',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
                  textAlign: 'center',
                  transition: 'transform 0.2s',
                }}
                  onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-4px)'}
                  onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
                >
                  <div style={{ fontSize: '2.5rem', marginBottom: '16px' }}>🤝</div>
                  <h3 style={{ color: '#1B4F72', fontSize: '1rem', lineHeight: '1.5' }}>
                    {partner.name}
                  </h3>
                  <p style={{ color: '#2E86C1', fontSize: '0.85rem', marginTop: '8px' }}>
                    Visit Website →
                  </p>
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}