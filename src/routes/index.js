import Dashboard from "../containers/AdminTemplate/DashBoard";
import Login from "../containers/AdminTemplate/Login";
import Home from "../containers/HomeTemplate/Home";

const routeHome = [
  {
    exact: true,
    path: "/",
    component: Home,
  },
];

const routeAdmin = [
  {
    exact: false,
    path: "/login",
    component: Login,
  },
  {
    exact: false,
    path: "/dashboard",
    component: Dashboard,
  },
];
export { routeHome, routeAdmin };
