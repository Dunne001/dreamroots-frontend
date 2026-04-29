import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'
import PageWrapper from '../components/ui/PageWrapper'
import DynamicLucideIcon from '../components/ui/DynamicLucideIcon'
import api from '../utils/api'

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm()
  
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' })

  const onSubmit = async (data) => {
    setSubmitStatus({ type: '', message: '' })
    try {
      await api.post('/contact', data)
      setSubmitStatus({ 
        type: 'success', 
        message: '✓ Message sent successfully! We will get back to you within 24 hours.' 
      })
      reset()
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } catch (error) {
      console.error('Contact form error:', error)
      setSubmitStatus({ 
        type: 'error', 
        message: '❌ Failed to send message. Please try again later.' 
      })
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  // Responsive styles
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

  const textareaStyle = (hasError) => ({
    width: '100%',
    maxWidth: '100%',
    boxSizing: 'border-box',
    padding: '12px 16px',
    borderRadius: '12px',
    backgroundColor: 'var(--clr-void)',
    border: `1.5px solid ${hasError ? '#dc3545' : 'var(--clr-border)'}`,
    color: 'var(--clr-text)',
    fontSize: '16px',
    resize: 'vertical',
    fontFamily: 'inherit',
    transition: 'all 0.2s ease',
    outline: 'none'
  })

  const labelStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    marginBottom: '8px',
    fontWeight: '600',
    color: 'var(--clr-text)',
    fontSize: '14px',
    flexWrap: 'wrap'
  }

  const requiredStar = { color: '#dc3545', marginLeft: '4px' }

  const benefits = [
    { icon: 'Clock', title: 'Fast Response', description: 'Within 24 hours', color: '#10b981' },
    { icon: 'Headphones', title: 'Expert Support', description: 'Dedicated team', color: 'var(--clr-gold)' },
    { icon: 'MessageCircle', title: 'No Obligation', description: 'Free initial chat', color: '#3b82f6' },
    { icon: 'ShieldCheck', title: 'Confidential', description: '100% private', color: '#8b5cf6' }
  ]

  const contactMethods = [
    { icon: 'Phone', title: 'Call Us', details: '+254 759 098 449', action: 'tel:+254759098449' },
    { icon: 'Mail', title: 'Email Us', details: 'info@dreamrootskenya.com', action: 'mailto:info@dreamrootskenya.com' },
    { icon: 'MapPin', title: 'Visit Us', details: 'Nairobi, Kenya', action: 'https://maps.google.com' },
    { icon: 'MessageCircle', title: 'WhatsApp', details: '+254 759 098 449', action: 'https://wa.me/254759098449' }
  ]

  return (
    <PageWrapper title="Contact Us | DreamRoots Kenya" description="Get in touch with DreamRoots Kenya for consulting services">
      <div style={{
        background: 'linear-gradient(135deg, var(--clr-deep) 0%, var(--clr-primary) 100%)',
        padding: '60px 20px',
        textAlign: 'center',
        marginBottom: '48px'
      }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <DynamicLucideIcon name="MessageCircle" size={60} strokeWidth={1.5} color="var(--clr-gold)" style={{ marginBottom: '16px' }} />
          <h1 style={{ fontSize: 'clamp(28px, 5vw, 48px)', marginBottom: '8px', color: 'white' }}>Contact Us</h1>
          <p style={{ fontSize: 'clamp(14px, 4vw, 18px)', color: 'rgba(255,255,255,0.8)', maxWidth: '600px', margin: '0 auto' }}>
            Have questions? We'd love to hear from you
          </p>
        </motion.div>
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px 60px' }}>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '32px'
        }}>
          
          {/* Left Column */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              style={{
                background: 'var(--clr-surface)',
                borderRadius: '24px',
                padding: '24px',
                marginBottom: '32px',
                boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
                border: '1px solid var(--clr-border)',
                overflow: 'hidden'
              }}
            >
              <h3 style={{ marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                <DynamicLucideIcon name="Sparkles" size={20} color="var(--clr-gold)" />
                Why Choose DreamRoots?
              </h3>
              <div style={{ display: 'grid', gap: '16px' }}>
                {benefits.map((benefit, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
                    <div style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '12px',
                      background: `rgba(${benefit.color === '#10b981' ? '16,185,129' : benefit.color === '#3b82f6' ? '59,130,246' : benefit.color === '#8b5cf6' ? '139,92,246' : '212,175,55'}, 0.1)`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      <DynamicLucideIcon name={benefit.icon} size={24} color={benefit.color} />
                    </div>
                    <div>
                      <p style={{ fontWeight: 'bold', margin: 0 }}>{benefit.title}</p>
                      <p style={{ fontSize: '14px', color: 'var(--clr-text-muted)', margin: 0 }}>{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              style={{
                background: 'var(--clr-surface)',
                borderRadius: '24px',
                padding: '24px',
                boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
                border: '1px solid var(--clr-border)',
                overflow: 'hidden'
              }}
            >
              <h3 style={{ marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                <DynamicLucideIcon name="Phone" size={20} color="var(--clr-gold)" />
                Other Ways to Connect
              </h3>
              <div style={{ display: 'grid', gap: '16px' }}>
                {contactMethods.map((method, idx) => (
                  <a
                    key={idx}
                    href={method.action}
                    target={method.icon === 'MapPin' ? '_blank' : '_self'}
                    rel="noopener noreferrer"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '16px',
                      padding: '12px',
                      borderRadius: '12px',
                      background: 'rgba(26, 45, 80, 0.5)',
                      textDecoration: 'none',
                      transition: 'all 0.2s ease',
                      flexWrap: 'wrap'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(212, 175, 55, 0.1)'
                      e.currentTarget.style.transform = 'translateX(5px)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(26, 45, 80, 0.5)'
                      e.currentTarget.style.transform = 'translateX(0)'
                    }}
                  >
                    <DynamicLucideIcon name={method.icon} size={24} color="var(--clr-gold)" />
                    <div>
                      <p style={{ fontWeight: 'bold', margin: 0, color: 'var(--clr-text)' }}>{method.title}</p>
                      <p style={{ fontSize: '14px', color: 'var(--clr-text-muted)', margin: 0 }}>{method.details}</p>
                    </div>
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column - Form */}
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
            <h2 style={{ marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
              <DynamicLucideIcon name="Mail" size={24} color="var(--clr-gold)" />
              Send Us a Message
            </h2>
            <p style={{ marginBottom: '24px', color: 'var(--clr-text-muted)' }}>
              Fill out the form below and we'll respond within 24 hours
            </p>

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
              
              <div>
                <label style={labelStyle}>
                  <DynamicLucideIcon name="User" size={16} />
                  Full Name <span style={requiredStar}>*</span>
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  {...register('name', {
                    required: 'Name is required',
                    minLength: { value: 2, message: 'Name must be at least 2 characters' },
                    pattern: { value: /^[A-Za-z\s]+$/, message: 'Name can only contain letters and spaces' }
                  })}
                  style={inputStyle(!!errors.name)}
                />
                {errors.name && <p style={{ color: '#dc3545', fontSize: '14px', marginTop: '8px' }}>{errors.name.message}</p>}
              </div>

              <div>
                <label style={labelStyle}>
                  <DynamicLucideIcon name="Mail" size={16} />
                  Email Address <span style={requiredStar}>*</span>
                </label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Enter a valid email address'
                    }
                  })}
                  style={inputStyle(!!errors.email)}
                />
                {errors.email && <p style={{ color: '#dc3545', fontSize: '14px', marginTop: '8px' }}>{errors.email.message}</p>}
              </div>

              <div>
                <label style={labelStyle}>
                  <DynamicLucideIcon name="Phone" size={16} />
                  Phone Number <span style={requiredStar}>*</span>
                </label>
                <input
                  type="tel"
                  placeholder="0712345678"
                  {...register('phone', {
                    required: 'Phone number is required',
                    pattern: {
                      value: /^(?:\+254|0)(7|1)\d{8}$/,
                      message: 'Enter a valid Kenyan phone number'
                    }
                  })}
                  style={inputStyle(!!errors.phone)}
                />
                {errors.phone && <p style={{ color: '#dc3545', fontSize: '14px', marginTop: '8px' }}>{errors.phone.message}</p>}
              </div>

              <div>
                <label style={labelStyle}>
                  <DynamicLucideIcon name="MessageSquare" size={16} />
                  Subject <span style={requiredStar}>*</span>
                </label>
                <input
                  type="text"
                  placeholder="How can we help you?"
                  {...register('subject', {
                    required: 'Subject is required',
                    minLength: { value: 3, message: 'Subject must be at least 3 characters' }
                  })}
                  style={inputStyle(!!errors.subject)}
                />
                {errors.subject && <p style={{ color: '#dc3545', fontSize: '14px', marginTop: '8px' }}>{errors.subject.message}</p>}
              </div>

              <div>
                <label style={labelStyle}>
                  <DynamicLucideIcon name="FileText" size={16} />
                  Message <span style={requiredStar}>*</span>
                </label>
                <textarea
                  rows="5"
                  placeholder="Tell us more about your inquiry..."
                  {...register('message', {
                    required: 'Message is required',
                    minLength: { value: 10, message: 'Message must be at least 10 characters' }
                  })}
                  style={textareaStyle(!!errors.message)}
                />
                {errors.message && <p style={{ color: '#dc3545', fontSize: '14px', marginTop: '8px' }}>{errors.message.message}</p>}
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
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>
            </form>
          </motion.div>
        </div>

        <p style={{
          textAlign: 'center',
          marginTop: '48px',
          fontSize: '14px',
          color: 'var(--clr-text-muted)'
        }}>
          <DynamicLucideIcon name="Lock" size={14} style={{ display: 'inline', marginRight: '4px' }} />
          Your information is secure and will never be shared with third parties
        </p>
      </div>
    </PageWrapper>
  )
}