const attorneys = [
  {
    name: "Sarah Hamilton, Esq.",
    role: "Managing Partner — Business & Corporate",
    bio: "Sarah advises startups and mid-market companies on complex transactions and governance.",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1887&auto=format&fit=crop",
  },
  {
    name: "David Cole, Esq.",
    role: "Partner — Litigation",
    bio: "David represents clients in high-stakes commercial disputes and arbitration.",
    img: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=1974&auto=format&fit=crop",
  },
]

export default function Attorneys() {
  return (
    <section id="attorneys" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">Our Attorneys</h2>
          <p className="mt-3 text-slate-600">Experienced, dedicated, and results-driven.</p>
        </div>

        <div className="mt-10 grid md:grid-cols-2 gap-8">
          {attorneys.map((a) => (
            <div key={a.name} className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
              <div className="h-64 bg-cover bg-center" style={{ backgroundImage: `url(${a.img})` }} />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-900">{a.name}</h3>
                <p className="text-sm text-amber-700 mt-1">{a.role}</p>
                <p className="text-slate-600 mt-3">{a.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
