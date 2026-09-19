import { Link } from 'react-router-dom'

function Inicio() {
  return (
    <div className="space-y-8">
      <section className="relative overflow-hidden rounded-4xl bg-indigo-950 px-6 py-8 text-white shadow-xl sm:px-10 sm:py-10">
        <div className="absolute -right-16 -top-20 size-56 rounded-full border-24 border-amber-300/20" />
        <div className="absolute -bottom-24 right-16 size-44 rounded-full bg-indigo-700/60 blur-2xl" />
        <div className="relative max-w-xl">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-amber-300">Una habilidad para la vida</p>
          <h2 className="max-w-lg text-3xl font-bold leading-tight sm:text-4xl">Cada mensaje puede abrir una puerta.</h2>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-indigo-100">
            Explora cómo las palabras, los gestos y la escucha transforman la manera en que nos relacionamos.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link to="/tematicas" className="rounded-full bg-amber-300 px-5 py-2.5 text-sm font-bold text-indigo-950 transition hover:-translate-y-0.5 hover:bg-amber-200">
              Explorar temáticas <span aria-hidden="true">→</span>  
            </Link>
            <Link to="/evidencias" className="rounded-full border border-white/30 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10">
              Ver evidencias
            </Link>
          </div>
        </div>
      </section>

      <section className="grid gap-3 sm:grid-cols-3" aria-label="Ideas principales">
        <div className="rounded-2xl border border-indigo-100 bg-white p-5 shadow-sm">
          <span className="text-2xl" aria-hidden="true">01</span>
          <h3 className="mt-3 font-bold text-indigo-800">Conectar</h3>
          <p className="mt-1 text-sm leading-relaxed text-slate-600">Crear vínculos a través de la empatía y la escucha.</p>
        </div>
        <div className="rounded-2xl border border-indigo-100 bg-white p-5 shadow-sm">
          <span className="text-2xl" aria-hidden="true">02</span>
          <h3 className="mt-3 font-bold text-indigo-800">Comprender</h3>
          <p className="mt-1 text-sm leading-relaxed text-slate-600">Leer más allá de las palabras, el tono y los gestos.</p>
        </div>
        <div className="rounded-2xl border border-indigo-100 bg-white p-5 shadow-sm">
          <span className="text-2xl" aria-hidden="true">03</span>
          <h3 className="mt-3 font-bold text-indigo-800">Transformar</h3>
          <p className="mt-1 text-sm leading-relaxed text-slate-600">Expresarnos mejor para colaborar y tomar decisiones.</p>
        </div>
      </section>

      <section className="rounded-2xl border-l-4 border-amber-400 bg-white p-6 shadow-sm sm:p-8">
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-amber-600">Introducción</p>
        <h2 className="text-2xl font-bold text-indigo-800">Comunicar también es aprender a mirar</h2>
        <p className="mt-4 leading-relaxed text-slate-600">
          La comunicación es el proceso mediante el cual las personas intercambian ideas, sentimientos y conocimientos a través de un lenguaje común, ya sea hablado, escrito o gestual. Es la base sobre la que se construyen las relaciones humanas, tanto en la vida personal como en el entorno laboral, porque permite entendernos, colaborar y resolver diferencias. Sin una comunicación clara y efectiva, los equipos de trabajo pierden alineación, surgen malentendidos y los objetivos se dificultan. Por eso, aprender a comunicarnos bien es una herramienta estratégica para el éxito personal y organizacional.
        </p>
      </section>

      <section className="grid gap-6 rounded-2xl bg-indigo-50 p-6 sm:grid-cols-[0.7fr_1.3fr] sm:p-8">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-indigo-500">Lo que nos dejó el reto</p>
          <h2 className="mt-2 text-2xl font-bold text-indigo-800">No todo lo importante se dice.</h2>
        </div>
        <p className="leading-relaxed text-slate-700">
          Al abordar el reto sobre los tipos de comunicación, comprendimos que ninguna forma funciona de manera aislada: combinamos lo verbal con lo no verbal, y lo escrito con apoyos visuales para reforzar el mensaje. Muchos problemas no surgen por falta de palabras, sino por no prestar atención al lenguaje corporal o al tono. Este ejercicio nos hizo más conscientes de cómo transmitimos nuestras ideas y de cómo podemos expresarnos mejor en distintos contextos.
        </p>
      </section>

      <section className="rounded-2xl bg-linear-to-br from-amber-300 to-amber-100 p-6 text-indigo-950 shadow-sm sm:p-8">
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-indigo-700">Conclusión</p>
        <h2 className="mt-2 text-2xl font-bold">Hablar claro también es cuidar al otro.</h2>
        <p className="mt-4 max-w-2xl leading-relaxed text-indigo-900/80">
          Conocer los tipos de comunicación nos permite adaptarnos a diferentes situaciones y transmitir mensajes más claros y efectivos. Comunicarnos bien mejora nuestras relaciones, fortalece el trabajo en equipo y nos ayuda a tomar mejores decisiones.
        </p>
      </section>
    </div>
  )
}

export default Inicio