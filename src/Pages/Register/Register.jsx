import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import toast from "react-hot-toast";
import axios from "axios";
import { Helmet } from "react-helmet";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { createUser, profileUpdate, setUser, user } = useContext(AuthContext);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  //   register form submit
  const onSubmit = (data) => {
    const { name, photo, email, password } = data;
    // User Register
    createUser(email, password)
      .then((result) => {
        profileUpdate(name, photo)
          .then(() => {
            setUser({ ...result?.user, photoURL: photo, displayName: name });
            const loggedInUser = result.user;
            const user = { email: loggedInUser?.email };
            axios
              .post(`${import.meta.env.VITE_API_URL}/jwt`, user, {
                withCredentials: true,
              })
              .then((res) => {
                if (res.data.success) {
                  // navigate after sign in
                  navigate(location?.state ? location.state : "/");
                }
              });
            reset();
            toast.success("User created successfully");
          })
          .catch((error) => toast.error(error));
        navigate("/");
      })
      .catch((error) => {
        const fullError = error.message;
        const shortError = fullError.slice(22, fullError.length - 2);
        toast.error(shortError);
      });
  };
  return (
    <div className="hero h-full py-10 rounded-xl bg-base-200 mt-16">
      <Helmet>
        <title>FoodVilla | Register</title>
      </Helmet>
      <div className="hero-content ">
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <h2 className="text-3xl text-center pt-5">Register your account</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="input input-bordered"
                {...register("name", { required: true })}
              />
              {errors.name && (
                <span className="text-red-700">This field is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="Enter your Photo URL"
                className="input input-bordered"
                {...register("photo", { required: true })}
              />
              {errors.photo && (
                <span className="text-red-700">This field is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email address"
                className="input input-bordered"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-red-700">This field is required</span>
              )}
            </div>
            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter your password"
                className="input input-bordered"
                {...register("password", {
                  required: true,
                  minLength: 6,
                  maxLength: 20,
                  pattern: /(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$&*])(?=.*[0-9])/,
                })}
              />
              {errors.password?.type == "required" && (
                <span className="text-red-700">This field is required</span>
              )}
              {errors.password?.type == "minLength" && (
                <span className="text-red-700">
                  Password must be 6 characters
                </span>
              )}
              {errors.password?.type == "pattern" && (
                <span className="text-red-700">
                  Must have one uppercase, one lowercase,one special character
                  and one number
                </span>
              )}
              {errors.password?.type == "maxLength" && (
                <span className="text-red-700">
                  Password must be less than 20 characters
                </span>
              )}
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-[52px] right-4"
              >
                {showPassword ? <IoEyeOffOutline /> : <IoEyeOutline />}
              </span>
            </div>
            <div className="form-control mt-3">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>

          <h2 className="text-center pb-5">
            Already Have An Account ?
            <Link to="/login" className="text-orange-700 font-medium">
              LogIn
            </Link>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Register;
