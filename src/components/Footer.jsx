import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-white text-black text-center px-4 py-6 sm:py-8">
      <div className='flex justify-center items-center gap-x-20 gap-y-2 flex-wrap'>
        <p className="text-sm sm:text-base">
          &copy; {currentYear} <span className="font-medium">Jana Hladíková</span>. Všechna práva vyhrazena.
        </p>
        <p className='text-sm sm:text-base'>Made by <a href="https://vuzuco.cz" target="_blank" className='font-medium hover:underline'>Vuzuco</a></p>
      </div>
    </footer>
  );
};

export default Footer;
