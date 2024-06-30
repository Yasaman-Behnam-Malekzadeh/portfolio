import { useTranslation } from "react-i18next";
import courses from "../../data/courses";
import { Container } from "react-bootstrap";

function Courses() {
  const { t } = useTranslation("courses");

  return (
    <div id="courses" className="courses">
      <Container>
        <div className="container courses__title fs-3 ">
          {t("courses.title")}:
        </div>
        <div className="courses__items">
          {courses.map((item) => {
            return (
              <a
                target="blank"
                href={item.trueAddress}
                key={item.id}
                className="m-3"
              >
                <img src={item.address} alt={item.alt} />
              </a>
            );
          })}
        </div>
      </Container>
    </div>
  );
}

export default Courses;
