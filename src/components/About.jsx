import profile from '../assets/profile.jpg';
import { FaHtml5, FaCss3Alt, FaReact } from 'react-icons/fa';
import {
	SiJavascript,
	SiTailwindcss,
	SiNodedotjs,
	SiMongodb,
	SiExpress,
} from 'react-icons/si';

const About = () => {
	const icons = [
		{ id: 1, icon: <FaHtml5 size="30px" fill="tomato" />, name: 'HTML5' },
		{ id: 2, icon: <FaCss3Alt size="30px" color="#fdff7b" />, name: 'CSS3' },
		{
			id: 3,
			icon: <SiJavascript size="30px" fill="yellow" />,
			name: 'JavaScript',
		},
		{
			id: 4,
			icon: <SiTailwindcss size="30px" color="#66FFFF" />,
			name: 'Tailwind CSS',
		},
		{ id: 5, icon: <FaReact size="30px" color="" />, name: 'React JS' },
		{
			id: 6,
			icon: <SiNodedotjs size="30px" color="#5dc93c" />,
			name: 'Node JS',
		},
		{ id: 7, icon: <SiMongodb size="30px" color="#5dc93c" />, name: 'MongoDB' },
		{
			id: 8,
			icon: <SiExpress size="30px" color="#e7e7e7a2" />,
			name: 'ExpressJs',
		},
	];
	return (
		<div name="about" className="w-full pb-12 bg-[#102738] text-[#66FFFF]">
			<div className="max-w-[1000px] w-full h-full mx-auto">
				{/*header*/}
				<div className="w-full text-center tracking-wider pt-[80px] font-extrabold text-2xl flex justify-center">
					<h1 className="w-[40px] mb-8 border-b-2 border-b-[#00ff55]">Bio</h1>
				</div>
				{/*content*/}
				<div className="flex flex-col-reverse justify-between w-full gap-3 sm:gap-2 md:flex-row md:justify-center">
					{/* content */}
					<div className="flex flex-col px-4 md:w-[60%]">
						{/* bio content */}
						<p className="text-[8px] shadow-[#c2c2c2a2] shadow-sm bg-black pl-4 pr-1 py-1 border-l-4 border-l-[#00ff55] rounded-r-md sm:text-[11px] lg:text-[13px] sm:mx-4 sm:my-[20px] mt-[20px] md:mt-12 mb-2 text-slate-300 lg:mt-16 ">
							{' '}
							I enjoy creating web applications with interactive and responsive
							features and passionate about keep learning new technologies to
							improve my tech skills.My interest in developing web applications
							started when me and my classmates develop online ticket booking
							system for 2nd semester end project using [HTML,CSS,PHP,Mysql,
							Apache database] in my university.I'm currently focusing on
							front-end web development(ocasionally back-end and design).
						</p>
						{/* skills */}
						<div className="my-4">
							<h2 className="text-[13px] lg:text-[15px] sm:mx-4 sm:my-[20px]">
								Here are the a few technologies i've been working with recentely
								:
							</h2>
							<ul className="grid w-full grid-cols-3 mt-4 sm:grid-cols-4 md:gap-2 lg:gap-4">
								{icons.map((icon) => (
									<li
										className="group flex flex-col justify-center items-center h-[50px]"
										key={icon.id}
									>
										{icon.icon}
										<h1 className="text-4 hidden group-hover:flex group-hover:flex-col text-[10px] text-[white]">
											{icon.name}
										</h1>
									</li>
								))}
							</ul>
						</div>
					</div>
					{/* profile */}
					<div className="flex justify-center md:justify-start relative md:w-[22%] md:items-center lg:ml-12 xl:ml-24">
						<img
							src={profile}
							alt="profile_img"
							className="sm:w-[150px] w-[130px] h-[150px] sm:h-[170px] z-10"
						/>
						<div className="sm:w-[150px] w-[130px] h-[150px] sm:h-[170px] absolute border-2 border-[#00ff55] translate-x-[8px] translate-y-[8px]"></div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default About;
