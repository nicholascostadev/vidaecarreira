import Footer from '../components/Footer';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Main from '../components/Main';

const Home = () => {
	return (
		<div className="home relative pb-10">
			<Header />
			<Hero />
			<Main />
			<Footer />
		</div>
	);
};

export default Home;
