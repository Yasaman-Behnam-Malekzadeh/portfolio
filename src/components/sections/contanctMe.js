import { Phone } from "react-bootstrap-icons";
import { Envelope } from "react-bootstrap-icons";
import { House } from "react-bootstrap-icons";
import { Linkedin } from "react-bootstrap-icons";
import { Github } from "react-bootstrap-icons";

function contactMe() {
  return (
    <div id="contact" className="contact-me">
      <din className="contact-me__info ">
        <div className="contact-me__info__title mb-5">
          <strong className="fs-1 mb-2">Get in Touch!</strong>
        </div>
        <div className="mb-3">
          <Phone className="me-2" />
          <strong> +4917675408446</strong>
        </div>
        <div className="mb-3">
          <Envelope className="me-2" />
          <strong> malekzadeh.yasi@yahoo.com</strong>
        </div>
        <div className="mb-3">
          <House className="me-2" />
          <strong> Berlin, Germany</strong>
        </div>
        <div className="contact-me__info__btn mt-4">
          <div className="mb-3 fs-5">Let's get social:</div>
          <a
            href="https://www.linkedin.com/in/yasaman-behnam-malekzadeh/"
            target="_blank"
            rel="noreferrer"
            className="btn me-3 rounded-circle fs-5"
          >
            <Linkedin className="me-1" />
          </a>
          <a
            href="https://github.com/Yasaman-Behnam-Malekzadeh?tab=repositories"
            target="_blank"
            rel="noreferrer"
            className="btn rounded-circle fs-5"
          >
            <Github className="me-1" />
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
