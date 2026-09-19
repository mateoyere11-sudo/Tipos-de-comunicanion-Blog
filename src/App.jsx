import './index.css'
import { NavLink, Route, Routes } from 'react-router-dom'
import Tematicas from './pages/Tematicas/Tematicas.jsx'
import Evidencias from './pages/Evidencias/Evidencias.jsx'
import Integrantes from './pages/Integrantes/Integrantes.jsx'
import Inicio from './pages/Inicio/Inicio.jsx'

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-slate-800">
      <header className="bg-indigo-700 text-white shadow-[0_8px_24px_rgba(49,46,129,0.2)]">
        <div className="mx-auto flex w-[calc(100%-3rem)] max-w-5xl flex-col items-start justify-between gap-6 border-b border-white/20 py-5 sm:flex-row sm:items-center">
          <NavLink to="/" className="inline-flex items-center gap-3 text-white no-underline" aria-label="Ir al inicio de La Comunicación">
            <span className="grid size-10 place-items-center rounded-xl border border-white/40 bg-amber-400 text-xs font-extrabold tracking-wider text-indigo-900">LC</span>
            <span>
              <span className="block text-base font-bold">La Comunicación</span>
              <span className="mt-0.5 block text-[0.72rem] uppercase tracking-[0.08em] text-indigo-200">Ideas que conectan</span>
            </span>
          </NavLink>

          <nav className="flex w-full flex-wrap gap-1 rounded-xl border border-white/20 bg-indigo-950/20 p-1 sm:w-auto" aria-label="Navegación principal">
            <NavLink
              to="/"
              end
              className={({ isActive }) => `flex-1 rounded-lg px-4 py-2 text-center text-sm font-semibold transition duration-150 hover:-translate-y-px hover:text-white sm:flex-none ${isActive ? 'bg-white text-indigo-800 shadow-[0_3px_10px_rgba(15,23,42,0.14)]' : 'text-indigo-100'}`}
            >
              Inicio
            </NavLink>
            <NavLink
              to="/tematicas"
              className={({ isActive }) => `flex-1 rounded-lg px-4 py-2 text-center text-sm font-semibold transition duration-150 hover:-translate-y-px hover:text-white sm:flex-none ${isActive ? 'bg-white text-indigo-800 shadow-[0_3px_10px_rgba(15,23,42,0.14)]' : 'text-indigo-100'}`}
            >
              Temáticas
            </NavLink>
            <NavLink
              to="/evidencias"
              className={({ isActive }) => `flex-1 rounded-lg px-4 py-2 text-center text-sm font-semibold transition duration-150 hover:-translate-y-px hover:text-white sm:flex-none ${isActive ? 'bg-white text-indigo-800 shadow-[0_3px_10px_rgba(15,23,42,0.14)]' : 'text-indigo-100'}`}
            >
              Evidencias
            </NavLink>
            <NavLink
              to="/integrantes"
              className={({ isActive }) => `flex-1 rounded-lg px-4 py-2 text-center text-sm font-semibold transition duration-150 hover:-translate-y-px hover:text-white sm:flex-none ${isActive ? 'bg-white text-indigo-800 shadow-[0_3px_10px_rgba(15,23,42,0.14)]' : 'text-indigo-100'}`}
            >
              Integrantes
            </NavLink>
          </nav>
        </div>

        <div className="mx-auto w-[calc(100%-3rem)] max-w-5xl py-12 sm:py-14">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.14em] text-amber-200">Blog reflexivo · Formación</p>
          <h1 className="max-w-xl text-[clamp(2.1rem,5vw,3.7rem)] font-bold leading-[1.05] tracking-tight text-white">Comunicar también es comprender.</h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-indigo-100">Un espacio para explorar cómo nuestras palabras, gestos y actitudes construyen puentes.</p>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-10 space-y-10">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/tematicas" element={<Tematicas />} />
          <Route path="/evidencias" element={<Evidencias />} />
          <Route path="/integrantes" element={<Integrantes />} />
        </Routes>
      </main>

      <footer className="mt-8 border-t border-slate-200 bg-slate-50">
        <div className="mx-auto flex w-[calc(100%-2rem)] max-w-5xl flex-col items-start justify-between gap-6 py-8 sm:flex-row sm:items-center">
          <div>
            <p className="font-bold text-indigo-800">La Comunicación</p>
            <p className="mt-1 text-sm text-slate-500">Aprender a expresarnos para encontrarnos mejor.</p>
          </div>
          <div className="flex items-center gap-2.5 text-sm text-slate-500">
            <span>Proyecto de formación</span>
            <span className="text-amber-500">•</span>
            <span>React + Vite</span>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
