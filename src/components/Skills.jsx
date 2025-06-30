import React, { useEffect, useRef, useState } from "react";
import { Code, Server, Database, Zap } from "lucide-react";

const Skills = ({ darkMode }) => {
  const [activeCategory, setActiveCategory] = useState(0);
  const sectionRef = useRef(null);

  const categories = [
    {
      icon: <Code size={24} />,
      title: "Frontend",
      description: "Modern UI/UX Development",
      color: "primary",
      skills: ["HTML", "CSS", "JavaScript", "ReactJS"]
    },
    {
      icon: <Server size={24} />,
      title: "Backend",
      description: "APIs & Server Logic",
      color: "success",
      skills: ["Node.js", "Express.js", "Python"]
    },
    {
      icon: <Database size={24} />,
      title: "Database",
      description: "Data Management & Design",
      color: "info",
      skills: ["MongoDB", "SQLite"]
    },
    {
      icon: <Zap size={24} />,
      title: "DevOps",
      description: "Deployment & Optimization",
      color: "danger",
      skills: ["Git", "Netlify", "Vercel", "Render"]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) =>
        entry.isIntersecting &&
        setActiveCategory((prev) => (prev + 1) % categories.length),
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold">Skills</h2>
        </div>

        <div className="row g-4">
          {categories.map((cat, index) => (
            <div key={index} className="col-md-6 col-lg-3">
              <div
                className={`card h-100 text-center border-0 shadow-sm bg-${
                  darkMode ? "secondary text-light" : "white"
                }`}
              >
                <div className="card-body">
                  <div
                    className={`rounded-circle bg-${cat.color} bg-gradient d-flex align-items-center justify-content-center mx-auto mb-3`}
                    style={{ width: 64, height: 64 }}
                  >
                    {cat.icon}
                  </div>
                  <h5 className="fw-bold mb-2">{cat.title}</h5>
                  <p className="small text-muted">{cat.description}</p>
                  <ul className="list-unstyled small mb-0">
                    {cat.skills.map((skill, i) => (
                      <li key={i} className="text-capitalize">
                        • {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;



// import React, { useState, useEffect, useRef } from "react"
// import { Code, Database, Server, Zap } from "lucide-react"

// const Skills = ({ darkMode }) => {
//   const [activeCategory, setActiveCategory] = useState(0)
//   const [isVisible, setIsVisible] = useState(false)
//   const [hoveredSkill, setHoveredSkill] = useState(null)
//   const sectionRef = useRef(null)

//   const skillCategories = [
//     {
//       title: "Frontend",
//       icon: Code,
//       color: "from-blue-500 to-cyan-500",
//       skills: [
//         {
//           name: "React",
//           level: 90,
//           description: "Component-based UI library",
//           years: 3
//         },
//         {
//           name: "TypeScript",
//           level: 85,
//           description: "Typed JavaScript superset",
//           years: 2
//         },
//         {
//           name: "Next.js",
//           level: 80,
//           description: "React production framework",
//           years: 2
//         },
//         {
//           name: "Tailwind CSS",
//           level: 90,
//           description: "Utility-first CSS framework",
//           years: 2
//         },
//         {
//           name: "HTML/CSS",
//           level: 95,
//           description: "Web markup and styling",
//           years: 4
//         },
//         {
//           name: "JavaScript",
//           level: 90,
//           description: "Dynamic programming language",
//           years: 3
//         }
//       ]
//     },
//     {
//       title: "Backend",
//       icon: Server,
//       color: "from-green-500 to-emerald-500",
//       skills: [
//         {
//           name: "Node.js",
//           level: 85,
//           description: "JavaScript runtime environment",
//           years: 3
//         },
//         {
//           name: "Express.js",
//           level: 80,
//           description: "Web application framework",
//           years: 3
//         },
//         {
//           name: "MongoDB",
//           level: 75,
//           description: "NoSQL document database",
//           years: 2
//         },
//         {
//           name: "PostgreSQL",
//           level: 70,
//           description: "Relational database system",
//           years: 2
//         },
//         {
//           name: "REST APIs",
//           level: 85,
//           description: "RESTful web services",
//           years: 3
//         },
//         {
//           name: "GraphQL",
//           level: 65,
//           description: "Query language for APIs",
//           years: 1
//         }
//       ]
//     },
//     {
//       title: "Database",
//       icon: Database,
//       color: "from-purple-500 to-pink-500",
//       skills: [
//         {
//           name: "MongoDB",
//           level: 80,
//           description: "Document-oriented database",
//           years: 2
//         },
//         {
//           name: "PostgreSQL",
//           level: 75,
//           description: "Advanced SQL database",
//           years: 2
//         },
//         {
//           name: "Redis",
//           level: 70,
//           description: "In-memory data structure",
//           years: 1
//         },
//         {
//           name: "Prisma",
//           level: 65,
//           description: "Next-generation ORM",
//           years: 1
//         },
//         {
//           name: "MySQL",
//           level: 70,
//           description: "Relational database",
//           years: 2
//         },
//         {
//           name: "Firebase",
//           level: 60,
//           description: "Backend-as-a-Service",
//           years: 1
//         }
//       ]
//     },
//     {
//       title: "Tools & DevOps",
//       icon: Zap,
//       color: "from-orange-500 to-red-500",
//       skills: [
//         {
//           name: "Git",
//           level: 85,
//           description: "Version control system",
//           years: 3
//         },
//         {
//           name: "Docker",
//           level: 70,
//           description: "Containerization platform",
//           years: 2
//         },
//         {
//           name: "AWS",
//           level: 65,
//           description: "Cloud computing services",
//           years: 1
//         },
//         {
//           name: "Jest",
//           level: 75,
//           description: "JavaScript testing framework",
//           years: 2
//         },
//         {
//           name: "CI/CD",
//           level: 70,
//           description: "Continuous integration/deployment",
//           years: 2
//         },
//         { name: "Webpack", level: 65, description: "Module bundler", years: 2 }
//       ]
//     }
//   ]

//   const technologies = [
//     { name: "React", category: "Frontend", popularity: 95 },
//     { name: "Node.js", category: "Backend", popularity: 90 },
//     { name: "MongoDB", category: "Database", popularity: 85 },
//     { name: "Express.js", category: "Backend", popularity: 80 },
//     { name: "TypeScript", category: "Language", popularity: 88 },
//     { name: "Next.js", category: "Framework", popularity: 82 },
//     { name: "Tailwind CSS", category: "Styling", popularity: 85 },
//     { name: "PostgreSQL", category: "Database", popularity: 78 },
//     { name: "AWS", category: "Cloud", popularity: 75 },
//     { name: "Docker", category: "DevOps", popularity: 70 },
//     { name: "Git", category: "Version Control", popularity: 95 },
//     { name: "Jest", category: "Testing", popularity: 72 },
//     { name: "GraphQL", category: "API", popularity: 68 },
//     { name: "Redux", category: "State Management", popularity: 75 },
//     { name: "Socket.io", category: "Real-time", popularity: 65 },
//     { name: "Prisma", category: "ORM", popularity: 60 }
//   ]

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true)
//         }
//       },
//       { threshold: 0.3 }
//     )

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current)
//     }

//     return () => observer.disconnect()
//   }, [])

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveCategory(prev => (prev + 1) % skillCategories.length)
//     }, 4000)

//     return () => clearInterval(interval)
//   }, [])

//   const getSkillColor = level => {
//     if (level >= 80) return "from-green-500 to-emerald-500"
//     if (level >= 60) return "from-blue-500 to-cyan-500"
//     return "from-orange-500 to-yellow-500"
//   }

//   return (
//     <section
//       ref={sectionRef}
//       id="skills"
//       className={`py-20 ${darkMode ? "bg-gray-900" : "bg-gray-50"}`}
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
//         <div className="text-center mb-16">
//           <h2
//             className={`text-3xl md:text-4xl font-bold mb-4 ${
//               darkMode ? "text-white" : "text-gray-900"
//             }`}
//           >
//             Skills
//           </h2>
//         </div>

//         {/* Skills Summary */}
//         <div
//           className={`p-8 rounded-2xl ${
//             darkMode ? "bg-gray-800" : "bg-white"
//           } shadow-xl mb-10`}
//         >
//           <div className="grid md:grid-cols-4 gap-6 text-center ">
//             <div className="group">
//               <div
//                 className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center transition-transform duration-300 group-hover:scale-110`}
//               >
//                 <Code size={24} className="text-white" />
//               </div>
//               <h4
//                 className={`text-xl font-bold ${
//                   darkMode ? "text-white" : "text-gray-900"
//                 }`}
//               >
//                 Frontend
//               </h4>
//               <p
//                 className={`text-sm ${
//                   darkMode ? "text-gray-400" : "text-gray-600"
//                 }`}
//               >
//                 Modern UI/UX Development
//               </p>
//             </div>


//             <div className="group">
//               <div
//                 className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center transition-transform duration-300 group-hover:scale-110`}
//               >
//                 <Database size={24} className="text-white" />
//               </div>
//               <h4
//                 className={`text-xl font-bold ${
//                   darkMode ? "text-white" : "text-gray-900"
//                 }`}
//               >
//                 Database
//               </h4>
//               <p
//                 className={`text-sm ${
//                   darkMode ? "text-gray-400" : "text-gray-600"
//                 }`}
//               >
//                 Data Management & Design
//               </p>
//             </div>
//             <div className="group">
//               <div
//                 className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center transition-transform duration-300 group-hover:scale-110`}
//               >
//                 <Database size={24} className="text-white" />
//               </div>
//               <h4
//                 className={`text-xl font-bold ${
//                   darkMode ? "text-white" : "text-gray-900"
//                 }`}
//               >
//                 Database
//               </h4>
//               <p
//                 className={`text-sm ${
//                   darkMode ? "text-gray-400" : "text-gray-600"
//                 }`}
//               >
//                 Data Management & Design
//               </p>
//             </div>

//             <div className="group">
//               <div
//                 className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center transition-transform duration-300 group-hover:scale-110`}
//               >
//                 <Zap size={24} className="text-white" />
//               </div>
//               <h4
//                 className={`text-xl font-bold ${
//                   darkMode ? "text-white" : "text-gray-900"
//                 }`}
//               >
//                 DevOps
//               </h4>
//               <p
//                 className={`text-sm ${
//                   darkMode ? "text-gray-400" : "text-gray-600"
//                 }`}
//               >
//                 Deployment & Optimization
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes fadeInUp {
//           from {
//             opacity: 0;
//             transform: translateY(20px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
//       `}</style>
//     </section>
//   )
// }

// export default Skills