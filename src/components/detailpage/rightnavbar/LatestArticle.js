import LatestArticleItem from "./LatestArticleItem";
import { Link } from "react-router-dom";
import datas from "../../../assets/database.json";
import React, { useContext } from "react";
import { DetailContext } from "../../DetailPage";
import "../../../assets/sass/detailpage/LatestArticle.scss";

function LatestArticle() {
  const value = useContext(DetailContext);
  let dataslice = value.dbDatas.slice(-5);

  return (
    <div className="latest-article">
      <h1>Bài viết mới nhất</h1>
      {dataslice.map((data, idx) => (
        <Link to={`/detail/${data.id}`} key={idx}>
          <LatestArticleItem data={data} />
        </Link>
      ))}
    </div> /* End fragment */
  );
}

export default LatestArticle;
