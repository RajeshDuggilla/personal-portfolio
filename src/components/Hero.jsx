import React from "react";
import {
  Github,
  Linkedin,
  Mail,
  Download,
  Code,
  Database,
  Server
} from "lucide-react";

const Hero = ({ darkMode }) => {
  const socialLinks = [
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Mail, href: "mailto:developer@example.com", label: "Email" }
  ];

  const techIcons = [
    { icon: Code, label: "Frontend" },
    { icon: Server, label: "Backend" },
    { icon: Database, label: "Database" }
  ];

  return (
    <section
      id="home"
      className={`min-vh-100 d-flex align-items-center`}
    >
      <div className="container text-center py-5">
        {/* Profile Icon */}
        <div className="mb-4">
          <div className="rounded-circle mx-auto bg-gradient p-1" style={{ width: "130px", height: "130px" }}>
            <div
              className={`d-flex justify-content-center align-items-center h-100 w-100 rounded-circle`}
            >
              <Code size={48} className="text-primary" />
            </div>
          </div>
        </div>

        {/* Headline */}
        <div className="mb-4">
          <h1 className="fw-bold display-5">
            Hi, I'm{" "}
            <span className="text-gradient">Rajesh Duggilla</span>
          </h1>
          <p className="fs-4 mb-2">Full Stack Developer — Specialized in MERN Stack</p>
          <p className="lead mx-auto" style={{ maxWidth: "720px" }}>
            Passionate MERN stack developer building scalable web applications.
            I love creating beautiful, functional solutions that make a
            difference.
          </p>
        </div>

        {/* Tech Stack */}
        <div className="d-flex justify-content-center gap-4 mb-4 flex-wrap">
          {techIcons.map((tech, index) => (
            <div key={index} className="text-center">
              <div
                className={`rounded-circle shadow d-flex justify-content-center align-items-center mb-2 mx-auto hover-scale ${
                  darkMode ? "bg-secondary" : "bg-white"
                }`}
                style={{ width: "64px", height: "64px" }}
              >
                <tech.icon size={24} className="text-primary" />
              </div>
              <small className={darkMode ? "text-light" : "text-muted"}>
                {tech.label}
              </small>
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="d-flex flex-column flex-sm-row justify-content-center gap-3 mb-4">
          <a
            href="https://res-console.cloudinary.com/dfkzm1wvm/thumbnails/v1/image/upload/v1751300194/bXktcmVzdW1lX3BhZ2UtMDAwMV9wcXBzdnI=/drilldown"
            className="btn btn-primary d-flex align-items-center justify-content-center gap-2 px-4 py-2"
          >
            <Download size={18} />
            Download Resume
          </a>
          <button
            onClick={() =>
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
            }
            className={`btn px-4 py-2 border-2 ${
              darkMode ? "btn-outline-light" : "btn-outline-dark"
            }`}
          >
            Get In Touch
          </button>
        </div>

        {/* Social Links */}
        <div className="d-flex justify-content-center gap-3">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`rounded-circle p-3 shadow hover-scale d-flex align-items-center justify-content-center ${
                darkMode ? "bg-secondary text-light" : "bg-white text-dark"
              }`}
              style={{ width: "48px", height: "48px" }}
              aria-label={social.label}
            >
              <social.icon size={20} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;


// import React from "react"
// import {
//   Github,
//   Linkedin,
//   Mail,
//   Download,
//   Code,
//   Database,
//   Server
// } from "lucide-react"

// const Hero = ({ darkMode }) => {
//   const socialLinks = [
//     { icon: Github, href: "https://github.com", label: "GitHub" },
//     { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
//     { icon: Mail, href: "mailto:developer@example.com", label: "Email" }
//   ]

//   const techIcons = [
//     { icon: Code, label: "Frontend" },
//     { icon: Server, label: "Backend" },
//     { icon: Database, label: "Database" }
//   ]

//   return (
//     <section
//       id="home"
//       className={`min-h-screen flex items-center justify-center ${
//         darkMode ? "bg-gray-900" : "bg-gray-50"
//       }`}
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
//         <div className="text-center">
//           {/* Profile Image */}
//           <div className="mb-8">
//             <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1">
//               <div
//                 className={`w-full h-full rounded-full ${
//                   darkMode ? "bg-gray-800" : "bg-white"
//                 } flex items-center justify-center`}
//               >
//                 <Code size={48} className="text-blue-600" />
//               </div>
//             </div>
//           </div>

//           {/* Main Content */}
//           <div className="mb-8">
//             <h1
//               className={`text-4xl md:text-6xl font-bold mb-4 ${
//                 darkMode ? "text-white" : "text-gray-900"
//               }`}
//             >
//               Hi, I'm{" "}
//               <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
//                 Rajesh Duggilla
//               </span>
//             </h1>
//             <p
//               className={`text-xl md:text-2xl mb-6 ${
//                 darkMode ? "text-gray-300" : "text-gray-600"
//               }`}
//             >
//               Full Stack Developer
//             </p>
//             <p
//               className={`text-lg max-w-2xl mx-auto mb-8 ${
//                 darkMode ? "text-gray-400" : "text-gray-700"
//               }`}
//             >
//               Passionate MERN stack developer building scalable web
//               applications. I love creating beautiful, functional solutions that
//               make a difference.
//             </p>
//           </div>

//           {/* Tech Stack Icons */}
//           <div className="flex justify-center space-x-8 mb-8">
//             {techIcons.map((tech, index) => (
//               <div key={index} className="text-center">
//                 <div
//                   className={`w-16 h-16 rounded-full ${
//                     darkMode ? "bg-gray-800" : "bg-white"
//                   } shadow-lg flex items-center justify-center mb-2 mx-auto transition-transform hover:scale-110`}
//                 >
//                   <tech.icon size={24} className="text-blue-600" />
//                 </div>
//                 <span
//                   className={`text-sm ${
//                     darkMode ? "text-gray-400" : "text-gray-600"
//                   }`}
//                 >
//                   {tech.label}
//                 </span>
//               </div>
//             ))}
//           </div>

//           {/* Call to Action Buttons */}
//           <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
//             <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 flex items-center justify-center gap-2">
//               <Download size={20} />
//               Download Resume
//             </button>
//             <button
//               onClick={() =>
//                 document
//                   .getElementById("contact")
//                   ?.scrollIntoView({ behavior: "smooth" })
//               }
//               className={`px-8 py-3 rounded-lg font-medium border-2 transition-all duration-200 transform hover:scale-105 ${
//                 darkMode
//                   ? "border-gray-600 text-gray-300 hover:border-gray-500 hover:text-white"
//                   : "border-gray-300 text-gray-700 hover:border-gray-400 hover:text-gray-900"
//               }`}
//             >
//               Get In Touch
//             </button>
//           </div>

//           {/* Social Links */}
//           <div className="flex justify-center space-x-6">
//             {socialLinks.map((social, index) => (
//               <a
//                 key={index}
//                 href={social.href}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className={`p-3 rounded-full transition-all duration-200 transform hover:scale-110 ${
//                   darkMode
//                     ? "bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700"
//                     : "bg-white text-gray-600 hover:text-gray-900 hover:bg-gray-100"
//                 } shadow-lg`}
//                 aria-label={social.label}
//               >
//                 <social.icon size={20} />
//               </a>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default Hero
