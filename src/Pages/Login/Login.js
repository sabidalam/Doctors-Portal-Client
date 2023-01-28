import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import useToken from '../../Hooks/useToken';
const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { signIn, googleSignIn } = useContext(AuthContext);
    const [loginError, setLoginError] = useState('');
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    const [loginUserEmail, setLoginUserEmail] = useState('');
    const [token] = useToken(loginUserEmail);
    if (token) {
        navigate(from, { replace: true });
    }

    const handleLogin = data => {
        console.log(data);
        setLoginError('');
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setLoginUserEmail(data.email)
            })
            .catch(err => {
                console.error(err);
                setLoginError(err.message);
            });
    }

    const handleGoogleSignIn = () => {
        const googleProvider = new GoogleAuthProvider();
        googleSignIn(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success('SignIn Successful');
                setLoginUserEmail(user.email);
            })
            .catch(err => console.error(err))
    }

    return (
        <div className='h-[600px] flex justify-center items-center'>
            <div className='w-96 p-7 border-2 rounded-lg'>
                <h2 className='text-xl text-center'>Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="form-control w-full">
                        <label className="label"><span className="label-text">Email</span></label>
                        <input type='email'
                            {...register("email", { required: "Email Address is required" })}
                            className="input input-bordered mb-3" />
                        {errors.email && <p className='text-error'>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full mb-3">
                        <label className="label"><span className="label-text">Password</span></label>
                        <input type='password'
                            {...register("password",
                                { required: "Password is required", minLength: { value: 6, message: 'Password must be atleast 6 characters or longer' } })}
                            className="input input-bordered" />
                        {errors.password && <p className='text-error'>{errors.password?.message}</p>}
                        <label className="label"><span className="label-text">Forget Password?</span></label>
                    </div>
                    <div>
                        {loginError && <p className='text-error'>{loginError}</p>}
                    </div>
                    <input type="submit" value='Login' className="btn input-bordered w-full mb-5" />
                </form >
                <p className='text-center'>New to Doctors Portal? <Link to='/signUp' className='text-secondary'>Create New Account</Link></p>
                <div className='divider'>Or</div>
                <button onClick={handleGoogleSignIn} className='btn btn-secondary btn-outline w-full'>Continue with Google</button>
            </div>
        </div>
    );
};

export default Login;