import React from "react";
// import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/navbar" element={<Navbar />} /> */}
        </Routes>
    );
}

export default App;
