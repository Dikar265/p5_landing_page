import { AboutText } from "./Components/About";
import CallingCard from "./Components/CallingCard";
import { Header } from "./Components/Header";
import CaracterSlider from "./Components/Slider";
import { Video } from "./Components/Video";

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
    </>
  );
}

export default App;
