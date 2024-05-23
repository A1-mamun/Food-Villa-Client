import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { Helmet } from "react-helmet";
import useAuth from "../Hooks/useAuth";

const Profile = () => {
  const { user } = useAuth();
  return (
    <div className="min-h-[calc(100vh-275px)] flex justify-center items-center">
      <Helmet>
        <title>FoodVilla | User Profile</title>
      </Helmet>
      <div className="flex flex-col justify-center max-w-xs p-6 shadow-md rounded-xl sm:px-12 dark:bg-gray-50 dark:text-gray-800 ">
        <img
          src={user?.photoURL}
          alt="profile image"
          className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square"
        />
        <div className="space-y-4 text-center divide-y dark:divide-gray-300">
          <div className="my-2 space-y-1">
            <h2 className="text-xl font-semibold sm:text-2xl">
              {user?.displayName}
            </h2>
            <p className="px-5 text-xs sm:text-base dark:text-gray-600">
              Junior React Developer
            </p>
          </div>
          <div className="flex justify-center pt-2 space-x-4 align-center">
            <a
              className="p-2 rounded-md dark:text-gray-800 hover:dark:text-violet-600"
              href="https://github.com/A1-mamun"
              target="_blank"
            >
              <FaGithub />
            </a>
            <a
              className="p-2 rounded-md dark:text-gray-800 hover:dark:text-violet-600"
              href="https://www.facebook.com/A1Mamun178"
              target="_blank"
            >
              <FaFacebook />
            </a>
            <a
              className="p-2 rounded-md dark:text-gray-800 hover:dark:text-violet-600"
              href="https://www.linkedin.com/in/a1-mamun/"
              target="_blank"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
