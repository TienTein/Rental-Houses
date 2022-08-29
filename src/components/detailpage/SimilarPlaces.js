import SimilarPlacesItem from "./SimilarPlacesItem";
import React, { useContext } from "react";
import { DetailContext } from "../DetailPage";
import "../../assets/sass/detailpage/SimilarPlaces.scss";

function SimilarPlaces({ id }) {
  const value = useContext(DetailContext);
  const getindex = value.dbDatas.findIndex((data) => data.id == id);
  let newindex = getindex + 1;
  let newdata = [];
  for (let q = 1; q < 4; q++) {
    if (newindex == value.dbDatas.length) {
      newindex = 0;
    }
    newdata = [...newdata, value.dbDatas[newindex]];
    newindex++;
  }

  return (
    <div className="container similar-places">
      <h1>Nơi ở tương tự</h1>
      <div className="row">
        {newdata.map((data, idx) => (
          <SimilarPlacesItem data={data} key={idx} />
        ))}
      </div>
      {/* End row */}
    </div>
    /* End container */
  );
}

export default SimilarPlaces;
