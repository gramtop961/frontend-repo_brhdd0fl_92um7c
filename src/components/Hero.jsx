import { Scale } from "lucide-react"

export default function Hero() {
  return (
    <section id="home" className="relative pt-28 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800" />
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.04),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(255,255,255,0.04),transparent_35%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 ring-1 ring-white/20 px-3 py-1 text-xs text-slate-200 mb-4">
              <Scale className="w-3.5 h-3.5 text-amber-300" />
              Trusted legal counsel since 1998
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
              Strategic advocacy. Clear guidance. Proven results.
            </h1>
            <p className="mt-5 text-lg text-slate-300 max-w-xl">
              A boutique law firm focused on business, litigation, and estate matters. We combine deep expertise with practical strategies to protect what matters most.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#contact" className="inline-flex items-center justify-center bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold px-6 py-3 rounded-md transition">
                Schedule a Consultation
              </a>
              <a href="#practice" className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 text-white font-medium px-6 py-3 rounded-md transition">
                Explore Practice Areas
              </a>
            </div>
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
              <div>
                <p className="text-3xl font-bold">25+</p>
                <p className="text-sm text-slate-300">Years in practice</p>
              </div>
              <div>
                <p className="text-3xl font-bold">1,200+</p>
                <p className="text-sm text-slate-300">Clients represented</p>
              </div>
              <div>
                <p className="text-3xl font-bold">95%</p>
                <p className="text-sm text-slate-300">Settlement rate</p>
              </div>
              <div>
                <p className="text-3xl font-bold">24h</p>
                <p className="text-sm text-slate-300">Response time</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-slate-800 to-slate-700 ring-1 ring-white/10 overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1629380321590-3b3f75d66dec?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjM1MTI1ODN8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')] bg-cover bg-center opacity-50" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-slate-200 text-sm">Downtown office, open weekdays 9am–6pm</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
