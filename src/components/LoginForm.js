import FacebookLg from "./login/FacebookLg";
import GoogleLg from "./login/GoogleLg";

import { useEffect, useState } from "react";
import { gapi } from "gapi-script";
import Header from "./global-components/Header";
import Footer from "./global-components/Footer";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { db } from "../firebase/config";
import {
  collection,
  onSnapshot,
  addDoc,
  serverTimestamp,
} from "@firebase/firestore";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "../assets/sass/LoginForm.scss";

const clientId =
  "586486200042-6tmpknkbn0gtjthu6l6hgvp14rhg7a63.apps.googleusercontent.com";

function LoginForm() {
  const [checkPassword, setCheckPassword] = useState(false);
  const [anotherLogin, setAnotherLogin] = useState();
  const [checkAlert, setCheckAlert] = useState(false);

  const colRef = collection(db, "Users");
  const schema = yup
    .object({
      username: yup.string().required("Hãy nhập tên tài khoản."),
      password: yup.string().required("Hãy nhập mật khẩu."),
    })
    .required();

  const [users, setUsers] = useState([]);
  const [checkLogin, setCheckLogin] = useState();
  let navigate = useNavigate();

  // input requied
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  // get data from firebase
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

    const start = async () => {
      await gapi.client
        .intit({
          clientId: clientId,
          scope: "",
        })
        .then(function () {});
    };

    gapi.load("client:auth2", start);
  }, []);

  const onSubmit = (data) => {
    users &&
      users.map((user) => {
        if (user.username == data.username && user.password == data.password) {
          localStorage.setItem("user", JSON.stringify(user));
          setCheckLogin(true);
          navigate("/");
        } else {
          setCheckLogin(false);
        }
      });
  }; // end onSubmit

  const handleCheck = (e) => {
    setCheckPassword(e.target.checked);
  };

  const getRes = (e) => {
    setAnotherLogin(e);
  };

  useEffect(() => {
    let i = 0;
    let check = false;
    anotherLogin &&
      users.map((user, idx) => {
        i++;
        console.log("i: " + i, user, idx);
        if (
          user.username == anotherLogin.res.email &&
          anotherLogin.type == user.type
        ) {
          check = true;
          localStorage.setItem("user", JSON.stringify(anotherLogin.res));
          setCheckLogin(true);
          navigate("/");
        } else if (
          user.username == anotherLogin.res.email &&
          anotherLogin.type != user.type
        ) {
          check = true;
          setCheckAlert(true);
        } else if (i == users.length && check == false) {
          addDoc(colRef, {
            username: anotherLogin.res.email,
            name: anotherLogin.res.name,
            type: anotherLogin.type,
            createAt: serverTimestamp(),
          })
            .then(() => {
              console.log("success");
            })
            .catch((error) => {
              console.log(error);
            });
          localStorage.setItem("user", JSON.stringify(anotherLogin.res));
          setCheckLogin(true);
          navigate("/");
        }
      });
  }, [anotherLogin]);

  const closeAlert = () => {
    setCheckAlert(false);
  };

  console.log(anotherLogin);
  return (
    <div className="Login">
      {checkAlert == true && <div className="alert-background"></div>}
      <div className={checkAlert == true ? "alert-box active" : "alert-box"}>
        <p>
          Email của bạn đã được liên kết với tài khoản facebook đã đăng ký trước
          đây. Vui lòng sử dụng tài khoản facebook hoặc sử dụng email khác
        </p>
        <button onClick={closeAlert} className="close-btn">
          Close
        </button>
      </div>

      <Header />
      <div className="background-form">
        <div className="login-form">
          <h1>Đăng nhập</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="eventonlabel">
              <input type="text" required {...register("username")} />
              <label>Tên tài khoản</label>
            </div>
            {errors && <p className="errors">{errors?.username?.message}</p>}

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
            <button className="login-btn" type="submit">
              Đăng nhập
            </button>
            <div className="another-login">
              <FacebookLg getRes={getRes} />
              <GoogleLg getRes={getRes} />
            </div>
            {checkLogin == false ? (
              <p className="errors">Tài khoản hoặc mật khẩu không đúng</p>
            ) : null}

            <div className="register-link">
              <span>Chưa có tài khoản?</span>
              <Link to="/register">Đăng ký ngay</Link>
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

export default LoginForm;
