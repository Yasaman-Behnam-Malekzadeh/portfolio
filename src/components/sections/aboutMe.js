import curveSvg from "../../svg/Mediamodifier-Design(dark).png";

function aboutMe() {
  return (
    <div id="about-me" className="about-me">
      <div className="about-me__left"></div>
      <img
        className="about-me__img"
        src="https://i.ibb.co/7tcFY4x/file.png"
        height={"500px"}
        alt="about-me"
      />

      <div className="about-me__right m-4">
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
      <div className="about-me__bottom">
        <img src={curveSvg} alt="curve" height={"100%"} width={"100%"} />
      </div>
    </div>
  );
}

export default aboutMe;
