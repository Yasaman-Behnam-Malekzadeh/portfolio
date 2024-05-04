import curveSvg from "../../svg/k7dazo80g18lvr72nxf.png";

function home() {
  return (
    <div
      id="#"
      className="d-flex justify-content-around align-items-center position-relative"
      style={{ backgroundColor: "#EDCDBB", height: "800px" }}
    >
      <div>
        <div className="fs-1">
          Hi,
          <br />
          I'm <strong>Yasaman</strong>
        </div>
        <h2 className="fs-2 mb-3">Front-end engineer</h2>
        <div>
          <div className="fs-4">Based on Berlin</div>
          If you are looking for a Front-end engineer
          <br />
          who has a keen eye for any bug
          <br />
          and a huge enthusisem for translating UI concept
          <br />
          into visually intresting <strong>I'm here. </strong>
        </div>
        <a
          href="#contact-me"
          className="mt-3 btn btn-lg"
          style={{ backgroundColor: "#DD7E7C" }}
        >
          Contact Me
        </a>
      </div>
      <div
        className="position-relative"
        style={{ width: "30%", height: "60%" }}
      >
        <div
          className="position-absolute z-0"
          style={{
            backgroundColor: "#DD7E7C",
            borderBottomRightRadius: "40%",
            borderTopLeftRadius: "40%",
            height: "500px",
            width: "450px",
          }}
        ></div>
        <img
          className="position-absolute z-1"
          src="https://i.ibb.co/6YqFy13/file-1.png"
          height={"500px"}
          alt="first-page"
        />
      </div>
      <div
        className="position-absolute"
        style={{ bottom: "-5px", width: "100%" }}
      >
        <img src={curveSvg} alt="curve" height={"100%"} width={"100%"} />
      </div>
    </div>
  );
}

export default home;
