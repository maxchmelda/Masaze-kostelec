import { Link } from "react-scroll";

const typyMasazi = [
  {
    heading: "Rekondiční",
    content: "Pomáhá uvolnit namožené svaly, zlepšuje pohyblivost a celkovou kondici těla. Často se používá po sportu nebo fyzické námaze."
  },
  {
    heading: "Relaxační",
    content: "Slouží hlavně k relaxaci a odpočinku. Uvolňuje napětí, zklidňuje mysl a navozuje pocit pohody."
  }
]

const Masaze = () => {
  return (
    <>
      <section id="masaze" className='w-full py-10 md:py-14 bg-[#191919] px-4 sm:px-6'>
        {/* heading */}
        <h2 className="text-2xl md:text-3xl font-medium flex flex-wrap justify-center gap-x-2">
          <span className="text-[#b3aaa4]">Masáže pro</span>
          <span className="text-white">zdraví a relaxaci</span>
        </h2>

        {/* cards container */}
        <div className='flex flex-col lg:flex-row justify-center gap-6 md:gap-10 items-center mt-10 md:mt-14 max-w-[1400px] mx-auto'>
          {typyMasazi.map((element, index) => (
            <div 
              key={index}
              className="bg-[#242424] drop-shadow-xl/20 rounded-2xl px-6 py-6 sm:px-8 sm:py-8 flex flex-col items-start justify-between gap-4 w-full max-w-[500px] min-h-[220px] md:min-h-[250px]"
            >
              <h3 className="text-xl md:text-2xl font-medium flex flex-wrap gap-x-2">
                <span className="text-[#b3aaa4]">{element.heading}</span>
                <span className="text-white">masáž</span>
              </h3>

              <p className="text-white text-sm md:text-base">{element.content}</p>

              <Link 
                className="text-[#b3aaa4] hover:text-[#d4c9c1] transition-colors duration-200 cursor-pointer mt-2 md:mt-0" 
                to="objednavka" 
                smooth={true} 
                duration={500}
              >
                Objednat masáž →
              </Link>
            </div>
          ))}
        </div>
      </section>


      <section className='w-full py-10 md:py-14 bg-[#242424] px-4 sm:px-6 text-white'>
        <div className="text-center w-full max-w-[500px] p-8 md:p-10 border-2 rounded-md sm:rounded-lg border-white mx-auto relative">
          <h2 className="text-2xl md:text-3xl font-medium">Masáže Kostelec</h2>
          <p className="mt-4 md:mt-6 text-sm md:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </p>
          
          {/* Top cut-out - responsive positioning/sizing */}
          <div className="absolute top-[-10px] right-[5%] bg-[#242424] w-[50%] h-[10px] md:h-[20px]" />
          
          {/* Bottom cut-out - responsive positioning/sizing */}
          <div className="absolute bottom-[-10px] left-[5%] bg-[#242424] w-[50%] h-[10px] md:h-[20px]" />
        </div>
      </section>
    </>
  )
}

export default Masaze