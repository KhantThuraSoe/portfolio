import portfolio from '../assets/portfolio.png'
import { v4 } from 'uuid'
const projects = [
    { id: v4(), image: portfolio, title: "Another Project", description: "My personal portfolio for display my skills pieces...", techs: ["React", "JavaScript", "Tailwind CSS"] },
    { id: v4(), image: portfolio, title: "My Portfolio", description: "My personal portfolio to display my work and skills...", techs: ["React", "JavaScript", "Tailwind CSS"] },
    { id: v4(), image: portfolio, title: "Other Project", description: "My personal portfolio for display my skills pieces...", techs: ["React", "JavaScript", "Tailwind CSS"] }
]

const Projects = () => {
    return (
        <div name="projects" className="w-full h-auto min-h-screen pt-[80px] pb-6 bg-[#102738] text-[#66FFFF]">
            <div className="max-w-[1000px] mx-auto">
                <div className="flex justify-center"><h1 className="w-[186px] whitespace-nowrap pb-1 mb-10 border-b-2 border-b-[#00ff55] text-2xl font-extrabold">Recent Projects</h1></div>
                {/* Project List */}
                <div className=" w-full flex items-center justify-center">

                    <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3">
                        {projects.map((project) => {
                            const { id, image, title, description, techs } = project;
                            return <Project key={id} image={image} title={title} description={description} techs={techs} />;
                        }
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Projects;

const Project = (props) => {
    return (
        <div style={{ backgroundColor: `#fff`, backgroundImage: `url(${props.image})`, backgroundSize: `contain`, backgroundPosition: `center` }} className="w-[240px] h-[180px]  rounded-md group">
            <div className=" w-full h-full mx-auto text-start flex flex-col justify-center items-center shadow-[#000000bb] shadow-lg bg-[#000000c7] rounded-[5px] relative">
                <div className="w-full h-full opacity-0 group-hover:opacity-100 duration-500 absolute flex justify-center items-center bg-gradient-to-t from-[#00ff55] via-green-300 to-teal-200 rounded-[5px]">
                    <div>
                        <a href="/"><span className="py-1 px-2 hover:shadow-[#6afdf6] hover:shadow-inner bg-[#000000] text-[13px] text-slate-100 rounded-l-full border-r-2 border-r-white">Demo</span></a>
                        <a href='/'><span className="py-1 px-2 hover:shadow-[#6afdf6] hover:shadow-inner bg-[#000000] text-[13px] text-slate-100 rounded-r-full">Code</span></a>
                    </div>
                </div>
                <div className="pl-3 flex flex-col justify-around gap-2">
                    <div className="text-[#00ff55] text-sm text-start">
                        <h2 className="whitespace-nowrap w-[20px] border-b-2 border-b-[#00ff55]">{props.title}</h2>
                    </div>
                    <div className="text-[10px]">
                        <p>{props.description}</p>
                    </div>
                    <div>
                        <ul className=" flex flex-wrap mt-3">
                            {props.techs.map((tech) =>
                                <li key={v4()} className="text-[10px] px-1 text-[#fff]">{tech}</li>
                            )}

                        </ul>
                    </div>
                </div>
            </div>
        </div >
    )
}
