import "../../assets/sass/detailpage/BreadCrump.scss";

function BreadCrump() {
  return (
    <div className="background-breadcrump">
      <div className="container breadcrump">
        <h1>Thông tin chi tiết</h1>
        <div className="breadcrump-item">
          <i className="fa-solid fa-house-chimney" />
          <small>Trang chủ</small>
          <i className="fa-solid fa-greater-than pointer" />
          <small className="active">Thông tin chi tiết</small>
        </div>
      </div>
      {/* End container */}
    </div>
    /* End background-breadcump */
  );
}

export default BreadCrump;
