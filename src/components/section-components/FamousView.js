
import author from "../../assets/image-custom/author.png";
import "../../assets/sass/section/FamousView.scss";
import data from "../../assets/database.json";

function FamousView() {
  const randomData = data
  // Shuffle array
  const shuffled = randomData.sort(() => 0.5 - Math.random());
  


  let featured = shuffled.slice(0, 3);
  return (
    <div className="FamousView">
      <div className="container-fluid famous-view">
        <h1>Địa điểm nổi bật</h1>
        <div className="row content">
          {featured.map((house) => {
            return (
              <div className="col-4 content-item" key={house.id}>
                <div className="image">
                  <img src={house.image} alt="" />
                </div>
                <div className="house-info">
                  <p className="price">{house.price}</p>
                  <p>{house.name}</p>
                  <small>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quos maxime ab vitae aperiam aspernatur doloremque, eveniet
                    modi. Optio, a eos.
                  </small>
                  <small className="meter">{house.area}</small>
                </div>
                <div className="publisher-info">
                  <div className="paragraph">
                    <img src={author} alt="" />
                    <div className="paragraph-content">
                      <small>Đăng bởi</small>
                      <p>Huỳnh Nguyễn Ngọc Hải</p>
                    </div>
                  </div>
                  <div className="icon-group">
                    <i className="fa-solid fa-up-right-and-down-left-from-center" />
                    <i className="fa-regular fa-heart" />
                    <i className="fa-solid fa-circle-plus" />
                  </div>
                </div>
              </div>
            );
          })}
          
          {/* End content-item */}
        </div>
        {/* End row */}
      </div>
      {/* End container */}
    </div>
    /* End fragment */
  );
}
export default FamousView;
