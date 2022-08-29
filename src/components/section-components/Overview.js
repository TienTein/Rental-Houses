import "../../assets/sass/section/Overview.scss";
import a from "../../assets/image-custom/1.png";
import b from "../../assets/image-custom/2.png";
import c from "../../assets/image-custom/3.png";
function Overview() {
  return (
    <div className="Overview">
      <div className="container overview">
        <div className="row">
          <div className="col-5 view-image">
            <div className="image">
              <img src={c} alt="top" />
            </div>
            <div className="image active">
              <img src={b} alt="bottom" />
            </div>
          </div>
          <div className="col-7 view-context">
            <small>About us</small>
            <h2 className="title">Không gian sống đáng mơ ước dành cho bạn</h2>
            <p>
              Hơn 10,000 chỗ ở đã kết nối với chúng tôi từ hơn 60 tỉnh thành
              trên khắp đất nước. <br />
              Chúng tôi ngày càng hoàn thiện dịch vụ môi giới, truyền thông, đầu
              tư và quản lý bất động sản.
            </p>
            <div className="blog">
              <i className="fa-solid fa-house" />
              <div className="blog-info">
                <h3>Tầm nhìn</h3>
                <p>Ngoc Hai - Hệ sinh thái bất động sản số 1 Việt Nam</p>
              </div>
            </div>
            <div className="blog">
              <i className="fa-solid fa-house" />
              <div className="blog-info">
                <h3>Tầm nhìn</h3>
                <p>Tiên phong trong lĩnh vực chuyển đổi số bất động sản</p>
              </div>
            </div>
            <div className="blog">
              <i className="fa-solid fa-house" />
              <div className="blog-info">
                <h3>Tầm nhìn</h3>
                <p>Tài sản thực - Giá trị thực</p>
              </div>
            </div>
          </div>
        </div>
        {/* End row   */}
      </div>
      {/* End container   */}
    </div>
    /* End fragment */
  );
}
export default Overview;
