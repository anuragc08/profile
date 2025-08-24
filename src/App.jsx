import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Resume from "./components/Contact";
import { motion } from "framer-motion";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
        {/* Navigation Bar */}
        <NavBar />

        {/* Page Content with animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="p-6"
        >
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Resume />} />
          </Routes>
        </motion.div>
      </div>
    </Router>
  );
}

export default App;
