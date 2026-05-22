import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="relative flex min-h-[100dvh] items-center overflow-hidden bg-[#FF4400]">
      {/* Linhas diagonais dinâmicas */}
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: `repeating-linear-gradient(-45deg, #000 0px, #000 2px, transparent 2px, transparent 20px)` }} />
      
      {/* Triângulos decorativos */}
      {[{ top: "10%", right: "15%" }, { top: "60%", right: "40%" }, { top: "30%", left: "10%" }].map((p, i) => (
        <motion.div
          key={i}
          animate={{ rotate: [0, 15, 0], opacity: [0.05, 0.12, 0.05] }}
          transition={{ duration: 5 + i, repeat: Infinity }}
          className="absolute size-16 sm:size-24"
          style={{ top: p.top, [Object.keys(p)[1]]: Object.values(p)[1], clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)", backgroundColor: "#000" }}
        />
      ))}

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 sm:px-6">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
          className="max-w-3xl">
          <span className="inline-block bg-black text-white px-3 py-1 text-[10px] font-bold tracking-[0.2em] uppercase mb-6">Esportes Radicais</span>
          <h1 className="font-display text-[clamp(3.5rem,15vw,7rem)] font-black leading-[0.8] tracking-[-0.04em] uppercase text-white">
            HALF
            <br />
            <span className="text-black">PIPE</span>
          </h1>
          <p className="mt-5 max-w-lg text-sm leading-relaxed sm:text-base text-white/70">
            Equipamentos, roupas e acessórios para quem vive a adrenalina. Skate, surf, snowboard e muito mais.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a href="https://wa.me/5547XXXXXXXX" className="flex min-h-12 items-center justify-center bg-black px-8 text-xs font-bold tracking-[0.12em] uppercase text-white transition-all hover:bg-[#0d0e0d] sm:min-h-0 sm:py-3.5">VER PRODUTOS</a>
            <a href="#sobre" className="flex min-h-12 items-center justify-center bg-white/10 backdrop-blur-sm px-8 text-xs font-bold tracking-[0.12em] uppercase text-white transition-all sm:min-h-0 sm:py-3.5">CONHECER</a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
