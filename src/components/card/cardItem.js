import { useEffect, useRef } from "react";
import { BoxArrowUpRight } from "react-bootstrap-icons";
import { Linkedin } from "react-bootstrap-icons";
import ScrollMagic from "scrollmagic";

function CardItem({
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
  const cardRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      root: null, // Use the viewport as the root
      rootMargin: "0px", // No margin
      threshold: [0, 1], // Trigger when the target enters and leaves the viewport
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Target is intersecting with the viewport
          entry.target.style.opacity = 1; // Make the card visible
        } else {
          // Target is not intersecting with the viewport
          entry.target.style.opacity = 0; // Make the card invisible
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      // Cleanup function (optional)
      // Disconnect the observer when the component is unmounted
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={cardRef} className=" card-item card m-5">
      <div className="row m-2">
        <div className="card-item__body card-body ">
          <img
            className="rounded-circle"
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
          <div className="card-item__body__skills-btn d-flex justify-content-between">
            <div className="skills-row">
              {skills !== undefined && (
                <div>
                  <strong>Skills:</strong> {skills}
                </div>
              )}
            </div>
            <div className="buttons">
              <a
                href={website_address}
                target="_blank"
                rel="noreferrer"
                className="btn btn-sm"
              >
                <BoxArrowUpRight />
              </a>
              <a
                href={linkedin_address}
                target="_blank"
                rel="noreferrer"
                className="ms-2 btn btn-sm"
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

export default CardItem;
