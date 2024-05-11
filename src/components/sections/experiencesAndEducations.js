import CardItemSection from "../card/cardItemsection";
import SvgBottom from "../../files/experiencesEducation/svg-bottom.png";
import { useTranslation } from "react-i18next";
import experiences from "../../data/experiences.json";
import educations from "../../data/education.json";

function ExperiencesAndEducations() {
  const { t } = useTranslation();

  return (
    <div id="experience-education" className="experiences-educations">
      <div className="container pt-4">
        <CardItemSection
          info={experiences}
          title={`${t("experiences.title")}:`}
        />
        <CardItemSection info={educations} title={`${t("education.title")}:`} />
      </div>
      <div className="experiences-educations__svg">
        <img src={SvgBottom} alt="curve" height={"100%"} width={"100%"} />
      </div>
    </div>
  );
}

export default ExperiencesAndEducations;
