import Header from '../components/Header';
import Footer from '../components/Footer';
import estresse2 from '../assets/estresse2.png';

const BetterHabits = () => {
	return (
		<div className="help min-h-screen relative pb-20">
			<Header />
			<div className="grid xl:grid-cols-2 grid-cols-1 mt-40 text-xl h-100 lg:px-20 px-5 pb-5">
				<div>
					<h1 className="md:text-3xl text-2xl mb-6 pb-2 border-b-2">
						Hábitos para a redução do estresse
					</h1>
					<p className=" mb-1 lg:text-xl md:text-lg text-sm">
						A melhor indicação é sempre a consulta com um{' '}
						<span className="text-purple-800">médico especialista</span>,
						estresse em excesso é um problema sério e deve ser tratado
						corretamente para não acarretar outros efeitos como a ansiedade e
						depressão. Ninguém poderá te ajudar mais do que um bom profissional
						da área. Ainda assim existem ajustes de hábitos que costumam ser
						úteis para a maior parcela da população:
					</p>
					<br />
					<h2 className="md:text-2xl text-xl">1 - Alimentação saudável</h2>
					<hr />
					<p className=" lg:text-xl md:text-lg text-sm mt-4">
						Uma alimentação saudável é um dos principais fatores que contribuem
						para a redução do estresse. A alimentação saudável contribui para a
						redução da pressão arterial, aumento da circulação sanguínea,
						aumento da produção de colesterol e aumento da produção de glicose.
					</p>
					<br />
				</div>
				<div>
					<img src={estresse2} alt="" />
				</div>
			</div>
			<div className="lg:px-20 px-5 mb-10">
				<h2 className="md:text-2xl text-xl">2 - Exercícios</h2>
				<hr />
				<p className=" lg:text-xl md:text-lg text-sm mt-4">
					Exercícios aeróbicos que aumentam a frequência cardíaca ampliam os
					níveis de <span className="text-purple-800">endorfinas</span>, também
					conhecido como o{' '}
					<span className="text-purple-800">hormônio do bem estar</span> e
					diminuem os níveis de hormônios que podem causar estresse do
					organismo, como adrenalina e cortisol. <br />
				</p>
				<br />
				<h2 className="md:text-2xl text-xl">3 - Cortar a cafeína</h2>
				<hr />
				<p className=" lg:text-xl md:text-lg text-sm mt-4">
					Altas quantidades de cafeína podem aumentar os níveis de cortisol e
					intensificar os efeitos do estresse no corpo. É importante prestar
					atenção em como seu corpo reage à cafeína; você pode precisar cortar
					bebidas e alimentos à base da substância ou experimentar um chá de
					ervas se estiver se sentindo estressado.
				</p>
			</div>
			<Footer />
		</div>
	);
};

export default BetterHabits;
