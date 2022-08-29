import { storage } from "../../../firebase/config";
import { ref, getDownloadURL, listAll } from "firebase/storage";
import { useEffect, useState } from "react";
function LatestArticleItem({ data }) {
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
    <div className="latest-article-item">
      <div className="article-item">
        <div className="image-box">
          <img src={urlId} alt="" />
        </div>
        <div className="item-content">
          <p>{data.name}</p>
          <small>{data.price} / tháng</small>
        </div>
      </div>
    </div> /* End fragment */
  );
}

export default LatestArticleItem;
