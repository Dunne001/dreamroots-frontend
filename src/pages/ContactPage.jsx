import { useState } from 'react'
import Footer from '../components/Footer'

const ContactPage = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('')
  const [loading, setLoading] = useState(false)

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await fetch('http://localhost:8000/api/v1/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      if (res.ok) {
        setStatus('success')
        setForm({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
    setLoading(false)
  }

  return (
    <div>
      <div style={{
        background: 'linear-gradient(135deg, #1B4F72 0%, #2E86C1 100%)',
        padding: '5rem 1rem',
        textAlign: 'center'
      }}>
        <p style={{color: '#AED6F1', letterSpacing: '3px', textTransform: 'uppercase', fontSize: '0.9rem', marginBottom: '0.5rem'}}>Get In Touch</p>
        <h1 style={{color: 'white', fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 'bold', marginBottom: '1rem'}}>Contact Us</h1>
        <p style={{color: '#D6EAF8', fontSize: '1.1rem', maxWidth: '500px', margin: '0 auto'}}>
          We would love to hear from you. Send us a message and we will get back to you as soon as possible.
        </p>
      </div>

      <div style={{
        maxWidth: '1100px',
        margin: '0 auto',
        padding: '5rem 1rem',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '4rem'
      }}>
        <div>
          <h2 style={{color: '#1B4F72', fontSize: '1.8rem', fontWeight: 'bold', marginBottom: '2rem'}}>Our Contact Details</h2>
          {[
            { icon: '📍', label: 'Address', value: 'P.O Box 1152-00511, Nairobi, Kenya' },
            { icon: '📞', label: 'Phone', value: '+254 759 098 449' },
            { icon: '📱', label: 'Booking', value: '+254 721 675 766' },
            { icon: '📧', label: 'Email', value: 'info@dreamrootskenya.com' },
          ].map((item, i) => (
            <div key={i} style={{
              display: 'flex', gap: '1rem', marginBottom: '1.5rem',
              padding: '1.2rem', background: '#f8f9fa',
              borderRadius: '10px', alignItems: 'flex-start'
            }}>
              <div style={{fontSize: '1.5rem'}}>{item.icon}</div>
              <div>
                <p style={{color: '#888', fontSize: '0.85rem', marginBottom: '0.2rem'}}>{item.label}</p>
                <p style={{color: '#1B4F72', fontWeight: 'bold', fontSize: '1rem'}}>{item.value}</p>
              </div>
            </div>
          ))}
          <a href="https://wa.me/254759098449" target="_blank" rel="noreferrer" style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            background: '#25D366', color: 'white', textDecoration: 'none',
            padding: '0.8rem 1.5rem', borderRadius: '25px', fontWeight: 'bold', marginTop: '1rem'
          }}>
            💬 Chat on WhatsApp
          </a>
        </div>

        <div>
          <h2 style={{color: '#1B4F72', fontSize: '1.8rem', fontWeight: 'bold', marginBottom: '2rem'}}>Send a Message</h2>
          {status === 'success' && (
            <div style={{background: '#D5F5E3', border: '1px solid #27AE60', borderRadius: '8px', padding: '1rem', marginBottom: '1.5rem', color: '#1E8449'}}>
              Your message has been sent! We will get back to you soon.
            </div>
          )}
          {status === 'error' && (
            <div style={{background: '#FADBD8', border: '1px solid #E74C3C', borderRadius: '8px', padding: '1rem', marginBottom: '1.5rem', color: '#C0392B'}}>
              Something went wrong. Please try again.
            </div>
          )}
          <form onSubmit={handleSubmit}>
            {[
              { label: 'Full Name', name: 'name', type: 'text', placeholder: 'Your full name' },
              { label: 'Email Address', name: 'email', type: 'email', placeholder: 'your@email.com' },
            ].map((field, i) => (
              <div key={i} style={{marginBottom: '1.2rem'}}>
                <label style={{display: 'block', color: '#444', marginBottom: '0.4rem', fontWeight: '500'}}>
                  {field.label} *
                </label>
                <input
                  type={field.type}
                  name={field.name}
                  value={form[field.name]}
                  onChange={handleChange}
                  required
                  placeholder={field.placeholder}
                  style={{
                    width: '100%', padding: '0.8rem 1rem',
                    border: '2px solid #e0e0e0', borderRadius: '8px',
                    fontSize: '1rem', outline: 'none', boxSizing: 'border-box'
                  }}
                />
              </div>
            ))}
            <div style={{marginBottom: '1.5rem'}}>
              <label style={{display: 'block', color: '#444', marginBottom: '0.4rem', fontWeight: '500'}}>
                Message *
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                placeholder="How can we help you?"
                rows={6}
                style={{
                  width: '100%', padding: '0.8rem 1rem',
                  border: '2px solid #e0e0e0', borderRadius: '8px',
                  fontSize: '1rem', outline: 'none', resize: 'vertical', boxSizing: 'border-box'
                }}
              />
            </div>
            <button type="submit" disabled={loading} style={{
              background: loading ? '#888' : '#1B4F72',
              color: 'white', border: 'none',
              padding: '0.9rem 2.5rem', borderRadius: '25px',
              fontSize: '1rem', fontWeight: 'bold',
              cursor: loading ? 'not-allowed' : 'pointer', width: '100%'
            }}>
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default ContactPage