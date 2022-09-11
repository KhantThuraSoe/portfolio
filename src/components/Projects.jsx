import portfolio from '../assets/portfolio.png';
import ecommerce from '../assets/ecommerce.png';
import { v4 } from 'uuid';
const projects = [
	{
		id: v4(),
		demoLink: 'https://ktrs-commerce.netlify.app/',
		gitHubLink: 'https://github.com/KhantThuraSoe/ecommerce-client',
		image: ecommerce,
		title: 'Ecommerce web app ',
		description: 'Ecommerce web shop with user authentication and custom api.',
		techs: ['React', 'Tailwind CSS', 'Express JS', 'MongoDB', 'NodeJs'],
	},
	{
		id: v4(),
		demoLink: 'https://ktrs-portfolio.netlify.app/',
		gitHubLink: 'https://github.com/KhantThuraSoe/portfolio',
		image: portfolio,
		title: 'My Portfolio',
		description: 'My personal portfolio to display my work and skills...',
		techs: ['React', 'JavaScript', 'Tailwind CSS'],
	},
	{
		id: v4(),
		demoLink: '/',
		gitHubLink: '/',
		image: portfolio,
		title: 'Other Project',
		description: 'My personal portfolio for display my skills pieces...',
		techs: ['React', 'JavaScript', 'Tailwind CSS'],
	},
];

const Projects = () => {
	return (
		<div
			name="projects"
			className="w-full h-auto min-h-screen pt-[80px] pb-6 bg-[#102738] text-[#66FFFF]"
		>
			<div className="max-w-[1000px] mx-auto">
				<div className="flex justify-center">
					<h1 className="w-[186px] whitespace-nowrap pb-1 mb-10 border-b-2 border-b-[#00ff55] text-2xl font-extrabold">
						Recent Projects
					</h1>
				</div>
				{/* Project List */}
				<div className="flex items-center justify-center w-full ">
					<div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3">
						{projects.map((project) => {
							const {
								id,
								gitHubLink,
								demoLink,
								image,
								title,
								description,
								techs,
							} = project;
							return (
								<Project
									key={id}
									gitHubLink={gitHubLink}
									demoLink={demoLink}
									image={image}
									title={title}
									description={description}
									techs={techs}
								/>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
};
export default Projects;

const Project = ({
	gitHubLink,
	demoLink,
	image,
	title,
	description,
	techs,
}) => {
	return (
		<div
			style={{
				backgroundColor: `#fff`,
				backgroundImage: `url(${image})`,
				backgroundSize: `contain`,
				backgroundPosition: `center`,
			}}
			className="w-[240px] h-[180px]  rounded-md group"
		>
			<div className=" w-full h-full mx-auto text-start flex flex-col justify-center items-center shadow-[#000000bb] shadow-lg bg-[#0000007d] rounded-[5px] relative">
				<div className="w-full h-full opacity-0 group-hover:opacity-100 duration-500 absolute flex justify-center items-center bg-gradient-to-t from-[#00ff55] via-green-300 to-teal-200 rounded-[5px]">
					<div>
						<a href={demoLink}>
							<span className="py-1 px-2 hover:shadow-[#6afdf6] hover:shadow-inner bg-[#000000] text-[13px] text-slate-100 rounded-l-full border-r-2 border-r-white">
								Demo
							</span>
						</a>
						<a href={gitHubLink}>
							<span className="py-1 px-2 hover:shadow-[#6afdf6] hover:shadow-inner bg-[#000000] text-[13px] text-slate-100 rounded-r-full">
								Code
							</span>
						</a>
					</div>
				</div>
				<div className="flex flex-col justify-around gap-2 pl-3">
					<div className="text-[#00ff55] text-sm text-start">
						<h2 className="whitespace-nowrap w-[20px] border-b-2 border-b-[#00ff55]">
							{title}
						</h2>
					</div>
					<div className="text-[10px]">
						<p>{description}</p>
					</div>
					<div>
						<ul className="flex flex-wrap mt-3 ">
							{techs.map((tech) => (
								<li key={v4()} className="text-[10px] px-1 text-[#fff]">
									{tech}
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};
