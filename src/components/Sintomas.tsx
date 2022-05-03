import React from 'react';

const Sintomas = () => {
	return (
		<section className="section-3 md:px-20 px-5" id="sintomas">
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
						<h2 className="text-lg">Comportamentais: </h2>
						<li className="lg:text-lg text-xs">Bebem muita cafeína</li>
						<li className="lg:text-lg text-xs">Desabafam constantemente</li>
						<li className="md:text-lg text-xs">Problemas psicomotores</li>
						<li className="md:text-lg text-xs">
							Ficam obcecados com coisas que não podem mudar
						</li>
						<h2 className="text-lg">Físicos: </h2>
						<li className="lg:text-lg text-xs">
							Acne. A acne , também conhecida como espinha, é um dos sintomas
							físicos do estresse mais visíveis em pessoas com estresse em
							excesso.
						</li>
						<li className="lg:text-lg text-xs">
							Dores de cabeça. O estresse pode gerar um forma de dor que afeta a
							nuca e a testa, como se algo estivesse pressionando a sua cabeça
						</li>
						<li className="lg:text-lg text-xs">insônia.</li>
						<li className="lg:text-lg text-xs">
							Doente ou gripado frequentemente.
						</li>
						<li className="lg:text-lg text-xs">Alterações na libido.</li>
					</ul>
				</div>
			</div>
		</section>
	);
};

export default Sintomas;
