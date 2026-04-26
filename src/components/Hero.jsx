import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import { motion } from 'framer-motion';

const slides = [
  { title: "Empowering Institutions for a Smarter Future", subtitle: "Tailored training and innovative solutions designed to elevate your organization's performance." },
  { title: "Driving Excellence Through Research", subtitle: "Comprehensive research services that inform strategic decisions and foster sustainable growth." },
  { title: "Innovative ICT Solutions", subtitle: "Harness cutting-edge technology to streamline operations and enhance digital transformation." },
  { title: "Consulting with a Local Touch, Global Vision", subtitle: "We combine practical experience and research to deliver solutions tailored to Kenya's unique needs." }
];

const Hero = () => {
  return (
    <section className="relative w-full h-[85vh] overflow-hidden">
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        effect="fade"
        speed={1000}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        className="h-full w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="relative flex items-center justify-center">
            {/* Background Image with Navy Overlay */}
            <div className="absolute inset-0 bg-navy/80 z-0" />
            <img 
              src={`https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2400`} 
              className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
              alt="Consulting Background"
            />

            {/* Content Container */}
            <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-gold font-medium tracking-[0.2em] uppercase text-xs mb-6"
              >
                Rooted in Empowerment, Growing Your Potential
              </motion.p>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-5xl md:text-7xl font-serif text-white mb-8 leading-tight"
              >
                {slide.title}
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto font-light"
              >
                {slide.subtitle}
              </motion.p>

              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="flex gap-4 justify-center"
              >
                <Link to="/booking" className="bg-gold hover:bg-yellow-600 text-navy font-semibold px-8 py-4 rounded-xl transition-all shadow-lg">
                  Book Consultation
                </Link>
                <Link to="/services" className="border border-white/30 hover:bg-white/10 text-white px-8 py-4 rounded-xl transition-all">
                  Our Services
                </Link>
              </motion.div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;