import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import HarryPotter from "./pages/HarryPotter";
import RickAndMorty from "./pages/RickAndMorty";
import "antd/dist/antd.min.css";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/harry-Potter" element={<HarryPotter />} />
          <Route path="/rick-and-morty" element={<RickAndMorty />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
