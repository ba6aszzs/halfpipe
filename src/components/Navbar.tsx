import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FF4400]/90 backdrop-blur-lg border-b border-black/10">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6">
        <a href="#" className="font-display text-lg font-black tracking-[0.1em] uppercase text-white">HALFPIPE</a>
        <div className="hidden items-center gap-8 md:flex">
          <a href="#pilares" className="text-[11px] font-bold tracking-[0.12em] uppercase text-white/60 transition-colors hover:text-white">Valores</a>
          <a href="#sobre" className="text-[11px] font-bold tracking-[0.12em] uppercase text-white/60 transition-colors hover:text-white">Sobre</a>
          <a href="#diferenciais" className="text-[11px] font-bold tracking-[0.12em] uppercase text-white/60 transition-colors hover:text-white">Diferenciais</a>
          <a href="https://wa.me/5547XXXXXXXX" className="bg-black px-5 py-2.5 text-[11px] font-bold tracking-[0.12em] uppercase text-white transition-all hover:bg-[#0d0e0d]">CONTATO</a>
        </div>
        <button className="relative z-50 flex size-11 items-center justify-center md:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
          <div className="flex flex-col gap-1"><motion.span animate={open ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }} className="block h-0.5 w-5 bg-white" /><motion.span animate={open ? { opacity: 0 } : { opacity: 1 }} className="block h-0.5 w-5 bg-white" /><motion.span animate={open ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }} className="block h-0.5 w-5 bg-white" /></div>
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden border-t border-black/10 bg-[#FF4400]">
            <div className="flex flex-col gap-1 px-4 py-4 sm:px-6">
              <a href="#pilares" onClick={() => setOpen(false)} className="flex min-h-11 items-center rounded px-4 text-[11px] font-bold tracking-[0.12em] uppercase text-white/60">Valores</a>
              <a href="#sobre" onClick={() => setOpen(false)} className="flex min-h-11 items-center rounded px-4 text-[11px] font-bold tracking-[0.12em] uppercase text-white/60">Sobre</a>
              <a href="#diferenciais" onClick={() => setOpen(false)} className="flex min-h-11 items-center rounded px-4 text-[11px] font-bold tracking-[0.12em] uppercase text-white/60">Diferenciais</a>
              <a href="https://wa.me/5547XXXXXXXX" className="mt-2 flex min-h-11 items-center justify-center bg-black px-4 text-[11px] font-bold tracking-[0.12em] uppercase text-white">CONTATO</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
