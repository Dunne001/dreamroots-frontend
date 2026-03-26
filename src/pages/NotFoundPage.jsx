import { Link } from 'react-router-dom'

const NotFoundPage = () => (
  <div style={{
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding: '2rem',
    background: 'linear-gradient(135deg, #1B4F72 0%, #2E86C1 100%)'
  }}>
    <div>
      <div style={{fontSize: '8rem', marginBottom: '1rem'}}>🔍</div>
      <h1 style={{color: 'white', fontSize: '6rem', fontWeight: 'bold', margin: 0}}>404</h1>
      <h2 style={{color: '#AED6F1', fontSize: '1.8rem', marginBottom: '1rem'}}>Page Not Found</h2>
      <p style={{color: '#D6EAF8', fontSize: '1.1rem', marginBottom: '2rem', maxWidth: '400px'}}>
        The page you are looking for does not exist or has been moved.
      </p>
      <div style={{display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap'}}>
        <Link to="/" style={{
          background: 'white', color: '#1B4F72',
          textDecoration: 'none', padding: '0.9rem 2rem',
          borderRadius: '25px', fontWeight: 'bold'
        }}>
          Go Home
        </Link>
        <Link to="/contact" style={{
          background: 'transparent', color: 'white',
          textDecoration: 'none', padding: '0.9rem 2rem',
          borderRadius: '25px', fontWeight: 'bold',
          border: '2px solid white'
        }}>
          Contact Us
        </Link>
      </div>
    </div>
  </div>
)

export default NotFoundPage