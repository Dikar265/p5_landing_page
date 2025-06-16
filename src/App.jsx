import { AboutText } from "./Components/About";
import CallingCard from "./Components/CallingCard";
import { Header } from "./Components/Header";
import CaracterSlider from "./Components/Slider";
import { Video } from "./Components/Video";
import Persona5AudioPlayer from "./Components/Persona5AudioPlayer";
import { music } from "./Props/Music";
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
      
    </>
  );
}

export default App;
