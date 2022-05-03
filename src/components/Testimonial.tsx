const Testimonial = () => {
	return (
		<section className="  section-2 " id="testimonial">
			<div className=" relative text-white lg:min-h-screen min-h-max lg:my-0 my-20 flex justify-center items-center">
				<div className="grid lg:grid-cols-2 grid-cols-1 min-h-full min-w-full h-3/4 content-center bg-green-600">
					<div className="p-10 max-h-full max-w-full">
						<h1 className="md:text-3xl text-2xl mb-6 pb-2 border-b-2">
							Nome do(a) Especialista
						</h1>
						<p className="lg:text-xl text-sm"> Fala dele(a)</p>
						<em className="text-zinc-200 lg:text-sm text-xs">
							Muted text dizendo a profissão dela
						</em>
					</div>
					<img
						className="h-full w-full top-0"
						src="https://picsum.photos/600/500"
						alt=""
					/>
				</div>
			</div>
		</section>
	);
};

export default Testimonial;
