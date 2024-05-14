import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import { useContext } from "react";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleSignOut = () => {
    logOut().then().catch();
  };

  const navlinks = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "text-primary font-semibold border border-primary rounded-md p-1"
            : "p-1"
        }
      >
        Home
      </NavLink>

      <NavLink
        to="/all-food"
        className={({ isActive }) =>
          isActive
            ? "text-primary font-semibold border border-primary rounded-md p-1"
            : "p-1 "
        }
      >
        All Food
      </NavLink>

      <NavLink
        to="/gallery"
        className={({ isActive }) =>
          isActive
            ? "text-primary font-semibold border border-primary rounded-md p-1"
            : "p-1 "
        }
      >
        Gallery
      </NavLink>
    </>
  );

  return (
    <div className="bg-base-100 shadow-lg fixed top-0 w-full z-10">
      <div className="navbar container mx-auto items-center">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[10] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navlinks}
            </ul>
          </div>
          <a className="btn btn-ghost gap-0 text-3xl ml-[-10px] text-black dark:text-gray-400">
            Food<span className="text-primary">Villa</span>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-5 ">{navlinks}</ul>
        </div>
        <div className="navbar-end ">
          {user && (
            <div className="dropdown dropdown-end mr-4 ">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar tooltip tooltip-left flex items-center"
                data-tip={user.displayName}
              >
                <div className="rounded-full w-10">
                  <img alt="profile" src={user.photoURL} />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
              >
                <Link to="/profile">
                  <li>
                    <a>Profile</a>
                  </li>
                </Link>
                <Link to="/my-added-food">
                  <li>
                    <a>My added food items</a>
                  </li>
                </Link>
                <Link to="/add-food">
                  <li>
                    <a>Add a food item</a>
                  </li>
                </Link>
                <Link to="/my-purchased-food">
                  <li>
                    <a>My purchased food items</a>
                  </li>
                </Link>
              </ul>
            </div>
          )}
          {user ? (
            <button
              onClick={handleSignOut}
              className="btn btn-sm md:btn-md btn-success"
            >
              Sign Out
            </button>
          ) : (
            <>
              <Link to="/login">
                <button className="btn btn-sm md:btn-md btn-success ">
                  Login
                </button>
              </Link>
              <Link to="/register">
                <button className="btn btn-sm md:btn-md btn-accent  ml-2">
                  SignUp
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
