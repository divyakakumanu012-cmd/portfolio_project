import { useState } from "react";
import axios from "axios";

function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await axios.post(
        "http://localhost:5000/api/contact",
        formData
      );

      alert("Message Sent Successfully");

      setFormData({
        name: "",
        email: "",
        message: "",
      });

    } catch (error) {

      alert("Error sending message");

    }
  };

  return (
    <section id="contact" className="section">

      <h2>Contact Me</h2>

      <div className="contact-container">

        <div className="contact-info">

          <h3>Email</h3>
          <p>yourmail@gmail.com</p>

          <h3>GitHub</h3>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
          >
            Visit GitHub
          </a>

          <h3>LinkedIn</h3>
          <a
            href="https://www.linkedin.com/in/divya-kakumanu-357901380/"
            target="_blank"
            rel="noreferrer"
          >
            Visit LinkedIn
          </a>

        </div>

        <form className="contact-form" onSubmit={handleSubmit}>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit">
            Send Message
          </button>

        </form>

      </div>

    </section>
  );
}

export default Contact;