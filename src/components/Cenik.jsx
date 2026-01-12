import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const cenik = [
  { nazev: 'Masáž šíje', minut: '15 min' },
  { nazev: 'Masáž zad a šíje', minut: '45 min' },
  { nazev: 'Masáž nohou', minut: '45 min' },
  { nazev: 'Masáž zad, šíje, ramen nebo hýždí', minut: '60 min' },
  { nazev: 'Masáž zad, šíje, nohou nebo rukou', minut: '90 min' },
  { nazev: 'Masáž celého těla', minut: '90 min' },
  { nazev: 'Cena za 15 min masáže', minut: '250 Kč' }
];

const Cenik = () => {
  return (
    <section id="cenik" className="w-full py-6 md:py-14 bg-[#7e7e7e]">
      <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row justify-center gap-6 md:gap-10 items-center">

        {/* Poukaz */}
        <div className="bg-white rounded-xl p-5 md:p-8 w-full max-w-md shadow-xl/20">
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-[#333]">Dárkové poukazy</h2>

          <p className="mb-4 text-sm md:text-base">
            <b>Obdarujte své blízké péčí, kterou si zaslouží.</b><br />
            Dárkový poukaz na masáž je dárek, který potěší každého ať už hledá úlevu nebo odpočinek.
          </p>

          <p className="mb-4 text-sm md:text-base">
            Můžete tak darovat přesně tolik, kolik chcete. <br />
            Obdarovaný si sám vybere službu, která mu nejvíce vyhovuje.
          </p>

          <motion.button className="mt-2" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="objednavka"
              smooth={true}
              duration={500}
              className="text-white text-sm cursor-pointer py-2 px-6 rounded-lg bg-[#71645c] hover:bg-[#5a4f48] transition-colors duration-200 shadow-md"
            >
              Objednat poukaz
            </Link>
          </motion.button>
        </div>

        {/* Ceník */}
        <div className="bg-[#71645c] text-white rounded-xl p-5 md:p-8 w-full max-w-md shadow-xl/20">
          <h2 className="text-xl md:text-2xl font-semibold mb-4">Ceník</h2>
          <h3 className="text-sm md:text-base mb-3">Vhodné kombinace masáží:</h3>

          <table className="w-full text-sm md:text-base">
            <tbody>
              {cenik.map((item, index) => (
                <tr
                  key={index}
                  className={`flex justify-between py-2 ${index === cenik.length - 1 ? 'border-t border-white mt-2 pt-3' : ''}`}
                >
                  <td className="pr-2">{item.nazev}</td>
                  <td className="text-right">{item.minut}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Cenik;
