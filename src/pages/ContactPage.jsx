import { useState } from 'react';
import api from '../utils/api';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handle = e => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async e => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      await api.post('/contact', form);
      setSuccess(true);
      setForm({ name: '', email: '', phone: '', subject: '', message: '' });
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
        <h1 style={{ color: '#fff', fontSize: '2.5rem', marginBottom: '16px' }}>Contact Us</h1>
        <p style={{ color: '#ccc', fontSize: '1.1rem' }}>We'd love to hear from you</p>
      </div>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '60px 20px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px' }}>
        <div>
          <h2 style={{ color: '#1B4F72', marginBottom: '24px' }}>Get In Touch</h2>
          <div style={{ marginBottom: '20px' }}>
            <p style={{ color: '#444', marginBottom: '6px' }}>📍 P.O Box 1152-00511 Nairobi, Kenya</p>
            <p style={{ color: '#444', marginBottom: '6px' }}>📞 <a href="tel:+254759098449" style={{ color: '#2E86C1' }}>+254 759 098 449</a></p>
            <p style={{ color: '#444', marginBottom: '6px' }}>✉️ <a href="mailto:info@dreamrootskenya.com" style={{ color: '#2E86C1' }}>info@dreamrootskenya.com</a></p>
          </div>
        </div>
        <div>
          {success ? (
            <div style={{ backgroundColor: '#d4edda', borderRadius: '12px', padding: '32px', textAlign: 'center' }}>
              <p style={{ fontSize: '2rem' }}>✅</p>
              <h3 style={{ color: '#155724' }}>Message Sent!</h3>
              <p style={{ color: '#155724' }}>Thank you for contacting us. We'll get back to you shortly.</p>
              <button onClick={() => setSuccess(false)} style={{ marginTop: '16px', backgroundColor: '#1B4F72', color: '#fff', border: 'none', padding: '10px 24px', borderRadius: '8px', cursor: 'pointer' }}>
                Send Another
              </button>
            </div>
          ) : (
            <form onSubmit={submit}>
              <input name="name" placeholder="Full Name *" value={form.name} onChange={handle} required style={inputStyle} />
              <input name="email" type="email" placeholder="Email Address *" value={form.email} onChange={handle} required style={inputStyle} />
              <input name="phone" placeholder="Phone Number" value={form.phone} onChange={handle} style={inputStyle} />
              <input name="subject" placeholder="Subject *" value={form.subject} onChange={handle} required style={inputStyle} />
              <textarea name="message" placeholder="Your Message *" value={form.message} onChange={handle} required rows={5} style={{ ...inputStyle, resize: 'vertical' }} />
              {error && <p style={{ color: '#e74c3c', marginBottom: '12px' }}>{error}</p>}
              <button type="submit" disabled={loading} style={{
                backgroundColor: '#1B4F72', color: '#fff', border: 'none',
                padding: '14px 32px', borderRadius: '8px', fontSize: '1rem',
                cursor: loading ? 'not-allowed' : 'pointer', width: '100%', fontWeight: '600'
              }}>
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}