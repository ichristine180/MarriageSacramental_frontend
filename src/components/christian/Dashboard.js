import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getChristian } from "../../app/_thunk/globalThunk";
import { useNavigate } from "react-router-dom";
import { clearPartner } from "../../app/_slice/globalSlice";

const ChristianDashboard = () => {
  const profile = JSON.parse(localStorage.getItem("user"));
  const christian = useSelector((state) => state.global.christian);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getChristian({ accountId: profile.id }));
    dispatch(clearPartner());
  }, []);
  return (
    <div className="container">
      <div className="card mt-5">
        <div className="card-header">Marriage Sacramental application</div>
        {christian && (
          <div className="card-body">
            <h5 className="card-title">profile status {christian.status}</h5>
            {christian.status == "pending" && (
              <p class="card-text">
                Your profile is not validated yet,you will have option to apply
                once profile is validated.
              </p>
            )}
            {christian.status == "validated" && (
              <>
                <p>
                  Conglatulations!! your profile has been validated,now you can
                  apply for marriage sacramental on ndera parish not that your
                  fiance (partner) needs to be registered and validated as well
                </p>
                <button
                  className="btn-primary"
                  onClick={() => navigate("apply")}
                >
                  Apply
                </button>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ChristianDashboard;
