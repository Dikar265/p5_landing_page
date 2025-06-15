import videoPersona5 from '../assets/persona_5_trailer.webm'
import { H1 } from './Heading';
export const Video = () => {
  return (
    <div className='absolute -z-10 h-screen'>
     <video
        autoPlay
        loop
        muted
        playsInline
        className="w-screen object-cover h-screen"
      >
        <source src={videoPersona5} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute w-full h-full top-0 left-0 bg-gray-900 opacity-70"></div>
      <div className="absolute w-full h-full flex flex-col md:align-start justify-center text-center md:text-start p-16 top-0 left-0 z-30 space-y-6">
        <H1 text={"Persona 5"} color={"text-white"}/>
        <span className="text-white text-sm md:text-3xl">Langing Page </span>
    </div>
    </div>
  );
};
