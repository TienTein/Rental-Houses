import "../../../assets/sass/detailpage/DateComment.scss";

function DateComment() {
  return (
    <div className="col-12 date-comment">
      <div className="date">
        <i className="fa-solid fa-calendar-days" />
        <p>July 7, 2022</p>
      </div>
      <div className="comment">
        <i className="fa-solid fa-comments" />
        <p>35 Bình luận</p>
      </div>
    </div>
    /* End col date-comment*/
  );
}

export default DateComment;
