import Header from "./global-components/Header";
import { useForm } from "react-hook-form";
import { db, storage } from "../firebase/config";
import { collection, addDoc, serverTimestamp } from "@firebase/firestore";
import { ref, uploadBytes, getDownloadURL, listAll } from "firebase/storage";
import { yupResolver } from "@hookform/resolvers/yup";
import { v4 } from "uuid";
import * as yup from "yup";
import "../assets/sass/AddListingForm.scss";
import { useEffect, useState } from "react";

function AddListingForm() {
  const colRef = collection(db, "HouseDetail");
  const [imageUpload, setImageUpload] = useState([]);
  const [imageUrls, setImageUrls] = useState([]);
  const [users, setUsers] = useState(JSON.parse(localStorage.getItem("user")));

  const schema = yup.object().shape({
    name: yup.string().required("Hãy nhập tiêu đề"),
    price: yup
      .number()
      .typeError("Hãy nhập giá tiền bằng chữ số")
      .when("currency", {
        is: (value) => value && value == "vnd",
        then: yup
          .number()
          .typeError("Hãy nhập giá tiền bằng chữ số")
          .max(100000000000, "Giá tiền phải ít hơn 1000 tỷ")
          .min(100000000, "Giá tiền ít nhất 100 triệu"),
        otherwise: yup
          .number()
          .typeError("Hãy nhập giá tiền bằng chữ số")
          .max(100000000000, "Giá tiền phải ít hơn 4500 triệu đô")
          .min(4500, "Giá tiền ít nhất 4500 đô"),
      }),
    area: yup.number().positive().typeError("Hãy nhập diện tích bằng chữ số"),
    address: yup.string().required("Hãy nhập địa chỉ"),
    description: yup.string().required("Hãy nhập mô tả").min(100).max(500),
    detailsumary: yup.string().required("hãy nhập tóm tắt").min(50).max(100),
  });

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    await addDoc(colRef, {
      userId: users.id,
      name: data.name,
      price: data.price + " " + data.currency,
      area: data.area + " " + data.lengthType,
      address: data.address,
      description: data.description,
      detailsumary: data.detailsumary,
      vote: 0,
      createAt: serverTimestamp(),
    })
      .then(() => {
        console.log("success");
      })
      .catch((error) => {
        console.log(error);
      });
    reset({
      name: "",
      price: "",
      area: "",
      address: "",
      description: "",
      detailsumary: "",
    });
    let idUp = 1;
    imageUpload.map((image) => {
      const imageRef = ref(storage, `images/${image + users.id + idUp++}`);
      uploadBytes(imageRef, image).then((snapshot) => {
        console.log("success");
      });
    });
  }; // end onsubmit

  const handlechange = (e) => {
    if (e == null) return;
    if (imageUpload.length < 5) {
      setImageUpload((prev) =>
        prev.find((c) => c.name === e.name) ? prev : [...prev, e]
      );
    }
  };

  console.log(imageUpload);
  return (
    <div className="Register">
      <Header />
      <div className="background-form">
        <div className="container addlisting-form">
          <h1>Nhập thông tin của sản phẩm</h1>

          <form onSubmit={handleSubmit(onSubmit)}>
            <ul>
              <li>
                <label>Tiêu đề cho sản phẩm</label>
                <input type="text" {...register("name")} />
              </li>
              {errors && <p>{errors.name?.message}</p>}
              <li>
                <label>Giá bán</label>
                <div className="has-select">
                  <input type="text" {...register("price")} />
                  <select {...register("currency")}>
                    <option defaultValue="vnd">vnd</option>
                    <option value="$">$</option>
                  </select>
                </div>
              </li>
              {errors && <p>{errors.price?.message}</p>}
              <li>
                <label>Diện tích</label>
                <div className="has-select">
                  <input type="text" {...register("area")} />
                  <select {...register("lengthType")}>
                    <option defaultValue="m2">m2</option>
                    <option value="hec">hec</option>
                  </select>
                </div>
              </li>
              {errors && <p>{errors.area?.message}</p>}
              <li>
                <label>Địa chỉ</label>
                <input type="text" {...register("address")} />
              </li>
              {errors && <p>{errors.address?.message}</p>}

              <li className="description-text">
                <label>Mô tả</label>
                <textarea type="text" {...register("description")}></textarea>
              </li>
              {errors && <p>{errors.description?.message}</p>}

              <li className="sumary-text">
                <label>Tóm tắt</label>
                <textarea type="text" {...register("detailsumary")}></textarea>
              </li>
              {errors && <p>{errors.detailsumary?.message}</p>}
            </ul>

            <div className="input-file-container">
              <input
                className="input-file"
                id="my-file"
                type="file"
                onChange={(e) => handlechange(e.target.files[0])}
              />
              <label
                tabIndex="0"
                htmlFor="my-file"
                className="input-file-trigger"
              >
                Upload Image...
              </label>
            </div>
            <p className="file-return"></p>

            <button type="submit" className="btn-submit">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Gửi
            </button>
          </form>
        </div>
        end container
      </div>
    </div>
    /* End fragment */
  );
}

export default AddListingForm;
