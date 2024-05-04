import curveSvg from "../../svg/Mediamodifier-Design(dark).png";

function aboutMe() {
  return (
    <div
      id="about-me"
      className="d-flex justify-content-between align-items-center position-relative"
      style={{ backgroundColor: "#f8f3f0", height: "600px" }}
    >
      <div className="position-relative" style={{ width: "30%" }}></div>
      <img
        className="position-absolute z-1"
        src="https://i.ibb.co/7tcFY4x/file.png"
        height={"500px"}
        alt="about-me"
        style={{ bottom: "0", opacity: "0.5" }}
      />

      <div className="m-4" style={{ width: "80%" }}>
        <strong className="fs-3">About me</strong>
        <br />I started as a test engineer for 4 years, using different types of
        testing such as <strong>Unit testing</strong> and{" "}
        <strong>End-to-End testing</strong>. These experiences helped me develop
        a keen eye for detail.
        <br />
        After that, I got interested in front-end development. I learned about{" "}
        <strong>React</strong> and <strong>Vue.js</strong>, and in my first job
        as a front-end developer, I made over 20 pages for both mobile and
        desktop displays using Vue.js, SASS, BEM, and Bootstrap-Vue.
        <br />
        Later, I worked with React, Axios, TypeScript, and Styled-Components on
        projects in Europe.
        <br />I worked with many team members and liked working together using{" "}
        <strong>Agile methods</strong> and <strong>Scrum</strong>.
        <br />I firmly believe that tools are important, but it's even more
        important to be excited about learning. That's what helps both companies
        and developers grow.
      </div>
      <div
        className="position-absolute z-2"
        style={{ bottom: "-5px", width: "100%" }}
      >
        <img src={curveSvg} alt="curve" height={"100%"} width={"100%"} />
      </div>
    </div>
  );
}

export default aboutMe;
