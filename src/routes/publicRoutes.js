import { Navigate } from "react-router-dom";
import LandingPage from "../components/pages/LandingPage";
import Login from "../components/Login";
import FAQsPage from "../components/pages/FAQs";
import Register from "../components/christian/Register";

const publicRoutes = [
  { path: "/", element: <LandingPage /> },
  { path: "FAQs", element: <FAQsPage /> },
  { path: "login", element: <Login /> },
  { path: "register", element: <Register /> },
  { path: "*", element: <Navigate to="/" replace /> },
];
export default publicRoutes;
