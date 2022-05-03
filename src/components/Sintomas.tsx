import React from 'react';

const Sintomas = () => {
	return (
		<section className="section-3 " id="sintomas">
			<div className="lg:min-h-screen min-h-max lg:my-0 my-20 flex flex-col justify-center ">
				<div>
					<h1 className="md:text-3xl text-2xl mb-6 pb-2 border-b-2">
						Sintomas
					</h1>
					<p className="lg:text-xl md:text-lg text-sm mb-2 max-w-7xl">
						Além de pessoas estressadas sentirem uma súbita dificuldade de
						focar-se em tarefas que antes pareciam simples de executar, tendem a
						ter também, os seguintes hábitos:
					</p>
					<ul style={{ listStyle: 'inside' }}>
						<li>
							Comportamentais:
							<ul style={{ listStyle: 'inside' }} className="ml-5 mt-1">
								<li className="lg:text-lg text-xs">Bebem muita cafeína</li>
								<li className="lg:text-lg text-xs">Desabafam constantemente</li>
								<li className="md:text-lg text-xs">Problemas psicomotores</li>
								<li className="md:text-lg text-xs">
									Ficam obcecados com coisas que não podem mudar
								</li>
							</ul>
						</li>
					</ul>
					<ul style={{ listStyle: 'inside' }}>
						<li>
							{' '}
							Físicos:
							<ul style={{ listStyle: 'inside' }} className="ml-5 mt-1">
								<li className="lg:text-lg text-xs">Bebem muita cafeína</li>
								<li className="lg:text-lg text-xs">Bebem muita cafeína</li>
							</ul>
						</li>
					</ul>
				</div>
			</div>
		</section>
	);
};

export default Sintomas;
