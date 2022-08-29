import avatar2 from "../../../assets/image-custom/avatar2.png";
import "../../../assets/sass/detailpage/SellerProfile.scss";

function SellerProfile() {
  return (
    <div className="seller-profile">
      <img src={avatar2} alt="" />
      <h1>Trần Xuân Tiến</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis
        distinctio, odio, eligendi suscipit reprehenderit atque.
      </p>
      <div className="icon-group">
        <i className="fa-brands fa-facebook-f"></i>
        <i className="fa-brands fa-twitter"></i>
        <i className="fa-brands fa-linkedin"></i>
        <i className="fa-brands fa-youtube"></i>
      </div>
      <button className="btn btn-danger">Nhấn để nhập số điện thoại</button>
    </div> /* End fragment */
  );
}

export default SellerProfile;
