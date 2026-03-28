import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import api from '../utils/api';

export default function ServiceDetailPage() {
  const { slug } = useParams();
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    api.get(`/services/${slug}`)
      .then(res => setService(res.data))
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, [slug]);

  if (loading) return (
    <div style={{ paddingTop: '120px', textAlign: 'center' }}>
      <p style={{ color: '#1B4F72' }}>Loading...</p>
    </div>
  );

  if (error || !service) return (
    <div style={{ paddingTop: '120px', textAlign: 'center' }}>
      <p style={{ color: '#e74c3c' }}>Service not found.</p>
      <Link to="/services" style={{ color: '#2E86C1' }}>← Back to Services</Link>
    </div>
  );

  return (
    <div style={{ paddingTop: '80px', minHeight: '100vh', backgroundColor: '#f8f9fa' }}>
      <div style={{ backgroundColor: '#1B4F72', padding: '60px 20px', textAlign: 'center' }}>
        <h1 style={{ color: '#fff', fontSize: '2.5rem', marginBottom: '16px' }}>{service.name}</h1>
        <p style={{ color: '#ccc', fontSize: '1.1rem', maxWidth: '700px', margin: '0 auto' }}>
          {service.summary}
        </p>
      </div>
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '60px 20px' }}>
        <p style={{ color: '#444', lineHeight: '1.8', fontSize: '1.05rem', marginBottom: '40px' }}>
          {service.content}
        </p>
        {service.sections && service.sections.length > 0 && (
          <>
            <h2 style={{ color: '#1B4F72', fontSize: '1.8rem', marginBottom: '30px' }}>
              What We Offer
            </h2>
            <div style={{ display: 'grid', gap: '20px' }}>
              {service.sections.map((section, i) => (
                <div key={i} style={{
                  backgroundColor: '#fff',
                  borderRadius: '12px',
                  padding: '28px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                  borderLeft: '4px solid #2E86C1',
                }}>
                  <h3 style={{ color: '#1B4F72', marginBottom: '10px' }}>{section.title}</h3>
                  <p style={{ color: '#555', lineHeight: '1.7' }}>{section.content}</p>
                </div>
              ))}
            </div>
          </>
        )}
        <div style={{ marginTop: '40px', display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          <Link to="/booking" style={{
            backgroundColor: '#1B4F72', color: '#fff',
            padding: '14px 28px', borderRadius: '8px', textDecoration: 'none', fontWeight: '600'
          }}>
            Book a Consultation
          </Link>
          <Link to="/services" style={{
            backgroundColor: '#f8f9fa', color: '#1B4F72',
            padding: '14px 28px', borderRadius: '8px', textDecoration: 'none',
            fontWeight: '600', border: '2px solid #1B4F72'
          }}>
            ← All Services
          </Link>
        </div>
      </div>
    </div>
  );
}