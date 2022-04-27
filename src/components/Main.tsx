import Definition from './Definition';
import Difference from './Difference';
import Sintomas from './Sintomas';

const Main = () => {
	return (
		<main className="main md:px-20 px-5 min-h-screen">
			<Definition />
			<Sintomas />
			<Difference />
		</main>
	);
};

export default Main;