import waveCopyright from "../../svg/copyright.png";
function Copyright() {
  return (
    <div className="copyright">
      <img className="copyright__svg" src={waveCopyright} alt="wave" />
      <div className="copyright__text">
        Copyright
        <footer>
          <p>&copy;</p>
        </footer>
        2024 yasaman-bm.com. All Rights Reserved
      </div>
    </div>
  );
}

export default Copyright;
