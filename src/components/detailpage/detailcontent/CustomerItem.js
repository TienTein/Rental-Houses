import avatar1 from "../../../assets/image-custom/avatar1.png";

function CustomerItem({ cmt }) {
  let day = cmt?.createAt?.toDate();
  return (
    <div className="customer-item">
      <div className="context">
        <img src={avatar1} alt="" />
        <div className="content">
          <div className="info">
            <h1>{cmt?.name}</h1>
            {day && (
              <span>{`${day.getDate()} / ${
                day.getMonth() < 10 ? "0" + day.getMonth() : day.getMonth()
              } / ${day.getFullYear()}`}</span>
            )}
          </div>
          <p>{cmt.comment}</p>
        </div>
      </div>
      {/* end col context */}
    </div>
    /*  end customer-item */
  );
}

export default CustomerItem;
