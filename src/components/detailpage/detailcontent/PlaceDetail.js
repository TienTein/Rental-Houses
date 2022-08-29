import "../../../assets/sass/detailpage/PlaceDetail.scss";
import React, { useContext } from "react";
import { DetailContext } from "../../DetailPage";

function PlaceDetail() {
  const value = useContext(DetailContext);
  return (
    <div className="col-12 place-detail">
      <h1>Chi tiết nơi ở</h1>
      <div className="detail">
        <div className="row">
          <div className="col-3">
            <p>Địa chỉ :</p>
          </div>
          <div className="col-9">
            <small>{value.data.address}</small>
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <p>Giá cả :</p>
          </div>
          <div className="col-9">
            <small>{value.data.price} / tháng</small>
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <p>Diện tích :</p>
          </div>
          <div className="col-9">
            <small>{value.data.area}</small>
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <p>Tiện nghi :</p>
          </div>
          <div className="col-9">
            <small>{value.data.detailsumary}</small>
          </div>
        </div>
      </div>
      {/* End detail*/}
    </div>
    /* End col place-detail*/
  );
}

export default PlaceDetail;
