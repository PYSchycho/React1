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
    <div className='flex h-screen w-screen items-center justify-center'>
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQD3B--R72OtRN_V_MvGvz68MNCDIqzxzkSg&s' alt='loading..'/>
    </div>
  );
}
export default Logout;