import Footer from '../components/Footer'

const testimonials = [
  {
    quote: "DreamRoots Kenya transformed the way our organization approaches project management. Their expertise and hands-on support helped us streamline our processes, resulting in improved efficiency and greater impact in the communities we serve.",
    name: "James Mwangi",
    title: "Program Director",
    organization: "Umoja Community Initiative",
    initial: "J"
  },
  {
    quote: "Working with DreamRoots Kenya was a game-changer for our business. Their tailored strategies and insightful guidance helped us overcome challenges and unlock new growth opportunities. I highly recommend their services.",
    name: "Amina Njeri",
    title: "CEO",
    organization: "SafiTech Solutions",
    initial: "A"
  },
  {
    quote: "The team at DreamRoots Kenya demonstrated exceptional professionalism and deep knowledge in monitoring and evaluation. Their support enabled us to measure our impact accurately and improve our program outcomes significantly.",
    name: "Peter Otieno",
    title: "M&E Manager",
    organization: "GreenFuture NGO",
    initial: "P"
  },
  {
    quote: "DreamRoots Kenya's consultancy services helped our company embrace digital transformation smoothly. Their expert advice and training sessions empowered our staff and improved our operational efficiency.",
    name: "Grace Wanjiku",
    title: "Operations Manager",
    organization: "MajiTech Ltd.",
    initial: "G"
  },
  {
    quote: "I am impressed by DreamRoots Kenya's commitment to community empowerment. Their participatory approach and capacity-building initiatives have made a real difference in our local projects.",
    name: "Samuel Karanja",
    title: "Community Leader",
    organization: "Kibera Youth Empowerment Group",
    initial: "S"
  }
]

const TestimonialsPage = () => (
  <div>
    <div style={{
      background: 'linear-gradient(135deg, #1B4F72 0%, #2E86C1 100%)',
      padding: '5rem 1rem', textAlign: 'center'
    }}>
      <p style={{color: '#AED6F1', letterSpacing: '3px', textTransform: 'uppercase', fontSize: '0.9rem', marginBottom: '0.5rem'}}>
        Client Stories
      </p>
      <h1 style={{color: 'white', fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 'bold', marginBottom: '1rem'}}>
        What Our Clients Say
      </h1>
      <p style={{color: '#D6EAF8', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto'}}>
        Hear from organizations and individuals who have experienced the DreamRoots Kenya difference.
      </p>
    </div>

    <div style={{padding: '5rem 1rem', maxWidth: '900px', margin: '0 auto'}}>
      {testimonials.map((t, i) => (
        <div key={i} style={{
          background: 'white', borderRadius: '16px',
          padding: '2.5rem', marginBottom: '2rem',
          boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
          borderLeft: '5px solid #2E86C1'
        }}>
          <p style={{
            color: '#444', fontSize: '1.1rem',
            lineHeight: '1.9', fontStyle: 'italic',
            marginBottom: '1.5rem'
          }}>
            "{t.quote}"
          </p>
          <div style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
            <div style={{
              width: '50px', height: '50px', borderRadius: '50%',
              background: 'linear-gradient(135deg, #1B4F72, #2E86C1)',
              display: 'flex', alignItems: 'center',
              justifyContent: 'center', color: 'white',
              fontSize: '1.2rem', fontWeight: 'bold', flexShrink: 0
            }}>
              {t.initial}
            </div>
            <div>
              <p style={{color: '#1B4F72', fontWeight: 'bold', fontSize: '1rem', margin: 0}}>
                {t.name}
              </p>
              <p style={{color: '#666', fontSize: '0.9rem', margin: 0}}>
                {t.title}, {t.organization}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
    <Footer />
  </div>
)

export default TestimonialsPage