import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import axios from 'axios';
import enderecos from './enderecos.json';
import Footer from '../components/Footer';

const Help = () => {
	const [places, setPlaces] = useState<any>();
	const [place, setPlace] = useState<[]>([]);
	const options = ['Rio de Janeiro - Rio de Janeiro', 'São Paulo - São Paulo'];
	const [selectedOption, setSelectedOption] = useState<any>(options[0]);

	const getPlaces = () => {
		if (selectedOption === 'São Paulo - São Paulo') {
			setPlace(() => places.sao_paulo);
		} else {
			setPlace(() => places.rio_de_janeiro);
		}
	};

	useEffect(() => {
		setPlaces(enderecos);
	}, []);

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
						CVV(Centro de Valorização da Vida)
					</a>
					que estará atendendo voluntariamente 24 horas por dia pelo telefone,
					email e chat sob total sigilo.
				</p>
				<p className="lg:text-xl md:text-lg text-sm">
					Ou ligue diretamente para o contato do CVV para o número
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
				<div className="flex md:flex-row flex-col mt-10 items-center">
					<select
						className="border-2 rounded-md p-2 max-h-12 lg:text-xl md:text-lg text-sm"
						onChange={e => {
							setSelectedOption(e.target.value);
							console.log(e.target.value);
						}}
					>
						{options.map(option => (
							<option
								key={option}
								value={option}
								className="lg:text-xl md:text-lg text-sm"
							>
								{option}
							</option>
						))}
					</select>
					<em className="ml-4 mr-1 lg:text-lg md:text-sm text-xs md:mt-0 px-2 mt-2">
						(Estado - Cidade)
					</em>
					<button
						onClick={() => {
							getPlaces();
						}}
						className="bg-green-500 hover:bg-green-600 ml-5 text-white font-bold py-2 px-4 rounded lg:text-xl md:text-lg text-sm text-center md:mt-0 mt-2"
					>
						Encontrar Lugar
					</button>
				</div>
				<div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
					{place.map((item: any) => {
						return (
							<div className="border-2 rounded-xl mt-5 p-5 drop-shadow-lg ">
								<p className="lg:text-xl md:text-lg text-sm">
									Local: {item.title}
								</p>
								<p className="lg:text-xl md:text-lg text-sm">
									Endereço: {item.address}
								</p>
								<p className="lg:text-xl md:text-lg text-sm">
									Número de telefone: {item.phone}
								</p>
								<p className="lg:text-xl md:text-lg text-sm">
									Atendimento de {item.time}
								</p>
							</div>
						);
					})}
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Help;
