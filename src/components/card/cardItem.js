import { BoxArrowUpRight } from "react-bootstrap-icons";
import { Linkedin } from "react-bootstrap-icons";

function cardItem({
  name,
  position,
  start_date,
  end_date,
  description,
  linkedin_address,
  website_address,
  logo_address,
  skills,
}) {
  return (
    <div
      className="card m-5"
      style={{ backgroundColor: "#f8f3f0", borderColor: "#590D22" }}
    >
      <div className="row m-2">
        <div className="card-body position-relative ">
          <img
            style={{ borderRadius: "50%", left: "0px", top: "-32px" }}
            className="rounded-circle position-absolute"
            src={logo_address}
            alt={`${name}-logo`}
            height={"50px"}
            width={"50px"}
          />
          <div className="card-title m-0 fs-3">
            {name} - {position}
          </div>
          <div className="card-text">
            {start_date} - {end_date}
          </div>
          <div className="card-text">{description}</div>
          <div className="d-flex justify-content-between">
            <div>
              {skills !== undefined && (
                <div>
                  <strong>Skills:</strong> {skills}
                </div>
              )}
            </div>
            <div>
              <a
                href={website_address}
                target="_blank"
                className="btn btn-sm"
                style={{ backgroundColor: "#590D22", color: "#f8f3f0" }}
              >
                <BoxArrowUpRight />
              </a>
              <a
                href={linkedin_address}
                target="_blank"
                className="ms-2 btn btn-sm"
                style={{ backgroundColor: "#590D22", color: "#f8f3f0" }}
              >
                <Linkedin />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default cardItem;
