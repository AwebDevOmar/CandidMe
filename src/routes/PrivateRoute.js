import { Outlet,Navigate,useLocation } from "react-router-dom"

export default function PrivateRoute(){
    const token = localStorage.getItem("access_token");
    const location = useLocation();
    
    if (!token) {
        sessionStorage.setItem("previousLocation", location.pathname);
        return <Navigate to="/login" />;
      }
    
      return <Outlet />;
}