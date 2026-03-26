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
    readTime: '5 min read',
    content: `Technology is no longer a luxury in education — it is a necessity. Across Kenya, schools and universities are embracing ICT to improve learning outcomes, enhance teacher effectiveness, and prepare students for a digital economy.

At DreamRoots Kenya, we have worked with over 50 educational institutions to implement technology solutions ranging from Learning Management Systems (LMS) to smart classrooms and digital content libraries.

Key findings from our work include:
- Schools that integrated ICT reported a 35% improvement in student engagement
- Teachers trained in digital tools showed 40% improvement in lesson delivery effectiveness
- Institutions with school management systems reduced administrative time by 60%

The future of education in Kenya is digital. Organizations that embrace this transformation now will be better positioned to attract students, retain qualified teachers, and deliver world-class education outcomes.

Our Education Consultancy team is ready to help your institution make this transition smoothly and effectively.`
  },
  {
    id: 2,
    title: 'Building Resilient Organizations in East Africa',
    category: 'Capacity Building',
    date: 'February 2025',
    author: 'Prof. AM Wanjohi',
    excerpt: 'This publication explores strategies for organizational resilience in the East African business environment, drawing from case studies across Kenya, Uganda, and Tanzania.',
    readTime: '7 min read',
    content: `Organizational resilience is the ability to anticipate, prepare for, respond to, and adapt to incremental change and sudden disruptions in order to survive and prosper.

In East Africa, organizations face unique challenges including political uncertainty, currency fluctuations, infrastructure gaps, and climate-related disruptions. Those that thrive are those that have built resilience into their DNA.

Through our work with over 200 organizations across Kenya, Uganda, and Tanzania, DreamRoots Kenya has identified five key pillars of organizational resilience:

1. Leadership Development — Organizations with strong, adaptive leaders navigate crises better
2. Financial Reserves — Maintaining 3-6 months of operational reserves provides crucial buffer
3. Diversified Revenue Streams — Over-reliance on single clients or funding sources is a major vulnerability
4. Technology Adoption — Digital systems reduce manual dependencies and improve continuity
5. Staff Capacity — Well-trained, multi-skilled teams can adapt to changing demands

Our Capacity Building team works with organizations to assess their resilience levels and develop targeted strengthening plans.`
  },
  {
    id: 3,
    title: 'The Future of Human Resource Management in Kenya',
    category: 'Human Resources',
    date: 'January 2025',
    author: 'Dr. Joyce Nyabuti',
    excerpt: 'Examining emerging trends in HR management including remote work policies, talent retention strategies, and the growing role of HR technology in Kenyan organizations.',
    readTime: '6 min read',
    content: `The Kenyan HR landscape is undergoing a fundamental transformation. The COVID-19 pandemic accelerated changes that were already underway, and organizations that adapt will have a significant competitive advantage in attracting and retaining top talent.

Key trends shaping HR in Kenya today:

Remote and Hybrid Work
Over 60% of knowledge workers in Nairobi now prefer hybrid work arrangements. Organizations that offer flexibility report 45% higher staff retention rates compared to those requiring full-time office presence.

HR Technology
HRIS systems, applicant tracking software, and digital payroll platforms are becoming standard in mid-to-large organizations. These tools reduce HR administrative time by up to 50% and improve data accuracy significantly.

Employee Wellbeing
Mental health support, flexible working hours, and health insurance have become key factors in employment decisions, particularly among the growing Gen Z workforce.

Performance Management
Annual appraisals are giving way to continuous feedback models. Organizations using real-time performance management tools report higher employee satisfaction and productivity.

DreamRoots Kenya's HR consultancy team helps organizations navigate these changes and build people-first cultures that drive business results.`
  },
  {
    id: 4,
    title: 'Digital Marketing Strategies for Kenyan SMEs',
    category: 'Marketing',
    date: 'December 2024',
    author: 'Karen Afandi',
    excerpt: 'A practical guide for small and medium enterprises in Kenya looking to leverage digital marketing tools to grow their customer base and increase revenue.',
    readTime: '8 min read',
    content: `Kenya's digital economy is booming. With over 22 million internet users and one of the highest mobile penetration rates in Africa, the opportunity for SMEs to grow through digital marketing has never been greater.

Yet most Kenyan SMEs are not fully leveraging digital channels. Many rely on word-of-mouth alone, leaving significant revenue on the table.

The Most Effective Digital Channels for Kenyan SMEs:

WhatsApp Business
With over 15 million Kenyan WhatsApp users, this platform is a goldmine for SMEs. Businesses using WhatsApp Business for customer communication report 30% higher customer retention.

Facebook & Instagram
Social media advertising allows SMEs to reach highly targeted audiences for as little as KSh 500 per day. The key is compelling visual content and consistent posting.

Google My Business
Free and powerful — a fully optimized Google My Business profile can generate hundreds of monthly customer inquiries at zero cost.

Email Marketing
Often overlooked, email marketing delivers an average return of KSh 4,200 for every KSh 100 spent — the highest ROI of any digital channel.

SEO (Search Engine Optimization)
Appearing on the first page of Google for your key services can transform your business. Our marketing team helps SMEs achieve this through strategic content and technical optimization.

DreamRoots Kenya's marketing consultancy helps SMEs develop and execute digital strategies that deliver measurable results.`
  },
  {
    id: 5,
    title: 'Financial Inclusion and SME Growth in Nairobi',
    category: 'Finance',
    date: 'November 2024',
    author: 'Brenda Nyabiage Ondara',
    excerpt: 'Research findings on how improved access to financial services is driving growth among small and medium enterprises in Nairobi and its surrounding areas.',
    readTime: '6 min read',
    content: `Financial inclusion — the ability of individuals and businesses to access useful and affordable financial products and services — remains a critical driver of SME growth in Kenya.

Our research among 150 SMEs in Nairobi revealed striking findings:

Access to Credit
SMEs with access to formal credit grew revenue 2.3x faster than those relying solely on personal savings or informal borrowing. Yet 67% of SMEs in our sample reported difficulty accessing bank loans due to collateral requirements.

Mobile Money Impact
M-Pesa and similar mobile money platforms have been transformative. SMEs using mobile money for transactions report 25% faster payment cycles and significantly reduced cash handling costs.

Financial Literacy Gap
Only 34% of SME owners in our sample could accurately read a basic profit and loss statement. This financial literacy gap leads to poor business decisions and vulnerability to cash flow crises.

Recommendations:
1. Government and financial institutions should develop SME-specific loan products with flexible collateral requirements
2. SME owners should invest in basic financial management training
3. Digital financial management tools should be adopted to improve record-keeping and reporting

DreamRoots Kenya's Finance team provides SMEs with practical financial management training and advisory services.`
  },
  {
    id: 6,
    title: 'Community Capacity Building — Lessons from the Field',
    category: 'Research',
    date: 'October 2024',
    author: 'James Ongwae',
    excerpt: 'Drawing from field experience across multiple community development projects, this paper outlines key lessons learned in building sustainable community capacity.',
    readTime: '9 min read',
    content: `After working with over 80 community organizations across Kenya, DreamRoots Kenya has distilled key lessons that separate successful capacity building initiatives from those that fail to create lasting change.

Lesson 1: Start with Community Needs, Not Donor Priorities
The most sustainable programs are those that address genuine community-identified needs rather than being designed around donor funding priorities. Our best projects began with extensive community consultation before any program design.

Lesson 2: Build Local Leadership
External expertise is valuable but must be paired with deliberate efforts to develop local leadership. Programs that invest in training community champions create self-sustaining momentum that outlasts the project period.

Lesson 3: Simple Monitoring Tools Work Best
Complex M&E frameworks are often abandoned in the field. We have had the most success with simple, locally-adapted monitoring tools that community members themselves can use and understand.

Lesson 4: Technology Must Match Context
Digital tools are powerful but must be appropriate for the context. In low-connectivity areas, offline-capable mobile apps outperform web-based systems. Matching technology to context is critical.

Lesson 5: Celebrate and Communicate Success
Communities are energized by recognizing their own progress. Regular sharing of success stories — through community meetings, local radio, and social media — sustains motivation and attracts additional support.

DreamRoots Kenya's Research and Capacity Building teams bring these lessons to every engagement, ensuring our work creates genuine, lasting impact.`
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
  const [selectedPub, setSelectedPub] = useState(null)

  const filtered = activeCategory === 'All'
    ? publications
    : publications.filter(p => p.category === activeCategory)

  if (selectedPub) {
    return (
      <div>
        <div style={{
          background: `linear-gradient(135deg, ${categoryColors[selectedPub.category]} 0%, #2E86C1 100%)`,
          padding: '5rem 1rem', textAlign: 'center'
        }}>
          <span style={{
            background: 'rgba(255,255,255,0.2)', color: 'white',
            padding: '0.3rem 1rem', borderRadius: '20px',
            fontSize: '0.85rem', marginBottom: '1rem', display: 'inline-block'
          }}>
            {selectedPub.category}
          </span>
          <h1 style={{color: 'white', fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 'bold', marginBottom: '1rem', maxWidth: '800px', margin: '1rem auto'}}>
            {selectedPub.title}
          </h1>
          <p style={{color: 'rgba(255,255,255,0.8)', fontSize: '1rem'}}>
            ✍️ {selectedPub.author} &nbsp;|&nbsp; 📅 {selectedPub.date} &nbsp;|&nbsp; ⏱ {selectedPub.readTime}
          </p>
        </div>

        <div style={{maxWidth: '800px', margin: '0 auto', padding: '4rem 1rem'}}>
          <button onClick={() => setSelectedPub(null)} style={{
            background: 'none', border: '2px solid #1B4F72',
            color: '#1B4F72', padding: '0.5rem 1.2rem',
            borderRadius: '20px', cursor: 'pointer',
            marginBottom: '2rem', fontWeight: 'bold'
          }}>
            ← Back to Publications
          </button>

          {selectedPub.content.split('\n\n').map((paragraph, i) => (
            <p key={i} style={{
              color: '#444', fontSize: '1.05rem',
              lineHeight: '1.9', marginBottom: '1.5rem'
            }}>
              {paragraph}
            </p>
          ))}

          <div style={{
            background: 'linear-gradient(135deg, #1B4F72, #2E86C1)',
            borderRadius: '16px', padding: '2.5rem',
            textAlign: 'center', marginTop: '3rem'
          }}>
            <h3 style={{color: 'white', fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem'}}>
              Ready to Work With Us?
            </h3>
            <p style={{color: '#AED6F1', marginBottom: '1.5rem'}}>
              Contact DreamRoots Kenya today for a free consultation.
            </p>
            <Link to="/booking" style={{
              background: 'white', color: '#1B4F72',
              textDecoration: 'none', padding: '0.8rem 2rem',
              borderRadius: '25px', fontWeight: 'bold'
            }}>
              Book a Consultation
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div>
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

      <div style={{background: 'white', padding: '2rem 1rem', boxShadow: '0 2px 10px rgba(0,0,0,0.08)'}}>
        <div style={{display: 'flex', gap: '0.8rem', justifyContent: 'center', flexWrap: 'wrap', maxWidth: '900px', margin: '0 auto'}}>
          {categories.map((cat, i) => (
            <button key={i} onClick={() => setActiveCategory(cat)} style={{
              padding: '0.5rem 1.2rem', borderRadius: '20px',
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

      <div style={{padding: '4rem 1rem', background: '#f8f9fa'}}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem', maxWidth: '1200px', margin: '0 auto'
        }}>
          {filtered.map((pub, i) => (
            <div key={i}
              onClick={() => setSelectedPub(pub)}
              style={{
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
              <div style={{height: '8px', background: categoryColors[pub.category] || '#1B4F72'}}/>
              <div style={{padding: '1.8rem'}}>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem'}}>
                  <span style={{
                    background: `${categoryColors[pub.category]}15`,
                    color: categoryColors[pub.category] || '#1B4F72',
                    padding: '0.3rem 0.8rem', borderRadius: '20px',
                    fontSize: '0.8rem', fontWeight: 'bold'
                  }}>
                    {pub.category}
                  </span>
                  <span style={{color: '#888', fontSize: '0.85rem'}}>{pub.date}</span>
                </div>
                <h3 style={{color: '#1B4F72', fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '0.8rem', lineHeight: '1.4'}}>
                  {pub.title}
                </h3>
                <p style={{color: '#666', fontSize: '0.95rem', lineHeight: '1.7', marginBottom: '1.5rem'}}>
                  {pub.excerpt}
                </p>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #f0f0f0', paddingTop: '1rem'}}>
                  <span style={{color: '#888', fontSize: '0.85rem'}}>✍️ {pub.author}</span>
                  <span style={{
                    color: '#2E86C1', fontSize: '0.85rem',
                    fontWeight: 'bold', cursor: 'pointer'
                  }}>
                    Read More →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{background: 'linear-gradient(135deg, #1B4F72, #2E86C1)', padding: '4rem 1rem', textAlign: 'center'}}>
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