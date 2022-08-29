import AddListingForm from "./components/AddListingForm";
import DetailPage from "./components/DetailPage";
import Main from "./components/Main";
import Shop from "./components/Shop";
import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";

import React from "react";
import { Routes, Route } from "react-router-dom";
import MapGoogle from "./components/global-components/MapGoogle";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/detail" element={<DetailPage />} />
      <Route path="/detail/:id" element={<DetailPage />} />
      <Route path="/addlisting" element={<AddListingForm />} />
      <Route path="/register" element={<RegisterForm />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/map" element={<MapGoogle />} />
    </Routes>
  );
}
export default App;
