import React, { useState, useRef } from 'react';
import hero_1 from '../../images/hero/hero_1.png';
import hero_2 from '../../images/hero/hero_2.png';
import hero_3 from '../../images/hero/hero_3.png';
import hero_4 from '../../images/hero/hero_4.png';
import hero_5 from '../../images/hero/hero_5.png';
import hero_6 from '../../images/hero/hero_6.png';
import hero_7 from '../../images/hero/hero_7.png';
import hero_8 from '../../images/hero/hero_8.png';
import JoinButton from '../Joinbutton';

const ContinuousScrollZoom = () => {
  const [isZooming, setIsZooming] = useState(false);
  const containerRef = useRef(null);

  const images = [
    hero_1,
    hero_2,
    hero_3,
    hero_4,
    hero_5,
    hero_6,
    hero_7,
    hero_8,
  ];

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden" ref={containerRef}>
      <div className="absolute inset-0 grid sm:grid-cols-4 grid-cols-2 gap-4 p-4" style={{ transform: 'scale(1)', opacity: 1 }}>
        {images.map((src, index) => (
          <img 
            key={index} 
            src={src} 
            alt={`Grid image ${index + 1}`} 
            className={`w-full h-full object-cover ${index === 4 ? 'z-20' : 'z-10'}`} 
          />
        ))}
      </div>
      
      <div className="relative z-30 text-center bg-white bg-opacity-80 p-6 rounded-lg shadow-lg">
        <h2 className="text-4xl font-bold mb-4">Website Coming Soon</h2>
        <p className="text-xl mb-6">In the meantime you can join us today!</p>
        <JoinButton />
      </div>
      
    </div>
  );
};

export default ContinuousScrollZoom;
