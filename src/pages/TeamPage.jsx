import Footer from '../components/Footer'

const boardMembers = [
  { name: 'Dr. Kennedy Ondara', role: 'Director', photo: 'https://dreamrootskenya.com/team/dr.okemwa.jpg', initial: 'K' },
  { name: 'Dr. Joyce Nyabuti', role: 'Director', photo: 'https://dreamrootskenya.com/team/dr.nyabuti.png', initial: 'J' },
  { name: 'Karen Afandi', role: 'Chief Executive Officer', photo: 'https://dreamrootskenya.com/team/female.png', initial: 'K' },
]

const managementTeam = [
  { name: 'Dr. Ferdinand Mbeche', role: 'Education Consulting', photo: 'https://dreamrootskenya.com/team/dr.mbeche.png', initial: 'F' },
  { name: 'Dr. Joyce Nyabuti', role: 'HR & Security Consulting', photo: 'https://dreamrootskenya.com/team/dr.nyabuti.png', initial: 'J' },
  { name: 'Prof. AM Wanjohi', role: 'Research Consulting', photo: 'https://dreamrootskenya.com/team/tony.png', initial: 'W' },
  { name: 'James Ongwae', role: 'Project Management Consulting', photo: 'https://dreamrootskenya.com/team/james.png', initial: 'J' },
  { name: 'David Maundu', role: 'Technical Consulting', photo: 'https://dreamrootskenya.com/team/male.png', initial: 'D' },
  { name: 'David Omondi', role: 'Legal Consulting', photo: 'https://dreamrootskenya.com/team/male.png', initial: 'D' },
  { name: 'Brenda Nyabiage Ondara', role: 'Finance & Admin', photo: 'https://dreamrootskenya.com/team/female.png', initial: 'B' },
  { name: 'Kenneth Ikunyua', role: 'Logistics Consulting', photo: 'https://dreamrootskenya.com/team/male.png', initial: 'K' },
  { name: 'Karen Afandi', role: 'Chief Executive Officer', photo: 'https://dreamrootskenya.com/team/female.png', initial: 'K' },
]

const MemberCard = ({ member }) => (
  <div
    style={{
      background: 'white', borderRadius: '16px',
      overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
      transition: 'transform 0.3s', cursor: 'pointer'
    }}
    onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-8px)'}
    onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
  >
    <div style={{
      height: '220px',
      background: 'linear-gradient(135deg, #1B4F72, #2E86C1)',
      position: 'relative', overflow: 'hidden'
    }}>
      <img
        src={member.photo}
        alt={member.name}
        style={{width: '100%', height: '100%', objectFit: 'cover'}}
        onError={e => {
          e.target.style.display = 'none'
          e.target.nextSibling.style.display = 'flex'
        }}
      />
      <div style={{
        display: 'none', position: 'absolute', inset: 0,
        alignItems: 'center', justifyContent: 'center',
        fontSize: '4rem', fontWeight: 'bold', color: 'white'
      }}>
        {member.initial}
      </div>
    </div>
    <div style={{padding: '1.5rem', textAlign: 'center'}}>
      <h3 style={{color: '#1B4F72', fontWeight: 'bold', fontSize: '1.1rem', marginBottom: '0.3rem'}}>
        {member.name}
      </h3>
      <p style={{color: '#2E86C1', fontSize: '0.9rem'}}>{member.role}</p>
    </div>
  </div>
)

const TeamPage = () => (
  <div>
    <div style={{
      background: 'linear-gradient(135deg, #1B4F72 0%, #2E86C1 100%)',
      padding: '5rem 1rem', textAlign: 'center'
    }}>
      <p style={{color: '#AED6F1', letterSpacing: '3px', textTransform: 'uppercase', fontSize: '0.9rem', marginBottom: '0.5rem'}}>
        Our People
      </p>
      <h1 style={{color: 'white', fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 'bold', marginBottom: '1rem'}}>
        Meet Our Team
      </h1>
      <p style={{color: '#D6EAF8', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto'}}>
        Our leadership team brings together decades of experience across finance, ICT, research, HR, marketing, education and training.
      </p>
    </div>

    <div style={{padding: '5rem 1rem', background: '#f8f9fa'}}>
      <div style={{textAlign: 'center', marginBottom: '3rem'}}>
        <h2 style={{color: '#1B4F72', fontSize: '2rem', fontWeight: 'bold'}}>Board of Directors</h2>
        <div style={{width: '60px', height: '4px', background: '#2E86C1', margin: '1rem auto 0', borderRadius: '2px'}}/>
      </div>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '2rem', maxWidth: '900px', margin: '0 auto'
      }}>
        {boardMembers.map((m, i) => <MemberCard key={i} member={m} />)}
      </div>
    </div>

    <div style={{padding: '5rem 1rem'}}>
      <div style={{textAlign: 'center', marginBottom: '3rem'}}>
        <h2 style={{color: '#1B4F72', fontSize: '2rem', fontWeight: 'bold'}}>Management Team</h2>
        <div style={{width: '60px', height: '4px', background: '#2E86C1', margin: '1rem auto 0', borderRadius: '2px'}}/>
      </div>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '2rem', maxWidth: '1200px', margin: '0 auto'
      }}>
        {managementTeam.map((m, i) => <MemberCard key={i} member={m} />)}
      </div>
    </div>

    <Footer />
  </div>
)

export default TeamPage