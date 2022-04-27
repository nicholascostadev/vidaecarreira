import Header from '../components/Header';
import Footer from '../components/Footer';
import PlacesList from '../components/PlacesList';

const Help = () => {
	return (
		<div className="help min-h-screen relative pb-20">
			<Header />
			<div className="text-xl h-100 lg:px-20 px-5 pb-5">
				<p className="mt-40 mb-1 lg:text-xl md:text-lg text-sm  ">
					A primeira indicação é procurar imediatamente um médico especializado
					no assunto. Depressão é uma doença séria que deve ser tratada com uma
					pessoa que realmente conhece do assunto e sabe como pode te ajudar.
					Não recorra a métodos na internet que digam curar a depressão se não
					for com a ajuda de um médico. Caso precise de alguém para conversar,
					existe o
					<a
						href="https://www.cvv.org.br/"
						className="text-blue-500 hover:underline lg:text-xl md:text-lg text-sm"
					>
						{' '}
						CVV(Centro de Valorização da Vida){' '}
					</a>
					que estará atendendo voluntariamente 24 horas por dia pelo telefone,
					email e chat sob total sigilo.
				</p>
				<p className="lg:text-xl md:text-lg text-sm">
					Ou também, ligue diretamente para o contato do CVV para o número
					<span className="text-blue-500 lg:text-xl md:text-lg text-sm">
						{' '}
						198
					</span>{' '}
					ou contate-os por{' '}
					<a
						href="https://www.cvv.org.br/e-mail/"
						className="text-blue-500 hover:underline lg:text-lg md:text-lg text-sm"
						target="_blank"
						rel="noreferrer"
					>
						email.
					</a>
				</p>
				<p className="lg:text-xl md:text-lg text-sm">
					Aqui têm alguns lugares de atendimento do CVV pessoalmente, caso
					queira acessar todos os lugares, entre no
					<a
						href="https://www.cvv.org.br/"
						target="__blank"
						className="text-blue-500 hover:underline lg:text-xl md:text-lg text-sm"
						rel="noreferrer"
					>
						{' '}
						site
					</a>{' '}
					deles.
				</p>
				<PlacesList />
			</div>
			<Footer />
		</div>
	);
};

export default Help;
