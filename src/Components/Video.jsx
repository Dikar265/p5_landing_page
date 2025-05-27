import videoPersona5 from '../assets/persona_5_trailer.webm'
import { H1 } from './Heading';
export const Video = () => {
  return (
    <div className='absolute w-full h-full top-0 left-0 -z-10'>
     <video
        autoPlay
        loop
        muted
        playsInline
        className="w-screen h-screen object-cover"
      >
        <source src={videoPersona5} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div class="absolute w-full h-full top-0 left-0 bg-gray-900 opacity-40"></div>
      <div class="absolute w-full h-full flex flex-col align-start justify-center p-16 top-0 left-0 z-30 space-y-6">
        <H1 text={"Persona 5"} color={"text-white"}/>
        <span class="text-white text-3xl">Langing Page</span>
    </div>
    </div>
  );
};
