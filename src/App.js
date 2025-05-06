import {Routes,Route} from "react-router-dom";
import Home from "./components/Home";
import AdhaarCard from "./components/AdhaarCard";
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/adhaar" element={<AdhaarCard />} />
    </Routes>
  );
}

export default App;
