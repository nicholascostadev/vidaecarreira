import React from 'react';
import { AiOutlineCopyright } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Footer = () => {
	return (
		<footer className="py-3 footer flex flex-col justify-center items-center min-h-20 max-h-32 border-t-2 bottom-0 absolute bg-white left-0 w-full">
			<Link to="/ajuda" className="text-blue-500 hover:underline md:mb-2 mb-0">
				Ajuda
			</Link>
			<div className="flex justify-center items-center">
				<AiOutlineCopyright /> nicholascostadev
			</div>
		</footer>
	);
};

export default Footer;
