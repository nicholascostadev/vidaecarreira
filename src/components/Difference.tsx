import duvida from '../assets/questionMark.jpg';

const Difference = () => {
	return (
		<section
			className="  section-2 lg:min-h-screen min-h-max lg:my-0 my-20 grid content-center  grid-cols-1 md:grid-cols-2"
			id="diferenca"
		>
			<div>
				<h1 className="md:text-3xl text-2xl mb-6 pb-2 border-b-2">
					Diferença entre tristeza e depressão
				</h1>
				<p className="lg:text-xl md:text-lg text-sm mb-2">
					As pessoas sem a doença podem sofrer, ficar tristes porém encontram
					uma forma de superá-las. Nos quadros de depressão, a tristeza parece
					ser infinita, mesmo que nao haja um sentido naquele momento para se
					estar triste, o humor permanece deprimido praticamente o tempo todo,
					por dias e dias seguidos. Interesses que se tinha anteriormente são
					perdidos, atividades que geravam prazer, não geram mais e a pessoa não
					tem perspectiva de que algo possa ser feito para que melhore seu
					quadro.
				</p>
				<em className="md:text-base text-xs text-gray-700">
					Está sentindo algum sintoma parecido? Procure um médico especialista
					imediatamente, depressão é uma doença séria, mas com ajuda é possível
					se recuperar.
				</em>
				<br />
				<em className="text-gray-700 md:text-base text-xs ">
					Caso queira alguém pra conversar, entre em contato com o{' '}
					<a
						target="_blank"
						href="https://www.cvv.org.br/"
						className="text-blue-500 hover:underline"
						rel="noreferrer"
					>
						CVV(Centro de Valorização da Vida).
					</a>
				</em>
			</div>
			<div className="w-full flex justify-center items-center">
				<img className="w-3/4" src={duvida} alt="" />
			</div>
		</section>
	);
};

export default Difference;
