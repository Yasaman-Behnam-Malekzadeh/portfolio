import CardItemSection from "../card/cardItemsection";
import curveSvg from "../../svg/bottom experiences section.png";

function experiencesAndEducations() {
  const experiences = [
    {
      id: 1,
      name: "Venture Leap",
      position: "Front end engineer",
      start_date: "October 2022",
      end_date: "February 2023",
      description: `
            As a member of Probatix's Cockpit project, I contributed to the development of a cutting-edge Lab administration solution. I developed and maintained the fronten portion of the Cockpit dashboard, collaborating closely with cross-functional teams to ensure seamless integration and a user-friendly interface. Through code reviews and troubleshooting, I fostered a culture of high-quality code and continuous improvement.
            `,
      linkedin_address:
        "https://www.linkedin.com/company/venture-leap/?originalSubdomain=de",
      website_address: "https://venture-leap.com/en/",
      logo_address:
        "https://media.licdn.com/dms/image/C4D0BAQHqiRpPeUQ5vg/company-logo_200_200/0/1641991331248/venture_leap_logo?e=2147483647&v=beta&t=0S0gP-yBbX82vQryUatiKUCzFstbpGYqEKro5ECJM8g",
      skills:
        "React - TypeScript - CSS - HTML - Axios - Styled-component - GitHub - Figma - Symfony - Scrum",
    },
    {
      id: 2,
      name: "Lastsecond",
      position: "Front end engineer",
      start_date: "January 2021",
      end_date: "March 2022",
      description: `
            As the front-end developer at LastSecond.ir, I successfully revamped the company's website, implementing Vue.js and Sass to create a mobile and desktop. friendly design. This project included rewriting the main pages for tours, hotels,flights, itineraries, blogs, restaurants, videos, and attractions. Through effective communication and collaboration with backend developers, UI/UX designers, and the product manager, I ensured alignment with project objectives.
            `,
      linkedin_address:
        "https://www.linkedin.com/company/lastsecond/?originalSubdomain=ir",
      website_address: "https://lastsecond.ir/",
      logo_address:
        "https://pbs.twimg.com/profile_images/1230005817832886272/raLLVHAj_400x400.jpg",
      skills:
        "Vue.js - Bootstrap-Vue - HTML - Javasciprt - SASS - Linux - GitLab - Zeplin - Scrum",
    },
    {
      id: 3,
      name: "Chargoon",
      position: "QA engineer",
      start_date: "March 2016",
      end_date: "April 2020",
      description: `
            As a Manual Tester at Chargoon, tested three platforms using TFS, collaborating with a team of 10+ developers, 3 scrum masters, and 2 test engineers for efficient testing.
            `,
      linkedin_address: "https://www.linkedin.com/company/chargoon/",
      website_address: "https://www.chargoon.com/",
      logo_address:
        "https://yt3.googleusercontent.com/ytc/AIdro_l_JUvw77W0OYlx5PQPBoCtYE828mhGf_X13kVy=s900-c-k-c0x00ffffff-no-rj",
      skills:
        "TFS - Unit testing - End to End testing - Integration test - Scrum ",
    },
  ];

  const educations = [
    {
      id: 1,
      name: "Computer System Networking and Telecommunications",
      position: "Master",
      start_date: "2018",
      end_date: "2020",
      description: `
            Iran University of Science and Technology
            `,
      linkedin_address:
        "https://www.linkedin.com/company/iran-university-of-science-and-technology---iust/",
      website_address: "https://www.iust.ac.ir/en",
      logo_address:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS-vOLKUHqfArZL-lQREZyA7GawqfIQQD8d-U-ixSQx4wLJt8-ndf_nj5QUW9TGSeIKEo&usqp=CAU",
    },
    {
      id: 2,
      name: "Information Technology",
      position: "Bachelor",
      start_date: "2018",
      end_date: "2020",
      description: `
            K . N . Toosi University of Technology
            `,
      linkedin_address:
        "https://www.linkedin.com/school/kntoosi/?originalSubdomain=ir",
      website_address: "https://en.kntu.ac.ir/",
      logo_address:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ1yWlcro0afcO0XN3HFcgg32ILkzRWOJejJyhOo5Zrw&s",
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

export default experiencesAndEducations;
