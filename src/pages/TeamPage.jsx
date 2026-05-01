import { useEffect, useState } from 'react';
import PageWrapper from '../components/ui/PageWrapper';
import api from '../utils/api';

export default function TeamPage() {
  const [board, setBoard] = useState([]);
  const [management, setManagement] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      api.get('/team/board'),
      api.get('/team/management')
    ])
      .then(([boardRes, managementRes]) => {
        setBoard(boardRes.data);
        setManagement(managementRes.data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching team data:', err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <PageWrapper title="Our Team | DreamRoots Kenya">
        <div style={{ textAlign: 'center', padding: '4rem' }}>Loading team...</div>
      </PageWrapper>
    );
  }

  return (
    <PageWrapper title="Our Team | DreamRoots Kenya" description="Meet our Board and Management Team">
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '4rem 2rem' }}>
        
        {/* Board Section */}
        <section>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem', textAlign: 'center' }}>Our Team</h1>
          <h2 style={{ fontSize: '1.8rem', marginTop: '2rem', marginBottom: '1rem', color: 'var(--clr-gold)' }}>Board of Directors</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
            {board.map((member, idx) => (
              <div key={member.id || idx} style={{ background: 'var(--clr-surface)', borderRadius: '12px', padding: '1rem', textAlign: 'center' }}>
                <img src={member.photo || `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}`} alt={member.name} style={{ width: '120px', height: '120px', borderRadius: '50%', objectFit: 'cover' }} />
                <h3>{member.name}</h3>
                <p style={{ color: 'var(--clr-gold)' }}>{member.role}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Management Team Section */}
        <section>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: 'var(--clr-gold)' }}>Management Team</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            {management.map((member, idx) => (
              <div key={member.id || idx} style={{ background: 'var(--clr-surface)', borderRadius: '12px', padding: '1rem', textAlign: 'center' }}>
                <img src={member.photo || `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}`} alt={member.name} style={{ width: '120px', height: '120px', borderRadius: '50%', objectFit: 'cover' }} />
                <h3>{member.name}</h3>
                <p style={{ color: 'var(--clr-gold)' }}>{member.role}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </PageWrapper>
  );
}