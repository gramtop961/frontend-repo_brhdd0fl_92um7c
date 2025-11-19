const quotes = [
  {
    quote: "They handled our dispute with professionalism and precision. We were kept informed at every step and achieved a favorable outcome.",
    author: "M. Alvarez, COO",
  },
  {
    quote: "Clear, practical advice that helped us close a complex deal on time.",
    author: "J. Patel, Founder",
  },
  {
    quote: "Compassionate counsel during a difficult family transition. Highly recommend.",
    author: "R. Nguyen",
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">Client Testimonials</h2>
          <p className="mt-3 text-slate-600">What our clients say about working with us.</p>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {quotes.map((q, i) => (
            <div key={i} className="rounded-xl bg-white p-6 border border-slate-200 shadow-sm">
              <p className="text-slate-700">“{q.quote}”</p>
              <p className="mt-4 text-sm text-slate-500">— {q.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
