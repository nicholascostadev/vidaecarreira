import infograficoDepressao from '../assets/infograficos-depressao.jpg';
import estresse from '../assets/estresse.png';

const Definition = () => {
	return (
		<section className="section-1  " id="definicao">
			<div className="grid lg:grid-cols-2 grid-cols-1 lg:min-h-screen lg:my-0 my-20 min-h-max content-center py-5 lg:py-0">
				<div className="md:flex-1 max-w-3xl">
					<h1 className="md:text-3xl text-2xl mb-6 border-b-2 pb-2">
						Estresse excessivo
					</h1>
					<p className="lg:text-xl md:text-lg text-sm mb-1">
						De acordo com a OMS(Organização Mundial da Saúde), o estresse atinge
						cerca de 90% da população mundial. "É importante prestar atenção aos
						nossos pensamentos e sentimentos, buscando ajustá-los diariamente.
						Viver cada dia, sem se exigir tanto e estimular esperanças diárias
						", disse Mônica Osório, psicóloga do IMIP, mostrando a importância
						da criação de novos hábitos mais saudáveis.
					</p>
					<p className="lg:text-xl md:text-lg text-sm mb-1">
						Atualmente, têm-se ouvido muito dos casos chamados de 'burn-out',
						uma sensação extrema de estresse, exaustão e esgotamento físico
						advinda de um trabalho muito desgastante que demanda muito do
						indivíduo constantemente.
					</p>
					<a
						href="https://drauziovarella.uol.com.br/doencas-e-sintomas/depressao/"
						target="_blank"
						className="text-blue-500 hover:underline"
						rel="noreferrer"
					>
						Fonte
					</a>
				</div>
				<div className="w-full">
					<img
						className="w-full rounded-sm mb-2"
						src={estresse}
						alt="Infográfico sobre depressão"
					/>
				</div>
			</div>
		</section>
	);
};

export default Definition;
