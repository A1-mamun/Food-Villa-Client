import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const Login = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { signIn, signInGoogle, singInGithub } = useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const { email, password } = data;

    // reset error
    setError("");
    setSuccess("");

    // log in
    signIn(email, password)
      .then((result) => {
        console.log(result.user);
        setSuccess("Loged in successfully");
        // navigate after sign in
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        const fullError = error.message;
        const shortError = fullError.slice(22, fullError.length - 2);
        setError(shortError);
      });
  };

  // Google sign in
  const handleLogInWithGoogle = (e) => {
    e.preventDefault();
    signInGoogle()
      .then((result) => {
        console.log(result.user);
        setSuccess("Logged in successfully");
        // navigate after sign in
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => console.error(error));
  };

  // Github sign in
  const handleLogInWithGithub = (e) => {
    e.preventDefault();
    singInGithub()
      .then((result) => {
        console.log(result.user);
        setSuccess("Logged in successfully");
        // navigate after sign in
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => console.error(error));
  };
  return (
    <div className="hero h-full bg-base-200 py-10 rounded-xl mt-16">
      <div className="hero-content">
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <h2 className="text-3xl text-center pt-5">Login your account</h2>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="card-body pb-0 pt-3"
          >
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
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          {error && <p className="text-red-700 text-center">{error}</p>}
          {success && <p className="text-green text-center">{success}</p>}
          <div className="card-body pt-2">
            <div className="flex justify-between items-center">
              <div className="border border-gray-500 h-[1px] grow"></div>
              <h4 className="mx-2">or</h4>
              <div className="border border-gray-500 h-[1px] grow"></div>
            </div>
            <div className="">
              <button
                onClick={handleLogInWithGoogle}
                className="btn btn-outline w-full"
              >
                <FcGoogle />
                Login with Google
              </button>
            </div>
            <div className="mt-3">
              <button
                onClick={handleLogInWithGithub}
                className="btn btn-outline w-full"
              >
                <FaGithub />
                Login with Github
              </button>
            </div>
          </div>
          <h2 className="text-center pb-5">
            Do not Have An Account ?
            <Link to="/register" className="text-orange-700 font-medium">
              Register
            </Link>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Login;
