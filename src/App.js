import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from "./components/About";
import Mainbody from "./components/Mainbody";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>

          <Route exact path="/" element={<Mainbody />} />
          <Route exact path="/about" element={<About />} />

        </Routes>
      </Router>
    </>
  );
}

export default App;
