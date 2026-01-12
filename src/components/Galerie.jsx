import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';
import { motion } from 'framer-motion';
import { IoCloseSharp } from "react-icons/io5";

const galleryImages = [
  { id: 1, src: '/gallery/1.jpeg', alt: 'Relaxační masáž' },
  { id: 2, src: '/gallery/2.JPG', alt: 'Rekondiční masáž' },
  // { id: 3, src: '/gallery/3.jpeg', alt: 'Tradiční masáž' },
  // { id: 4, src: '/gallery/4.jpeg', alt: 'Relaxační masáž' },
  // { id: 5, src: '/gallery/5.JPG', alt: 'Rekondiční masáž' },
  { id: 6, src: '/gallery/6.JPG', alt: 'Rekondiční masáž' },
  // { id: 7, src: '/gallery/7.jpeg', alt: 'Tradiční masáž' },
  { id: 8, src: '/gallery/8.JPG', alt: 'Relaxační masáž' },
  { id: 9, src: '/gallery/9.jpeg', alt: 'Rekondiční masáž' },
];

const Galerie = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [maximizedImage, setMaximizedImage] = useState(null);

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
    <section id="galerie" className='w-full py-10 md:py-14 md:pb-20 bg-[#f8f8f8]'>
      <div className="container mx-auto px-4 max-sm:max-w-md">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-10 text-[#333]">Galerie</h2>
        
        {/* Desktop Gallery (3 columns) */}
        <div className="hidden md:flex justify-center">
          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6 w-full md:w-[90%] lg:w-[80%]">
            {getVisibleImages().map((image) => (
              <div key={`${image.id}-${currentIndex}`} className="overflow-hidden rounded-xl shadow-lg aspect-[4/3]">
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-full object-cover cursor-pointer"
                  onClick={() => setMaximizedImage(image)}
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

            {/* Dots for desktop */}
            <div className="absolute bottom-[-40px] left-1/2 -translate-x-1/2 flex space-x-3">
              {galleryImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`cursor-pointer hover:bg-gray-400 w-3 h-3 rounded-full ${currentIndex === index ? 'bg-[#333]' : 'bg-gray-300'}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Gallery (1 column with arrows only) */}
        <div 
          className="max-w-[500px] md:hidden relative overflow-hidden mx-auto"
          // Removed touch event handlers here
        >
          {/* Images */}
          <div className="flex transition-transform duration-300" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {galleryImages.map((image) => (
              <div key={image.id} className="w-full flex-shrink-0 px-2">
                <div className="overflow-hidden rounded-lg shadow-lg aspect-[4/3]">
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="w-full h-full object-cover cursor-pointer"
                    onClick={() => setMaximizedImage(image)}
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

      {/* Modal for maximized image */}
      {maximizedImage && (
  <div 
    className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
    onClick={() => setMaximizedImage(null)}
  >
    <div className="relative max-w-[90vw] max-h-[90vh]">
      <div className="relative">
        <img 
          src={maximizedImage.src} 
          alt={maximizedImage.alt} 
          className="object-contain max-w-[90vw] max-h-[90vh] rounded-lg shadow-lg"
          onClick={(e) => e.stopPropagation()}
        />
        <motion.button
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          onClick={(e) => {
            e.stopPropagation();
            setMaximizedImage(null);
          }}
          className="absolute top-2 right-2 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 focus:outline-none cursor-pointer"
          aria-label="Close"
        >
          <IoCloseSharp />
        </motion.button>
      </div>
    </div>
  </div>
)}
    </section>
  );
};

export default Galerie;
