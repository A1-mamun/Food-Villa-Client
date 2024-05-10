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
          isActive ? "text-primary font-semibold" : " "
        }
      >
        Home
      </NavLink>

      <NavLink
        to="/all-food"
        className={({ isActive }) =>
          isActive ? "text-primary font-semibold" : " "
        }
      >
        All Food
      </NavLink>

      <NavLink
        to="/gallery"
        className={({ isActive }) =>
          isActive ? "text-primary font-semibold" : " "
        }
      >
        Gallery
      </NavLink>
      <NavLink
        to="/add-food"
        className={({ isActive }) =>
          isActive ? "text-primary font-semibold" : " "
        }
      >
        Add Food Item
      </NavLink>

      <NavLink
        to="/my-added-food"
        className={({ isActive }) =>
          isActive ? "text-primary font-semibold" : " "
        }
      >
        My Added Food
      </NavLink>
      <NavLink
        to="/my-purchase-food"
        className={({ isActive }) =>
          isActive ? "text-primary font-semibold" : " "
        }
      >
        My Purchase Food
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
        <div className="navbar-end">
          {user && (
            <div
              className="tooltip tooltip-left mr-4"
              data-tip={user.displayName}
            >
              <img
                className="btn btn-sm md:btn-md btn-circle"
                alt="Profile picture"
                src={user.photoURL}
              />
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
                  Register
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
