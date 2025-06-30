import React from "react";

const About = ({ darkMode }) => {
  return (
    <section
      id="about"
      className={`about-section py-5 ${darkMode ? "bg-dark text-light" : "bg-white text-dark"}`}
    >
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold">About Me</h2>
        </div>

        <div className="row align-items-center justify-content-center mb-5">
          <div className="col-lg-6">
            <p className="lead">
              I am Rajesh Duggilla and I'm a MERN Stack Developer with expertise in building dynamic,
              user-centric, and scalable web applications. My skill set spans the entire development lifecycle—
              from designing intuitive front-end interfaces to creating robust backend architectures.
              With a passion for problem-solving and innovation, I thrive on turning ideas into impactful
              digital solutions.
            </p>
          </div>
          <div className="col-lg-6 text-center">
            <img
              src="https://media.licdn.com/dms/image/v2/D5603AQGjBvJKS_EUOQ/profile-displayphoto-shrink_800_800/B56ZZ1xn8ZGoAg-/0/1745732666650?e=1756339200&v=beta&t=QTq8i439Mg3zsUZy2pRrfTTzc0CjiSWv229BSyf8We8"
              alt="Rajesh Duggilla"
              className="img-fluid rounded shadow"
              style={{ maxWidth: "70%" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;



// import React from "react"

// const About = ({ darkMode }) => {
 
//   return (
//     <section
//       id="about"
//       className={`py-20 ${darkMode ? "bg-gray-800" : "bg-white"}`}
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2
//             className={`text-3xl md:text-4xl font-bold mb-4 ${
//               darkMode ? "text-white" : "text-gray-900"
//             }`}
//           >
//             About Me
//           </h2>
//         </div>

//         <div className="grid lg:grid-cols-2 gap-6 items-center mb-16 ml-60">
//           <div>
//             <p
//               className={`text-lg max-w-1xl mx-auto ${
//                 darkMode ? "text-gray-300" : "text-gray-600"
//               }`}
//             >
//               I am Rajesh Duggilla and I'm a MERN Stack Developer with expertise
//               in building dynamic, user-centric,and scalable web applications.My
//               skill set spans the entire development lifecycle—from designing
//               intuitive front-end interfaces to creating robust backend
//               architectures. With a passion for problem-solving and innovation,
//               I thrive on turning ideas into impactful digital solutions.
//             </p>
//           </div>
//           <img
//             src="https://media.licdn.com/dms/image/v2/D5603AQGjBvJKS_EUOQ/profile-displayphoto-shrink_800_800/B56ZZ1xn8ZGoAg-/0/1745732666650?e=1756339200&v=beta&t=QTq8i439Mg3zsUZy2pRrfTTzc0CjiSWv229BSyf8We8"
//             alt="Rajesh Duggilla"
//             className="h-13 w-7/12 rounded-lg shadow-lg"
//           />
//         </div>
//       </div>
//     </section>
//   )
// }

// export default About
