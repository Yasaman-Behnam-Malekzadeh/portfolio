import curveSvg from "../../svg/k7dazo80g18lvr72nxf.png";

function home() {
  return (
    <div id="#" className="home-section">
      <div className="home-section__left">
        <div className="fs-1 mb-3 animate__animated animate__fadeInUp">
          Hi,
          <br />
          I'm <strong>Yasaman</strong>
        </div>
        <h2 className="fs-2 mb-3 animate__animated animate__fadeInUp animate__delay-1s">
          Front-end engineer
        </h2>
        <div className="mb-3 animate__animated animate__fadeInUp animate__delay-1s">
          <div className="fs-4">Based on Berlin</div>
          If you are looking for a Front-end engineer
          <br />
          who has a huge enthusisem for translating UI concept
          <br />
          into visually intresting
          <br />a keen eye for any bug <strong>I'm here. </strong>
        </div>
        <a
          href="#contact"
          className="home-section__left__btn btn-lg animate__animated animate__fadeInUp animate__delay-2s"
        >
          Contact Me
        </a>
      </div>
      <div className="home-section__right">
        <div className="home-section__right__background">
          <img
            className="animate__animated animate__fadeInLeft"
            src="https://elementorpress.com/templatekit-pro/layout48/wp-content/uploads/2022/07/services-design-element.png"
            alt="home-flower"
          />
        </div>
        <img
          className="animate__animated animate__fadeInUp"
          src="https://i.ibb.co/6YqFy13/file-1.png"
          height={"500px"}
          alt="first-page"
        />
      </div>
      <div className="home-section__svg">
        <img src={curveSvg} alt="curve" height={"100%"} width={"100%"} />
      </div>
    </div>
  );
}

export default home;
