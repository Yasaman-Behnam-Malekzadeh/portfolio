import CardItemSection from "../card/cardItemsection";
import curveSvg from "../../svg/bottom experiences section.png";
import { useTranslation } from "react-i18next";

function ExperiencesAndEducations() {
  const { t } = useTranslation();
  const experiences = [
    {
      id: 1,
      name: t("experiences.ventureLeap.name"),
      position: t("experiences.ventureLeap.position"),
      start_date: t("experiences.ventureLeap.startDate"),
      end_date: t("experiences.ventureLeap.endDate"),
      description: t("experiences.ventureLeap.description"),
      linkedin_address: t("experiences.ventureLeap.linkedinAddress"),
      website_address: t("experiences.ventureLeap.websiteAddress"),
      logo_address: t("experiences.ventureLeap.logoAddress"),
      skills: t("experiences.ventureLeap.skills"),
    },
    {
      id: 2,
      name: t("experiences.Lastsecond.name"),
      position: t("experiences.Lastsecond.position"),
      start_date: t("experiences.Lastsecond.startDate"),
      end_date: t("experiences.Lastsecond.endDate"),
      description: t("experiences.Lastsecond.description"),
      linkedin_address: t("experiences.Lastsecond.linkedinAddress"),
      website_address: t("experiences.Lastsecond.websiteAddress"),
      logo_address: t("experiences.Lastsecond.logoAddress"),
      skills: t("experiences.Lastsecond.skills"),
    },
    {
      id: 3,
      name: t("experiences.Chargoon.name"),
      position: t("experiences.Chargoon.position"),
      start_date: t("experiences.Chargoon.startDate"),
      end_date: t("experiences.Chargoon.endDate"),
      description: t("experiences.Chargoon.description"),
      linkedin_address: t("experiences.Chargoon.linkedinAddress"),
      website_address: t("experiences.Chargoon.websiteAddress"),
      logo_address: t("experiences.Chargoon.logoAddress"),
      skills: t("experiences.Chargoon.skills"),
    },
  ];

  const educations = [
    {
      id: 1,
      name: t("education.master.name"),
      position: t("education.master.position"),
      start_date: t("education.master.startDate"),
      end_date: t("education.master.endDate"),
      description: t("education.master.description"),
      linkedin_address: t("education.master.linkedinAddress"),
      website_address: t("education.master.websiteAddress"),
      logo_address: t("education.master.logoAddress"),
      skills: t("education.master.skills"),
    },
    {
      id: 2,
      name: t("education.bachelor.name"),
      position: t("education.bachelor.position"),
      start_date: t("education.bachelor.startDate"),
      end_date: t("education.bachelor.endDate"),
      description: t("education.bachelor.description"),
      linkedin_address: t("education.bachelor.linkedinAddress"),
      website_address: t("education.bachelor.websiteAddress"),
      logo_address: t("education.bachelor.logoAddress"),
      skills: t("education.bachelor.skills"),
    },
  ];

  return (
    <div className="experiences-educations">
      <div className="container pt-4">
        <CardItemSection info={experiences} title="Work experiences:" />
        <CardItemSection info={educations} title="Education:" />
      </div>
      <div className="experiences-educations__svg">
        <img src={curveSvg} alt="curve" height={"100%"} width={"100%"} />
      </div>
    </div>
  );
}

export default ExperiencesAndEducations;
