import Dashboard from "../containers/AdminTemplate/DashBoard"
import Login from "../containers/AdminTemplate/Login"

const routeHome = {

}
const routeAdmin = [
    {
        exact: false,
        path: '/login',
        component: Login
    },
    {
        exact: false,
        path: '/dashboard',
        component: Dashboard
    }
]
export { routeHome, routeAdmin }