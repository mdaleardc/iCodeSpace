import { Spotlight } from "@/components/ui/Spotlight";
import { GridAndDotBG } from "@/components/ui/GridAndDotBG";
import { FloatingNav } from "@/components/ui/floating-nav";
import { TiHome } from "react-icons/ti";
import { IoPersonCircle } from "react-icons/io5";
import { MdWork } from "react-icons/md";
import { GrProjects } from "react-icons/gr";
import { FaLightbulb } from "react-icons/fa";


export default function Hero() {
    return (
        <div>
            <div className="font-bold">
            <FloatingNav className="text-white" navItems={[{name: "Home", link: "/", icon: <TiHome size={24}/>}, {name: "About Me", link: "/about", icon: <IoPersonCircle size={25}/>}, {name: "My Work", link: "/work", icon: <MdWork size={24}/>}, {name: "Projects", link: "/projects", icon: <GrProjects size={18}/>}, {name: "Skills", link: "/skills", icon: <FaLightbulb size={20}/>}]}/>
                 <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white"/>
                 <Spotlight className="top-10 left-full h-[80vh] w-[50vw]" fill="purple"/>
                 <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue"/>
                 <GridAndDotBG />
            </div>
            
        </div>
        )
}