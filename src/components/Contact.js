import React from "react";
import emailjs from "emailjs-com"
import "../css/Contact.css"; 
import {useState} from "react";

const Contact = ({ id }) => {

  const [formData,setFormaData]=useState({name:"",email:"",message:""});
  const handleChange = (e) => {
    setFormaData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail=(e)=>{
    e.preventDefault();
    emailjs.sendForm('service_98hycwj', 'template_1o2z5qk', e.target, 'user_3qYjVnZ5o1mz6n8JYs3jC').then((result) => {alert("Message Sent Successfully")})
    .catch((error) => {alert("Error Occured, Please try again")});
  }
  return (
    <section id={id} className="contact-section">
      <h2 className="sections-heading">Let's Connect</h2>
      <p className="contact-intro" style={{fontSize:30}}>Feel free to reach out for collaborations, opportunities, or just a chat!</p>
      
      <div className="contact-container">
        {/* Contact Card */}
        <div className="contact-card">
          <div className="contact-item">
            <FaEnvelope className="icon" />
            <a href="mailto:ozashaunak30@gmail.com">ozashaunak30@gmail.com</a>
          </div>
          <div className="contact-item">
            <FaPhone className="icon" />
            <span>+918788879721</span>
          </div>
          <div className="contact-item">
            <FaLinkedin className="icon" />
            <a href="https://www.linkedin.com/in/shaunakoza/" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a>
          </div>
          <div className="contact-item">
            <FaGithub className="icon" />
            <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>

        {/* Contact Form */}
        <form className="contact-form" onSubmit={sendEmail}>
          <input type="text" placeholder="Your Name" onChange={handleChange} required />
          <input type="email" placeholder="Your Email" onChange={handleChange} required />
          <textarea placeholder="Your Message" rows="4" onChange={handleChange} required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
