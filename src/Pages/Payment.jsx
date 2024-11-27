import React from 'react';
import Navbar from '../component/Navbar';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard} from '@fortawesome/free-solid-svg-icons';
import { faPaypal } from '@fortawesome/free-brands-svg-icons/faPaypal';
import { faGooglePay } from '@fortawesome/free-brands-svg-icons';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
const Payment = () => {
  const initialValues ={
    paymentMethod:''
  };
  const navigate = useNavigate()
  const onSubmit=() =>{
    navigate("/payments-success");
    localStorage.removeItem('cart')
  }
  const validationSchema = yup.object({
    paymentMethod: yup.string().required('Choose any one Method of Payment')
  })
  return (
    <div>
      <Navbar/>
      <div className='max-w-lg mx-auto my-4 p-6 bg-blue-300 rounded-lg shadow-md'>
        <h2 className='font-bold text-center font-serif mb-6 bg-blue-300 text-white p-3 text-2xl'>PAYMENT PAGE</h2>
        <Formik
        initialValues={initialValues} 
        validationSchema={validationSchema}
        onSubmit={onSubmit}>
          <Form className='space-y-4'>
            <div>
              <label className='block text-lg font-bold text-gray-900 font-serif text-center'>Choose Payment Option</label>
              <div className='mt-2 space-y-2 w-60 border-2 border-black bg-blue-200 items-center '>
                <label className='flex items-center text-center p-2'>
                  <Field  type='radio' name="paymentMethod" value="creditcard" className='mr-2'/>
                  <FontAwesomeIcon icon={faCreditCard}  className='bg-yellow-300 border-2 border-black text-black'/>
                    Credit Card
                </label>
                <label className='flex items-center text-center p-2'>
                  <Field  type='radio' name="paymentMethod" value="PayPal" className='mr-2'/>
                  <FontAwesomeIcon icon={faPaypal}  className='border-2 border-black text-black bg-violet-600'/>
                    PayPal
                </label>
                <label className='flex items-center text-center p-2'>
                  <Field  type='radio' name="paymentMethod" value="Googlepay" className='mr-2'/>
                  <FontAwesomeIcon icon={faGooglePay}  className='border-2 border-black text-black bg-green-600'/>
                    Googlepay
                </label>
              </div>
              <ErrorMessage name="paymentMethod" component="div" className='text-red-500 text-sm' />
            </div>
            <div>
              <button type='submit'  className='border-2 border-white rounded-md px-5 text-xl text-center items-center'>
              Submit
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
}
export default Payment;