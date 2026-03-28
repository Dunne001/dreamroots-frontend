import { useState, useEffect } from 'react';
import api from '../utils/api';

export default function BookingPage() {
  const [services, setServices] = useState([]);
  const [form, setForm] = useState({ name: '', email: '', phone: '', service_id: '', preferred_date: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    api.get('/services').then(res => setServices(res.data)).catch(console.error);
  }, []);

  const handle = e => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async e => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      await api.post('/booking', form);
      setSuccess(true);
      setForm({ name: '', email: '', phone: '', service_id: '', preferred_date: '', message: '' });
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const inputStyle = {
    width: '100%', padding: '12px 16px', borderRadius: '8px',
    border: '1px solid #ddd', fontSize: '1rem', marginBottom: '16px',
    boxSizing: 'border-box', fontFamily: 'inherit',
  };

  return (
    <div style={{ paddingTop: '80px', minHeight: '100vh', backgroundColor: '#f8f9fa' }}>
      <div style={{ backgroundColor: '#1B4F72', padding: '60px 20px', textAlign: 'center' }}>
        <h1 style={{ color: '#fff', fontSize: '2.5rem', marginBottom: '16px' }}>Book a Consultation</h1>
        <p style={{ color: '#ccc', fontSize: '1.1rem' }}>Schedule a session with our expert consultants</p>
        <p style={{ color: '#aaa', fontSize: '0.95rem', marginTop: '8px' }}>
          📞 Booking enquiries: <a href="tel:+254721675766" style={{ color: '#fff' }}>+254 721 675 766</a>
        </p>
      </div>
      <div style={{ maxWidth: '700px', margin: '0 auto', padding: '60px 20px' }}>
        {success ? (
          <div style={{ backgroundColor: '#d4edda', borderRadius: '12px', padding: '40px', textAlign: 'center' }}>
            <p style={{ fontSize: '2rem' }}>✅</p>
            <h3 style={{ color: '#155724' }}>Booking Received!</h3>
            <p style={{ color: '#155724' }}>Thank you! We'll confirm your consultation shortly.</p>
            <button onClick={() => setSuccess(false)} style={{ marginTop: '16px', backgroundColor: '#1B4F72', color: '#fff', border: 'none', padding: '10px 24px', borderRadius: '8px', cursor: 'pointer' }}>
              Book Another
            </button>
          </div>
        ) : (
          <div style={{ backgroundColor: '#fff', borderRadius: '12px', padding: '40px', boxShadow: '0 2px 12px rgba(0,0,0,0.08)' }}>
            <form onSubmit={submit}>
              <input name="name" placeholder="Full Name *" value={form.name} onChange={handle} required style={inputStyle} />
              <input name="email" type="email" placeholder="Email Address *" value={form.email} onChange={handle} required style={inputStyle} />
              <input name="phone" placeholder="Phone Number *" value={form.phone} onChange={handle} required style={inputStyle} />
              <select name="service_id" value={form.service_id} onChange={handle} required style={inputStyle}>
                <option value="">Select a Service *</option>
                {services.map(s => (
                  <option key={s.id} value={s.id}>{s.name}</option>
                ))}
              </select>
              <input name="preferred_date" type="date" value={form.preferred_date} onChange={handle} style={inputStyle} />
              <textarea name="message" placeholder="Additional notes or questions" value={form.message} onChange={handle} rows={4} style={{ ...inputStyle, resize: 'vertical' }} />
              {error && <p style={{ color: '#e74c3c', marginBottom: '12px' }}>{error}</p>}
              <button type="submit" disabled={loading} style={{
                backgroundColor: '#1B4F72', color: '#fff', border: 'none',
                padding: '14px 32px', borderRadius: '8px', fontSize: '1rem',
                cursor: loading ? 'not-allowed' : 'pointer', width: '100%', fontWeight: '600'
              }}>
                {loading ? 'Submitting...' : 'Request Consultation'}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}