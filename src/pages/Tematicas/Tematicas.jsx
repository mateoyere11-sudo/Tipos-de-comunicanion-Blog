import { useState } from 'react';
import Digrama from '../../assets/Diagrama.png';
function Tematicas() {
  return (
    <section>
      <h2 className="text-2xl font-semibold text-indigo-700 mb-3 border-b-2 border-indigo-200 pb-2">
        Temática vista en formación
      </h2>

      <h3 className="text-xl font-semibold text-indigo-600 mt-8 mb-3">Los 4 pilares de la comunicación</h3>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
          <h4 className="font-semibold text-indigo-600">1. Claridad</h4>
          <p className="text-gray-600 text-sm mt-1">Un mensaje claro permite que la información sea entendida sin ambigüedades. Hablar con precisión ayuda a evitar malentendidos.</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
          <h4 className="font-semibold text-indigo-600">2. Escucha activa</h4>
          <p className="text-gray-600 text-sm mt-1">Escuchar con atención, interés y respeto permite comprender realmente al otro y responder de manera adecuada.</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
          <h4 className="font-semibold text-indigo-600">3. Empatía</h4>
          <p className="text-gray-600 text-sm mt-1">Ponerse en el lugar del otro facilita relaciones más humanas, cálidas y comprensivas, fortaleciendo la confianza.</p>
        </div>
        <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-200">
          <h4 className="font-semibold text-indigo-700">4. Retroalimentación</h4>
          <p className="text-gray-700 text-sm mt-1">La respuesta del receptor permite confirmar si el mensaje fue entendido y corregir errores para mejorar la interacción.</p>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-indigo-600 mt-8 mb-3">Tipos de Comunicación según la Actitud</h3>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100"><h4 className="font-semibold text-indigo-600">Comunicación Pasiva</h4><p className="text-gray-600 text-sm mt-1">Evita expresar opiniones, sentimientos o necesidades por temor al conflicto, priorizando siempre a los demás sobre uno mismo.</p></div>
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100"><h4 className="font-semibold text-indigo-600">Comunicación Agresiva</h4><p className="text-gray-600 text-sm mt-1">Impone opiniones y necesidades sin respetar al otro, muchas veces con tono de voz elevado o actitud dominante.</p></div>
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100"><h4 className="font-semibold text-indigo-600">Comunicación Pasivo-Agresiva</h4><p className="text-gray-600 text-sm mt-1">Expresa el desacuerdo de forma indirecta: sarcasmo, indirectas o silencio, evitando la confrontación directa.</p></div>
        <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-200"><h4 className="font-semibold text-indigo-700">Comunicación Asertiva</h4><p className="text-gray-700 text-sm mt-1">Expresa ideas y sentimientos de forma clara, directa y respetuosa, defendiendo los propios derechos sin vulnerar los del otro. Es el estilo más saludable y efectivo para las relaciones interpersonales.</p></div>
      </div>

      <h3 className="text-xl font-semibold text-indigo-600 mt-6 mb-3">
        Diagrama de los Tipos de Comunicación-Modelos de Comunicación(modelo tradicional y modelo de Jakobson)
      </h3>
      <img src={Digrama} alt="Diagrama de los tipos de comunicación" className="mx-auto my-6" />

            <h3 className="text-xl font-semibold text-indigo-600 mt-6 mb-3">
              Funciones del Lenguaje (Roman Jakobson)
            </h3>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <h4 className="font-semibold text-indigo-600">1. Función Emotiva</h4>
                <p className="text-gray-600 text-sm mt-1">Se centra en el emisor y expresa sus sentimientos, emociones o estado de ánimo. Ejemplo: &quot;¡Qué feliz estoy hoy!&quot;</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <h4 className="font-semibold text-indigo-600">2. Función Referencial</h4>
                <p className="text-gray-600 text-sm mt-1">Se enfoca en el contexto y transmite información objetiva sobre la realidad. Ejemplo: &quot;El agua hierve a 100°C.&quot;</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <h4 className="font-semibold text-indigo-600">3. Función Apelativa</h4>
                <p className="text-gray-600 text-sm mt-1">Se dirige al receptor buscando influir en su conducta. Ejemplo: &quot;Cierra la puerta, por favor.&quot;</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <h4 className="font-semibold text-indigo-600">4. Función Fática</h4>
                <p className="text-gray-600 text-sm mt-1">Verifica o mantiene abierto el canal de comunicación. Ejemplo: &quot;¿Aló? ¿Me escuchas?&quot;</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <h4 className="font-semibold text-indigo-600">5. Función Poética</h4>
                <p className="text-gray-600 text-sm mt-1">Centra la atención en la forma del mensaje, buscando un efecto estético. Ejemplo: metáforas, rimas o juegos de palabras.</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <h4 className="font-semibold text-indigo-600">6. Función Metalingüística</h4>
                <p className="text-gray-600 text-sm mt-1">Se usa el lenguaje para explicar o referirse al propio lenguaje. Ejemplo: &quot;¿Qué significa la palabra 'empatía'?&quot;</p>
              </div>

              
            </div>
                  <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-100 mt-4">
        <h4 className="font-semibold text-indigo-700">Biografía: Roman Jakobson</h4>
        <p className="text-gray-700 text-sm mt-1">Roman Jakobson (1896–1982) fue un lingüista y teórico literario ruso, una de las figuras más influyentes del estructuralismo lingüístico del siglo XX. Formó parte del Círculo Lingüístico de Moscú y de Praga, y desarrolló el modelo de las seis funciones del lenguaje a partir de los elementos del proceso comunicativo (emisor, receptor, mensaje, canal, código y contexto). Su trabajo influyó profundamente en la lingüística, la semiótica y la teoría literaria moderna.</p>
      </div>

      <h3 className="text-xl font-semibold text-indigo-600 mt-8 mb-3">Comunicación No Verbal</h3>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100"><h4 className="font-semibold text-indigo-600">1. Kinésica</h4><p className="text-gray-600 text-sm mt-1">Estudia los movimientos corporales, gestos y posturas que acompañan o reemplazan el mensaje verbal.</p></div>
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100"><h4 className="font-semibold text-indigo-600">2. Microexpresiones</h4><p className="text-gray-600 text-sm mt-1">Expresiones faciales breves e involuntarias que revelan emociones genuinas, difíciles de ocultar o fingir.</p></div>
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100"><h4 className="font-semibold text-indigo-600">3. Proxémica</h4><p className="text-gray-600 text-sm mt-1">Analiza el uso del espacio físico y la distancia entre las personas durante la interacción.</p></div>
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100"><h4 className="font-semibold text-indigo-600">4. Paralenguaje</h4><p className="text-gray-600 text-sm mt-1">Elementos vocales que acompañan la palabra: tono, volumen, ritmo y pausas, que modifican el significado del mensaje.</p></div>
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100"><h4 className="font-semibold text-indigo-600">5. Emblemas y Ademanes</h4><p className="text-gray-600 text-sm mt-1">Gestos con un significado específico y reconocido dentro de una cultura, capaces de sustituir palabras completas.</p></div>
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100"><h4 className="font-semibold text-indigo-600">6. Entorno Social: Vestimenta, Protocolo y Saludo</h4><p className="text-gray-600 text-sm mt-1">La forma de vestir, el protocolo y el saludo también comunican: reflejan identidad, respeto y adaptación al contexto social.</p></div>
      </div>
    </section>
  );
}

export default Tematicas