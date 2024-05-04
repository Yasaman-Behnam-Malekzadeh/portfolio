import { Phone } from "react-bootstrap-icons";
import { Envelope } from "react-bootstrap-icons";
import { House } from "react-bootstrap-icons";
import { Linkedin } from "react-bootstrap-icons";
import { Github } from "react-bootstrap-icons";

function contactMe() {
  return (
    <div
      id="contact"
      className="d-flex justify-content-around align-items-center"
      style={{ backgroundColor: "#EDCDBB", height: "600px" }}
    >
      <din>
        <div className="mb-5">
          <strong className="fs-1 mb-2" style={{ color: "#590D22" }}>
            Get in Touch!
          </strong>
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
        <div>
          <a
            href="https://www.linkedin.com/in/yasaman-behnam-malekzadeh/"
            target="_blank"
            className="btn me-3"
            style={{ backgroundColor: "#590D22", color: "#f8f3f0" }}
          >
            <Linkedin className="me-1" />
            Linkedin
          </a>
          <a
            href="https://github.com/Yasaman-Behnam-Malekzadeh?tab=repositories"
            target="_blank"
            className="btn"
            style={{ backgroundColor: "#590D22", color: "#f8f3f0" }}
          >
            <Github className="me-1" />
            Github
          </a>
        </div>
      </din>
      <form
        className="d-flex flex-column align-items-center"
        style={{ width: "40%" }}
      >
        <input
          type="text"
          placeholder="Your name"
          className="p-3 form-control mb-3"
          style={{
            backgroundColor: "#f8f3f0",
            borderColor: "#590D22",
            borderWidth: "medium",
          }}
        />
        <input
          type="email"
          placeholder="Email address"
          className="p-3 form-control mb-3"
          style={{
            backgroundColor: "#f8f3f0",
            borderColor: "#590D22",
            borderWidth: "medium",
          }}
        />
        <input
          type="text"
          placeholder="Email subject"
          className="p-3 form-control mb-3"
          style={{
            backgroundColor: "#f8f3f0",
            borderColor: "#590D22",
            borderWidth: "medium",
          }}
        />
        <textarea
          placeholder="Your message"
          className="p-3 form-control mb-3"
          style={{
            height: "200px",
            backgroundColor: "#f8f3f0",
            borderColor: "#590D22",
            borderWidth: "medium",
          }}
        ></textarea>
        <button
          type="submit"
          className="btn px-5"
          style={{ backgroundColor: "#590D22", color: "#f8f3f0" }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default contactMe;
