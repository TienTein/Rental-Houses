import DateComment from "./detailcontent/DateComment";
import TitleContent from "./detailcontent/TitleContent";
import Description from "./detailcontent/Description";
import PlaceDetail from "./detailcontent/PlaceDetail";
import GoogleMap from "./detailcontent/GoogleMap";
import ImageOverview from "./detailcontent/ImageOverview";
import CustomerReviews from "./detailcontent/CustomerReviews";
import "../../assets/sass/detailpage/DetailContent.scss";
import { useState } from "react";

function DetailContent() {
  const [newdata, setNewData] = useState([]);

  const addComment = (item) => {
    setNewData(item);
  };

  return (
    <div className="col-8 detailcontent">
      <div className="row">
        <DateComment />
        <TitleContent />
        <Description />
        <PlaceDetail />
        <GoogleMap />
        <ImageOverview />
        <CustomerReviews addComment={addComment} />
      </div>
      {/* End row*/}
    </div>
    /* End col */
  );
}

export default DetailContent;
