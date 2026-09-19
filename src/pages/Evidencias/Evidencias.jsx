const getPreviewUrl = (archivo) => {
	if (!archivo) return '';
	if (archivo.toLowerCase().endsWith('.pdf')) return archivo;
	return `https://docs.google.com/gview?embedded=true&url=${encodeURIComponent(`${window.location.origin}${archivo}`)}`;
};

const evidencias = [
	{
		titulo: 'Microexpresiones - Escenas',
		tipo: 'Documento Word',
		archivo: '/Evidencias-Yeremi-Mateo/Microexpresiones-Escenas.docx',
		color: 'bg-rose-100 text-rose-700',
	},
	{
		titulo: 'El arte de la palabra - Funciones del lenguaje',
		tipo: 'Documento PDF',
		archivo: '/Evidencias-Yeremi-Mateo/El-Arte-de-la-Palabra-Funciones-del-Lenguaje-(1).pdf',
		color: 'bg-amber-100 text-amber-700',
	},
	{
		titulo: 'La sapa caramelo',
		tipo: 'Documento Word',
		archivo: '/Evidencias-Yeremi-Mateo/Yeremi-Mateo-Toro-Orozco-CUENTO-LA-SAPA-CARAMELO.docx',
		color: 'bg-emerald-100 text-emerald-700',
	},
	{
		titulo: 'Taller tipos de comunicación',
		tipo: 'Documento Word',
		archivo: '/Evidencias-Yeremi-Mateo/2EV0_TALLER-TIPOS-DE-COMUNICACIÓN.docx',
		color: 'bg-sky-100 text-sky-700',
	},
	{
		titulo: 'investigacion Tipos de Comunicacion',
		tipo: 'Documento PDF',
		archivo: '/Evidencias-Yeremi-Mateo/Investigación_Microexpresiones.pdf',
		color: 'bg-amber-100 text-amber-700',
	},
]

const Eniderevidencias = [
	{
		titulo: 'Tipos de Comunicacion',
		tipo: 'Documento Word',
		archivo: '/Evidencias-Enider/2EV0-TALLER-TIPOS-DE-COMUNICACION_Enider.docx',
		color: 'bg-rose-100 text-rose-700',
	},
	{
		titulo: 'La sapa caramelo',
		tipo: 'Documento Word',
		archivo: '/Evidencias-Enider/EneiderDavidRivasPrezCUENTO_LA_SAPA_CARAMELO.docx',
		color: 'bg-sky-100 text-sky-700',
	},
	{
		titulo: 'Funciones del Lenguaje (Roman Jakobson)',
		tipo: 'Documento PDF',
		archivo: '/Evidencias-Enider/FuncionesdelLenguaje-RomanJakobson.pdf',
		color: 'bg-emerald-100 text-emerald-700',
	},
]

const renderPreview = (archivo) => {
	const previewUrl = getPreviewUrl(archivo);
	if (!previewUrl) return null;

	return (
		<div className="mt-4 overflow-hidden rounded-lg border border-slate-200 bg-slate-50">
			<iframe
				src={previewUrl}
				title="Vista previa del archivo"
				className="h-52 w-full bg-white"
			/>
		</div>
	);
};

function Evidencias() {
	return (
		<div>
		<section>
			<h2 className="mb-3 border-b-2 border-indigo-200 pb-2 text-2xl font-semibold text-indigo-700">
				Evidencias Yeremi Mateo
			</h2>
			<p className="leading-relaxed text-gray-700">
				En esta sección puedes consultar las evidencias del trabajo realizado
				durante el reto de comunicación.
			</p>
			<div className="mt-8 grid gap-4 sm:grid-cols-2">
				{evidencias.map((evidencia) => (
					<article
						key={evidencia.titulo}
						className="flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
					>
						<div>
							<span className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${evidencia.color}`}>
								{evidencia.tipo}
							</span>
							<h3 className="mt-4 text-lg font-semibold text-slate-800">{evidencia.titulo}</h3>
							{renderPreview(evidencia.archivo)}
						</div>
						<a
							href={evidencia.archivo}
							target="_blank"
							rel="noreferrer"
							className="mt-6 inline-flex items-center justify-center rounded-lg bg-indigo-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-indigo-800"
						>
							Abrir evidencia <span className="ml-2" aria-hidden="true">↗</span>
						</a>
					</article>
				))}
			</div>
		</section>
		<section>
			<h2 className="mb-3 border-b-2 border-indigo-200 pb-2 text-2xl font-semibold text-indigo-700">
				Evidencias Eneider David Rivas
			</h2>
			<p className="leading-relaxed text-gray-700">
				En esta sección puedes consultar las evidencias del trabajo realizado
				durante el reto de comunicación.
			</p>
			<div className="mt-8 grid gap-4 sm:grid-cols-2">
				{Eniderevidencias.map((Eniderevidencias) => (
					<article
						key={Eniderevidencias.titulo}
						className="flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
					>
						<div>
							<span className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${Eniderevidencias.color}`}>
								{Eniderevidencias.tipo}
							</span>
							<h3 className="mt-4 text-lg font-semibold text-slate-800">{Eniderevidencias.titulo}</h3>
							{renderPreview(Eniderevidencias.archivo)}
						</div>
						<a
							href={Eniderevidencias.archivo}
							target="_blank"
							rel="noreferrer"
							className="mt-6 inline-flex items-center justify-center rounded-lg bg-indigo-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-indigo-800"
						>
							Abrir evidencia <span className="ml-2" aria-hidden="true">↗</span>
						</a>
					</article>
				))}
			</div>
		</section>
	</div>
	)
}

export default Evidencias
