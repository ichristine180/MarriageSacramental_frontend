import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18n from "../../translations/i18n";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListAlt } from "@fortawesome/free-solid-svg-icons";
import { logout } from "../../app/_slice/globalSlice";
import { useDispatch } from "react-redux";

function Header({ token }) {
  const handleLanguageChange = (event) => {
    i18n.changeLanguage(event.target.value);
  };
  const role = localStorage.getItem("role");
  return (
    <>
      <DeskTopHeader
        handleLanguageChange={handleLanguageChange}
        role={role}
        token={token}
      />
      <MobileHeader
        handleLanguageChange={handleLanguageChange}
        role={role}
        token={token}
      />
    </>
  );
}
const DeskTopHeader = ({ handleLanguageChange, token }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <div className="headercontainter">
      <div className="logocontainer cursor" onClick={() => navigate("/")}>
        <h1>Marriage sacrament</h1>
      </div>
      <ul className="menu-list-header">
        {!token && (
          <li>
            <Link to="/FAQs" className="header-link">
              {t("FAQ")}
            </Link>
          </li>
        )}
        {token && (
          <>
            {user && (
              <li>
                <Link to="profile" className="header-link">
                  {user.firstName + " " + user.lastName}
                </Link>
              </li>
            )}
            <li>
              <Link
                to="#"
                className="header-link"
                onClick={() => {
                  dispatch(logout());
                  window.location.reload();
                }}
              >
                {t("Logout")}
              </Link>
            </li>
          </>
        )}
        {/* <li className="mentu-item-header">
          <select className="header-language" onChange={handleLanguageChange}>
            <option value="rw">Kinywarwanda</option>
            <option value="en">English</option>
          </select>
        </li> */}
      </ul>
    </div>
  );
};
const MobileHeader = ({ handleLanguageChange }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const closeHeader = () =>
    (document.getElementById("child").style.display = "none");
  return (
    <div className="mobile-header">
      <div>
        <p>
          <FontAwesomeIcon
            icon={faListAlt}
            onClick={() =>
              (document.getElementById("child").style.display =
                document.getElementById("child").style.display == "none"
                  ? "block"
                  : "none")
            }
          />
          <Link to="/" className="header-link pull-right header-title">
            Hire hub
          </Link>
        </p>
        <div className="child" id="child">
          <div
            className="logocontainer cursor"
            onClick={() => {
              navigate("/");
              closeHeader();
            }}
          >
            <img alt="logo" className="hirehub-logo" src="/logo.png" />
          </div>
          <h3 onClick={() => closeHeader()}>
            <Link to="/FAQs" className="header-link">
              {t("FAQ")}
            </Link>
          </h3>
          {/* <h3 onClick={() => closeHeader()}>
            <Link to="/login" className="header-link">
              {t("Login")}
            </Link>
          </h3> */}
          <h3>
            <select
              className="header-language"
              onChange={(e) => {
                handleLanguageChange(e);
                closeHeader();
              }}
            >
              <option value="rw">Kinywarwanda</option>
              <option value="en">English</option>
            </select>
          </h3>
        </div>
      </div>
    </div>
  );
};
export default Header;
