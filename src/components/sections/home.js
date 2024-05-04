import curveSvg from "../../svg/k7dazo80g18lvr72nxf.png";

function home() {
  return (
    <div id="#" className="home-section">
      <div className="home-section__left">
        <div className="fs-1 mb-3">
          Hi,
          <br />
          I'm <strong>Yasaman</strong>
        </div>
        <h2 className="fs-2 mb-3">Front-end engineer</h2>
        <div className="mb-3">
          <div className="fs-4">Based on Berlin</div>
          If you are looking for a Front-end engineer
          <br />
          who has a huge enthusisem for translating UI concept
          <br />
          into visually intresting
          <br />a keen eye for any bug <strong>I'm here. </strong>
        </div>
        <a href="#contact" className="home-section__left__btn btn-lg">
          Contact Me
        </a>
      </div>
      <div className="home-section__right">
        <div className="home-section__right__background"></div>
        <img
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
