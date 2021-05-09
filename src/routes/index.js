import Dashboard from "../containers/AdminTemplate/DashBoard";
import Login from "../containers/AdminTemplate/Login";
import Home from "../containers/HomeTemplate/Home";
import Register from "../containers/HomeTemplate/Register";

const routeHome = [
  {
    exact: true,
    path: "/",
    component: Home,
  },
  {
    exact: false,
    path: "/register",
    component: Register,
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
