import { HiArrowNarrowDown } from 'react-icons/hi'
import { Link } from 'react-scroll'
import { BsArrowUpCircle } from 'react-icons/bs'
const Home = () => {
    return (
        <div name="home" className="w-full h-screen bg-[#102738] text-[#66FFFF]">

            <Link to="home" spy={true} smooth={true} duration={500} >
                <button className="fixed right-6 bottom-6 hover:transform hover:scale-125 duration-300 ">
                    <BsArrowUpCircle size="30px" />
                </button>
            </Link>

            <div className="max-w-[1000px] w-full h-full mx-auto px-6 sm:px-10 md:px-14 lg:px-20 flex flex-col justify-center">
                <p className="text-[12px] text-[#00ff55]">Hi, my name is</p>
                <h1 className="mb-2 text-3xl text-[#66FFFF] font-bold tracking-wider">Khant Thura Soe</h1>
                <h2 className="mb-[10px] text-[24px] text-slate-300 font-bold">I'm a web developer.</h2>
                <p className="text-[12px] mb-[20px] text-slate-400">I'm passionate in creating interactive and responsive web applications and enjoy learing new skills.</p>
                <div>
                    <Link to="about" spy={true} smooth={true} duration={500} >
                        <button className="group pl-2 pr-1 py-1 border-2 cursor-pointer rounded-lg border-[#66FFFF] flex items-center gap-1 hover:text-slate-900 hover:bg-[#66FFFF] duration-300">  About Me<span className="group-hover:translate-y-8 group-hover:duration-300"><HiArrowNarrowDown size="20px" fill="#00ff55" /></span></button>
                    </Link>

                </div>

            </div>
        </div>
    )
}
export default Home;