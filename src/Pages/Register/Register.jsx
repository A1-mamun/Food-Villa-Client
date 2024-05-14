import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import toast, { Toaster } from "react-hot-toast";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { createUser, profileUpdate } = useContext(AuthContext);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //   register form submit
  const onSubmit = (data) => {
    const { name, photo, email, password } = data;

    // password validation
    if (password.length < 6) {
      toast.error("password should be at least 6 characters");
      return;
    } else if (!/^(?=.*[A-Z])/.test(password)) {
      toast.error("password should have at least one Uppercase letter");
      return;
    } else if (!/^(?=.*[a-z])/.test(password)) {
      toast.error("password should have at least one Lowercase letter");
      return;
    }

    // User Register
    createUser(email, password)
      .then((result) => {
        toast.success("User created successfully");
        // console.log("succesfully");
        profileUpdate(name, photo)
          .then(() => {
            toast.success("profile updated successfully");
            // console.log("profile update");
            console.log(result.user);
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
                {...register("password", { required: true })}
              />
              {errors.password && (
                <span className="text-red-700">This field is required</span>
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
