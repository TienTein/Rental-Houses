import a from "../../assets/image-custom/1.png";
import b from "../../assets/image-custom/2.png";
import c from "../../assets/image-custom/3.png";
import "../../assets/sass/section/Carousel.scss";
function Carousel() {
  return (
    <div className="Carousel">
      <div className="container-fluid container-carousel">
        <div
          id="carouselExampleInterval"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div
              className="carousel-item active carousel-main"
              data-bs-interval={100000}
            >
              <div className="row slide-item">
                <div className="col-6 content-around">
                  <div className="content">
                    <p className="carousel-title">Ngoc Hai Agency</p>
                    <h1 className="mainText">
                      Find Your <span style={{ color: "#ff5a3c" }}>Dream</span>{" "}
                      House
                    </h1>
                    <div className="summary">
                      Kênh thông tin tìm nhà ở số 1 VN <br />
                      Website đăng tin cho thuê phòng trọ, nhà nguyên căn, căn
                      hộ
                      <br />
                      Chuyên trang bất động sản số 1 VN
                    </div>
                    <div className="control">
                      <button>See more</button>
                      <i className="fa-solid fa-play" />
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <img src={a} className="d-block w-100" alt="carousel1.jpg" />
                </div>
              </div>
            </div>
            {/* End carouselItem */}
            <div className="carousel-item">
              <div className="row slide-item">
                <div className="col-6 content-around">
                  <div className="content">
                    <p className="carousel-title">Ngoc Hai angular</p>
                    <h1 className="mainText">
                      Find Your <span style={{ color: "#ff5a3c" }}>Dream</span>{" "}
                      House
                    </h1>
                    <div className="summary">
                      Kênh thông tin tìm nhà ở số 1 VN <br />
                      Website đăng tin cho thuê phòng trọ, nhà nguyên căn, căn
                      hộ
                      <br />
                      Chuyên trang bất động sản số 1 VN
                    </div>
                    <div className="control">
                      <button>See more</button>
                      <i className="fa-solid fa-play" />
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <img src={b} className="d-block w-100" alt="carousel2.jpg" />
                </div>
              </div>
            </div>
            {/* End carouselItem */}
            <div className="carousel-item">
              <div className="row slide-item">
                <div className="col-6 content-around">
                  <div className="content">
                    <p className="carousel-title">Ngoc Hai angular</p>
                    <h1 className="mainText">
                      Find Your <span style={{ color: "#ff5a3c" }}>Dream</span>{" "}
                      House
                    </h1>
                    <div className="summary">
                      Kênh thông tin tìm nhà ở số 1 VN <br />
                      Website đăng tin cho thuê phòng trọ, nhà nguyên căn, căn
                      hộ
                      <br />
                      Chuyên trang bất động sản số 1 VN
                    </div>
                    <div className="control">
                      <button>See more</button>
                      <i className="fa-solid fa-play" />
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <img src={c} className="d-block w-100" alt="carousel3.jpg" />
                </div>
              </div>
            </div>
            {/* End carouselItem */}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        {/* End carousel */}
      </div>
      {/* End container */}
    </div>
    /* End fragment */
  );
}
export default Carousel;
