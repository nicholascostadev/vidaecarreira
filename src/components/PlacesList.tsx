import { useEffect, useState, Fragment } from 'react';
import enderecos from '../assets/enderecos.json';

const PlacesList = () => {
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
		<>
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

			{place && (
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
			)}
		</>
	);
};

export default PlacesList;
