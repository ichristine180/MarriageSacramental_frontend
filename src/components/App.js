import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import publicRoutes from "../routes/publicRoutes";
import protectedRoutes from "../routes/protectedRoutes";
import Header from "./items/Header";
import Notification from "./reusables/Notification";
import protectedChristianRoutes from "../routes/protectedChristianRoutes";
function App() {
  const isLoading = useSelector((state) => state.global.isLoading);
  const token = localStorage.getItem("token");
  const isAuthenticated = useSelector((state) => state.global.isAuthenticated);
  return (
    <>
      <Header token={token} />
      {isLoading && (
        <div className="spinner-overlay">
          <div className="spinner-border" role="status"></div>
        </div>
      )}
      <Notification />
      <Routes>
        <>{isAuthenticated || token ? getProtected() : getPublic()}</>
      </Routes>
    </>
  );
}
const getProtected = () => {
  const user = localStorage.getItem("user");
  if (user && user.role > 0)
    return protectedRoutes.map((item, i) => (
      <Route path={item.path} element={item.element} key={i} />
    ));
  else
    return protectedChristianRoutes.map((item, i) => (
      <Route path={item.path} element={item.element} key={i} />
    ));
};
const getPublic = () =>
  publicRoutes.map((item, i) => (
    <Route path={item.path} element={item.element} key={i} />
  ));

export default App;
