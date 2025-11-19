import { Menu, Scale, Phone, Mail } from "lucide-react"
import { useState } from "react"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      <div className="backdrop-blur-md bg-slate-900/70 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-16 flex items-center justify-between">
            <a href="#home" className="flex items-center gap-2 text-white">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shadow">
                <Scale className="w-5 h-5 text-slate-900" />
              </div>
              <div className="leading-tight">
                <p className="font-semibold tracking-tight">Hamilton & Cole</p>
                <p className="text-xs text-slate-300">Attorneys at Law</p>
              </div>
            </a>

            <nav className="hidden md:flex items-center gap-8 text-slate-200">
              <a href="#practice" className="hover:text-white transition">Practice Areas</a>
              <a href="#attorneys" className="hover:text-white transition">Attorneys</a>
              <a href="#testimonials" className="hover:text-white transition">Testimonials</a>
              <a href="#contact" className="hover:text-white transition">Contact</a>
            </nav>

            <div className="hidden md:flex items-center gap-4">
              <a href="tel:+15551234567" className="inline-flex items-center gap-2 text-amber-300 hover:text-amber-200">
                <Phone className="w-4 h-4" />
                <span className="text-sm font-medium">(555) 123-4567</span>
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold px-4 py-2 rounded-md transition">
                <Mail className="w-4 h-4" />
                <span>Request Consultation</span>
              </a>
            </div>

            <button className="md:hidden text-white" onClick={() => setOpen(!open)} aria-label="Open menu">
              <Menu />
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden border-t border-white/10 bg-slate-900/90">
            <div className="px-4 py-4 space-y-3 text-slate-200">
              <a href="#practice" className="block">Practice Areas</a>
              <a href="#attorneys" className="block">Attorneys</a>
              <a href="#testimonials" className="block">Testimonials</a>
              <a href="#contact" className="block">Contact</a>
              <a href="tel:+15551234567" className="block">(555) 123-4567</a>
              <a href="#contact" className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold px-4 py-2 rounded-md transition">
                <Mail className="w-4 h-4" />
                <span>Request Consultation</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
