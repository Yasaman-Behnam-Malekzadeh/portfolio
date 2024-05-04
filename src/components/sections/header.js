function header() {
  const navbarItems = [
    {
      id: 1,
      name: "Home",
      address: "#",
    },
    {
      id: 2,
      name: "About me",
      address: "#about-me",
    },
    {
      id: 3,
      name: "Skills",
      address: "#skills",
    },
    {
      id: 4,
      name: "Portfolio",
      address: "/Portfolio",
    },
    {
      id: 5,
      name: "Contact",
      address: "#contact",
    },
  ];
  return (
    <div className="header-section fixed-top">
      <div className="header-section__wrapped container-md">
        <div className="fs-3 header-section__wrapped__left">Yasaman.BM</div>
        <div className="header-section__wrapped__right">
          {navbarItems.map((item) => {
            return (
              <a className="p-3" href={item.address} key={item.id}>
                {item.name}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default header;
