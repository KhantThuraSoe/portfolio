import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';
const Navbar = () => {
	const [nav, setNav] = useState(false);
	const handleChange = () => {
		setNav(() => !nav);
	};
	return (
		<div className="fixed w-full h-[80px] flex items-center justify-between bg-[#102738] text-[#66FFFF] z-20 ">
			<div className="text-[#00ff55] text-xl ml-5 lg:ml-7">
				<h1 className="tracking-widest">
					&lt;<span className="text-[#66FFFF] font-bold">K</span>trs&gt;
				</h1>
			</div>
			{/* Menu */}

			<ul className="hidden mr-10 md:flex lg:mr-12">
				<li>
					<Link activeClass="active" to="home" smooth={true} duration={300}>
						Home
					</Link>
				</li>
				<li>
					<Link activeClass="active" to="about" smooth={true} duration={300}>
						About
					</Link>
				</li>
				<li>
					<Link activeClass="active" to="projects" smooth={true} duration={300}>
						Projects
					</Link>
				</li>
				<li>
					<Link activeClass="active" to="contact" smooth={true} duration={300}>
						Contact
					</Link>
				</li>
			</ul>

			{/* Hamburger */}
			<div
				onClick={handleChange}
				className="z-10 cursor-pointer mr-7 md:hidden"
			>
				{nav ? <FaTimes /> : <FaBars />}
			</div>
			{/* Mobile menu*/}

			<ul
				className={
					nav
						? 'md:hidden absolute top-0 left-0 w-full h-screen flex flex-col justify-center items-center bg-[#102738] '
						: 'hidden'
				}
			>
				<li className="py-6 text-2xl">
					<Link
						onClick={handleChange}
						activeClass="active"
						to="home"
						spy={true}
						smooth={true}
						duration={300}
					>
						Home
					</Link>
				</li>
				<li className="py-6 text-2xl">
					<Link
						onClick={handleChange}
						activeClass="active"
						to="about"
						spy={true}
						smooth={true}
						duration={300}
					>
						About
					</Link>
				</li>
				<li className="py-6 text-2xl">
					<Link
						onClick={handleChange}
						activeClass="active"
						to="projects"
						spy={true}
						smooth={true}
						duration={300}
					>
						Projects
					</Link>
				</li>
				<li className="py-6 text-2xl">
					<Link
						onClick={handleChange}
						activeClass="active"
						to="contact"
						spy={true}
						smooth={true}
						duration={300}
					>
						Contact
					</Link>
				</li>
				{/* <li className="py-6 text-2xl">Home</li>
                <li className="py-6 text-2xl">About</li>
                <li className="py-6 text-2xl">Projects</li>
                <li className="py-6 text-2xl">Contact</li> */}
			</ul>
		</div>
	);
};

export default Navbar;
