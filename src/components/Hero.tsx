import { Link } from 'react-router-dom';
import depressaoImage from '../assets/images.jpg';

const Hero = () => {
	return (
		<div className="hero grid border-b-2 content-center xl:grid-cols-2 grid-cols-1 md:p-20 md:py-20 py-0 md:my-20 my-0 p-5 lg:min-h-screen min-h-max mt-20">
			<div className="lg:pr-5 md:pr-0 relative h-auto py-5">
				<h1 className="md:text-3xl text-2xl mb-6">O Mal do Século</h1>
				<p className="lg:text-xl md:text-lg text-sm mb-1">
					A depressão é considerada pela OMS como o “Mal do século”. A depressão
					provoca também ausência de prazer em coisas que antes faziam bem e
					grande oscilação de humor e pensamentos, que podem culminar em
					comportamentos e atos suicidas.
				</p>
				<p className="lg:text-xl md:text-lg text-sm mb-8">
					Há estudos comprovando que a depressão também incita alterações
					fisiológicas, podendo servir de porta de entrada para outras doenças.
					Além da sensação de infelicidade, podem apresentar baixas no sistema
					de imunidade e maiores problemas inflamatórios e infecciosos. Infarto,
					doenças cardiovasculares como o AVC e hipertensão também estão
					presentes em casos de depressão.
				</p>

				<Link
					to="/ajuda"
					className="px-10 text-2xl py-2 rounded-full bg-green-500 hover:bg-green-600 text-white  "
				>
					Ajuda
				</Link>
			</div>
			<div className="lg:pl-5 md:pl-0 h-auto w-auto">
				<img src={depressaoImage} alt="Pessoa depressiva" className="w-full" />
			</div>
		</div>
	);
};

export default Hero;
