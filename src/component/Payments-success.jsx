import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
const PaymentsSuccess = () => {
  const navigate = useNavigate();
  useEffect(() =>{
    setTimeout(() =>{
      navigate('/');
      localStorage.removeItem('cart')
    }, 5000)
  }, [navigate])
  return (
    <div>
      <img className='h-screen w-screen items-center' src='https://education.uoc.ac.in/images/ezgif.com-crop.gif' alt='Loading..' /> 
    </div>
  );
}
export default PaymentsSuccess;