import "../../assets/sass/section/Services.scss"
function Services() {
  return (
    <div className="Services">
      <div className="container-fluid services">
        <div className="row">
          <div className="col-12 title">
            <span>Dịch vụ</span>
            <h1>Chúng tôi tập trung vào</h1>
          </div>
        </div>
        {/* End row */}
        <div className="row service-info">
          <div className="col-3">
            <i className="fa-solid fa-house" />
            <div className="info">
              <h3>Thuê nhà</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                suscipit cupiditate necessitatibus? Eveniet blanditiis earum
                unde odit tempore exercitationem quis.
              </p>
            </div>
          </div>
          <div className="col-3">
            <i className="fa-solid fa-house" />
            <div className="info">
              <h3>Đăng tin thuê nhà</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                suscipit cupiditate necessitatibus? Eveniet blanditiis earum
                unde odit tempore exercitationem quis.
              </p>
            </div>
          </div>
          <div className="col-3">
            <i className="fa-solid fa-house" />
            <div className="info">
              <h3>Tầm nhìn</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                suscipit cupiditate necessitatibus? Eveniet blanditiis earum
                unde odit tempore exercitationem quis.
              </p>
            </div>
          </div>
        </div>
        {/* End row */}
      </div>
      {/* End container */}
    </div>
    /* End fragment */
  );
}
export default Services;
