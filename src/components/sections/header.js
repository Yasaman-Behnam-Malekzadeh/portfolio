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
      address: "/Contact",
    },
  ];
  return (
    <div
      style={{ background: "#EDCDBB" }}
      className="fixed-top p-3"
      height="50px"
    >
      <div className="container ps-5 d-flex justify-content-between align-items-center">
        <div className="fs-2" style={{ color: "#590D22" }}>
          Yasaman.BM
        </div>
        <div>
          {navbarItems.map((item) => {
            return (
              <a
                className="ms-5 text-decoration-none"
                style={{ color: "#590D22" }}
                href={item.address}
                key={item.id}
              >
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
