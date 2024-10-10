import Heading from "./components/Heading";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import { useState } from "react";
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import MusicTypes from "./components/MusicTypes";


function App() {
  const [lightMode, setLightMode] = useState(true);
  console.log(lightMode);
  return (
    <>
      <div>
      <div>
        {lightMode ? (
          <CiLight className="text-5xl fixed top-20 right-0 text-blue-900 cursor-pointer" onClick={()=>setLightMode(!lightMode)}/>
        ) : (
          <MdDarkMode className="text-5xl fixed top-20 right-0 text-blue-900 cursor-pointer" onClick={()=>setLightMode(!lightMode)} />
        )}
      </div>
        <Navbar lightMode={lightMode} />
        <HeroSection lightMode={lightMode} />
        <Heading lightMode={lightMode}/>
        <MusicTypes/>
      </div>
    </>
  );
}

export default App;
