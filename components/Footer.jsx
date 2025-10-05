import { ShimmerBtn } from "@/components/ui/ShimmerButton";
import { IoIosSend } from "react-icons/io";
import { socialMedia } from "@/data"

const Footer = () => {
  const year = new Date();
  return (
    <footer className="w-full h-fit py-5 bg-black-100 relative overflow-hidden flex items-center flex-col justify-center px-3">
      <div>
      {/* Background Grid */}
      <div className="absolute inset-0">
        <img
          src="/footer-grid.svg"
          alt="footer-grid"
          className="w-full h-full object-cover opacity-100"
        />
      </div>

      {/* Centered Content */}
      <div className="relative z-10 flex flex-col items-center text-center space-y-4">
        <h1 className="text-white text-2xl md:text-3xl font-bold">
          Ready to take <span className="text-purple-300">your </span>digital
          presence to the next level?
        </h1>
        <p className="text-white max-w-xl">
          Reach out to me today and let&apos;s discuss how I can help you achieve your goals
        </p>
        <a href="mailto:stamptime38@gmail.com">
        <ShimmerBtn
        title="Let&apos;s get in touch"
        icon={<IoIosSend/>}
        position="right"/>
        </a>
      </div>
      </div>
      
      <div className="w-full flex mt-10 md:flex-row flex-col gap-3 justify-between items-center text-white">
        <p className="md:text-base text-sm md:font-normal font-light">Copyright © {year.getFullYear()} iCode Space</p>
        <div className="flex items-center md:gap-4 gap-6">
          {socialMedia.map((profile) => (
            <div key={profile.id} className="w-10 h-10 cursor-poiner flex flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-white/10 rounded-lg border border-black-300">
              <img src={profile.img} alt={profile.id} width={20} height={20}/>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;