// src/components/Projects.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import projectsData from "../data/projects";

const Projects = () => {
  const [selectedTag, setSelectedTag] = useState("All");

  const tags = ["All", ...new Set(projectsData.map((p) => p.tag))];

  const filteredProjects =
    selectedTag === "All"
      ? projectsData
      : projectsData.filter((p) => p.tag === selectedTag);

  return (
    <section id="projects" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold text-center mb-10"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          🚀 Projects
        </motion.h2>

        {/* Tag Filter */}
        <div className="flex justify-center mb-8 gap-3 flex-wrap">
          {tags.map((tag) => (
            <button
              key={tag}
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                selectedTag === tag
                  ? "bg-indigo-600 text-white shadow-lg"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
              onClick={() => setSelectedTag(tag)}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Project Cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { staggerChildren: 0.15 },
            },
          }}
        >
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={idx}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300"
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            >
              {/* Thumbnail */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />

              {/* Content */}
              <div className="p-5 flex flex-col h-full">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 flex-grow">{project.description}</p>

                <div className="flex justify-between items-center mt-4">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 font-medium hover:underline"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-800 font-medium hover:underline"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
