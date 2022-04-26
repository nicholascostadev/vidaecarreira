import infograficoDepressao from '../assets/infograficos-depressao.jpg';

const Definition = () => {
	return (
		<section className="section-1  " id="definicao">
			<div className="grid lg:grid-cols-2 grid-cols-1 lg:min-h-screen lg:my-0 my-20 min-h-max content-center py-5 lg:py-0">
				<div className="md:flex-1 max-w-3xl">
					<h1 className="md:text-3xl text-2xl mb-6 border-b-2 pb-2">
						O que é a depressão
					</h1>
					<p className="lg:text-xl md:text-lg text-sm mb-1">
						A depressão é uma doença psiquiátrica crônica e recorrente que
						produz uma alteração do humor caracterizada por uma tristeza
						profunda, sem fim, associada a sentimentos de dor, amargura,
						desencanto, desesperança, baixa autoestima e culpa.
					</p>
					<p className="lg:text-xl md:text-lg text-sm mb-1">
						De acordo com o gráfico, existem 322 milhões de pessoas que sofrem
						de depressão no mundo(4,4% da população do planeta). O Brasil tem a
						maior taxa de depressão da América Latina. Cerca de 800 mil pessoas
						morrem por suicídio a cada ano, sendo a segunda principal causa de
						morte de pessoas entre 15 e 29 anos.
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
						className="w-full"
						src={infograficoDepressao}
						alt="Infográfico sobre depressão"
					/>
				</div>
			</div>
		</section>
	);
};

export default Definition;
