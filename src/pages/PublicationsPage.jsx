import { useEffect, useState } from 'react';
import api from '../utils/api';

export default function PublicationsPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    api.get('/posts')
      .then(res => setPosts(res.data.data || res.data))
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div style={{ paddingTop: '80px', minHeight: '100vh', backgroundColor: '#f8f9fa' }}>
      <div style={{ backgroundColor: '#1B4F72', padding: '60px 20px', textAlign: 'center' }}>
        <h1 style={{ color: '#fff', fontSize: '2.5rem', marginBottom: '16px' }}>Publications</h1>
        <p style={{ color: '#ccc', fontSize: '1.1rem' }}>Insights, research, and thought leadership</p>
      </div>
      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '60px 20px' }}>
        {loading ? (
          <p style={{ textAlign: 'center', color: '#1B4F72' }}>Loading publications...</p>
        ) : selected ? (
          <div style={{ backgroundColor: '#fff', borderRadius: '12px', padding: '40px', boxShadow: '0 2px 12px rgba(0,0,0,0.08)' }}>
            <button
              onClick={() => setSelected(null)}
              style={{ background: 'none', border: 'none', color: '#2E86C1', cursor: 'pointer', fontSize: '1rem', marginBottom: '20px' }}
            >
              ← Back to Publications
            </button>
            <span style={{ backgroundColor: '#e8f4fd', color: '#2E86C1', padding: '4px 12px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: '600' }}>
              {selected.category}
            </span>
            <h2 style={{ color: '#1B4F72', fontSize: '1.8rem', margin: '16px 0' }}>{selected.title}</h2>
            <p style={{ color: '#888', marginBottom: '24px' }}>By {selected.author}</p>
            <div
              style={{ color: '#444', lineHeight: '1.9', fontSize: '1rem' }}
              dangerouslySetInnerHTML={{ __html: selected.body }}
            />
          </div>
        ) : (
          <div style={{ display: 'grid', gap: '24px' }}>
            {posts.map(post => (
              <div
                key={post.id}
                onClick={() => setSelected(post)}
                style={{
                  backgroundColor: '#fff',
                  borderRadius: '12px',
                  padding: '32px',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
                  cursor: 'pointer',
                  transition: 'transform 0.2s',
                }}
                onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-3px)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <span style={{ backgroundColor: '#e8f4fd', color: '#2E86C1', padding: '4px 12px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: '600' }}>
                  {post.category}
                </span>
                <h3 style={{ color: '#1B4F72', fontSize: '1.3rem', margin: '12px 0 8px' }}>{post.title}</h3>
                <p style={{ color: '#888', fontSize: '0.9rem', marginBottom: '12px' }}>By {post.author}</p>
                <p style={{ color: '#2E86C1', fontWeight: '600' }}>Read Article →</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}