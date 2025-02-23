import React from "react";
import SvgBottom from "../../files/copyright/svg-bottom.png";

function Copyright() {
  return (
    <div className="copyright">
      <div className="copyright__text">
        Copyright
        <footer>
          <p>&copy;</p>
        </footer>
        2024 yasaman.dev. All Rights Reserved
      </div>
      <img className="copyright__svg" src={SvgBottom} alt="wave" />
    </div>
  );
}

export default Copyright;
