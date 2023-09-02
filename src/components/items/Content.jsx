import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import imgGirl from "../../assets/images/home.jpg";

function Content() {
  const { t } = useTranslation();
  return (
    <div className="content-container">
      <div className="lading-page-left item">
        <p className="big-text-content">{t("Slogan")}</p>
        <p className="small-text-content">{t("Introduction")}</p>
        <div className="mt-5">
          <Link to="register" className="btn btn-primary pull-left">
            {t("Register")}
          </Link>
          <Link to="login" className="btn btn-primary pull-right">
            {t("Login")}
          </Link>
        </div>
      </div>
      <div className="lading-page-right item">
        <img src={imgGirl} alt="" />
      </div>
    </div>
  );
}

export default Content;
