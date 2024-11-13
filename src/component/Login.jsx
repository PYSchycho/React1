import React, { useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Field, Form } from 'formik';
const Login = () => {
    const navigate = useNavigate();
    const [showpassword, setShowPassword] = useState(false);
    useEffect(() => {
        const accessToken = localStorage.getItem('accessToken');
        if (accessToken) {
            navigate("/");
        }
    }, [navigate]);
    const handleLogin = async (values, { setSubmit }) => {
        try {
            const payload = {
                username: values.username,
                password: values.password,
            };
            console.log(payload, "payload");
            const response = await fetch('https://dummyjson.com/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });
            console.log(response, "res");
            if (!response.ok) {
                const data = await response.json();
                alert('Login Failed: ' + (data.message || 'Unknown error'));
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
                alert('Login Failed: ' + (data.message));
            }
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setSubmit(false);
        }
    };
    return (
        <div className="flex flex-col items-center p-4">
            <h2 className="text-2xl font-bold mb-4">Login Page</h2>
            <Formik
                initialValues={{ username: '', password: '' }}
                onSubmit={handleLogin} >
                {({ handleSubmit, isSubmitting }) => (
                    <Form className="w-full max-w-sm" onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="username">Username:</label>
                            <Field
                                type="username"
                                id="username"
                                name="username"
                                className="w-full p-2 border border-gray-300 rounded"/>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password">Password:</label>
                            <Field
                                type={showpassword ? "text" : "password"}
                                id="password"
                                name="password"
                                className="w-full p-2 border border-gray-300 rounded />
                            <div className="mt-2">
                                <label htmlFor="show-password" className="inline-flex items-center">
                                    <input
                                        id="show-password"
                                        type="checkbox"
                                        checked={showpassword}
                                        onChange={() => setShowPassword((prev) => !prev)}
                                        className="mr-2" />
                                    Show Password
                                </label>
                            </div>
                    </div>
                        <button
                            className="w-full p-2 bg-black text-white font-bold my-12"
                            type="submit"
                            disabled={isSubmitting} >
                            Submit
            </button>
        </Form>
                )}
            </Formik>
        </div>
    )};
export default Login;
