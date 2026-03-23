import { useState } from 'react'
import Footer from '../components/Footer'

const services = [
  'Education Consultancy',
  'ICT Solutions',
  'Finance',
  'Human Resource Management',
  'Marketing',
  'Research',
  'Soft Skills Training',
  'Training & Capacity Building'
]

const BookingPage = () => {
  const [form, setForm] = useState({
    name: '', email: '', phone: '',
    service: '', preferred_date: '', message: ''
  })
  const [status, setStatus] = useState('')
  const [loading, setLoading] = useState(false)

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await fetch('http://localhost:8000/api/v1/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      if (res.ok) {
        setStatus('success')
        setForm({ name: '', email: '', phone: '', service: '', preferred_date: '', message: '' })
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
        background: 'linear-gradient(135deg, #117A65 0%, #1ABC9C 100%)',
        padding: '5rem 1rem',
        textAlign: 'center'
      }}>
        <p style={{color: '#A9DFBF', letterSpacing: '3px', textTransform: 'uppercase', fontSize: '0.9rem', marginBottom: '0.5rem'}}>
          Schedule a Meeting
        </p>
        <h1 style={{color: 'white', fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 'bold', marginBottom: '1rem'}}>
          Book a Consultation
        </h1>
        <p style={{color: '#D5F5E3', fontSize: '1.1rem', maxWidth: '500px', margin: '0 auto'}}>
          Take the first step towards transforming your organization. Book a consultation with our experts today.
        </p>
      </div>

      <div style={{maxWidth: '700px', margin: '0 auto', padding: '5rem 1rem'}}>
        {status === 'success' && (
          <div style={{background: '#D5F5E3', border: '1px solid #27AE60', borderRadius: '8px', padding: '1rem', marginBottom: '1.5rem', color: '#1E8449', textAlign: 'center'}}>
            Booking submitted successfully! We will contact you shortly.
          </div>
        )}
        {status === 'error' && (
          <div style={{background: '#FADBD8', border: '1px solid #E74C3C', borderRadius: '8px', padding: '1rem', marginBottom: '1.5rem', color: '#C0392B', textAlign: 'center'}}>
            Something went wrong. Please try again.
          </div>
        )}

        <div style={{background: 'white', borderRadius: '16px', padding: '2.5rem', boxShadow: '0 8px 40px rgba(0,0,0,0.1)'}}>
          <h2 style={{color: '#1B4F72', fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '2rem', textAlign: 'center'}}>
            Fill in Your Details
          </h2>
          <form onSubmit={handleSubmit}>

            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '1.2rem'}}>
              <div>
                <label style={{display: 'block', color: '#444', marginBottom: '0.4rem', fontWeight: '500', fontSize: '0.9rem'}}>Full Name *</label>
                <input type="text" name="name" value={form.name} onChange={handleChange} required placeholder="Your name"
                  style={{width: '100%', padding: '0.8rem', border: '2px solid #e0e0e0', borderRadius: '8px', fontSize: '0.95rem', boxSizing: 'border-box'}} />
              </div>
              <div>
                <label style={{display: 'block', color: '#444', marginBottom: '0.4rem', fontWeight: '500', fontSize: '0.9rem'}}>Email *</label>
                <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder="your@email.com"
                  style={{width: '100%', padding: '0.8rem', border: '2px solid #e0e0e0', borderRadius: '8px', fontSize: '0.95rem', boxSizing: 'border-box'}} />
              </div>
            </div>

            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '1.2rem'}}>
              <div>
                <label style={{display: 'block', color: '#444', marginBottom: '0.4rem', fontWeight: '500', fontSize: '0.9rem'}}>Phone *</label>
                <input type="text" name="phone" value={form.phone} onChange={handleChange} required placeholder="+254..."
                  style={{width: '100%', padding: '0.8rem', border: '2px solid #e0e0e0', borderRadius: '8px', fontSize: '0.95rem', boxSizing: 'border-box'}} />
              </div>
              <div>
                <label style={{display: 'block', color: '#444', marginBottom: '0.4rem', fontWeight: '500', fontSize: '0.9rem'}}>Service</label>
                <select name="service" value={form.service} onChange={handleChange}
                  style={{width: '100%', padding: '0.8rem', border: '2px solid #e0e0e0', borderRadius: '8px', fontSize: '0.95rem', boxSizing: 'border-box'}}>
                  <option value="">Select a service</option>
                  {services.map((s, i) => <option key={i} value={s}>{s}</option>)}
                </select>
              </div>
            </div>

            <div style={{marginBottom: '1.2rem'}}>
              <label style={{display: 'block', color: '#444', marginBottom: '0.4rem', fontWeight: '500', fontSize: '0.9rem'}}>Preferred Date</label>
              <input type="date" name="preferred_date" value={form.preferred_date} onChange={handleChange}
                style={{width: '100%', padding: '0.8rem', border: '2px solid #e0e0e0', borderRadius: '8px', fontSize: '0.95rem', boxSizing: 'border-box'}} />
            </div>

            <div style={{marginBottom: '1.5rem'}}>
              <label style={{display: 'block', color: '#444', marginBottom: '0.4rem', fontWeight: '500', fontSize: '0.9rem'}}>Message</label>
              <textarea name="message" value={form.message} onChange={handleChange} placeholder="Tell us about your needs..." rows={4}
                style={{width: '100%', padding: '0.8rem', border: '2px solid #e0e0e0', borderRadius: '8px', fontSize: '0.95rem', resize: 'vertical', boxSizing: 'border-box'}} />
            </div>

            <button type="submit" disabled={loading} style={{
              background: loading ? '#888' : 'linear-gradient(135deg, #117A65, #1ABC9C)',
              color: 'white', border: 'none',
              padding: '1rem 2.5rem', borderRadius: '25px',
              fontSize: '1rem', fontWeight: 'bold',
              cursor: loading ? 'not-allowed' : 'pointer', width: '100%'
            }}>
              {loading ? 'Submitting...' : 'Book Consultation'}
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default BookingPage