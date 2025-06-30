import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";

const Contact = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactInfo = [
    {
      icon: Mail,
      label: "Email:",
      value: "rajeshduggilla1908@gmail.com",
      href: "mailto:rajeshduggilla1908@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone:",
      value: "7780695503",
      href: "tel:7780695503",
    },
    {
      icon: MapPin,
      label: "Location:",
      value: "Karimnagar, Telangana, India",
      href: "#",
    },
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const isFormValid =
    formData.name && formData.email && formData.subject && formData.message;

  return (
   <section id="contact" className="py-5">
  <div className="container">
    {/* Header */}
    <div className="text-center mb-5">
      <h2 className="display-5 fw-bold">Get In Touch</h2>
      <p className="lead">Let's discuss your next project or just say hello</p>
    </div>

    <div className="row g-5 align-items-start">
      {/* Contact Info */}
      <div className="col-lg-6">
        <h3 className="h4 fw-bold mb-3">Let's Connect</h3>
        <p className="mb-4 text-muted">
          I'm always open to discussing new opportunities, interesting projects,
          or just having a chat about technology and development.
        </p>

        <ul className="list-unstyled">
          {contactInfo.map((info, idx) => (
            <li key={idx} className="d-flex align-items-center mb-4">
              <div
                className="d-flex justify-content-center align-items-center bg-white shadow rounded flex-shrink-0"
                style={{ width: "3rem", height: "3rem" }}
              >
                <info.icon size={20} className="text-primary" />
              </div>
              <div className="ms-3 d-flex gap-3">
                <strong className="d-block">{info.label}</strong>
                <a
                  href={info.href}
                  className={`d-block ${darkMode ? "text-light" : "text-secondary"}`}
                >
                  {info.value}
                </a>
              </div>
            </li>
          ))}
        </ul>

        <div
          className={`p-4 mt-4 rounded shadow ${
            darkMode ? "bg-secondary text-light" : "bg-white"
          }`}
        >
          <h5 className="fw-bold mb-2">Quick Response</h5>
          <p className="mb-0">
            I typically respond within 24 hours. For urgent matters, feel free to call or message on LinkedIn.
          </p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="col-lg-6">
        <div
          className={`p-4 rounded shadow ${
            darkMode ? "bg-secondary text-light" : "bg-white"
          }`}
        >
          {isSubmitted ? (
            <div className="text-center py-5">
              <CheckCircle size={48} className="text-success mb-3" />
              <h4 className="fw-bold">Message Sent Successfully!</h4>
              <p>Thank you for reaching out. I'll get back to you soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="row g-3">
                <div className="col-md-6">
                  <label className="form-label ">Name *</label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Email *</label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
              </div>

              <div className="mt-3">
                <label className="form-label">Subject *</label>
                <input
                  type="text"
                  name="subject"
                  className="form-control"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What's this about?"
                  required
                />
              </div>

              <div className="mt-3">
                <label className="form-label">Message *</label>
                <textarea
                  name="message"
                  rows="5"
                  className="form-control"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or just say hello..."
                  required
                ></textarea>
              </div>

              <div className="mt-4 text-end">
                <button
                  type="submit"
                  className={`btn btn-primary px-4 py-2 d-flex align-items-center justify-content-center gap-2 ${
                    (!isFormValid || isSubmitting) && "disabled"
                  }`}
                  disabled={!isFormValid || isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className="spinner-border spinner-border-sm me-2"></span>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={16} /> Send Message
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  </div>
</section>

  );
};

export default Contact;

// import React, { useState } from "react"
// import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react"

// const Contact = ({ darkMode }) => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: ""
//   })
//   const [isSubmitting, setIsSubmitting] = useState(false)
//   const [isSubmitted, setIsSubmitted] = useState(false)

//   const contactInfo = [
//     {
//       icon: Mail,
//       label: "Email",
//       value: "rajeshduggilla1908@gmail.com",
//       href: "https://mail.google.com/mail/u/0/#inbox"
//     },
//     {
//       icon: Phone,
//       label: "Phone",
//       value: "7780695503",
//       href: "telphone no"
//     },
//     {
//       icon: MapPin,
//       label: "Location",
//       value: "Karimnagar, Telangana, India",
//       href: "my address"
//     }
//   ]

//   const handleChange = e => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     })
//   }

//   const handleSubmit = async e => {
//     e.preventDefault()
//     setIsSubmitting(true)

//     // Simulate form submission
//     await new Promise(resolve => setTimeout(resolve, 2000))

//     setIsSubmitting(false)
//     setIsSubmitted(true)
//     setFormData({ name: "", email: "", subject: "", message: "" })

//     // Reset success message after 5 seconds
//     setTimeout(() => setIsSubmitted(false), 5000)
//   }

//   const isFormValid =
//     formData.name && formData.email && formData.subject && formData.message

//   return (
//     <section
//       id="contact"
//       className={`py-20 ${darkMode ? "bg-gray-900" : "bg-gray-50"}`}
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2
//             className={`text-3xl md:text-4xl font-bold mb-4 ${
//               darkMode ? "text-white" : "text-gray-900"
//             }`}
//           >
//             Get In Touch
//           </h2>
//           <p
//             className={`text-lg max-w-2xl mx-auto ${
//               darkMode ? "text-gray-300" : "text-gray-600"
//             }`}
//           >
//             Let's discuss your next project or just say hello
//           </p>
//         </div>

//         <div className="grid lg:grid-cols-2 gap-12">
//           {/* Contact Information */}
//           <div>
//             <h3
//               className={`text-2xl font-bold mb-8 ${
//                 darkMode ? "text-white" : "text-gray-900"
//               }`}
//             >
//               Let's Connect
//             </h3>
//             <p
//               className={`text-lg mb-8 ${
//                 darkMode ? "text-gray-300" : "text-gray-600"
//               }`}
//             >
//               I'm always open to discussing new opportunities, interesting
//               projects, or just having a chat about technology and development.
//             </p>

//             <div className="space-y-6">
//               {contactInfo.map((info, index) => (
//                 <div key={index} className="flex items-center gap-4">
//                   <div
//                     className={`w-12 h-12 rounded-lg ${
//                       darkMode ? "bg-gray-800" : "bg-white"
//                     } shadow-lg flex items-center justify-center`}
//                   >
//                     <info.icon size={20} className="text-blue-600" />
//                   </div>
//                   <div>
//                     <p
//                       className={`font-medium ${
//                         darkMode ? "text-white" : "text-gray-900"
//                       }`}
//                     >
//                       {info.label}
//                     </p>
//                     {info.href === "#" ? (
//                       <p
//                         className={`${
//                           darkMode ? "text-gray-300" : "text-gray-600"
//                         }`}
//                       >
//                         {info.value}
//                       </p>
//                     ) : (
//                       <a
//                         href={info.href}
//                         className={`${
//                           darkMode
//                             ? "text-gray-300 hover:text-white"
//                             : "text-gray-600 hover:text-gray-900"
//                         } transition-colors`}
//                       >
//                         {info.value}
//                       </a>
//                     )}
//                   </div>
//                 </div>
//               ))}
//             </div>

//             <div
//               className={`mt-8 p-6 rounded-lg ${
//                 darkMode ? "bg-gray-800" : "bg-white"
//               } shadow-lg`}
//             >
//               <h4
//                 className={`text-lg font-bold mb-3 ${
//                   darkMode ? "text-white" : "text-gray-900"
//                 }`}
//               >
//                 Quick Response
//               </h4>
//               <p className={`${darkMode ? "text-gray-300" : "text-gray-600"}`}>
//                 I typically respond to messages within 24 hours. For urgent
//                 matters, feel free to call or send a message on LinkedIn.
//               </p>
//             </div>
//           </div>

//           {/* Contact Form */}
//           <div
//             className={`p-8 rounded-lg shadow-lg ${
//               darkMode ? "bg-gray-800" : "bg-white"
//             }`}
//           >
//             {isSubmitted ? (
//               <div className="text-center py-8">
//                 <CheckCircle
//                   size={48}
//                   className="text-green-500 mx-auto mb-4"
//                 />
//                 <h3
//                   className={`text-xl font-bold mb-2 ${
//                     darkMode ? "text-white" : "text-gray-900"
//                   }`}
//                 >
//                   Message Sent Successfully!
//                 </h3>
//                 <p
//                   className={`${darkMode ? "text-gray-300" : "text-gray-600"}`}
//                 >
//                   Thank you for reaching out. I'll get back to you soon.
//                 </p>
//               </div>
//             ) : (
//               <form onSubmit={handleSubmit} className="space-y-6">
//                 <div className="grid md:grid-cols-2 gap-4">
//                   <div>
//                     <label
//                       htmlFor="name"
//                       className={`block text-sm font-medium mb-2 ${
//                         darkMode ? "text-gray-300" : "text-gray-700"
//                       }`}
//                     >
//                       Name *
//                     </label>
//                     <input
//                       type="text"
//                       id="name"
//                       name="name"
//                       value={formData.name}
//                       onChange={handleChange}
//                       required
//                       className={`w-full px-4 py-3 rounded-lg border transition-colors ${
//                         darkMode
//                           ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500"
//                           : "bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500"
//                       } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20`}
//                       placeholder="Your full name"
//                     />
//                   </div>
//                   <div>
//                     <label
//                       htmlFor="email"
//                       className={`block text-sm font-medium mb-2 ${
//                         darkMode ? "text-gray-300" : "text-gray-700"
//                       }`}
//                     >
//                       Email *
//                     </label>
//                     <input
//                       type="email"
//                       id="email"
//                       name="email"
//                       value={formData.email}
//                       onChange={handleChange}
//                       required
//                       className={`w-full px-4 py-3 rounded-lg border transition-colors ${
//                         darkMode
//                           ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500"
//                           : "bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500"
//                       } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20`}
//                       placeholder="your.email@example.com"
//                     />
//                   </div>
//                 </div>

//                 <div>
//                   <label
//                     htmlFor="subject"
//                     className={`block text-sm font-medium mb-2 ${
//                       darkMode ? "text-gray-300" : "text-gray-700"
//                     }`}
//                   >
//                     Subject *
//                   </label>
//                   <input
//                     type="text"
//                     id="subject"
//                     name="subject"
//                     value={formData.subject}
//                     onChange={handleChange}
//                     required
//                     className={`w-full px-4 py-3 rounded-lg border transition-colors ${
//                       darkMode
//                         ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500"
//                         : "bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500"
//                     } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20`}
//                     placeholder="What's this about?"
//                   />
//                 </div>

//                 <div>
//                   <label
//                     htmlFor="message"
//                     className={`block text-sm font-medium mb-2 ${
//                       darkMode ? "text-gray-300" : "text-gray-700"
//                     }`}
//                   >
//                     Message *
//                   </label>
//                   <textarea
//                     id="message"
//                     name="message"
//                     value={formData.message}
//                     onChange={handleChange}
//                     required
//                     rows={5}
//                     className={`w-full px-4 py-3 rounded-lg border transition-colors resize-none ${
//                       darkMode
//                         ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500"
//                         : "bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500"
//                     } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20`}
//                     placeholder="Tell me about your project or just say hello..."
//                   />
//                 </div>

//                 <button
//                   type="submit"
//                   disabled={!isFormValid || isSubmitting}
//                   className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 flex items-center justify-center gap-2 ${
//                     isFormValid && !isSubmitting
//                       ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700"
//                       : "bg-gray-400 text-gray-200 cursor-not-allowed"
//                   }`}
//                 >
//                   {isSubmitting ? (
//                     <>
//                       <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
//                       Sending...
//                     </>
//                   ) : (
//                     <>
//                       <Send size={20} />
//                       Send Message
//                     </>
//                   )}
//                 </button>
//               </form>
//             )}
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default Contact
