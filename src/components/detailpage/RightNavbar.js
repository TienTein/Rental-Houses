import SellerProfile from "./rightnavbar/SellerProfile";
import SearchBar from "./rightnavbar/SearchBar";
import HighVote from "./rightnavbar/HighVote";
import LatestArticle from "./rightnavbar/LatestArticle";
import FollowUs from "./rightnavbar/FollowUs";

import "../../assets/sass/detailpage/RightNavbar.scss";

function RightNavbar() {
  return (
    <div className="col-4 RightNavbar">
      <div className="rightnavbar">
        <div className="row">
          <SellerProfile />
          <SearchBar />
          <HighVote />
          <LatestArticle />
          <FollowUs />
        </div>
        {/* End row*/}
      </div>
      {/* End col */}
    </div>
    /* End fragment */
  );
}

export default RightNavbar;
