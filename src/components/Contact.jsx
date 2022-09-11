import { MdEmail } from 'react-icons/md';
import { FaFacebookSquare, FaLinkedin, FaGithub } from 'react-icons/fa';
import { useState } from 'react';
const Contact = () => {
	const socialLinks = [
		{
			id: 1,
			href: 'https://www.facebook.com/khantthurasoeisme/',
			icon: (
				<FaFacebookSquare
					size="20px"
					className="text-blue-700 duration-300 bg-white hover:bg-black"
				/>
			),
		},
		{
			id: 2,
			href: 'https://www.linkedin.com/in/khant-thura-soe-526035231/',
			icon: (
				<FaLinkedin
					size="20px"
					className="text-blue-500 duration-300 bg-white hover:bg-black"
				/>
			),
		},
		{
			id: 3,
			href: 'https://github.com/KhantThuraSoe',
			icon: (
				<FaGithub
					size="20px"
					className="duration-300 bg-white text-stone-700 hover:bg-black"
				/>
			),
		},
		{
			id: 4,
			href: 'mailto:iam197626@gmail.com',
			icon: (
				<MdEmail
					size="20px"
					className="duration-300 bg-white text-stone-700 hover:bg-black"
				/>
			),
		},
	];
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');
	const handleSubmit = (e) => {
		e.preventDefault();
		setName('');
		setEmail('');
		setMessage('');
	};
	return (
		<div
			name="contact"
			className="w-full py-[80px] bg-[#102738] text-[#66FFFF]"
		>
			<div className=" max-w-[600px] mx-auto">
				<div className="px-12">
					<div className="flex items-center justify-center">
						<h2 className="text-2xl font-extrabold border-b-2 border-b-[#00ff55] ">
							Contact
						</h2>
					</div>
					<div className="flex flex-col items-center justify-center">
						<div className="text-[15px] ">
							<div className="mt-6">
								<p className="text-white">Let's keep in touch...</p>
							</div>
							<ul className="flex flex-row flex-wrap items-center justify-center my-2">
								{socialLinks.map(({ id, href, icon }) => (
									<li key={id} className="px-0 mx-[5px]">
										<a href={href} target="_blank" rel="noreferrer">
											{icon}
										</a>
									</li>
								))}
							</ul>

							<div className="mt-4 mb-2 text-gray-400 text-[12px]">
								<p>Leave me a message below</p>
							</div>
						</div>
					</div>
				</div>
				{/* used "getForm.io/form" for form endpoint */}
				<form
					action="https://getform.io/f/deb33723-8b13-4b52-ac14-d2630027a179"
					method="POST"
					className="flex flex-col gap-4 mx-6 mt-4 mb-8 text-sm"
					onSubmit={handleSubmit}
				>
					<input
						name="name"
						type="text"
						placeholder="Name"
						onChange={(e) => setName(e.target.value)}
						value={name}
						className="px-2 py-1 text-black rounded-sm outline-none"
					/>
					<input
						name="email"
						type="text"
						placeholder="Email"
						onChange={(e) => setEmail(e.target.value)}
						value={email}
						className="px-2 py-1 text-black rounded-sm outline-none"
					/>
					<textarea
						name="message"
						rows="10"
						placeholder="Message"
						onChange={(e) => setMessage(e.target.value)}
						value={message}
						className="px-2 py-1 text-black rounded-sm outline-none"
					></textarea>
					<button
						type="submit"
						onClick={handleSubmit}
						className="border-2 border-[#66FFFF] px-2 py-1 mx-auto flex justify-center items-center rounded-sm hover:bg-[#66FFFF] hover:text-gray-700 duration-300"
					>
						Message
					</button>
				</form>
			</div>
		</div>
	);
};
export default Contact;
