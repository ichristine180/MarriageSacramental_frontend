import React, { useEffect } from "react";
import Content from "../items/Content";

import { useDispatch } from "react-redux";
import { clear } from "../../app/_slice/globalSlice";

function LandingPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    localStorage.clear();
  }, [dispatch]);
  return (
    <div>
      <Content />
    </div>
  );
}

export default LandingPage;
