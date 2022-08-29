import { GoogleLogin } from "react-google-login";
import { GOOGLE_APPID } from "./config";
import "../../assets/sass/login/GoogleLg.scss";

function GoogleLg({ getRes }) {
  const onSuccess = (res) => {
    getRes({ res: res.profileObj, type: "google" });
  };

  const onFailure = (res) => {
    getRes(res);
  };
  return (
    <div className="GoogleLg">
      <GoogleLogin
        clientId={GOOGLE_APPID}
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
}
export default GoogleLg;
