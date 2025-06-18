
import React from 'react';

const Watermark = () => {
  return (
    <div style={{
      position: 'fixed',
      fontWeight:600,
      bottom: 10,
      right: 10,
      opacity: 0.7,
      fontSize: '14px',
      pointerEvents: 'none', // So it doesn't block clicks
      zIndex: 1000
    }}>
      Demo Only – © Sparsh.M.Doshi {new Date().getFullYear()}
    </div>
  );
};

export default Watermark;
