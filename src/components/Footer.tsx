import React from 'react';
import { AiOutlineCopyright, AiOutlineGithub } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Footer = () => {
	return (
		<footer className="py-3 footer flex flex-col justify-center items-center min-h-20 max-h-32 border-t-2 bottom-0 absolute bg-white left-0 w-full">
			<Link to="/ajuda" className="text-blue-500 hover:underline md:mb-2 mb-0">
				Ajuda
			</Link>
			<div className="flex justify-center items-center">
				<AiOutlineCopyright />
				<div className="flex">
					<p>nicholascostadev - </p>
					<a
						href="https://github.com/nicholascostadev"
						className="flex justify-center items-center ml-1 "
					>
						<AiOutlineGithub /> <span className="text-blue-500">Github</span>
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
