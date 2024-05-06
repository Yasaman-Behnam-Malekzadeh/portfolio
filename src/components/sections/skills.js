function skills() {
  const skills = [
    {
      id: 1,
      name: "React",
      logo_address:
        "https://cdn.iconscout.com/icon/free/png-256/free-react-4-1175110.png",
    },
    {
      id: 2,
      name: "Vue.js",
      logo_address:
        "https://w7.pngwing.com/pngs/492/902/png-transparent-vuejs-original-wordmark-logo-icon-thumbnail.png",
    },
    {
      id: 3,
      name: "TypeScript",
      logo_address:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png",
    },
    {
      id: 4,
      name: "Bootstrap",
      logo_address:
        "https://cdn.icon-icons.com/icons2/2415/PNG/512/bootstrap_plain_wordmark_logo_icon_146620.png",
    },
    {
      id: 5,
      name: "sass",
      logo_address:
        "https://banner2.cleanpng.com/20180815/xbk/kisspng-sass-logo-cascading-style-sheets-scalable-vector-g-codzero-cms-blog-tool-publishing-platform-5b74aaa0de6192.1715579115343725129109.jpg",
    },
    {
      id: 6,
      name: "graph-ql",
      logo_address:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFmAUyRK1v3AJ7f_DVldmhyKAU2d9DYRVA-zwpqVWTjQ&s",
    },
    {
      id: 7,
      name: "Axios",
      logo_address:
        "https://user-images.githubusercontent.com/16843090/101181820-f3a63780-3612-11eb-9d3a-05452f2b0ad8.png",
    },
    {
      id: 8,
      name: "github",
      logo_address:
        "https://1000logos.net/wp-content/uploads/2021/05/GitHub-logo.png",
    },
    {
      id: 9,
      name: "styled-component",
      logo_address:
        "https://corevaluetech.com/assets/illustrations/styled-component.webp",
    },
    {
      id: 10,
      name: "jQuery",
      logo_address:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbs4kl1SJb4BDmHo-uDxfqk2cNPyhZuuI0WZjUmW1N0w&s",
    },
    {
      id: 11,
      name: "JavaScript",
      logo_address:
        "https://logos-world.net/wp-content/uploads/2023/02/JavaScript-Logo.png",
    },
    {
      id: 12,
      name: "css",
      logo_address:
        "https://1000logos.net/wp-content/uploads/2020/09/CSS-Logo.png",
    },
    {
      id: 13,
      name: "html",
      logo_address:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsubI1xnS2EsbFC7IKOtHXy3o2yp5zNGHX8-mLk-0nVw&s",
    },
    {
      id: 14,
      name: "rest",
      logo_address:
        "https://www.opc-router.de/wp-content/uploads/2020/05/REST_socialmedia.jpg",
    },
    {
      id: 15,
      name: "scrum",
      logo_address:
        "https://miro.medium.com/v2/resize:fit:860/0*VaaPYZgMh214NLle.png",
    },
  ];
  return (
    <div id="skills" className="skills">
      <div className="skills__title fs-3 mb-5">Skills:</div>
      <div className="skills__items">
        {skills.map((item) => (
          <img
            key={item.id}
            src={item.logo_address}
            alt={`${item.name}-logo`}
            height={"70px"}
            className="me-2"
          />
        ))}
      </div>
    </div>
  );
}

export default skills;
