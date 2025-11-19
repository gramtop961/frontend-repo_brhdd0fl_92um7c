import { useState } from "react"

export default function Contact() {
  const [status, setStatus] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus("Sending...")

    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || "http://localhost:8000"
      const formData = Object.fromEntries(new FormData(e.currentTarget))
      const res = await fetch(`${baseUrl}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
      if (!res.ok) throw new Error("Failed to send")
      setStatus("Thank you — we will be in touch within one business day.")
      e.currentTarget.reset()
    } catch (err) {
      setStatus("Something went wrong. Please try again or call us.")
    }
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">Request a Consultation</h2>
            <p className="mt-3 text-slate-600">Share a few details and well reach out shortly.</p>
            <div className="mt-6 rounded-xl border border-slate-200 p-6 bg-slate-50">
              <p className="text-sm text-slate-600">Office</p>
              <p className="font-medium text-slate-900">1200 Market Street, Suite 500, San Francisco, CA</p>
              <p className="mt-4 text-sm text-slate-600">Phone</p>
              <a href="tel:+15551234567" className="font-medium text-amber-700">(555) 123-4567</a>
              <p className="mt-4 text-sm text-slate-600">Email</p>
              <a href="mailto:info@hamiltoncole.com" className="font-medium text-amber-700">info@hamiltoncole.com</a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="rounded-2xl border border-slate-200 p-6 shadow-sm bg-white">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-slate-600">First name</label>
                <input name="firstName" required className="mt-1 w-full rounded-md border-slate-300 focus:border-amber-500 focus:ring-amber-500" />
              </div>
              <div>
                <label className="text-sm text-slate-600">Last name</label>
                <input name="lastName" required className="mt-1 w-full rounded-md border-slate-300 focus:border-amber-500 focus:ring-amber-500" />
              </div>
              <div className="sm:col-span-2">
                <label className="text-sm text-slate-600">Email</label>
                <input type="email" name="email" required className="mt-1 w-full rounded-md border-slate-300 focus:border-amber-500 focus:ring-amber-500" />
              </div>
              <div className="sm:col-span-2">
                <label className="text-sm text-slate-600">How can we help?</label>
                <textarea name="message" rows="4" required className="mt-1 w-full rounded-md border-slate-300 focus:border-amber-500 focus:ring-amber-500" />
              </div>
            </div>
            <button className="mt-4 inline-flex items-center justify-center bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold px-6 py-3 rounded-md transition">
              Send Message
            </button>
            {status && <p className="mt-3 text-sm text-slate-600">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  )
}
