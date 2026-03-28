import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import api from '../utils/api';

export default function TeamPage() {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const isBoard = location.pathname.includes('board');

  useEffect(() => {
    const endpoint = isBoard ? '/team/board' : '/team/management';
    api.get(endpoint)
      .then(res => setMembers(res.data))
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, [isBoard]);

  return (
    <div style={{ paddingTop: '80px', minHeight: '100vh', backgroundColor: '#f8f9fa' }}>
      <div style={{ backgroundColor: '#1B4F72', padding: '60px 20px', textAlign: 'center' }}>
        <h1 style={{ color: '#fff', fontSize: '2.5rem', marginBottom: '16px' }}>
          {isBoard ? 'Board of Directors' : 'Management Team'}
        </h1>
        <p style={{ color: '#ccc', fontSize: '1.1rem' }}>
          Meet the dedicated professionals behind DreamRoots Kenya
        </p>
      </div>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '60px 20px' }}>
        {loading ? (
          <p style={{ textAlign: 'center', color: '#1B4F72' }}>Loading team...</p>
        ) : (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '28px'
          }}>
            {members.map(member => (
              <div key={member.id} style={{
                backgroundColor: '#fff',
                borderRadius: '16px',
                padding: '32px 24px',
                boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
                textAlign: 'center',
              }}>
                <img
                  src={member.photo}
                  alt={member.name}
                  style={{
                    width: '100px', height: '100px',
                    borderRadius: '50%', objectFit: 'cover',
                    marginBottom: '16px',
                    border: '3px solid #2E86C1'
                  }}
                  onError={e => e.target.src = 'https://dreamrootskenya.com/team/male.png'}
                />
                <h3 style={{ color: '#1B4F72', fontSize: '1.1rem', marginBottom: '6px' }}>
                  {member.name}
                </h3>
                <p style={{ color: '#2E86C1', fontSize: '0.9rem', fontWeight: '600', marginBottom: '12px' }}>
                  {member.role}
                </p>
                <p style={{ color: '#666', fontSize: '0.85rem', lineHeight: '1.6' }}>
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}