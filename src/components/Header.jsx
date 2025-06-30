import React, { useState, useEffect } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";

const Header = ({ darkMode}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = sectionId => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed-top shadow-sm ${
        darkMode ? "bg-dark border-bottom border-secondary" : "bg-white border-bottom border-light"
      }`}
    >
      <div className="container px-4 py-2 d-flex justify-content-between align-items-center">
        <div className="h4 fw-bold text-gradient m-0">Portfolio</div>


        <div className="d-flex align-items-center gap-2">
          
        {/* Desktop Nav */}
        <nav className="d-none d-md-flex gap-3">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`btn btn-link px-2 ${
                activeSection === item.id
                  ? "text-primary fw-medium"
                  : darkMode
                  ? "text-light"
                  : "text-dark"
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>
      
          {/* Mobile Menu Toggle */}
          <button
            className={`btn d-md-none ${
              darkMode ? "btn-outline-light" : "btn-outline-secondary"
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className={`d-md-none px-3 pb-3 ${darkMode ? "bg-dark" : "bg-white"}`}>
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`btn w-100 text-start mb-2 ${
                activeSection === item.id
                  ? "btn-primary text-white"
                  : darkMode
                  ? "btn-outline-light"
                  : "btn-outline-secondary"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;



// import React, { useState, useEffect } from "react"
// import { Moon, Sun, Menu, X } from "lucide-react"

// const Header = ({ darkMode, toggleDarkMode }) => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false)
//   const [activeSection, setActiveSection] = useState("home")

//   const navItems = [
//     { id: "home", label: "Home" },
//     { id: "about", label: "About" },
//     { id: "skills", label: "Skills" },
//     { id: "projects", label: "Projects" },
//     { id: "contact", label: "Contact" }
//   ]

//   useEffect(() => {
//     const handleScroll = () => {
//       const sections = navItems.map(item => document.getElementById(item.id))
//       const scrollPosition = window.scrollY + 100

//       for (let i = sections.length - 1; i >= 0; i--) {
//         const section = sections[i]
//         if (section && section.offsetTop <= scrollPosition) {
//           setActiveSection(navItems[i].id)
//           break
//         }
//       }
//     }

//     window.addEventListener("scroll", handleScroll)
//     return () => window.removeEventListener("scroll", handleScroll)
//   }, [])

//   const scrollToSection = sectionId => {
//     const element = document.getElementById(sectionId)
//     if (element) {
//       element.scrollIntoView({ behavior: "smooth" })
//     }
//     setIsMenuOpen(false)
//   }

//   return (
//     <header
//       className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md ${
//         darkMode ? "bg-gray-900/80" : "bg-white/80"
//       } border-b ${darkMode ? "border-gray-700" : "border-gray-200"}`}
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center py-4">
//           <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
//             Portfolio
//           </div>

//           {/* Desktop Navigation */}
//           <nav className="hidden md:flex space-x-8">
//             {navItems.map(item => (
//               <button
//                 key={item.id}
//                 onClick={() => scrollToSection(item.id)}
//                 className={`transition-colors duration-200 ${
//                   activeSection === item.id
//                     ? "text-blue-600 font-medium"
//                     : darkMode
//                     ? "text-gray-300 hover:text-white"
//                     : "text-gray-600 hover:text-gray-900"
//                 }`}
//               >
//                 {item.label}
//               </button>
//             ))}
//           </nav>

//           <div className="flex items-center space-x-4">
//             <button
//               onClick={toggleDarkMode}
//               className={`p-2 rounded-lg transition-colors ${
//                 darkMode
//                   ? "bg-gray-800 text-yellow-400 hover:bg-gray-700"
//                   : "bg-gray-100 text-gray-600 hover:bg-gray-200"
//               }`}
//             >
//               {darkMode ? <Sun size={20} /> : <Moon size={20} />}
//             </button>

//             {/* Mobile Menu Button */}
//             <button
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//               className={`md:hidden p-2 rounded-lg transition-colors ${
//                 darkMode
//                   ? "bg-gray-800 text-white hover:bg-gray-700"
//                   : "bg-gray-100 text-gray-600 hover:bg-gray-200"
//               }`}
//             >
//               {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Navigation */}
//         {isMenuOpen && (
//           <div
//             className={`md:hidden border-t ${
//               darkMode ? "border-gray-700" : "border-gray-200"
//             }`}
//           >
//             <nav className="py-4 space-y-2">
//               {navItems.map(item => (
//                 <button
//                   key={item.id}
//                   onClick={() => scrollToSection(item.id)}
//                   className={`block w-full text-left px-4 py-2 rounded-lg transition-colors ${
//                     activeSection === item.id
//                       ? "bg-blue-600 text-white"
//                       : darkMode
//                       ? "text-gray-300 hover:bg-gray-800"
//                       : "text-gray-600 hover:bg-gray-100"
//                   }`}
//                 >
//                   {item.label}
//                 </button>
//               ))}
//             </nav>
//           </div>
//         )}
//       </div>
//     </header>
//   )
// }

// export default Header