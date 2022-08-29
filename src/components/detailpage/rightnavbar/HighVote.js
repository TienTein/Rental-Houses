import HighVoteItem from "./HighVoteItem";
import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { DetailContext } from "../../DetailPage";
import "../../../assets/sass/detailpage/HighVote.scss";

function HighVote() {
  const value = useContext(DetailContext);
  const newdatas = [...value.dbDatas];
  newdatas.sort(function (a, b) {
    return b.vote - a.vote;
  });
  let slicedata = newdatas.slice(0, 5);

  return (
    <div className="highvote">
      <h1>Đánh giá cao</h1>
      {slicedata.map((data, idx) => (
        <Link to={`/detail/${data.id}`} key={idx}>
          <HighVoteItem data={data} />
        </Link>
      ))}
    </div> /* End fragment */
  );
}

export default HighVote;
