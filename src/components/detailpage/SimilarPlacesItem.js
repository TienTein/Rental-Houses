import { Link } from "react-router-dom";
import { storage } from "../../firebase/config";
import { ref, getDownloadURL, listAll } from "firebase/storage";
import { useEffect, useState } from "react";
function SimilarPlacesItem({ data }) {
  const imagesListRef = ref(storage, "images/");
  const [imageUrls, setImageUrls] = useState([]);

  useEffect(() => {
    listAll(imagesListRef).then((res) => {
      res.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageUrls((prev) =>
            prev.find((c) => c === url) ? prev : [...prev, url]
          );
        });
      });
    });
  }, []);

  const urlId = imageUrls.filter((url) => {
    return url.includes(data.userId);
  });

  return (
    <div className="col-4 place-item">
      <div className="image-box">
        <Link to={`/detail/${data.id}`}>
          <img src={urlId} alt="" />
        </Link>
      </div>
      <div className="item-content">
        <Link to={`/detail/${data.id}`}>
          <h1>{data.name}</h1>
        </Link>
        <p className="title">{data.price} / tháng</p>
        <small>{data.description}</small>
        <p>
          Diện tích: <span>{data.area}</span>
        </p>
        <div className="icon-group">
          <i className="fa-solid fa-up-right-and-down-left-from-center" />
          <i className="fa-regular fa-heart" />
          <i className="fa-solid fa-circle-plus" />
        </div>
      </div>
    </div>
    /* End place-item */
  );
}

export default SimilarPlacesItem;
