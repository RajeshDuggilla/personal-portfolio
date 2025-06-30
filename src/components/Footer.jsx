import React from "react";
import { Heart, Github, Linkedin, Mail, ArrowUp } from "lucide-react";

const Footer = ({ darkMode }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Mail, href: "mailto:rajeshduggilla1908@gmail.com", label: "Email" }
  ];

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <footer className={`border-top py-5 ${darkMode ? "bg-dark text-light border-secondary" : "bg-white text-dark border-light"}`}>
      <div className="container">
        <div className="row gy-5">
          {/* Brand & Social */}
          <div className="col-md-4">
            <h5 className="fw-bold text-gradient mb-3">Rajesh Duggilla</h5>
            <p className="text-muted small">
              Full Stack Developer passionate about creating amazing web experiences and solving complex problems with elegant solutions.
            </p>
            <div className="d-flex gap-2 mt-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`btn btn-sm ${darkMode ? "btn-outline-light" : "btn-outline-secondary"}`}
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-md-4">
            <h6 className="fw-semibold mb-3">Quick Links</h6>
            <ul className="list-unstyled">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    onClick={e => {
                      e.preventDefault();
                      document.getElementById(link.href.slice(1))?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className={`d-block text-decoration-none mb-2 ${darkMode ? "text-light" : "text-muted"}`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-md-4">
            <h6 className="fw-semibold mb-3">Get In Touch</h6>
            <p className="mb-1 small">Karimnagar, Telangana, India</p>
            <p className="mb-1 small">rajeshduggilla1908@gmail.com</p>
            <p className="mb-3 small">7780695503</p>
            <p className="text-muted small">
              Available for freelance work and full-time opportunities.
            </p>
          </div>
        </div>

        <hr className={`mt-5 ${darkMode ? "border-secondary" : "border-light"}`} />

        {/* Bottom Bar */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center pt-3">
          <div className="d-flex align-items-center gap-2 small">
            <span>© 2025 Rajesh Duggilla. Made with</span>
            <Heart size={16} className="text-danger" />
            <span>and lots of coffee</span>
          </div>
          <button
            onClick={scrollToTop}
            className={`btn btn-sm mt-3 mt-md-0 ${darkMode ? "btn-outline-light" : "btn-outline-secondary"}`}
            aria-label="Back to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


// import React from "react"
// import { Heart, Github, Linkedin, Mail, ArrowUp } from "lucide-react"

// const Footer = ({ darkMode }) => {
//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" })
//   }

//   const socialLinks = [
//     { icon: Github, href: "https://github.com", label: "GitHub" },
//     { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
//     { icon: Mail, href: "https://mail@gmail.com", label: "Email" }
//   ]

//   const quickLinks = [
//     { name: "About", href: "#about" },
//     { name: "Skills", href: "#skills" },
//     { name: "Projects", href: "#projects" },
//     { name: "Contact", href: "#contact" }
//   ]

//   return (
//     <footer
//       className={`${
//         darkMode ? "bg-gray-900 border-gray-700" : "bg-white border-gray-200"
//       } border-t`}
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         <div className="grid md:grid-cols-3 gap-8">
//           {/* Brand */}
//           <div>
//             <div className="text-2xl ml-0 mr-0 font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
//               Rajesh Duggilla
//             </div>
//             <p
//               className={`${darkMode ? "text-gray-400" : "text-gray-600"} mb-4 ml-0 mr-0` }
//             >
//               Full Stack Developer passionate about creating amazing web
//               experiences and solving complex problems with elegant solutions.
//             </p>
//             <div className="flex space-x-4">
//               {socialLinks.map((social, index) => (
//                 <a
//                   key={index}
//                   href={social.href}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className={`p-2 rounded-lg transition-all duration-200 hover:scale-110 ${
//                     darkMode
//                       ? "bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700"
//                       : "bg-gray-100 text-gray-600 hover:text-gray-900 hover:bg-gray-200"
//                   }`}
//                   aria-label={social.label}
//                 >
//                   <social.icon size={20} />
//                 </a>
//               ))}
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h3
//               className={`text-lg font-semibold mb-4 ${
//                 darkMode ? "text-white" : "text-gray-900"
//               }`}
//             >
//               Quick Links
//             </h3>
//             <ul className="space-y-2">
//               {quickLinks.map((link, index) => (
//                 <li key={index}>
//                   <a
//                     href={link.href}
//                     onClick={e => {
//                       e.preventDefault()
//                       document
//                         .getElementById(link.href.substring(1))
//                         ?.scrollIntoView({
//                           behavior: "smooth"
//                         })
//                     }}
//                     className={`transition-colors ${
//                       darkMode
//                         ? "text-gray-400 hover:text-white"
//                         : "text-gray-600 hover:text-gray-900"
//                     }`}
//                   >
//                     {link.name}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Contact Info */}
//           <div>
//             <h3
//               className={`text-lg font-semibold mb-4 ${
//                 darkMode ? "text-white" : "text-gray-900"
//               }`}
//             >
//               Get In Touch
//             </h3>
//             <div className="space-y-2">
//               <p className={`${darkMode ? "text-gray-400" : "text-gray-600"}`}>
//                 Karimnagar, Telangana, India
//               </p>
//               <p className={`${darkMode ? "text-gray-400" : "text-gray-600"}`}>
//                 rajeshduggilla1908@gmail.com
//               </p>
//               <p className={`${darkMode ? "text-gray-400" : "text-gray-600"}`}>
//                 7780695503
//               </p>
//             </div>
//             <div className="mt-4">
//               <p
//                 className={`text-sm ${
//                   darkMode ? "text-gray-400" : "text-gray-600"
//                 }`}
//               >
//                 Available for freelance work and full-time opportunities.
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Bottom Bar */}
//         <div
//           className={`mt-8 pt-8 border-t ${
//             darkMode ? "border-gray-700" : "border-gray-200"
//           } flex flex-col md:flex-row justify-between items-center`}
//         >
//           <div
//             className={`flex items-center gap-2 text-sm ${
//               darkMode ? "text-gray-400" : "text-gray-600"
//             }`}
//           >
//             <span>© 2025 Rajesh Duggilla. Made with</span>
//             <Heart size={16} className="text-red-500" />
//             <span>and lots of coffee</span>
//           </div>

//           <button
//             onClick={scrollToTop}
//             className={`mt-4 md:mt-0 p-2 rounded-lg transition-all duration-200 hover:scale-110 ${
//               darkMode
//                 ? "bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700"
//                 : "bg-gray-100 text-gray-600 hover:text-gray-900 hover:bg-gray-200"
//             }`}
//             aria-label="Back to top"
//           >
//             <ArrowUp size={20} />
//           </button>
//         </div>
//       </div>
//     </footer>
//   )
// }

// export default Footer