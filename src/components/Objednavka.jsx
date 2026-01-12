import { useState } from 'react';
import { motion } from 'framer-motion';

const Objednavka = () => {
  const [jmeno, setJmeno] = useState('');
  const [telefon, setTelefon] = useState('');
  const [email, setEmail] = useState('');
  const [zprava, setZprava] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!jmeno || !telefon) {
      alert('Vyplňte prosím jméno a telefon.');
      return;
    }

    setLoading(true);

    // Simulate submission (replace with your actual logic)
    setTimeout(() => {
      console.log({
        jmeno,
        telefon,
        email,
        zprava,
      });

      setSubmitted(true);
      setLoading(false);
      alert('Formulář byl úspěšně odeslán.');

      // Clear form
      setJmeno('');
      setTelefon('');
      setEmail('');
      setZprava('');
    }, 1500);
  };

  return (
    <section id="objednavka" className="w-full py-10 md:py-14 bg-[#242424] text-white">
      <div className="max-w-5xl mx-auto px-4 relative">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 md:mb-6">Objednání masáže</h2>

        <p className="text-sm md:text-base text-white/90">
          <strong>Udělejte první krok ke klidu a pohodě – stačí pár kliknutí!</strong>&nbsp;
          Vyplňte formulář, my se vám ozveme, domluvíme se na termínu 
          a pak už Vás čeká jen zasloužený relax.
        </p>

        <form onSubmit={handleSubmit} className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="space-y-4">
            <label htmlFor="jmeno" className="flex items-center gap-2 text-white">
              <span>Jméno</span>
              <span className="text-[#aaaaaa] text-sm">- povinné</span>
            </label>
            <input
              id="jmeno"
              type="text"
              value={jmeno}
              onChange={(e) => setJmeno(e.target.value)}
              className="w-full rounded-2xl bg-[#404040] p-3"
              required
            />

            <label htmlFor="telefon" className="flex items-center gap-2 text-white">
              <span>Telefon</span>
              <span className="text-[#aaaaaa] text-sm">- povinné</span>
            </label>
            <input
              id="telefon"
              type="text"
              value={telefon}
              onChange={(e) => setTelefon(e.target.value)}
              className="w-full rounded-2xl bg-[#404040] p-3"
              required
            />

            <label htmlFor="email" className="text-white">
              E-mail
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-2xl bg-[#404040] p-3"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="zprava" className="text-white mb-1">
              Poznámka
            </label>
            <textarea
              id="zprava"
              value={zprava}
              onChange={(e) => setZprava(e.target.value)}
              rows={8}
              className="w-full rounded-2xl bg-[#404040] p-3 resize-none h-full"
            />
          </div>
        </form>

        <p className="text-white/30 text-xs mt-6">
          Vámi zadané osobní údaje budeme zpracovávat my, a to pro možnost vám odpovědět.
          Bližší informace naleznete v zásadách zpracování osobních údajů.
        </p>

        <motion.button
          type="submit"
          disabled={loading}
          whileHover={{ scale: !loading ? 1.05 : 1 }}
          whileTap={{ scale: !loading ? 0.95 : 1 }}
          className={`mt-6 md:mt-8 block ml-auto py-3 px-12 text-sm rounded-full transition-colors duration-200 shadow-lg ${
            loading
              ? 'bg-[#999] cursor-not-allowed'
              : 'bg-[#71645c] hover:bg-[#5a4f48] cursor-pointer'
          }`}
          onClick={handleSubmit}
        >
          {loading ? 'Odesílání...' : 'Odeslat'}
        </motion.button>
      </div>
    </section>
  );
};

export default Objednavka;
