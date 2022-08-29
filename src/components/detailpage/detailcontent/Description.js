import "../../../assets/sass/detailpage/Description.scss";
import React, { useContext } from "react";
import { DetailContext } from "../../DetailPage";
function Description() {
  const value = useContext(DetailContext);
  return (
    <div className="col-12 description">
      <h1>Mô tả</h1>
      <p>{value.data.description}</p>
    </div>
    /* End col description*/
  );
}

export default Description;
