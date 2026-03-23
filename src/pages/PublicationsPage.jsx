import { useState } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

const publications = [
  {
    id: 1,
    title: 'Transforming Education in Kenya Through ICT',
    category: 'Education',
    date: 'March 2025',
    author: 'Dr. Ferdinand Mbeche',
    excerpt: 'An in-depth look at how information and communication technology is reshaping the education landscape in Kenya, from primary schools to universities.',
    readTime: '5 min read'
  },
  {
    id: 2,
    title: 'Building Resilient Organizations in East Africa',
    category: 'Capacity Building',
    date: 'February 2025',
    author: 'Prof. AM Wanjohi',
    excerpt: 'This publication explores strategies for organizational resilience in the East African business environment, drawing from case studies across Kenya, Uganda, and Tanzania.',
    readTime: '7 min read'
  },
  {
    id: 3,
    title: 'The Future of Human Resource Management in Kenya',
    category: 'Human Resources',
    date: 'January 2025',
    author: 'Dr. Joyce Nyabuti',
    excerpt: 'Examining emerging trends in HR management including remote work policies, talent retention strategies, and the growing role of HR technology in Kenyan organizations.',
    readTime: '6 min read'
  },
  {
    id: 4,
    title: 'Digital Marketing Strategies for Kenyan SMEs',
    category: 'Marketing',
    date: 'December 2024',
    author: 'Karen Afandi',
    excerpt: 'A practical guide for small and medium enterprises in Kenya looking to leverage digital marketing tools to grow their customer base and increase revenue.',
    readTime: '8 min read'
  },
  {
    id: 5,
    title: 'Financial Inclusion and SME Growth in Nairobi',
    category: 'Finance',
    date: 'November 2024',
    author: 'Brenda Nyabiage Ondara',
    excerpt: 'Research findings on how improved access to financial services is driving growth among small and medium enterprises in Nairobi and its surrounding areas.',
    readTime: '6 min read'
  },
  {
    id: 6,
    title: 'Community Capacity Building — Lessons from the Field',
    category: 'Research',
    date: 'October 2024',
    author: 'James Ongwae',
    excerpt: 'Drawing from field experience across multiple community development projects, this paper outlines key lessons learned in building sustainable community capacity.',
    readTime: '9 min read'
  },
]

const categories = ['All', 'Education', 'Capacity Building', 'Human Resources', 'Marketing', 'Finance', 'Research']

const categoryColors = {
  'Education': '#1B4F72',
  'Capacity Building': '#117A65',
  'Human Resources': '#154360',
  'Marketing': '#0E6655',
  'Finance': '#1A5276',
  'Research': '#2E86C1'
}

const PublicationsPage = () => {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = activeCategory === 'All'
    ? publications
    : publications.filter(p => p.category === activeCategory)

  return (
    <div>
      {/* Header */}
      <div style={{
        background: 'linear-gradient(135deg, #1B4F72 0%, #2E86C1 100%)',
        padding: '5rem 1rem', textAlign: 'center'
      }}>
        <p style={{color: '#AED6F1', letterSpacing: '3px', textTransform: 'uppercase', fontSize: '0.9rem', marginBottom: '0.5rem'}}>
          Knowledge Hub
        </p>
        <h1 style={{color: 'white', fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 'bold', marginBottom: '1rem'}}>
          Publications
        </h1>
        <p style={{color: '#D6EAF8', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto'}}>
          Insights, research, and thought leadership from the DreamRoots Kenya team.
        </p>
      </div>

      {/* Category Filter */}
      <div style={{
        background: 'white',
        padding: '2rem 1rem',
        boxShadow: '0 2px 10px rgba(0,0,0,0.08)'
      }}>
        <div style={{
          display: 'flex', gap: '0.8rem',
          justifyContent: 'center', flexWrap: 'wrap',
          maxWidth: '900px', margin: '0 auto'
        }}>
          {categories.map((cat, i) => (
            <button key={i} onClick={() => setActiveCategory(cat)} style={{
              padding: '0.5rem 1.2rem',
              borderRadius: '20px',
              border: '2px solid',
              borderColor: activeCategory === cat ? '#1B4F72' : '#e0e0e0',
              background: activeCategory === cat ? '#1B4F72' : 'white',
              color: activeCategory === cat ? 'white' : '#666',
              cursor: 'pointer', fontWeight: '500',
              fontSize: '0.9rem', transition: 'all 0.2s'
            }}>
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Publications Grid */}
      <div style={{padding: '4rem 1rem', background: '#f8f9fa'}}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem', maxWidth: '1200px', margin: '0 auto'
        }}>
          {filtered.map((pub, i) => (
            <div key={i} style={{
              background: 'white', borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
              transition: 'all 0.3s', cursor: 'pointer'
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-6px)'
              e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.15)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.08)'
            }}
            >
              {/* Card Top Color */}
              <div style={{
                height: '8px',
                background: categoryColors[pub.category] || '#1B4F72'
              }}/>

              <div style={{padding: '1.8rem'}}>
                {/* Category & Date */}
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem'}}>
                  <span style={{
                    background: `${categoryColors[pub.category]}15`,
                    color: categoryColors[pub.category] || '#1B4F72',
                    padding: '0.3rem 0.8rem',
                    borderRadius: '20px', fontSize: '0.8rem', fontWeight: 'bold'
                  }}>
                    {pub.category}
                  </span>
                  <span style={{color: '#888', fontSize: '0.85rem'}}>{pub.date}</span>
                </div>

                {/* Title */}
                <h3 style={{
                  color: '#1B4F72', fontSize: '1.2rem',
                  fontWeight: 'bold', marginBottom: '0.8rem',
                  lineHeight: '1.4'
                }}>
                  {pub.title}
                </h3>

                {/* Excerpt */}
                <p style={{
                  color: '#666', fontSize: '0.95rem',
                  lineHeight: '1.7', marginBottom: '1.5rem'
                }}>
                  {pub.excerpt}
                </p>

                {/* Footer */}
                <div style={{
                  display: 'flex', justifyContent: 'space-between',
                  alignItems: 'center',
                  borderTop: '1px solid #f0f0f0', paddingTop: '1rem'
                }}>
                  <span style={{color: '#888', fontSize: '0.85rem'}}>
                    ✍️ {pub.author}
                  </span>
                  <span style={{color: '#888', fontSize: '0.85rem'}}>
                    ⏱ {pub.readTime}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div style={{
        background: 'linear-gradient(135deg, #1B4F72, #2E86C1)',
        padding: '4rem 1rem', textAlign: 'center'
      }}>
        <h2 style={{color: 'white', fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem'}}>
          Want to Learn More?
        </h2>
        <p style={{color: '#AED6F1', marginBottom: '2rem', fontSize: '1.05rem'}}>
          Get in touch with our experts to discuss your specific needs.
        </p>
        <Link to="/contact" style={{
          background: 'white', color: '#1B4F72',
          textDecoration: 'none', padding: '0.9rem 2.5rem',
          borderRadius: '30px', fontWeight: 'bold', fontSize: '1rem'
        }}>
          Contact Us
        </Link>
      </div>

      <Footer />
    </div>
  )
}

export default PublicationsPage