import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const slides = [
  { title: "Empowering Institutions for a Smarter Future", subtitle: "Tailored training and innovative solutions designed to elevate your organization's performance.", image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1600&q=80", bg: "#1B4F72" },
  { title: "Driving Excellence Through Research", subtitle: "Comprehensive research services that inform strategic decisions and foster sustainable growth.", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1600&q=80", bg: "#117A65" },
  { title: "Innovative ICT Solutions", subtitle: "Harness cutting-edge technology to streamline operations and enhance digital transformation.", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1600&q=80", bg: "#1A5276" },
  { title: "Professional Training That Transforms", subtitle: "Equip your team with skills and knowledge to excel in today's competitive environment.", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1600&q=80", bg: "#154360" },
  { title: "Consulting with a Local Touch, Global Vision", subtitle: "We combine practical experience and research to deliver solutions tailored to Kenya's unique needs.", image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=1600&q=80", bg: "#0E6655" },
  { title: "Partnering for Institutional Success", subtitle: "Collaborate with experts committed to empowering educational and business institutions.", image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1600&q=80", bg: "#1B4F72" },
  { title: "Your Trusted Consulting Partner in Kenya", subtitle: "From strategy to implementation, we provide end-to-end support for your growth journey.", image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1600&q=80", bg: "#154360" }
]

const Hero = () => {
  const [current, setCurrent] = useState(0)
  useEffect(() => {
    const timer = setInterval(() => { setCurrent(prev => (prev + 1) % slides.length) }, 5000)
    return () => clearInterval(timer)
  }, [])
  const slide = slides[current]
  return (
    <div style={{ minHeight: "90vh", backgroundImage: "url(" + slide.image + ")", backgroundSize: "cover", backgroundPosition: "center", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "2rem 1rem", position: "relative" }}>
      <div style={{ position: "absolute", inset: 0, background: "rgba(27, 79, 114, 0.60)" }}/>
      <div style={{ position: "relative", zIndex: 1, maxWidth: "850px", width: "100%" }}>
        <p style={{ color: "#AED6F1", fontSize: "0.85rem", letterSpacing: "3px", textTransform: "uppercase", marginBottom: "1rem" }}>Rooted in Empowerment, Growing Your Potential</p>
        <h1 style={{ color: "white", fontSize: "clamp(1.8rem, 5vw, 3.5rem)", fontWeight: "bold", lineHeight: "1.2", marginBottom: "1.5rem" }}>{slide.title}</h1>
        <p style={{ color: "#D6EAF8", fontSize: "clamp(0.95rem, 2vw, 1.1rem)", lineHeight: "1.8", maxWidth: "650px", margin: "0 auto 2.5rem" }}>{slide.subtitle}</p>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap", marginBottom: "3rem" }}>
          <Link to="/booking" style={{ background: "#2E86C1", color: "white", textDecoration: "none", padding: "0.9rem 2.5rem", borderRadius: "30px", fontWeight: "bold", fontSize: "1rem" }}>Book a Consultation</Link>
          <Link to="/services" style={{ background: "transparent", color: "white", textDecoration: "none", padding: "0.9rem 2.5rem", borderRadius: "30px", fontWeight: "bold", fontSize: "1rem", border: "2px solid white" }}>Our Services</Link>
        </div>
        <div style={{ display: "flex", gap: "0.5rem", justifyContent: "center" }}>
          {slides.map((_, i) => (
            <button key={i} onClick={() => setCurrent(i)} style={{ width: i === current ? "30px" : "10px", height: "10px", borderRadius: "5px", background: i === current ? "white" : "rgba(255,255,255,0.4)", border: "none", cursor: "pointer", transition: "all 0.3s" }} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Hero