import Navbar from './components/Navbar'
import Hero from './components/Hero'
import PracticeAreas from './components/PracticeAreas'
import Attorneys from './components/Attorneys'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navbar />
      <main>
        <Hero />
        <PracticeAreas />
        <Attorneys />
        <Testimonials />
        <Contact />
      </main>
      <footer className="border-t border-white/10 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-slate-300 text-sm flex flex-col sm:flex-row items-center justify-between gap-2">
          <p>© {new Date().getFullYear()} Hamilton & Cole LLP. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#practice" className="hover:text-white">Practice Areas</a>
            <a href="#attorneys" className="hover:text-white">Attorneys</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
