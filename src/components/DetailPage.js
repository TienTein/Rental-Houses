import Header from "./global-components/Header";
import DetailCarousel from "./detailpage/DetaiCarousel";
import DetailContent from "./detailpage/DetailContent";
import RightNavbar from "./detailpage/RightNavbar";
import SimilarPlaces from "./detailpage/SimilarPlaces";
import Discover from "./global-components/Discover";
import Footer from "./global-components/Footer";
import { useParams } from "react-router-dom";
import SimpleBreadcrumbs from "../components/global-components/SimpleBreadcrumbs";
import { createContext, useEffect, useState } from "react";
import { onSnapshot, collection } from "@firebase/firestore";
import Breadcrump from "./detailpage/BreadCrump";
import { db, storage } from "../firebase/config";
import { ref, getDownloadURL, listAll } from "firebase/storage";

export const DetailContext = createContext();

function DetailPage() {
  const colRef = collection(db, "HouseDetail");
  const [imageUrls, setImageUrls] = useState([]);

  const [dbDatas, setDBDatas] = useState([]);
  const { id } = useParams();
  const imagesListRef = ref(storage, "images/");

  const data = dbDatas.find((x) => x.id == id);

  const urlId = imageUrls.filter((url) => {
    return url.includes(data?.userId);
  });

  const value = { dbDatas, data, id, urlId };

  //getdata from fỉebase
  useEffect(() => {
    async function getData() {
      onSnapshot(colRef, (snapshot) => {
        let housedetail = [];
        snapshot.docs.forEach((doc) => {
          housedetail.push({
            id: doc.id,
            ...doc.data(),
          });
        });
        setDBDatas(housedetail);
      });
    }
    getData();
  }, []);

  //get images from storage
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

  return (
    <DetailContext.Provider value={value}>
      {data && (
        <div className="DetailPage">
          <Header id={id} />
          <SimpleBreadcrumbs title="Chi tiết nhà ở" />
          <DetailCarousel />

          <div className="container ">
            <div className="row">
              <DetailContent />
              <RightNavbar />
            </div>
            {/* End row */}
          </div>
          {/* End container*/}

          <SimilarPlaces id={id} />
          <Discover />
          <Footer />
        </div>
      )}
    </DetailContext.Provider>
  );
}

export default DetailPage;
