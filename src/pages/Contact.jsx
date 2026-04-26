import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { motion } from 'framer-motion'
import PageWrapper from '../components/ui/PageWrapper'
import PageHero    from '../components/ui/PageHero'
import { SITE }    from '../data/site'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm()

  const onSubmit = async (data) => {
    // Replace with actual API call
    await new Promise(r => setTimeout(r, 1200))
    console.log('Contact form:', data)
    setSubmitted(true)
    reset()
  }

  const inputStyle = (hasError) => ({
    width: '100%',
    background: 'var(--clr-elevated)',
    border: `1px solid ${hasError ? 'rgba(220,80,80,0.5)' : 'var(--clr-border)'}`,
    color: 'var(--clr-text)',
    fontFamily: 'var(--font-sans)',
    fontSize: '0.88rem',
    padding: '0.85rem 1.1rem',
    outline: 'none',
    transition: 'border-color 0.25s',
    borderRadius: 0,
  })

  return (
    <PageWrapper
      title="Contact Us"
      description="Get in touch with DreamRoots Kenya. Email us, call us, or fill in the contact form."
    >
      <PageHero
        label="Get in Touch"
        title="Contact Us"
        subtitle="Have a question or ready to start a conversation? Reach out and our team will respond promptly."
        breadcrumb={['Home', 'Contact']}
      />

      <section className="section" style={{ background: 'var(--clr-void)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'clamp(3rem, 6vw, 6rem)' }}>

            {/* Contact info */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                <span className="gold-line" />
                <span className="label gold">Reach Us</span>
              </div>
              <h2 className="display-md" style={{ marginBottom: '2rem', fontStyle: 'italic' }}>We'd love to hear from you.</h2>

              {[
                { icon: '✆', label: 'Phone', value: SITE.phone, href: `tel:${SITE.phone}` },
                { icon: '✉', label: 'Email', value: SITE.email, href: `mailto:${SITE.email}` },
                { icon: '◎', label: 'Address', value: SITE.address, href: null },
              ].map(item => (
                <div key={item.label} style={{
                  display: 'flex', gap: '1.25rem',
                  padding: '1.5rem 0',
                  borderBottom: '1px solid var(--clr-border)',
                  alignItems: 'flex-start',
                }}>
                  <span style={{ color: 'var(--clr-gold)', fontSize: '1rem', marginTop: '2px', flexShrink: 0 }}>{item.icon}</span>
                  <div>
                    <div className="label" style={{ color: 'var(--clr-text-faint)', marginBottom: '0.35rem' }}>{item.label}</div>
                    {item.href ? (
                      <a href={item.href} style={{ color: 'var(--clr-text-muted)', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.2s' }}
                        onMouseEnter={e => e.currentTarget.style.color = 'var(--clr-gold)'}
                        onMouseLeave={e => e.currentTarget.style.color = 'var(--clr-text-muted)'}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p style={{ color: 'var(--clr-text-muted)', fontSize: '0.9rem' }}>{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              style={{
                background: 'var(--clr-surface)',
                border: '1px solid var(--clr-border)',
                padding: 'clamp(2rem, 4vw, 3rem)',
              }}
            >
              {submitted ? (
                <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
                  <div style={{ fontSize: '2.5rem', color: 'var(--clr-gold)', marginBottom: '1rem' }}>◆</div>
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', fontWeight: 300, marginBottom: '0.75rem' }}>Message Sent</h3>
                  <p style={{ color: 'var(--clr-text-muted)', fontSize: '0.9rem' }}>
                    Thank you for reaching out. A DreamRoots representative will get back to you shortly.
                  </p>
                  <button onClick={() => setSubmitted(false)} className="btn-gold" style={{ marginTop: '2rem' }}>
                    <span>Send Another</span>
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                    <span className="gold-line" />
                    <span className="label gold">Send a Message</span>
                  </div>

                  {[
                    { name: 'name', label: 'Full Name', type: 'text', required: true },
                    { name: 'email', label: 'Email Address', type: 'email', required: true },
                    { name: 'organization', label: 'Organization (Optional)', type: 'text', required: false },
                    { name: 'phone', label: 'Phone Number (Optional)', type: 'tel', required: false },
                  ].map(field => (
                    <div key={field.name}>
                      <label style={{ display: 'block', color: 'var(--clr-text-muted)', fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.4rem' }}>
                        {field.label}
                      </label>
                      <input
                        {...register(field.name, field.required ? { required: `${field.label} is required` } : {})}
                        type={field.type}
                        style={inputStyle(errors[field.name])}
                        onFocus={e => e.target.style.borderColor = 'var(--clr-gold)'}
                        onBlur={e => e.target.style.borderColor = errors[field.name] ? 'rgba(220,80,80,0.5)' : 'var(--clr-border)'}
                      />
                      {errors[field.name] && <p style={{ color: 'rgba(220,120,80,0.9)', fontSize: '0.72rem', marginTop: '0.3rem' }}>{errors[field.name].message}</p>}
                    </div>
                  ))}

                  <div>
                    <label style={{ display: 'block', color: 'var(--clr-text-muted)', fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.4rem' }}>
                      Message
                    </label>
                    <textarea
                      {...register('message', { required: 'Please include a message' })}
                      rows={5}
                      style={{ ...inputStyle(errors.message), resize: 'vertical', minHeight: '120px' }}
                      onFocus={e => e.target.style.borderColor = 'var(--clr-gold)'}
                      onBlur={e => e.target.style.borderColor = errors.message ? 'rgba(220,80,80,0.5)' : 'var(--clr-border)'}
                    />
                    {errors.message && <p style={{ color: 'rgba(220,120,80,0.9)', fontSize: '0.72rem', marginTop: '0.3rem' }}>{errors.message.message}</p>}
                  </div>

                  <button
                    type="submit"
                    className="btn-gold"
                    disabled={isSubmitting}
                    style={{ justifyContent: 'center', opacity: isSubmitting ? 0.7 : 1 }}
                  >
                    <span>{isSubmitting ? 'Sending…' : 'Send Message'}</span>
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </PageWrapper>
  )
}

