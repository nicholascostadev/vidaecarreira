import { Link } from 'react-router-dom';

import estresseHero from '../assets/EstresseHero.jpg';

const Hero = () => {
	return (
		<div className="hero place-items-center grid border-b-2 content-center xl:grid-cols-2 grid-cols-1 md:p-20 md:py-20 py-0 md:my-20 my-0 p-5 lg:min-h-screen min-h-max mt-20">
			<div className="lg:pr-5 md:pr-0 relative h-auto py-5">
				<p className="lg:text-xl md:text-lg text-sm mb-1">
					Com a pandemia, muitas pessoas sentiram a necessidade de se prepararem
					para lidar com o estresse. O isolamento junto com a nova fase de
					trabalho e estudo completamente remoto mudou completamente o ritmo da
					vida de todos e o estresse gerado por isso é percebido até hoje muitas
					pessoas.
				</p>
				<p className="lg:text-xl md:text-lg text-sm mb-8">
					O Estresse pode acabar sendo confundido com algo momentâneo, mas o
					estresse não é apenas isso. Mesmo não sendo considerado uma doença, em
					casos graves, o estresse pode acabar encadeando diversos outros
					perigos como ansiedade e depressão.
				</p>

				<Link
					to="/ajuda"
					className="px-10 text-2xl py-2 transition-all duration-300 rounded-full bg-green-500 hover:bg-green-600 text-white "
				>
					Hábitos Melhores
				</Link>
			</div>
			<div className="lg:pl-5 md:pl-0 h-auto w-auto">
				<img src={estresseHero} alt="Pessoa depressiva" className="w-full" />
			</div>
		</div>
	);
};

export default Hero;
