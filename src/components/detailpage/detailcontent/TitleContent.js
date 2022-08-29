import React, { useContext } from "react";
import "../../../assets/sass/detailpage/TitleContent.scss";
import { DetailContext } from "../../DetailPage";
function TitleContent() {
  const value = useContext(DetailContext);
  return (
    <div className="col-12 title-content">
      <h1>{value.data.name}</h1>
      <p>{value.data.price}</p>
      <div className="address">
        <i className="fa-solid fa-location-dot" />
        <small>{value.data.address}</small>
      </div>
    </div>
    /* End col title-content*/
  );
}

export default TitleContent;
