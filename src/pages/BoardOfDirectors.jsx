import { useEffect, useState } from 'react';
import PageWrapper from '../components/ui/PageWrapper';
import api from '../utils/api';

export default function BoardOfDirectors() {
  const [board, setBoard] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    api.get('/team/board')
      .then(response => {
        setBoard(response.data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching board:', err);
        setError('Failed to load board members. Please try again later.');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <PageWrapper title="Board of Directors | DreamRoots Kenya">
        <div style={{ textAlign: 'center', padding: '4rem' }}>Loading board members...</div>
      </PageWrapper>
    );
  }

  if (error) {
    return (
      <PageWrapper title="Board of Directors | DreamRoots Kenya">
        <div style={{ textAlign: 'center', padding: '4rem', color: 'red' }}>{error}</div>
      </PageWrapper>
    );
  }

  return (
    <PageWrapper 
      title="Board of Directors | DreamRoots Kenya" 
      description="Meet the Board of Directors at DreamRoots Kenya"
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '4rem 2rem' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem', textAlign: 'center' }}>Board of Directors</h1>
        <p style={{ textAlign: 'center', marginBottom: '3rem', color: 'var(--clr-text-muted)' }}>
          Experienced leaders providing strategic governance and direction
        </p>

        <style>{`
          .flip-card {
            background-color: transparent;
            width: 100%;
            height: 380px;
            perspective: 1000px;
            cursor: pointer;
          }
          .flip-card-inner {
            position: relative;
            width: 100%;
            height: 100%;
            text-align: center;
            transition: transform 0.6s;
            transform-style: preserve-3d;
            border-radius: 16px;
          }
          .flip-card:hover .flip-card-inner {
            transform: rotateY(180deg);
          }
          .flip-card-front, .flip-card-back {
            position: absolute;
            width: 100%;
            height: 100%;
            backface-visibility: hidden;
            border-radius: 16px;
            overflow: hidden;
            box-shadow: 0 10px 25px rgba(0,0,0,0.1);
          }
          .flip-card-front {
            background-color: var(--clr-surface);
            color: var(--clr-text);
          }
          .flip-card-back {
            background: linear-gradient(135deg, var(--clr-primary) 0%, var(--clr-deep) 100%);
            color: white;
            transform: rotateY(180deg);
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding: 1.5rem;
            text-align: center;
          }
        `}</style>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem'
        }}>
          {board.map((member, index) => (
            <div key={member.id || index} className="flip-card">
              <div className="flip-card-inner">
                {/* Front of card */}
                <div className="flip-card-front">
                  <div style={{ height: '280px', overflow: 'hidden', background: '#1a2d50' }}>
                    <img
                      src={member.photo || `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=1B4F72&color=fff&size=280&bold=true`}
                      alt={member.name}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'center top'
                      }}
                    />
                  </div>
                  <div style={{ padding: '1rem' }}>
                    <h3 style={{ fontSize: '1.2rem', marginBottom: '0.25rem' }}>{member.name}</h3>
                    <p style={{ color: 'var(--clr-gold)', fontWeight: 'bold', fontSize: '0.85rem' }}>{member.role}</p>
                  </div>
                </div>

                {/* Back of card */}
                <div className="flip-card-back">
                  <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem', color: 'var(--clr-gold)' }}>{member.name}</h3>
                  <p style={{ fontSize: '0.9rem', marginBottom: '0.5rem', fontStyle: 'italic' }}>{member.role}</p>
                  <div style={{ width: '50px', height: '2px', background: 'var(--clr-gold)', margin: '0.75rem auto' }} />
                  <p style={{ fontSize: '0.85rem', lineHeight: 1.5, opacity: 0.9 }}>
                    {member.bio || 'Dedicated professional committed to driving excellence and impact at DreamRoots Kenya.'}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
}