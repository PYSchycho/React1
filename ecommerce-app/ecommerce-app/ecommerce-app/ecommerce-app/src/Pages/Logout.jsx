import React,{useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
const Logout = () => {
    const navigate = useNavigate();
    useEffect(() => {
        setTimeout(()=>{
            navigate("/login");
            localStorage.removeItem('accessToken')
        },2000)
      }, [navigate]);
  return (
    <div>
       Logout
    </div>
  );
}
export default Logout;