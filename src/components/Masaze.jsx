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
        <h2 className="text-2xl md:text-3xl text-[#b3aaa4] font-medium flex flex-wrap justify-center gap-x-2">
          Masáže pro zdraví a relaxaci
        </h2>

        {/* cards container */}
        <div className='flex flex-col lg:flex-row justify-center gap-6 md:gap-10 items-center mt-10 md:mt-14 max-w-md sm:max-w-[1400px] mx-auto'>
          {typyMasazi.map((element, index) => (
            <div 
              key={index}
              className="bg-[#242424] hover:scale-102 hover:shadow-lg transition-all duration-200 rounded-2xl px-6 py-6 sm:px-8 sm:py-8 flex flex-col items-start justify-between gap-4 w-full max-w-[500px] min-h-[220px] md:min-h-[250px]"
            >
              <h3 className="text-xl md:text-2xl text-[#b3aaa4] font-medium flex flex-wrap gap-x-2">
                {element.heading + " " + "masáž"}
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


      <section className='w-full py-10 md:py-14 bg-[#242424] px-4 sm:px-6 lg:py-24 text-white'>
        <div className="text-center w-full max-w-md md:max-w-4xl p-8 md:p-10 lg:p-24 border-2 rounded-md sm:rounded-lg border-white mx-auto relative">
          <h2 className="text-2xl md:text-3xl font-medium">Masáže Kostelec</h2>
          <p className="mt-4 md:mt-6 text-sm/6 md:text-base/8 ">
            Dopřejte si chvíli odpočinku, regenerace a péče o své tělo i duši v příjemném a klidném prostředí. Masáže jsou ideální volbou při únavě, stresu nebo jen jako způsob, jak si dopřát chvilku klidu. Potěšit můžete i své blízké – nabízím dárkové poukazy pro každou příležitost. Jako mobilní masér poskytuji masáže v prostředí dle Vašich požadavků.
          </p>
          
          {/* Top cut-out - responsive positioning/sizing */}
          <div className="absolute top-[-8px] right-[5%] bg-[#242424] w-[50%] h-[10px] md:h-[20px]" />
          
          {/* Bottom cut-out - responsive positioning/sizing */}
          <div className="absolute bottom-[-8px] left-[5%] bg-[#242424] w-[50%] h-[10px] md:h-[20px]" />
        </div>
      </section>
    </>
  )
}

export default Masaze