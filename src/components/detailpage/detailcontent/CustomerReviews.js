import CustomerItem from "./CustomerItem";
import { useState, useContext, useEffect } from "react";
import { DetailContext } from "../../DetailPage";
import { useForm } from "react-hook-form";
import { db } from "../../../firebase/config";
import {
  collection,
  addDoc,
  serverTimestamp,
  onSnapshot,
} from "@firebase/firestore";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "../../../assets/sass/detailpage/CustomerReviews.scss";

function CustomerReviews() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  //connect to comment database
  const colRef = collection(db, "Comments");
  const value = useContext(DetailContext);
  const [commentinfo, setCommentInfo] = useState([]);
  const schema = yup
    .object({
      comment: yup
        .string()
        .required("Hãy nhập bình luận.")
        .max(100, "Bình luận không được quá 100 từ"),
      name: yup
        .string()
        .required("Hãy nhập bình luận.")
        .max(20, "Tên không được quá 20 từ"),
    })
    .required();
  const {
    handleSubmit,
    register,
    reset,
    setFocus,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    //push data to firebase
    await addDoc(colRef, {
      detailid: value.id,
      comment: data.comment,
      name: data.name,
      createAt: serverTimestamp(),
    })
      .then(() => {
        console.log("success");
      })
      .catch((error) => {
        console.log(error);
      });

    setFocus("comment");
    if (data.check) {
      reset({ comment: "" });
    } else {
      reset({ comment: "", name: "" });
    }
  }; // end onSubmit
  // get data from firebase
  useEffect(() => {
    async function getData() {
      onSnapshot(colRef, (snapshot) => {
        let comments = [];
        snapshot.docs.forEach((doc) => {
          comments.push({
            id: doc.id,
            ...doc.data(),
          });
        });
        setCommentInfo(comments);
      });
    }
    getData();
  }, []);
  // filter by detailid and sort data by date
  const newcomments = commentinfo.filter((cmt) => cmt.detailid === value.id);
  if (newcomments) {
    newcomments.sort((a, b) => b?.createAt - a?.createAt);
  }

  return (
    <div className="col-12 customer-reviews">
      <h1>Đánh giá khách hàng</h1>
      {newcomments &&
        newcomments.map((cmt) => <CustomerItem cmt={cmt} key={cmt.id} />)}

      <form className="post-reviews" onSubmit={handleSubmit(onSubmit)}>
        <h1>Nhận xét nơi ở</h1>
        <div className="form-text">
          {/* comment text */}
          <textarea
            className="text-reviews"
            type="text"
            {...register("comment")}
            placeholder="Nhập bình luận.."
          ></textarea>
          {errors && <p className="errors">{errors?.comment?.message}</p>}
          {/* name input */}
          <input
            type="text"
            value={user?.name}
            {...register("name")}
            placeholder="Nhập tên.."
          />
          {errors && <p className="errors">{errors?.name?.message}</p>}
        </div>
        {/* end form-text */}
        {user == null && (
          <div className="form-check">
            <input
              type="checkbox"
              id="keep-name"
              {...register("check")}
              className="form-check-input"
            />
            <label htmlFor="keep-name" className="form-check-label">
              Lưu tên cho lần comment tiếp theo
            </label>
          </div>
        )}

        <button type="submit" className="btn btn-danger">
          Gửi
        </button>
      </form>
      {/* End form post-reviews*/}
    </div>
    /* End col customer-reviews*/
  );
}

export default CustomerReviews;
