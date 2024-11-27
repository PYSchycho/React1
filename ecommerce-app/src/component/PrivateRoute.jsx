import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
const PrivateRoute = ({ Component }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    const token =localStorage.getItem('token');
    if (token) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
  },[]);
  return isAuthenticated ? <Component /> : <Navigate to="/login" />;
};
export default PrivateRoute;