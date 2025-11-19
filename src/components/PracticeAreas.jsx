import { Briefcase, Building2, FileSignature, ShieldCheck } from "lucide-react"

const areas = [
  {
    icon: Briefcase,
    title: "Business Law",
    desc: "Entity formation, contracts, compliance, and day-to-day counsel for growing companies.",
  },
  {
    icon: ShieldCheck,
    title: "Litigation",
    desc: "Strategic representation in commercial disputes, negotiations, and trial advocacy.",
  },
  {
    icon: FileSignature,
    title: "Estate Planning",
    desc: "Wills, trusts, and asset protection strategies tailored to your family's needs.",
  },
  {
    icon: Building2,
    title: "Real Estate",
    desc: "Transactions, leases, and development with thorough due diligence and risk mitigation.",
  },
]

export default function PracticeAreas() {
  return (
    <section id="practice" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">Practice Areas</h2>
          <p className="mt-3 text-slate-600">Comprehensive legal services for businesses, individuals, and families.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {areas.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition">
              <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center mb-4 group-hover:scale-105 transition">
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
