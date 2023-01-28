import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import useToken from '../../Hooks/useToken';

const SignUp = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { createUser, updateUser, googleSignIn } = useContext(AuthContext);
    const [signUpError, setSignUpError] = useState('');
    const navigate = useNavigate();

    const [createdUserEmail, setCreatedUserEmail] = useState('');
    const [token] = useToken(createdUserEmail);
    if (token) {
        navigate('/');
    }


    const handleSignUp = data => {
        console.log(data);
        setSignUpError('');
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast('User Created Successfully');
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => {
                        saveUser(data.name, data.email);
                    })
                    .catch(err => console.error(err));
            })
            .catch(err => {
                console.error(err);
                setSignUpError(err.message);
            });
    }

    const handleGoogleSignIn = () => {
        const googleProvider = new GoogleAuthProvider();
        googleSignIn(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success('SignIn Successful');
                saveUser(user.displayName, user.email);
            })
            .catch(err => console.error(err))
    };

    const saveUser = (name, email) => {
        const user = { name, email };
        fetch('https://doctors-portal-server-zeta-ten.vercel.app/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setCreatedUserEmail(email);
            })
    }
    return (
        <div className='h-[600px] flex justify-center items-center'>
            <div className='w-96 p-7 border-2 rounded-lg'>
                <h2 className='text-xl text-center'>Sign-Up</h2>
                <form onSubmit={handleSubmit(handleSignUp)}>
                    <div className="form-control w-full">
                        <label className="label"><span className="label-text">Name</span></label>
                        <input type='text'
                            {...register("name")} className="input input-bordered mb-3" required />
                    </div>
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
                    </div>
                    <div>
                        {signUpError && <p className='text-error'>{signUpError}</p>}
                    </div>
                    <input type="submit" value='SignUP' className="btn input-bordered w-full mb-5" />
                </form >
                <p className='text-center'>Already Have an Account? <Link to='/login' className='text-secondary'>Please Login</Link></p>
                <div className='divider'>Or</div>
                <button onClick={handleGoogleSignIn} className='btn btn-secondary btn-outline w-full'>Continue with Google</button>
            </div>
        </div>
    );
};

export default SignUp;