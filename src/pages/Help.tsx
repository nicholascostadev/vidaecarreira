import Header from '../components/Header';
import Footer from '../components/Footer';
import PlacesList from '../components/PlacesList';
import estresse2 from '../assets/estresse2.png';

const Help = () => {
	return (
		<div className="help min-h-screen relative pb-20">
			<Header />
			<div className="grid xl:grid-cols-2 grid-cols-1 mt-40 text-xl h-100 lg:px-20 px-5 pb-5">
				<div>
					<h1 className="md:text-3xl text-2xl mb-6 pb-2 border-b-2">
						Hábitos para a melhora do estresse
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
					<h2 className="md:text-2xl">1 - Alimentação saudável</h2>
					<hr />
					<p className=" lg:text-xl md:text-lg text-sm mt-4">
						Uma alimentação saudável é um dos principais fatores que contribuem
						para a redução do estresse. A alimentação saudável contribui para a
						redução da pressão arterial, aumento da circulação sanguínea,
						aumento da produção de colesterol e aumento da produção de glicose.
					</p>
					<br />
					<h2 className="md:text-2xl">2 - Alimentação saudável</h2>
					<hr />
					<p className=" lg:text-xl md:text-lg text-sm mb-28 mt-4">
						Uma alimentação saudável é um dos principais fatores que contribuem
						para a redução do estresse. A alimentação saudável contribui para a
						redução da pressão arterial, aumento da circulação sanguínea,
						aumento da produção de colesterol e aumento da produção de glicose.
					</p>
				</div>
				<div>
					<img src={estresse2} alt="" />
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Help;
