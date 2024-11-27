import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Field, Form } from 'formik';
const Login = () => {
    const navigate = useNavigate();
    const [showpassword, setShowPassword] = useState(false);
    const handleLogin = async (values, { setSubmitting }) => {
        try {
            const payload = {
                username: values.username,
                password: values.password,
            };
            const response = await fetch('https://dummyjson.com/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });
            if (!response.ok) {
                console.log("Errors");
                return;
            }
            const data = await response.json();
            console.log(data, 'Login Success');
            if (data.accessToken) {
                localStorage.setItem('accessToken', data.accessToken);
                localStorage.setItem('username', values.username);
                localStorage.setItem('password', values.password);
                navigate("/");
            } else {
                console.log("Errors");
            }
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setSubmitting(false);
        }
    };
    useEffect(() => {
        const accessToken = localStorage.getItem('accessToken')
        if(accessToken){
            navigate("/")
        }
    }, [navigate]);
    return (
        <div className="flex border-2 border-black mx-96 bg-blue-200 my-20 flex-col items-center p-4 rounded-2xl">
            <h2 className="text-4xl font-bold mb-4">Login Page</h2>
            <Formik
                initialValues={{ username: '', password: '' }}
                onSubmit={handleLogin}>
                {({ handleSubmit, isSubmitting, values }) => (
                    <Form className="w-full max-w-sm" onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className='text-lg'>Username:</label>
                            <Field
                                type="username"
                                name="username"
                                value={values.username}
                                className="w-full p-2 border border-gray-300 rounded"
                            />
                        </div>
                        <div className="mb-4">
                            <label className='text-lg'>Password:</label>
                            <Field
                                type={showpassword ? "text" : "password"}
                                name="password"
                                value={values.password}
                                className="w-full p-2 border border-gray-300 rounded" />
                            <div className="mt-2">
                                <label className="inline-flex items-center text-lg">
                                    <input
                                        type="checkbox"
                                        checked={showpassword}
                                        onChange={() => setShowPassword((prev) => !prev)}
                                        className="mr-2" />
                                    Show Password
                                </label>
                            </div>
                        </div>
                        <div>
                            <button
                                className="w-full p-2 bg-black text-white font-bold text-2xl rounded-2xl my-12 hover:bg-slate-600"
                                type="submit"
                                disabled={isSubmitting} >
                                Login
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    )
};
export default Login;