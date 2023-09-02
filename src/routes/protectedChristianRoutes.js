import Apply from "../components/christian/Apply";
import ChristianDashboard from "../components/christian/Dashboard";

const protectedChristianRoutes = [
  { path: "/", element: <ChristianDashboard /> },
  { path: "/apply", element: <Apply /> },
];
export default protectedChristianRoutes;
