import { motion } from "framer-motion";
import { BiLogoInstagramAlt, BiSolidEnvelope, BiSolidPhone } from "react-icons/bi";

const Kontakt = () => {
  return (
    <section 
      id="kontakt" 
      className="relative w-full py-8 sm:py-10 md:py-14 flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background image with dark overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/mapa.png" 
          alt="Map background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl px-4 flex flex-col lg:flex-row items-center justify-center gap-6 sm:gap-8 lg:gap-16">
        
        {/* Info Card */}
        <div className="w-full max-w-[600px] bg-white rounded-2xl shadow-xl p-4 sm:p-6 md:p-8 pb-6 sm:pb-8">
          <div className="flex items-center gap-4 md:gap-6 sm:gap-6">
            <img src='/logo-masaze.png' alt="logo" className="h-12 sm:h-16" />
            <div>
              <h2 className="text-lg sm:text-xl font-medium text-black">Masáže Kostelec</h2>
              <h3 className="text-sm sm:text-md font-medium text-black">Jana Hladíková</h3>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 grid-cols-1 gap-4 md:gap-6 mt-3 sm:mt-6 text-black">
            <div>
              <h4 className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base">Sídlo</h4>
              <p className="text-xs sm:text-sm">
                Kostelec u Křížků 249 <br />
                251 68 Kamenice <br />
                okres Praha-východ
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base">Kontakt</h4>
              <a 
                href="mailto:masazekostelec@gmail.com"
                className="underline flex justify-start gap-2 items-center text-xs sm:text-sm"
              >
                <BiSolidEnvelope size={20} />
                <p>masazekostelec@gmail.com</p>
              </a>
              <a 
                href="tel:+420777117715" 
                className="mt-2 underline flex justify-start gap-2 items-center text-xs sm:text-sm"
              >
                <BiSolidPhone size={20} />
                <p>+420 777 117 715</p>
              </a>
              <a 
                href="https://www.instagram.com/masaze.kostelec/"
                className="mt-2 underline flex justify-start gap-2 items-center text-xs sm:text-sm"
              >
                <BiLogoInstagramAlt size={20} />
                <p>masaze.kostelec</p>
              </a>
            </div>
          </div>

          <div className="w-full mt-4 sm:mt-6 text-black text-xs sm:text-sm">
            <h4 className="mb-1 sm:mb-2">
              <span className="font-semibold">IČO: &nbsp;</span>
              <span>71331000</span>
            </h4>
            <p>
              Fyzická osoba zapsaná v&nbsp;
              <a href="https://rzp.gov.cz/verejne-udaje/cs/udaje/vyber-subjektu;ico=71331000;roleSubjektu=P" target="_blank" className="underline">Živnostenském rejstříku</a>
            </p>
            <a className="underline mt-2 block" target="_blank" href="/provozni_rad.pdf">
              Provozní řád mobilního maséra
            </a>
          </div>
        </div>

        {/* Button */}
        <motion.a
          whileHover={{ scale: 1.05 }}
          href="https://maps.app.goo.gl/WskN1jzQ2Es5qNo17"
          target="_blank"
          className="py-3 px-12 text-sm rounded-full shadow-lg bg-white text-black font-normal cursor-pointer hover:bg-[#d8d8d8] transition-colors duration-200"
        >
          Oblast poskytování služeb
        </motion.a>
      </div>
    </section>
  );
};

export default Kontakt;
