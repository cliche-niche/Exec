import React from "react";
import { useLocation, Route, Switch, Redirect } from "react-router-dom";
// core components
import AdminDashboardNavbar from "components/Navbars/AdminDashboardNavbar.js";
import AdminDashboardSidebar from "components/Sidebar/AdminDashboardSidebar.js";
import admin_routes from "admin_routes.js";
function AdminDashboard (props){
  const mainContent = React.useRef(null);
  const location = useLocation();

  React.useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    mainContent.current.scrollTop = 0;
  }, [location]);

  const getRoutes = (admin_routes) => {
    return admin_routes.map((prop, key) => {
      if (prop.layout === "/ouradmin") {
        return (
          <Route
            exact path={prop.path}
            component={prop.component}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };

  return (
    <>
      <AdminDashboardSidebar/>
      <div className="main-content" ref={mainContent}>
        <AdminDashboardNavbar/>
        <Switch>
          {getRoutes(admin_routes)}
          <Redirect from="*" to="/pagenotfound" />
        </Switch>
      </div>
    </>
  );
}

export default AdminDashboard;