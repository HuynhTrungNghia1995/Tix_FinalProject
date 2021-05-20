import Home from "../containers/HomeTemplate/Home";
import Dashboard from "../containers/AdminTemplate/DashBoard";
import Login from "../containers/HomeTemplate/Login";
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
  {
    exact: false,
    path: "/login",
    component: Login,
  },
];

const routeAdmin = [
  {
    exact: false,
    path: "/dashboard",
    component: Dashboard,
  },
];
export { routeHome, routeAdmin };
