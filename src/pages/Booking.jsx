import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { motion } from 'framer-motion'
import PageWrapper from '../components/ui/PageWrapper'
import PageHero    from '../components/ui/PageHero'
import { SERVICES, SITE } from '../data/site'

export default function Booking() {
  const [submitted, setSubmitted] = useState(false)
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm()

  const onSubmit = async (data) => {
    await new Promise(r => setTimeout(r, 1200))
    console.log('Booking:', data)
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
      title="Book a Consultation"
      description="Book a consultation with DreamRoots Kenya. Select your service and preferred date."
    >
      <PageHero
        label="Consultation"
        title="Book a Session"
        subtitle="Select your service area and preferred time. Our team will confirm your consultation within 24 hours."
        breadcrumb={['Home', 'Booking']}
      />

      <section className="section" style={{ background: 'var(--clr-void)' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              style={{
                textAlign: 'center', padding: '5rem 2rem',
                background: 'var(--clr-surface)',
                border: '1px solid var(--clr-border-md)',
              }}
            >
              <div style={{ fontSize: '3rem', color: 'var(--clr-gold)', marginBottom: '1.5rem' }}>◆</div>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', fontWeight: 300, marginBottom: '1rem' }}>
                Booking Received
              </h2>
              <p style={{ color: 'var(--clr-text-muted)', maxWidth: '440px', margin: '0 auto 2rem', lineHeight: 1.8 }}>
                Thank you for booking with DreamRoots Kenya. A representative will contact you within 24 hours to confirm your consultation.
              </p>
              <p style={{ color: 'var(--clr-text-faint)', fontSize: '0.8rem', marginBottom: '2rem' }}>
                For urgent enquiries: <a href={`tel:${SITE.phone}`} style={{ color: 'var(--clr-gold)', textDecoration: 'none' }}>{SITE.phone}</a>
              </p>
              <button onClick={() => setSubmitted(false)} className="btn-gold"><span>Book Another</span></button>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              style={{
                background: 'var(--clr-surface)',
                border: '1px solid var(--clr-border)',
                padding: 'clamp(2.5rem, 5vw, 4rem)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2.5rem' }}>
                <span className="gold-line" />
                <span className="label gold">Consultation Request</span>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {/* Personal info row */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem' }}>
                  {[
                    { name: 'firstName', label: 'First Name', required: true },
                    { name: 'lastName', label: 'Last Name', required: true },
                  ].map(f => (
                    <div key={f.name}>
                      <label style={{ display: 'block', color: 'var(--clr-text-muted)', fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.4rem' }}>{f.label}</label>
                      <input {...register(f.name, { required: `${f.label} required` })} type="text" style={inputStyle(errors[f.name])}
                        onFocus={e => e.target.style.borderColor = 'var(--clr-gold)'}
                        onBlur={e => e.target.style.borderColor = errors[f.name] ? 'rgba(220,80,80,0.5)' : 'var(--clr-border)'}
                      />
                      {errors[f.name] && <p style={{ color: 'rgba(220,120,80,0.9)', fontSize: '0.72rem', marginTop: '0.3rem' }}>{errors[f.name].message}</p>}
                    </div>
                  ))}
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem' }}>
                  {[
                    { name: 'email', label: 'Email Address', type: 'email' },
                    { name: 'phone', label: 'Phone Number', type: 'tel' },
                  ].map(f => (
                    <div key={f.name}>
                      <label style={{ display: 'block', color: 'var(--clr-text-muted)', fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.4rem' }}>{f.label}</label>
                      <input {...register(f.name, { required: `${f.label} required` })} type={f.type || 'text'} style={inputStyle(errors[f.name])}
                        onFocus={e => e.target.style.borderColor = 'var(--clr-gold)'}
                        onBlur={e => e.target.style.borderColor = 'var(--clr-border)'}
                      />
                      {errors[f.name] && <p style={{ color: 'rgba(220,120,80,0.9)', fontSize: '0.72rem', marginTop: '0.3rem' }}>{errors[f.name].message}</p>}
                    </div>
                  ))}
                </div>

                <div>
                  <label style={{ display: 'block', color: 'var(--clr-text-muted)', fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.4rem' }}>Organization</label>
                  <input {...register('organization')} type="text" style={inputStyle(false)}
                    onFocus={e => e.target.style.borderColor = 'var(--clr-gold)'}
                    onBlur={e => e.target.style.borderColor = 'var(--clr-border)'}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', color: 'var(--clr-text-muted)', fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.4rem' }}>Service Area</label>
                  <select {...register('service', { required: 'Please select a service' })}
                    style={{ ...inputStyle(errors.service), cursor: 'pointer' }}
                    onFocus={e => e.target.style.borderColor = 'var(--clr-gold)'}
                    onBlur={e => e.target.style.borderColor = 'var(--clr-border)'}
                    defaultValue=""
                  >
                    <option value="" disabled style={{ background: 'var(--clr-elevated)' }}>Select a service…</option>
                    {SERVICES.map(s => (
                      <option key={s.slug} value={s.slug} style={{ background: 'var(--clr-elevated)' }}>{s.title}</option>
                    ))}
                    <option value="general" style={{ background: 'var(--clr-elevated)' }}>General Inquiry</option>
                  </select>
                  {errors.service && <p style={{ color: 'rgba(220,120,80,0.9)', fontSize: '0.72rem', marginTop: '0.3rem' }}>{errors.service.message}</p>}
                </div>

                <div>
                  <label style={{ display: 'block', color: 'var(--clr-text-muted)', fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.4rem' }}>Preferred Date</label>
                  <input {...register('date')} type="date" style={{ ...inputStyle(false), colorScheme: 'dark' }}
                    onFocus={e => e.target.style.borderColor = 'var(--clr-gold)'}
                    onBlur={e => e.target.style.borderColor = 'var(--clr-border)'}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', color: 'var(--clr-text-muted)', fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.4rem' }}>Additional Notes</label>
                  <textarea {...register('notes')} rows={4}
                    style={{ ...inputStyle(false), resize: 'vertical', minHeight: '100px' }}
                    onFocus={e => e.target.style.borderColor = 'var(--clr-gold)'}
                    onBlur={e => e.target.style.borderColor = 'var(--clr-border)'}
                    placeholder="Briefly describe your organization and what you're looking to achieve…"
                  />
                </div>

                <button type="submit" className="btn-gold" disabled={isSubmitting} style={{ justifyContent: 'center', padding: '1rem 2rem', opacity: isSubmitting ? 0.7 : 1 }}>
                  <span>{isSubmitting ? 'Submitting…' : 'Request Consultation'}</span>
                </button>
              </form>
            </motion.div>
          )}
        </div>
      </section>
    </PageWrapper>
  )
}

