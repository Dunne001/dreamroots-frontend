import React, { useState } from 'react';

const WhatsAppButton = () => {
  const [hovered, setHovered] = useState(false);

  return (
<a
      href="https://wa.me/254759098449"
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'fixed',
        bottom: '30px',
        left: '30px',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        backgroundColor: '#25D366',
        color: '#fff',
        borderRadius: '50px',
        padding: hovered ? '12px 20px' : '14px',
        boxShadow: '0 4px 15px rgba(37,211,102,0.5)',
        textDecoration: 'none',
        transition: 'all 0.3s ease',
        overflow: 'hidden',
        maxWidth: hovered ? '220px' : '56px',
      }}
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp"
        style={{ width: '28px', height: '28px', flexShrink: 0 }}
      />
      {hovered && (
        <span style={{ fontSize: '14px', fontWeight: '600', whiteSpace: 'nowrap' }}>
          Chat with Us
        </span>
      )}
    </a>
  );
};

export default WhatsAppButton;