import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import axios from 'axios';
import enderecos from './enderecos.json';

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
		<div className="help h-screen">
			<Header />
			<div className="text-xl h-100 lg:px-20 px-5 pb-5">
				<p className="mt-40 mb-1 ">
					A primeira indicação é procurar imediatamente um médico especializado
					no assunto. Depressão é uma doença séria que deve ser tratada com uma
					pessoa que realmente conhece do assunto e sabe como pode te ajudar.
					Não recorra a métodos na internet que digam curar a depressão se não
					for com a ajuda de um médico. Caso precise de alguém para conversar,
					existe o
					<a
						href="https://www.cvv.org.br/"
						className="text-blue-500 hover:underline"
					>
						CVV(Centro de Valorização da Vida)
					</a>
					que estará atendendo voluntariamente 24 horas por dia pelo telefone,
					email e chat sob total sigilo.
				</p>
				<p>
					Ou ligue diretamente para o contato do CVV para o número
					<span className="text-blue-500"> 198</span> ou contate-os por{' '}
					<a
						href="https://www.cvv.org.br/e-mail/"
						className="text-blue-500 hover:underline"
					>
						email.
					</a>
				</p>
				<p>
					Aqui têm alguns lugares de atendimento do CVV pessoalmente, caso
					queira acessar todos os lugares, entre no
					<a
						href="https://www.cvv.org.br/"
						target="__blank"
						className="text-blue-500 hover:underline"
					>
						{' '}
						site
					</a>{' '}
					deles.
				</p>
				<select
					className="border-2 rounded-md p-2 "
					onChange={e => {
						setSelectedOption(e.target.value);
						console.log(e.target.value);
					}}
				>
					{options.map(option => (
						<option key={option} value={option}>
							{option}
						</option>
					))}
				</select>
				<em className="ml-4 mr-1">(Estado - Cidade)</em>
				<button
					onClick={() => {
						getPlaces();
					}}
					className="bg-green-500 hover:bg-green-600 ml-5 text-white font-bold py-2 px-4 rounded mt-10"
				>
					Encontrar Lugar
				</button>
				<div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
					{place.map((item: any) => {
						return (
							<div className="border-2 rounded-xl mt-5 p-5 drop-shadow-lg">
								<p>Local: {item.title}</p>
								<p>Endereço: {item.address}</p>
								<p>Número de telefone: {item.phone}</p>
								<p>Atendimento de {item.time}</p>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default Help;
