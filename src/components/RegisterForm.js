import { useEffect, useState } from "react";
import Header from "./global-components/Header";
import Footer from "./global-components/Footer";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { db } from "../firebase/config";
import {
  collection,
  addDoc,
  serverTimestamp,
  onSnapshot,
} from "@firebase/firestore";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "../assets/sass/RegisterForm.scss";

function RegisterForm() {
  const colRef = collection(db, "Users");
  const [users, setUsers] = useState();
  const [checkLogin, setCheckLogin] = useState(true);
  const [checkPassword, setCheckPassword] = useState(false);

  const phoneRegExr = /(84|0[3|5|7|8|9])+([0-9]{8})\b/;
  const usernameRegExr = /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/;
  const passwordRegExr = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
  const schema = yup
    .object({
      username: yup
        .string()
        .required("Hãy nhập tên tài khoản.")
        .matches(usernameRegExr, "Tên tài khoản không hợp lệ")
        .max(20, "Tên tài khoản không được quá 20 chữ"),
      lastname: yup
        .string()
        .required("Hãy nhập họ tên đệm.")
        .min(2, "Họ đệm không hợp lệ")
        .max(15, "Họ đệm không hợp lệ"),
      name: yup
        .string()
        .required("Hãy nhập tên.")
        .min(2, "Tên không hợp lệ")
        .max(7, "Tên không hợp lệ"),
      phonenumber: yup
        .string()
        .required("Hãy nhập số điện thoại.")
        .matches(phoneRegExr, "Số điện thoại không hợp lệ")
        .min(10, "Số điện thoại không hợp lệ")
        .max(10, "Số điện thoại không hợp lệ"),
      password: yup
        .string()
        .required("Hãy nhập mật khẩu.")
        .matches(passwordRegExr, "Mật khẩu không hợp lệ")
        .min(8, "Mật khẩu không được ngắn hơn 8 chữ")
        .max(15, "Mật khẩu không được dài hơn 15 chữ"),
    })
    .required();

  // input requied
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  //form wave
  useEffect(() => {
    const labels = document.querySelectorAll(".eventonlabel label");
    labels.forEach((label) => {
      label.innerHTML = label.innerText
        .split(/(\s+)/)
        .map(
          (letter, idx) =>
            `<span style="transition-delay: ${idx * 50}ms">${letter}</span>`
        )
        .join("");
    });
  }, []);

  // get data from firebase
  useEffect(() => {
    async function getData() {
      onSnapshot(colRef, (snapshot) => {
        let usersinfo = [];
        snapshot.docs.forEach((doc) => {
          usersinfo.push({
            id: doc.id,
            ...doc.data(),
          });
        });
        setUsers(usersinfo);
      });
    }
    getData();
  }, []);

  const onSubmit = async (data) => {
    //push data to firebase
    let i = 0;
    for (let user of users) {
      i++;
      if (data.username == user.username) {
        setCheckLogin(false);
        break;
      } else if (i == users.length) {
        setCheckLogin(true);
        await addDoc(colRef, {
          username: data.username,
          lastname: data.lastname,
          name: data.name,
          phonenumber: data.phonenumber,
          password: data.password,
          createAt: serverTimestamp(),
        })
          .then(() => {
            console.log("success");
          })
          .catch((error) => {
            console.log(error);
          });

        reset({
          username: "",
          lastname: "",
          name: "",
          phonenumber: "",
          password: "",
        });
      }
    }
  }; // end onSubmit

  const handleCheck = (e) => {
    setCheckPassword(e.target.checked);
  };
  return (
    <div className="Register">
      <Header />

      <div className="background-form">
        <div className="register-form">
          <h1>Đăng ký</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="eventonlabel">
              <input type="text" required {...register("username")} />
              <label>Tên tài khoản</label>
            </div>
            {errors && <p className="errors">{errors?.username?.message}</p>}
            <div className="fullname">
              <div className="fullnam-item">
                <div className="eventonlabel">
                  <input type="text" required {...register("lastname")} />
                  <label>Họ đệm</label>
                </div>
                {errors && (
                  <p className="errors">{errors?.lastname?.message}</p>
                )}
              </div>
              <div className="fullnam-item">
                <div className="eventonlabel">
                  <input type="text" required {...register("name")} />
                  <label>Tên</label>
                </div>
                {errors && <p className="errors">{errors?.name?.message}</p>}
              </div>
            </div>
            <div className="eventonlabel">
              <input type="text" required {...register("phonenumber")} />
              <label>Số điện thoại</label>
            </div>
            {errors && <p className="errors">{errors?.phonenumber?.message}</p>}
            <div className="eventonlabel">
              <input
                type={`${checkPassword == false ? "password" : "text"}`}
                required
                {...register("password")}
              />
              <label>Mật khẩu</label>
            </div>
            {errors && <p className="errors">{errors?.password?.message}</p>}
            <div className="show-password">
              <input type="checkbox" id="show" onClick={handleCheck} />
              <label htmlFor="show">Hiện mật khẩu</label>
            </div>
            <button className="register-btn" type="submit">
              Đăng ký
            </button>
            {checkLogin == false ? (
              <p className="errors">Tài khoản đã tồn tại</p>
            ) : null}
            <div className="login-link">
              <span>Đã có tài khoản?</span>
              <Link to="/login">Đăng nhập ngay</Link>
            </div>
          </form>
        </div>
        {/* end container */}
      </div>
      <Footer />
    </div>
    /* End fragment */
  );
}

export default RegisterForm;
