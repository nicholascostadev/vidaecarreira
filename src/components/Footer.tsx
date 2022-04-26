import React from 'react';
import { AiOutlineCopyright } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Footer = () => {
	return (
		<footer className="footer flex flex-col justify-center items-center h-20 border-t-2 bottom-0 left-0 w-full">
			<Link to="/ajuda" className="text-blue-500 hover:underline mb-5">
				Ajuda
			</Link>
			<div className="flex justify-center items-center">
				<AiOutlineCopyright /> nicholascostadev
			</div>
		</footer>
	);
};

export default Footer;
