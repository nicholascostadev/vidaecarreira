import { Link } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { useState } from 'react';
const Header = () => {
	const [open, setOpen] = useState(false);
	const toggleMenu = () => {
		setOpen(!open);
	};
	return (
		<div className="header flex justify-between items-center md:px-20 px-5 h-20 w-full max-w-full border-b-2 fixed bg-white z-10">
			<div>
				<Link to="/" className="text-3xl">
					Titulo
				</Link>
			</div>
			<div className="md:flex hidden justify-center items-center ">
				<a
					href="#definicao"
					className="mx-2 lg:px-10 px-2 hover:border-b-2 hover:border-gray-400 border-b-2 border-transparent transition-all"
				>
					O que é
				</a>
				<a
					href="#diferenca"
					className="mx-2 lg:px-10 px-2 hover:border-b-2 hover:border-gray-400 border-b-2 border-transparent transition-all"
				>
					Tristeza ou Depressão?
				</a>
				<a
					href="#sintomas"
					className="mx-2  lg:px-10 px-2 hover:border-b-2 hover:border-gray-400 border-b-2 border-transparent transition-all"
				>
					Sintomas
				</a>
				<Link
					to="/ajuda"
					className="lg:px-10 px-5 ml-5 py-2 rounded-full bg-green-500 hover:bg-green-600 text-white  "
				>
					Ajuda
				</Link>
			</div>
			<AiOutlineMenu
				className="hover:cursor-pointer md:hidden sm:inline"
				onClick={toggleMenu}
			/>

			<div
				className={
					open
						? 'md:translate-x-96 opacity-1 translate-x-0 transition-all overflow-hidden fixed bg-gray-900 text-white right-0 top-0 min-h-screen z-10 py-10 pr-10 pl-2 sm:w-80 w-full'
						: ' -right-96 opacity-0 transition-all top-0 fixed overflow-x-hidden bg-gray-900 min-h-screen z-10 py-10 pr-10 pl-2 w-80'
				}
			>
				<AiOutlineClose
					className="mr-5 mt-8 hover:cursor-pointer absolute right-0 top-0"
					onClick={toggleMenu}
				/>
				<div className="md:hidden flex flex-col w-full pb-5">
					<h1 className="text-3xl">Titulo</h1>
				</div>
				<hr />
				<div className="md:hidden flex flex-col">
					<a
						href="#definicao"
						onClick={toggleMenu}
						className="py-5 hover:border-b-2 mt-4 text-center hover:border-gray-400 border-b-2 border-transparent transition-all"
					>
						O que é
					</a>
					<a
						href="#diferenca"
						onClick={toggleMenu}
						className="py-5 hover:border-b-2 text-center hover:border-gray-400 border-b-2 border-transparent transition-all"
					>
						Tristeza ou Depressão?
					</a>
					<a
						href="#sintomas"
						onClick={toggleMenu}
						className="py-5 hover:border-b-2 text-center hover:border-gray-400 border-b-2 border-transparent transition-all"
					>
						Sintomas
					</a>
					<Link
						to="/ajuda"
						onClick={toggleMenu}
						className="my-5 text-center lg:px-10 px-5 ml-5 py-2 rounded-full bg-green-500 hover:bg-green-600 text-white  "
					>
						Ajuda
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Header;
