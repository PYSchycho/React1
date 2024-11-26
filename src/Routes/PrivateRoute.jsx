import { Navigate } from 'react-router-dom';
const PrivateRoute = ({ Component }) => {
  const accessToken = localStorage.getItem('accessToken')
  return accessToken ? <Component /> : <Navigate to="/login" />;
};
export default PrivateRoute;
