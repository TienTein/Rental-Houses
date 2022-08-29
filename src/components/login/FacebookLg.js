import FacebookLogin from "react-facebook-login";
import { useEffect } from "react";
import { FACEBOOK_APPID } from "./config";
import "../../assets/sass/login/FacebookLg.scss";

function FacebookLg({ getRes }) {
  const responseFacebook = (res) => {
    getRes({ res: res, type: "facebook" });
  };
  useEffect(() => {
    const metroBtn = document.querySelector(".metro");
    metroBtn.innerHTML = `<i class="fa-brands fa-facebook-f"></i>`;
  }, []);

  return (
    <div className="FacebookLg">
      <FacebookLogin
        appId={FACEBOOK_APPID}
        autoLoad={false}
        fields="name,email,picture"
        // onClick={componentClicked}
        callback={responseFacebook}
      ></FacebookLogin>
    </div>
  );
}
export default FacebookLg;
