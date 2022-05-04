import especialistaImage from '../assets/especialista.jpeg';

const Testimonial = () => {
	return (
		<section className="section-2 " id="testimonial">
			<div className="relative text-white lg:min-h-screen min-h-max lg:my-0 my-20">
				<div className="min-h-fit min-w-full bg-green-700 grid lg:grid-cols-2 grid-cols-1 content-center place-items-center lg:px-20 px-5 lg:py-0 pt-10">
					<div className="flex flex-col justify-center items-center pb-5">
						<h1 className="md:text-3xl text-2xl mb-6 pb-2 border-b-2 text-center">
							Bianca Machado da Silva Rangel
						</h1>
						<p className="lg:text-xl text-sm text-center">
							"Buscar dar mais importância para a saúde mental, ela é tão
							importante quanto a nossa saúde física. Tirar um tempo de descanso
							durante o dia para fazer uma atividade física e cuidar de si
							mesmo, fazendo algo que gosta, mesmo que for assistir uma série ou
							sair com os amigos para lanchar", diz especialista.
						</p>
						<em className="text-zinc-200 lg:text-sm text-xs mt-2 text-center">
							Especializada em Terapia Cognitivo-Comportamental no Intitutos
							Superiores de Ensino do Censa.
						</em>
					</div>
					<div className="w-3/4 right-0">
						<img
							className="w-full"
							src={especialistaImage}
							alt="especialista"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Testimonial;
