import './App.css';
import Home from './Components/Home/Home'
import CommandsList from "./Components/Commands/CommandsList";
import {Routes, Route} from "react-router-dom";

function App() {
  return (
          <Routes>
              <Route exact path="/" element={<Home/>}/>
              <Route exact path="/commands" element={<CommandsList/>}/>
          </Routes>
  );
}

export default App;
