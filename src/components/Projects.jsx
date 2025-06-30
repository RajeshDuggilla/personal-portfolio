import React from "react";
import { ExternalLink, Github } from "lucide-react";

const Projects = ({ darkMode }) => {
  const projects = [
    {
      title: "Product Listing Page",
      description:
        "A responsive web app to browse and manage product inventories with a clean, modern UI.",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: [" React.js", "JavaScript "],
      liveLink: "https://productlistingpage19.netlify.app/",
      githubLink: "https://github.com/RajeshDuggilla/Product-Listing-Page.git",
      category: "E-commerce",
      date: "2025"
    },
    {
      title: "Portfolio Website",
      description:
        "A personal developer portfolio built with React and Bootstrap CSS featuring dark mode, AI assistant, and project filtering.",
      image: "https://images.pexels.com/photos/540518/pexels-photo-540518.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "Tailwind", "Vite", "Framer Motion"],
      liveLink: "#Home",
      githubLink: "https://github.com/RajeshDuggilla/portfolio-site",
      category: "Frontend",
      date: "2025"
    },
    {
      title: "User Management API",
      description:
        "Backend API system built using Node.js and Express with full CRUD support, JWT-based auth, and SQLite storage.",
      image: "https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Node.js", "Express", "SQLite", "JWT"],
      liveLink: "https://(user-mangement-system-8v0z.onrender.com",
      githubLink: "https://github.com/RajeshDuggilla/User-Mangement-System.git",
      category: "Backend",
      date: "2025"
    },
    {
      title: "Wikipedia Search App",
      description:
        "A modern real estate platform with property listings, advanced search filters, virtual tours, agent profiles, and mortgage calculator.",
      image: "https://img.freepik.com/premium-photo/keyboard-ball_266732-6496.jpg",
      technologies: ["Javascript", "Html", "Css", "Bootstrap"],
      liveLink: "https://searchwikiclone.ccbp.tech",
      githubLink: "https://github.com",
      category: "Frontend",
      date: "2025"
    },
    {
      title: "To-Do List App",
      description:
        "An interactive web app to manage daily tasks with a sleek and minimalist UI.",
      image: "https://img.freepik.com/free-vector/businessman-holding-pencil-big-complete-checklist-with-tick-marks_1150-35019.jpg",
      technologies: ["HTML", "CSS", "JS", "Bootstrap"],
      liveLink: "https://rajeshclone.ccbp.tech/",
      githubLink: "https://github.com",
      category: "Frontend",
      date: "2025"
    },
    {
      title: "Food Munch App",
      description:
        "A responsive website that lets you browse through a wide range of food items with ease.",
      image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["HTML", "CSS", "Bootstrap"],
      liveLink: "https://rajesh991.ccbp.tech",
      githubLink: "https://github.com",
      category: "Web App",
      date: "2025"
    }
  ];

  return (
    <section
      id="projects"
      className={`py-5 ${darkMode ? "bg-dark text-light" : "bg-white text-dark"}`}
    >
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold">Featured Projects</h2>
          <p className="lead mx-auto" style={{ maxWidth: "720px" }}>
            Here are some of my recent projects that showcase my skills and experience.
          </p>
        </div>

        <div className="row g-4">
          {projects.map((project, index) => (
            <div className="col-md-6 col-lg-4" key={index}>
              <div className={`card h-100 shadow-sm project-hover ${darkMode ? "bg-secondary text-light" : ""}`}>
                <div className="position-relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="card-img-top img-fluid project-img rounded-top"
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <span className="position-absolute top-0 start-0 m-2 badge bg-primary">
                    {project.category}
                  </span>
                  <span className={`position-absolute top-0 end-0 m-2 badge ${darkMode ? "bg-dark text-light" : "bg-light text-dark"}`}>
                    {project.date}
                  </span>
                </div>

                <div className="card-body d-flex flex-column">
                  <h5 className="card-title fw-bold">{project.title}</h5>
                  <p className="card-text">{project.description}</p>

                  <div className="mb-3">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className={`badge me-1 mb-1 ${darkMode ? "bg-dark text-light" : "bg-light text-dark"} border`}>
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto d-flex gap-2">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary btn-sm d-flex align-items-center gap-1"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`btn btn-sm d-flex align-items-center gap-1 ${darkMode ? "btn-outline-light" : "btn-outline-secondary"}`}
                    >
                      <Github size={16} />
                      Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-5">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className={`btn btn-lg d-inline-flex align-items-center gap-2 ${darkMode ? "btn-outline-light" : "btn-outline-secondary"}`}
          >
            <Github size={20} />
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;


// import React from "react"
// import { ExternalLink, Github } from "lucide-react"

// const Projects = ({ darkMode }) => {
//   const projects = [
//      {
//       title: 'E-Commerce Platform',
//       description: 'A full-featured e-commerce platform built with MERN stack featuring user authentication, payment integration, admin dashboard, and real-time order tracking.',
//       image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
//       technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe', 'JWT'],
//       liveLink: 'https://example.com',
//       githubLink: 'https://github.com',
//       category: 'Full Stack',
//       date: '2025'
//     },
//     {
//       title: 'Portfolio Website',
//       description: 'A personal developer portfolio built with React and Tailwind CSS featuring dark mode, AI assistant, and project filtering.',
//       image: 'https://images.pexels.com/photos/540518/pexels-photo-540518.jpeg?auto=compress&cs=tinysrgb&w=800',
//       technologies: ['React', 'Tailwind', 'Vite', 'Framer Motion'],
//       liveLink: 'https://portfolio.example.com',
//       githubLink: 'https://github.com/RajeshDuggilla/portfolio-site',
//       category: 'Frontend',
//       date: '2025'
//     },
//     {
//       title: 'User Management API',
//       description: 'Backend API system built using Node.js and Express with full CRUD support, JWT-based auth, and SQLite storage.',
//       image: 'https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=800',
//       technologies: ['Node.js', 'Express', 'SQLite', 'JWT'],
//       liveLink: 'https://user-management.example.com',
//       githubLink: 'https://github.com/RajeshDuggilla/user-management-api',
//       category: 'Backend',
//       date: '2025'
//     },
//     {
//       title: "Wikipedia Search App",
//       description:
//         "A modern real estate platform with property listings, advanced search filters, virtual tours, agent profiles, and mortgage calculator.",
//       image:
//         "https://via.placeholder.com/400x200?text=Wikipedia+Search",
//       technologies: ["Javascript", "Html", "Css", "Bootstrap"],
//       liveLink: "https://example.com",
//       githubLink: "https://github.com",
//       category: "Full Stack",
//       date: "2025"
//     },
//     {
//       title: "Learning Management System",
//       description:
//         "An educational platform with course creation, video streaming, progress tracking, quizzes, certificates, and payment integration.",
//       image:
//         "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=800",
//       technologies: ["React", "Node.js", "MongoDB", "AWS S3", "FFmpeg"],
//       liveLink: "https://example.com",
//       githubLink: "https://github.com",
//       category: "EdTech",
//       date: "2025"
//     },
//     {
//       title: "Weather Forecast App",
//       description:
//         "A beautiful weather application with location-based forecasts, interactive maps, weather alerts, and historical data visualization.",
//       image:
//         "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800",
//       technologies: ["React", "TypeScript", "OpenWeather API", "Chart.js"],
//       liveLink: "https://example.com",
//       githubLink: "https://github.com",
//       category: "Web App",
//       date: "2025"
//     }
//   ]

//   return (
//     <section
//       id="projects"
//       className={`py-20 ${darkMode ? "bg-gray-800" : "bg-white"}`}
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2
//             className={`text-3xl md:text-4xl font-bold mb-4 ${
//               darkMode ? "text-white" : "text-gray-900"
//             }`}
//           >
//             Featured Projects
//           </h2>
//           <p
//             className={`text-lg max-w-2xl mx-auto ${
//               darkMode ? "text-gray-300" : "text-gray-600"
//             }`}
//           >
//             Here are some of my recent projects that showcase my skills and
//             experience
//           </p>
//         </div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {projects.map((project, index) => (
//             <div
//               key={index}
//               className={`rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 ${
//                 darkMode ? "bg-gray-700" : "bg-white"
//               }`}
//             >
//               <div className="relative overflow-hidden">
//                 <img
//                   src={project.image}
//                   alt={project.title}
//                   className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
//                 />
//                 <div className="absolute top-4 left-4">
//                   <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
//                     {project.category}
//                   </span>
//                 </div>
//                 <div className="absolute top-4 right-4">
//                   <span
//                     className={`px-3 py-1 rounded-full text-sm font-medium ${
//                       darkMode
//                         ? "bg-gray-800 text-gray-300"
//                         : "bg-white text-gray-700"
//                     }`}
//                   >
//                     {project.date}
//                   </span>
//                 </div>
//               </div>

//               <div className="p-6">
//                 <h3
//                   className={`text-xl font-bold mb-3 ${
//                     darkMode ? "text-white" : "text-gray-900"
//                   }`}
//                 >
//                   {project.title}
//                 </h3>
//                 <p
//                   className={`mb-4 ${
//                     darkMode ? "text-gray-300" : "text-gray-600"
//                   }`}
//                 >
//                   {project.description}
//                 </p>

//                 {/* Technologies */}
//                 <div className="mb-4">
//                   <div className="flex flex-wrap gap-2">
//                     {project.technologies.map((tech, techIndex) => (
//                       <span
//                         key={techIndex}
//                         className={`px-2 py-1 rounded text-xs font-medium ${
//                           darkMode
//                             ? "bg-gray-600 text-gray-300"
//                             : "bg-gray-100 text-gray-700"
//                         }`}
//                       >
//                         {tech}
//                       </span>
//                     ))}
//                   </div>
//                 </div>

//                 {/* Links */}
//                 <div className="flex gap-3">
//                   <a
//                     href={project.liveLink}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
//                   >
//                     <ExternalLink size={16} />
//                     Live Demo
//                   </a>
//                   <a
//                     href={project.githubLink}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-colors text-sm font-medium ${
//                       darkMode
//                         ? "border-gray-600 text-gray-300 hover:border-gray-500 hover:text-white"
//                         : "border-gray-300 text-gray-700 hover:border-gray-400 hover:text-gray-900"
//                     }`}
//                   >
//                     <Github size={16} />
//                     Code
//                   </a>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="text-center mt-12">
//           <a
//             href="https://github.com"
//             target="_blank"
//             rel="noopener noreferrer"
//             className={`inline-flex items-center gap-2 px-8 py-3 rounded-lg font-medium border-2 transition-all duration-200 transform hover:scale-105 ${
//               darkMode
//                 ? "border-gray-600 text-gray-300 hover:border-gray-500 hover:text-white"
//                 : "border-gray-300 text-gray-700 hover:border-gray-400 hover:text-gray-900"
//             }`}
//           >
//             <Github size={20} />
//             View More on GitHub
//           </a>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default Projects