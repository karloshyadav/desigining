import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from "./components/About";
import Mainbody from "./components/Mainbody";
import Navbar from "./components/Navbar";
import Sidebar from './components/Sidebar';
import { useState } from 'react';
import { SharedState } from './Context/Sharedstate';

function App() {

  return (
    <>
      <SharedState>
        <Router>
          <Navbar />
          <Routes>

            <Route exact path="/" element={<Mainbody />} />
            <Route exact path="/about" element={<About />} />

          </Routes>
        </Router>
      </SharedState>
    </>
  );
}

export default App;
