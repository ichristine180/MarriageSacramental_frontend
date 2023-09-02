import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getChristian, getUserApplication } from "../../app/_thunk/globalThunk";
import { useNavigate } from "react-router-dom";
import { clearPartner } from "../../app/_slice/globalSlice";

const ChristianDashboard = () => {
  const profile = JSON.parse(localStorage.getItem("user"));
  const christian = useSelector((state) => state.global.christian);
  const userApplication = useSelector((state) => state.global.userApplication);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getChristian({ accountId: profile.id }));
    dispatch(clearPartner());
  }, []);
  useEffect(() => {
    christian && dispatch(getUserApplication({ christianId: christian.id }));
  }, [christian]);
  return (
    <div className="container">
      <div className="card mt-5">
        <div className="card-header">Marriage Sacramental application</div>
        {christian && !userApplication && <Apply christian={christian} />}
        {userApplication && <Info userApplication={userApplication} />}
      </div>
    </div>
  );
};
const Apply = ({ christian }) => {
  const navigate = useNavigate();
  return (
    <div className="card-body">
      <h5 className="card-title">profile status {christian.status}</h5>
      {christian.status == "pending" && (
        <p class="card-text">
          Your profile is not validated yet,you will have option to apply once
          profile is validated.
        </p>
      )}
      {christian.status == "validated" && (
        <>
          <p>
            Conglatulations!! your profile has been validated,now you can apply
            for marriage sacramental on ndera parish not that your fiance
            (partner) needs to be registered and validated as well
          </p>
          <button className="btn-primary" onClick={() => navigate("apply")}>
            Apply
          </button>
        </>
      )}
    </div>
  );
};
const Info = ({ userApplication }) => {
  const date = new Date(
    userApplication.givenMariageDate || userApplication.requestMariageDate
  ).toLocaleString("en-GB");
  return (
    <div className="card-body">
      <h5 className="card-title">
        Application status {userApplication.status}
      </h5>
      {userApplication.status == "pending" && (
        <p class="card-text">
          Your application is still pending,please know that it is received and
          you will be notified when it is approved
        </p>
      )}
      {userApplication.status == "approved" && (
        <>
          <p>
            Conglatulations!! your application is approved Given marriage date
            is on <b>{date}</b>
          </p>
        </>
      )}
    </div>
  );
};

export default ChristianDashboard;
