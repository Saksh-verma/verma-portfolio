import React from "react";
import { RevealOnScroll } from "../RevealOnScroll";

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-hin-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
              <h3 className="text-xl font-bold mb-2">Modern UI/UX GPT-3</h3>
              <p className="text-gray-400 mb-4">
                Modern UI/UX GPT-3 is a sleek, fully responsive web application
                designed to showcase the power of GPT-3. The design is
                mobile-first, ensuring that the app looks great on all devices.
              </p>
              <p className="text-gray-400 mb-2">
                Features: Responsive layout, modern UI components, seamless user
                experience
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,224,0.2)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://saksh-verma.github.io/GPT-3/"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project ➡️
                </a>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
              <h3 className="text-xl font-bold mb-2">Card Dragger</h3>
              <p className="text-gray-400 mb-4">
                Card Dragger is an interactive web app built with React that
                allows users to click and drag cards around the screen. The
                cards feature dynamic content, such as file descriptions, sizes,
                and action icons, with smooth drag-and-drop functionality
                powered by the motion library for an enhanced user experience.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React ", "Tailwind CSS ", "Framer Motion "].map(
                  (tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,224,0.2)] transition"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://saksh-verma.github.io/Card-dragger/"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project ➡️
                </a>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
              <h3 className="text-xl font-bold mb-2">Password Generator</h3>
              <p className="text-gray-400 mb-4">
                Password Generator is a web application built with React and
                Tailwind CSS that allows users to generate strong, customizable
                passwords. Users can select the desired password length, and
                toggle options to include numbers and special characters. The
                app also features a "Copy to Clipboard" functionality for easy
                password usage.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "Tailwind CSS", "Clipboard API"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,224,0.2)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://saksh-verma.github.io/Password-Generator/"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project ➡️
                </a>
              </div>
            </div>
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
              <h3 className="text-xl font-bold mb-2">Weather App</h3>
              <p className="text-gray-400 mb-4">
                This Weather App allows users to search for weather information
                by city. It fetches real-time weather data from the
                OpenWeatherMap API and displays key information, including
                temperature, humidity, weather description, and an appropriate
                weather emoji based on the current conditions.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["HTML", "CSS", "JS", "OpenWeatherMap API "].map(
                  (tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,224,0.2)] transition"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://saksh-verma.github.io/Weather-app/"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project ➡️
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Projects;
