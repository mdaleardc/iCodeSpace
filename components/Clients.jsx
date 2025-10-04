import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { testimonials, companies } from "@/data"

const Clients = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-center text-white py-5">Kind Words From {' '}
        <span className="text-purple-300">Satisfied Clients</span></h1>
      <div className="flex flex-col items-center mt-10">
        <div className='h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased items-center overflow-hidden relative'>
        <InfiniteMovingCards 
        items={testimonials}
        direction="right"
        speed="slow"/>
        </div>
        
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 pb-6">
          {companies.map(({id, img, name, nameImg}) => (
          <div key={id} className="flex md:max-w-60 max-w-32 gap-2">
            <img src={img} 
            alt={name} 
            className="md:w-10 w-5"/>
            <img src={nameImg} 
            alt={name} 
            className="md:w-10 w-5"/>
          </div>
          ))}
        </div>
      </div>
    </div>
  )
};


export default Clients;