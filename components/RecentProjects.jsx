import {projects} from "@/data";
import {PinContainer} from "@/components/ui/3d-pin";
import { FaLocationArrow } from "react-icons/fa";


const RecentProjects = () => {

  return(
    <div className="py-16">
      <h1 className="text-2xl font-bold text-center text-white">A Small Collection of {' '}
        <span className="text-purple-300">Recent Projects</span></h1>
      <div className="flex flex-wrap items-center justify-center p-4 lg:gap-x-24 gap-x-12 gap-y-8 sm:mt-10">
        {projects.map(({
          id, title, des, img, iconLists, link
        }) => (
          <div key={id} className="lg:min-h-[23.5rem] h-[30rem] flex items-center justify-center sm:w-96 w-[80vw] text-white">
            <PinContainer title={title} href={link}>
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[30vh] md:h-[50vh] mb-10">
                <div className="relative w-full h-full overflow-hidden lg:rounded-2xl bg-[#13162d]">
                  <img src="/bg.png" alt="bg-img" />
              </div>
              <img src={img} alt={img} className="z-10 absolute bottom-0"/>
            </div>
            <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
              {title}
            </h1>
            <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2">{des}</p>
            <div className="flex items-center justify-between mt-7 mb-3">
              <div className="flex items-center">
                {iconLists.map((icon, idx) => (
                <div key={idx} className="border border-white/[0.2] rounded-full bg- black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                style={{transform: `translateX(-${5 * idx * 2}px)`}}>
                  <img src={icon} alt={icon} className="p-2" />
                </div>))}
              </div>
              <div className="flex justify-center items-center">
                <p className="flex lg:text-xl md:text-xs text-sm text-purple-300">Check live site</p>
                <FaLocationArrow className="ms-3" color="#cbacf9"/>
              </div>
            </div>
          </PinContainer>
        </div>
        ))}
    </div>
  </div>
)
}


export default RecentProjects;