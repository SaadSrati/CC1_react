

import { Routes, Route } from 'react-router-dom'
import Calc from './Compenent/Calc';
import { TodoWrapper } from './Compenent/TodoWrapper';
import Slider from './Compenent/Slider';
import CollapsibleExample from './Compenent/Navbar';
import Comp4 from './Compenent/Comp4'
import './style_Clc.css'
import Contenu from "./Components/Contenu/Contenu";
import ToggleLangs from "./Components/ToggleLangs/ToggleLangs";
import ContextProvider from "./context/langContext";
function App() {
  return (
    <ContextProvider >
    <div className="App">
      <h1><CollapsibleExample /><br /></h1>

      <Routes>
        <Route path="/" element={<Calc />} />
        <Route path="/todo" element={<TodoWrapper />} />
        <Route path="/slider" element={<Slider />} />
        <Route path="/pagination" element={<Comp4 />} />
        <Route path="/lang" element={<>  <ToggleLangs/><Contenu /></>} />
        <Route path="*" element={<h1 className='h1'>404</h1>} />
      </Routes>
    </div>
    </ContextProvider >
  );
}

export default App;
