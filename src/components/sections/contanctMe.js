import { Phone } from "react-bootstrap-icons";
import { Envelope } from "react-bootstrap-icons";
import { House } from "react-bootstrap-icons";
import { Linkedin } from "react-bootstrap-icons";
import { Github } from "react-bootstrap-icons";

function contactMe() {
  return (
    <div id="contact" className="contact-me">
      <din className="contact-me__info">
        <div className="contact-me__info__title mb-5">
          <strong className="fs-1 mb-2">Get in Touch!</strong>
        </div>
        <div className="mb-3">
          <Phone className="me-2" />
          <strong>Phone: +4917675408446</strong>
        </div>
        <div className="mb-3">
          <Envelope className="me-2" />
          <strong>Email: malekzadeh.yasi@yahoo.com</strong>
        </div>
        <div className="mb-3">
          <House className="me-2" />
          <strong>Location : Berlin, Germany</strong>
        </div>
        <div className="contact-me__info__btn">
          <a
            href="https://www.linkedin.com/in/yasaman-behnam-malekzadeh/"
            target="_blank"
            className="btn me-3"
          >
            <Linkedin className="me-1" />
            Linkedin
          </a>
          <a
            href="https://github.com/Yasaman-Behnam-Malekzadeh?tab=repositories"
            target="_blank"
            className="btn"
          >
            <Github className="me-1" />
            Github
          </a>
        </div>
      </din>
      <form className="contact-me__form">
        <input
          type="text"
          placeholder="Your name"
          className="p-3 form-control mb-3"
        />
        <input
          type="email"
          placeholder="Email address"
          className="p-3 form-control mb-3"
        />
        <input
          type="text"
          placeholder="Email subject"
          className="p-3 form-control mb-3"
        />
        <textarea
          placeholder="Your message"
          className="p-3 form-control mb-3"
        ></textarea>
        <button type="submit" className="btn px-5">
          Submit
        </button>
      </form>
    </div>
  );
}

export default contactMe;
