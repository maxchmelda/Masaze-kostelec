import React from 'react'
import { Link } from 'react-scroll'
import { motion } from 'framer-motion'
import { RiArrowDownWideLine as DownArrow } from "react-icons/ri";

const Hero = () => {
  return (
    <header
      style={{
        backgroundImage: 'url("/bg.jpg")',
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPositionY: '-200px',
      }}
      className='w-full min-h-[60vh] md:h-[60vh] pt-16 pb-10 md:pt-30 bg-black flex flex-col justify-center items-center gap-3 md:gap-5 px-4'
    >
      
      {/* Header text - responsive font sizes */}
      <h1 className='font-medium text-white text-3xl sm:text-4xl text-center'>Masáže Kostelec</h1>
      <h2 className='font-medium text-white text-3xl sm:text-4xl text-center'>Jana Hladíková</h2>

      {/* CTA button - responsive padding and margin */}
      <motion.div className='mt-6 md:mt-8' whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
        <Link
          className="text-white text-sm cursor-pointer py-2 md:py-3 px-8 md:px-12 rounded-xl bg-[#71645c] hover:bg-[#5a4f48] transition-colors duration-200"
          to="masaze"
          smooth={true}
          duration={500}
        >
          Typy masáží
        </Link>
      </motion.div>

      {/* Arrow - responsive size and margin */}
      <DownArrow color="white" size={40} className='mt-6 md:mt-8 md:size-[50px]' />
    </header>
  )
}

export default Hero