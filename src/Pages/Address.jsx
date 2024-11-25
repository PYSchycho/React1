import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Navbar from '../component/Navbar';
import { useNavigate } from 'react-router-dom'; 
const Address = () => {
  const navigate = useNavigate();
  const initialValues = {
    name: '',
    street: '',
    city: '',
    state: '',
    PhoneNumber: '',
  };
  const validationSchema = Yup.object({
    name: Yup.string()
      .matches(/^[A-Za-z\s]*$/, 'Name only contain letters')
      .required('Name is required'),
    street: Yup.string().required('Street is required'),
    city: Yup.string()
      .matches(/^[A-Za-z\s]*$/, 'City only contain letters')
      .required('City is required'),
    state: Yup.string()
      .matches(/^[A-Za-z\s]*$/, 'State only contain letters')
      .required('State is required'),
    PhoneNumber: Yup.string()
      .matches(/^\d{10}$/, 'Phone Number must be 10 digits')
      .required('Phone Number is required'),
  });
  const onSubmit = () => {
    navigate("/payment")
  };
  return (
    <>
      <Navbar />
      <div className="max-w-lg mx-auto my-4 p-6 bg-blue-300 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Address Form</h2>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}>
          {({setFieldValue}) => (
            <Form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <Field
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                />
                <ErrorMessage name="name" component="div" className="text-red-500 text-sm" />
              </div>
              <div>
                <label htmlFor="street" className="block text-sm font-medium text-gray-700">Street Address</label>
                <Field
                  type="text"
                  id="street"
                  name="street"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                />
                <ErrorMessage name="street" component="div" className="text-red-500 text-sm" />
              </div>
              <div>
                <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
                <Field
                  type="text"
                  id="city"
                  name="city"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                />
                <ErrorMessage name="city" component="div" className="text-red-500 text-sm" />
              </div>
              <div>
                <label htmlFor="state" className="block text-sm font-medium text-gray-700">State</label>
                <Field
                  type="text"
                  id="state"
                  name="state"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                />
                <ErrorMessage name="state" component="div" className="text-red-500 text-sm" />
              </div>
              <div>
                <label htmlFor="PhoneNumber" className="block text-sm font-medium text-gray-700">Phone Number</label>
                <Field
                  type="text"
                  id="PhoneNumber"
                  name="PhoneNumber"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                />
                <ErrorMessage name="PhoneNumber" component="div" className="text-red-500 text-sm" />
              </div>
              <div className="flex justify-center">
                <button type='submit' className='p-2 bg-violet-300 font-bold rounded-md font-serif border-2 border-white'>Go To Payments
              </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};
export default Address;