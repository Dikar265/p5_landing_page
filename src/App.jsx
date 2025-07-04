import { AboutText } from "./Components/About";
import CallingCard from "./Components/CallingCard";
import { Header } from "./Components/Header";
import CaracterSlider from "./Components/Slider";
import { Video } from "./Components/Video";
import Persona5AudioPlayer from "./Components/Persona5AudioPlayer";
import Cards from "./Components/Cards";

import { music } from "./Props/Music";
import { palaces } from "./Props/Palaces";
function App() {
  
  
  return (
    <>
    <Header />
      <div className="h-screen">
        <Video />
      </div>
      <AboutText/>
      <CaracterSlider/>
      <CallingCard/>
      <Persona5AudioPlayer audioUrl={music} />
      <Cards props={palaces}/>
    </>
  );
}

export default App;
