import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'
import PageWrapper from '../components/ui/PageWrapper'
import DynamicLucideIcon from '../components/ui/DynamicLucideIcon'
import api from '../utils/api'

export default function Booking() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    watch
  } = useForm()
  
  const [services, setServices] = useState([])
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' })
  const selectedServiceId = watch('service_id')

  useEffect(() => {
    api.get('/services')
      .then(res => setServices(res.data))
      .catch(err => console.error('Failed to load services:', err))
  }, [])

  const onSubmit = async (data) => {
    setSubmitStatus({ type: '', message: '' })
    try {
      await api.post('/booking', data)
      setSubmitStatus({ type: 'success', message: '✓ Booking request submitted successfully! We will contact you within 24 hours.' })
      reset()
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } catch (error) {
      console.error('Booking form error:', error)
      setSubmitStatus({ type: 'error', message: '❌ Failed to submit booking. Please try again later.' })
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const today = new Date().toISOString().split('T')[0]
  const selectedService = services.find(s => s.id == selectedServiceId)

  const inputStyle = (hasError) => ({
    width: '100%',
    maxWidth: '100%',
    boxSizing: 'border-box',
    padding: '12px 16px',
    borderRadius: '12px',
    backgroundColor: 'var(--clr-void)',
    border: `1.5px solid ${hasError ? '#dc3545' : 'var(--clr-border)'}`,
    color: 'var(--clr-text)',
    fontSize: '16px',
    transition: 'all 0.2s ease',
    outline: 'none'
  })

  const selectStyle = (hasError) => ({
    width: '100%',
    maxWidth: '100%',
    boxSizing: 'border-box',
    padding: '12px 16px',
    borderRadius: '12px',
    backgroundColor: 'var(--clr-void)',
    border: `1.5px solid ${hasError ? '#dc3545' : 'var(--clr-border)'}`,
    color: 'var(--clr-text)',
    fontSize: '16px',
    cursor: 'pointer'
  })

  const trustIndicators = [
    { icon: 'Clock', text: '24hr Response Time', color: '#10b981' },
    { icon: 'Headphones', text: 'Free Consultation', color: 'var(--clr-gold)' },
    { icon: 'ShieldCheck', text: '100% Confidential', color: '#3b82f6' },
    { icon: 'Users', text: 'Expert Team', color: '#8b5cf6' }
  ]

  const steps = [
    { number: 1, title: 'Select Service', icon: 'Briefcase' },
    { number: 2, title: 'Your Details', icon: 'User' },
    { number: 3, title: 'Schedule', icon: 'Calendar' },
    { number: 4, title: 'Confirm', icon: 'CheckCircle' }
  ]

  return (
    <PageWrapper title="Book a Consultation | DreamRoots Kenya" description="Schedule a consultation with DreamRoots Kenya experts">
      <div style={{
        background: 'linear-gradient(135deg, var(--clr-deep) 0%, var(--clr-primary) 100%)',
        padding: '60px 20px',
        textAlign: 'center',
        marginBottom: '48px'
      }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <DynamicLucideIcon name="CalendarCheck" size={60} strokeWidth={1.5} color="var(--clr-gold)" style={{ marginBottom: '16px' }} />
          <h1 style={{ fontSize: 'clamp(28px, 5vw, 48px)', marginBottom: '8px', color: 'white' }}>Book a Consultation</h1>
          <p style={{ fontSize: 'clamp(14px, 4vw, 18px)', color: 'rgba(255,255,255,0.8)', maxWidth: '600px', margin: '0 auto' }}>
            Take the first step toward transforming your organization
          </p>
        </motion.div>
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px 60px' }}>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '16px', marginBottom: '48px' }}>
          {trustIndicators.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              style={{
                background: 'var(--clr-surface)',
                borderRadius: '16px',
                padding: '16px',
                textAlign: 'center',
                border: '1px solid var(--clr-border)',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
              }}
            >
              <DynamicLucideIcon name={item.icon} size={28} strokeWidth={1.5} color={item.color} style={{ marginBottom: '8px' }} />
              <p style={{ fontWeight: '600', margin: 0, fontSize: '14px' }}>{item.text}</p>
            </motion.div>
          ))}
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '48px', flexWrap: 'wrap', gap: '16px' }}>
          {steps.map((step, idx) => (
            <div key={idx} style={{ flex: 1, minWidth: '80px', textAlign: 'center' }}>
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                background: 'var(--clr-gold)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 8px',
                color: '#1B4F72',
                fontWeight: 'bold',
                fontSize: '20px'
              }}>
                {step.number}
              </div>
              <p style={{ fontSize: '12px', margin: 0, color: 'var(--clr-text-muted)' }}>{step.title}</p>
            </div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{
            background: 'var(--clr-surface)',
            borderRadius: '24px',
            padding: '32px',
            boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
            border: '1px solid var(--clr-border)',
            overflow: 'hidden'
          }}
        >
          {submitStatus.message && (
            <div style={{
              padding: '16px',
              marginBottom: '24px',
              borderRadius: '12px',
              backgroundColor: submitStatus.type === 'success' ? 'rgba(16, 185, 129, 0.1)' : 'rgba(220, 53, 69, 0.1)',
              color: submitStatus.type === 'success' ? '#10b981' : '#dc3545',
              border: `1px solid ${submitStatus.type === 'success' ? '#10b981' : '#dc3545'}`,
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              flexWrap: 'wrap'
            }}>
              <DynamicLucideIcon name={submitStatus.type === 'success' ? 'CheckCircle' : 'AlertCircle'} size={20} />
              <span>{submitStatus.message}</span>
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            
            <div style={{
              background: 'rgba(26, 45, 80, 0.5)',
              borderRadius: '16px',
              padding: '24px',
              overflow: 'hidden'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px', flexWrap: 'wrap' }}>
                <DynamicLucideIcon name="Briefcase" size={20} color="var(--clr-gold)" />
                <label style={{ fontWeight: '600' }}>Select Your Service *</label>
              </div>
              <select
                {...register('service_id', { required: 'Please select a service' })}
                style={selectStyle(!!errors.service_id)}
              >
                <option value="">Choose a service...</option>
                {services.map(service => (
                  <option key={service.id} value={service.id}>{service.name}</option>
                ))}
              </select>
              {errors.service_id && <p style={{ color: '#dc3545', fontSize: '14px', marginTop: '8px' }}>{errors.service_id.message}</p>}
              
              {selectedService && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  style={{ marginTop: '16px', padding: '16px', background: 'var(--clr-void)', borderRadius: '12px', borderLeft: `3px solid var(--clr-gold)` }}
                >
                  <p style={{ margin: 0, fontSize: '14px', color: 'var(--clr-text-muted)' }}>{selectedService.summary}</p>
                </motion.div>
              )}
            </div>

            <div style={{
              background: 'rgba(26, 45, 80, 0.5)',
              borderRadius: '16px',
              padding: '24px',
              overflow: 'hidden'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '24px', flexWrap: 'wrap' }}>
                <DynamicLucideIcon name="User" size={20} color="var(--clr-gold)" />
                <h3 style={{ margin: 0, fontSize: '18px' }}>Your Information</h3>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px' }}>
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>Full Name <span style={{ color: '#dc3545' }}>*</span></label>
                  <input type="text" placeholder="John Doe" {...register('name', { required: 'Name is required', minLength: { value: 2, message: 'Name must be at least 2 characters' }, pattern: { value: /^[A-Za-z\s]+$/, message: 'Name can only contain letters and spaces' } })} style={inputStyle(!!errors.name)} />
                  {errors.name && <p style={{ color: '#dc3545', fontSize: '14px', marginTop: '8px' }}>{errors.name.message}</p>}
                </div>

                <div>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>Email Address <span style={{ color: '#dc3545' }}>*</span></label>
                  <input type="email" placeholder="john@example.com" {...register('email', { required: 'Email is required', pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: 'Enter a valid email address' } })} style={inputStyle(!!errors.email)} />
                  {errors.email && <p style={{ color: '#dc3545', fontSize: '14px', marginTop: '8px' }}>{errors.email.message}</p>}
                </div>

                <div>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>Phone Number <span style={{ color: '#dc3545' }}>*</span></label>
                  <input type="tel" placeholder="0712345678" {...register('phone', { required: 'Phone number is required', pattern: { value: /^(?:\+254|0)(7|1)\d{8}$/, message: 'Enter a valid Kenyan phone number' } })} style={inputStyle(!!errors.phone)} />
                  {errors.phone && <p style={{ color: '#dc3545', fontSize: '14px', marginTop: '8px' }}>{errors.phone.message}</p>}
                </div>
              </div>
            </div>

            <div style={{
              background: 'rgba(26, 45, 80, 0.5)',
              borderRadius: '16px',
              padding: '24px',
              overflow: 'hidden'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '24px', flexWrap: 'wrap' }}>
                <DynamicLucideIcon name="Calendar" size={20} color="var(--clr-gold)" />
                <h3 style={{ margin: 0, fontSize: '18px' }}>Schedule Your Consultation</h3>
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>Preferred Date <span style={{ color: '#dc3545' }}>*</span></label>
                <input type="date" {...register('preferred_date', { required: 'Preferred date is required', validate: value => value >= today || 'Preferred date must be today or a future date' })} min={today} style={inputStyle(!!errors.preferred_date)} />
                {errors.preferred_date && <p style={{ color: '#dc3545', fontSize: '14px', marginTop: '8px' }}>{errors.preferred_date.message}</p>}
                <p style={{ fontSize: '12px', color: 'var(--clr-text-muted)', marginTop: '8px', display: 'flex', alignItems: 'center', gap: '4px', flexWrap: 'wrap' }}>
                  <DynamicLucideIcon name="Clock" size={12} />
                  We'll contact you within 24 hours to confirm the exact time
                </p>
              </div>
            </div>

            <div style={{
              background: 'rgba(26, 45, 80, 0.5)',
              borderRadius: '16px',
              padding: '24px',
              overflow: 'hidden'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px', flexWrap: 'wrap' }}>
                <DynamicLucideIcon name="MessageSquare" size={20} color="var(--clr-gold)" />
                <label style={{ fontWeight: '600' }}>Additional Information</label>
              </div>
              <textarea rows="4" {...register('message')} placeholder="Tell us more about your needs, questions, goals, or any specific requirements..." style={inputStyle(false)} />
            </div>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              style={{
                width: '100%',
                padding: '16px 32px',
                background: 'linear-gradient(135deg, var(--clr-gold) 0%, #e6c200 100%)',
                color: '#1B4F72',
                border: 'none',
                borderRadius: '40px',
                fontSize: '16px',
                fontWeight: 'bold',
                cursor: isSubmitting ? 'not-allowed' : 'pointer',
                opacity: isSubmitting ? 0.7 : 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px'
              }}
            >
              <DynamicLucideIcon name={isSubmitting ? 'Loader' : 'Send'} size={18} />
              {isSubmitting ? 'Submitting...' : 'Submit Booking Request'}
            </motion.button>
          </form>
        </motion.div>

        <p style={{
          textAlign: 'center',
          marginTop: '32px',
          fontSize: '14px',
          color: 'var(--clr-text-muted)'
        }}>
          <DynamicLucideIcon name="Lock" size={14} style={{ display: 'inline', marginRight: '4px' }} />
          Your information is secure and will only be used to respond to your inquiry
        </p>
      </div>
    </PageWrapper>
  )
}