import AdminLogin from "components/admin_authentication/SignIn";
import MainDashboard from "components/Dashboard/MainDashboard";
import ViewNominations from "components/Admin/ViewNominations.js";
var admin_routes = [
  {
    path: "/admin/login",
    name: "Admin Login",
    icon: "ni ni-single-02 text-yellow",
    component: AdminLogin,
    layout: "/auth",
   },
  {
    path: "/admin/dashboard",
    name: "Admin Dashboard",
    icon: "ni ni-single-02 text-yellow",
    component: MainDashboard,
    layout: "/ouradmin",
  },
  {
    path: "/admin/view-nominations",
    name: "View Nominations",
    icon: "ni ni-single-02 text-yellow",
    component: ViewNominations,
    layout: "/ouradmin",
  },
];
export default admin_routes;