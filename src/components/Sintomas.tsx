import React from 'react';

const Sintomas = () => {
	return (
		<section className="section-3 " id="sintomas">
			<div className="lg:min-h-screen min-h-max lg:my-0 my-20 flex flex-col justify-center ">
				<div>
					<h1 className="md:text-3xl text-2xl mb-6 pb-2 border-b-2">
						Sintomas
					</h1>
					<p className="lg:text-xl md:text-lg text-sm mb-2">
						Além do estado deprimido(na maior parte do tempo) e da
						anedonia(interesse e prazer diminuídos para realizar a maioria das
						atividades), tem-se como sintomas:
					</p>
					<ul style={{ listStyle: 'inside' }}>
						<li className="lg:text-lg text-xs">
							Alteração de peso não intencional(ganho ou perda)
						</li>
						<li className="lg:text-lg text-xs">
							Distúrbio de sono(insônia ou excesso de sono)
						</li>
						<li className="md:text-lg text-xs">Problemas psicomotores</li>
						<li className="md:text-lg text-xs">
							Fadiga ou perda de energia constante
						</li>
						<li className="md:text-lg text-xs">
							Culpa excessiva(sentimento permanente de culpa e inutilidade)
						</li>
						<li className="md:text-lg text-xs">Dificuldade de concentração</li>
						<li className="md:text-lg text-xs">
							Ideias suicidas(pensamentos recorrentes de suicídio ou morte)
						</li>
						<li className="md:text-lg text-xs">Baixa autoestima</li>
						<li className="md:text-lg text-xs">Alteração da libido</li>
					</ul>
				</div>
			</div>
		</section>
	);
};

export default Sintomas;
