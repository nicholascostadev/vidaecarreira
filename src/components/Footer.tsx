import React from 'react';
import {
	AiFillGithub,
	AiOutlineCopyright,
	AiOutlineGithub,
} from 'react-icons/ai';

import { FaGithub, FaGithubAlt, FaGithubSquare } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
	return (
		<footer className="py-3 footer flex flex-col justify-center items-center min-h-20 max-h-32 border-t-2 bottom-0 absolute bg-white left-0 w-full">
			<Link to="/habitos-melhores" className="text-blue-500 hover:underline md:mb-2 mb-0">
				Hábitos
			</Link>
			<div className="flex justify-center items-center">
				<AiOutlineCopyright />
				<div className="flex">
					<p className="lg:text-sm text-xs">nicholascostadev - </p>
					<a
						href="https://github.com/nicholascostadev"
						className="flex justify-center items-center ml-1 lg:text-sm text-xs "
						target="_blank"
						rel="noreferrer"
					>
						<AiOutlineGithub />{' '}
						<span className="text-blue-500 hover:underline">Github</span>
					</a>
					<a
						href="https://github.com/nicholascostadev/vidaecarreira"
						className="flex justify-center items-center border-l-2 border-gray-900 ml-2 pl-2 lg:text-sm text-xs"
						target="_blank"
						rel="noreferrer"
					>
						<AiOutlineGithub />{' '}
						<span className="text-blue-500 ml-1 hover:underline ">
							Source Code
						</span>
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
