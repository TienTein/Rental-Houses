import logo from "../../assets/image-custom/logo-new.png";
import logo2 from "../../assets/image-custom/logo-new-2.png";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "../../assets/sass/global/Header.scss";
function Header({ main, id }) {
  const [navActive, setNavActive] = useState(false);
  const [checkmain, setChekmain] = useState(false);
  const [userInfo, setUserInfo] = useState();

  let navigate = useNavigate();

  useEffect(() => {
    setUserInfo(JSON.parse(localStorage.getItem("user")));
  }, []);

  useEffect(() => {
    const nav = document.querySelector(".navbar");
    const fixNav = () => {
      if (nav) {
        setNavActive(window.scrollY > nav?.offsetHeight);
        if (main) {
          setChekmain(window.scrollY > nav?.offsetHeight);
        }
      }
    };
    window.addEventListener("scroll", fixNav);
  }, [navActive]);

  const signOut = () => {
    localStorage.clear();
    setUserInfo();
    navigate("/");
  };

  return (
    <div className="navBarContainer">
      <div className="nav-background">
        <nav
          className={
            navActive
              ? "navbar navbar-expand-lg active"
              : "navbar navbar-expand-lg"
          }
        >
          <div className="container-fluid">
            <Link className="logoImage" to="/">
              <img
                src={
                  main === true ? (checkmain === true ? logo2 : logo) : logo2
                }
                alt="logo"
              ></img>
            </Link>

            <button
              className="navbar-toggler hidden-lg-up"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapsibleNavId"
              aria-controls="collapsibleNavId"
              aria-expanded="false"
              aria-label="Toggle navigation"
            ></button>

            <div className="collapse navbar-collapse" id="collapsibleNavId">
              <ul className="navbar-nav  mt-2 mt-lg-0">
                <Link to="/">
                  {/* className="active" */}
                  <li className="nav-item">Home</li>
                  <div className="progress-bar"></div>
                </Link>
                <Link to="/">
                  <li className="nav-item">About</li>
                  <div className="progress-bar"></div>
                </Link>
                <Link to="/shop">
                  <li className="nav-item">Shop</li>
                  <div className="progress-bar"></div>
                </Link>
                <Link to="/">
                  <li className="nav-item">News</li>
                  <div className="progress-bar"></div>
                </Link>
                <Link to={`/detail/${id ? id : "4GpvZ9toNxcDCqmehANI"}`}>
                  <li className="nav-item">Page</li>
                  <div className="progress-bar"></div>
                </Link>
                <Link to="/">
                  <li className="nav-item">Contact</li>
                  <div className="progress-bar"></div>
                </Link>
                <Link to="/">
                  <li className="nav-item">Map</li>
                  <div className="progress-bar"></div>
                </Link>

                {userInfo ? (
                  <Link to="/addlisting">
                    <li className="nav-item">AddListing</li>
                    <div className="progress-bar"></div>
                  </Link>
                ) : (
                  <Link to="/login">
                    <li className="nav-item">Login</li>
                    <div className="progress-bar"></div>
                  </Link>
                )}
              </ul>
              {userInfo && (
                <div className="user-info">
                  <p>Hello, {userInfo?.name}</p>
                  <button className="signout" onClick={signOut}>
                    Sign out
                  </button>
                </div>
              )}
            </div>
          </div>
          {/* end container */}
        </nav>
        {/* end nav */}
      </div>
    </div>
    /* End fragment */
  );
}
export default Header;
