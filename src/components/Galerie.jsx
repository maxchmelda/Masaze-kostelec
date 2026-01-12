import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';
import { motion } from 'framer-motion';

const galleryImages = [
  { id: 1, src: '/gallery/massage1.jpg', alt: 'Relaxační masáž' },
  { id: 2, src: '/gallery/massage2.jpg', alt: 'Rekondiční masáž' },
  { id: 3, src: '/gallery/massage3.jpeg', alt: 'Tradiční masáž' },
  { id: 4, src: '/gallery/massage1.jpg', alt: 'Relaxační masáž' },
  { id: 5, src: '/gallery/massage2.jpg', alt: 'Rekondiční masáž' },
  { id: 6, src: '/gallery/massage3.jpeg', alt: 'Tradiční masáž' },
];

const Galerie = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      nextSlide();
    }
    if (touchStart - touchEnd < -50) {
      prevSlide();
    }
  };

  const nextSlide = () => {
    const nextIndex = (currentIndex + 1) % galleryImages.length;
    setCurrentIndex(nextIndex);
  };

  const prevSlide = () => {
    const prevIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    setCurrentIndex(prevIndex);
  };

  // Get visible images for desktop (3 at a time, circular)
  const getVisibleImages = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % galleryImages.length;
      visible.push(galleryImages[index]);
    }
    return visible;
  };

  return (
    <section id="galerie" className='w-full py-10 md:py-14 bg-[#f8f8f8]'>
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-10 text-[#333]">Galerie</h2>
        
        {/* Desktop Gallery (3 columns) */}
        <div className="hidden md:flex justify-center">
          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6 w-full md:w-[90%] lg:w-[80%]">
            {getVisibleImages().map((image) => (
              <div key={`${image.id}-${currentIndex}`} className="overflow-hidden rounded-xl shadow-lg aspect-[4/3]">
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = '/placeholder.jpg';
                  }}
                />
              </div>
            ))}

            <motion.button
              whileHover={{ scale: 0.85 }} 
              onClick={prevSlide}
              className="cursor-pointer absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12"
            >
              <FaChevronLeft size={40} className="text-2xl text-[#333]" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 0.85 }} 
              onClick={nextSlide}
              className="cursor-pointer absolute right-0 top-1/2 -translate-y-1/2 translate-x-12"
            >
              <FaChevronRight size={40} className="text-2xl text-[#333]" />
            </motion.button>
          </div>
        </div>


        {/* Mobile Gallery (1 column with swipe and arrows) */}
        <div 
          className="max-w-[500px] md:hidden relative overflow-hidden mx-auto"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Images */}
          <div className="flex transition-transform duration-300" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {galleryImages.map((image) => (
              <div key={image.id} className="w-full flex-shrink-0 px-2">
                <div className="overflow-hidden rounded-lg shadow-lg aspect-[4/3]">
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = '/placeholder.jpg';
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Arrows + Dots under the image */}
          <div className="flex items-center justify-center gap-10 mt-4 px-6">
            {/* Left Arrow */}
            <motion.button
              whileTap={{ scale: 0.85 }}
              onClick={prevSlide}
              className="md:hidden"
            >
              <FaChevronLeft size={20} className="text-[#333]" />
            </motion.button>

            {/* Dots */}
            <div className="flex space-x-2">
              {galleryImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-[#333]' : 'bg-gray-300'}`}
                />
              ))}
            </div>

            {/* Right Arrow */}
            <motion.button
              whileTap={{ scale: 0.85 }}
              onClick={nextSlide}
              className="md:hidden"
            >
              <FaChevronRight size={20} className="text-[#333]" />
            </motion.button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Galerie;