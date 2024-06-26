import { Link, NavLink } from "react-router-dom";
import logo from '../assets/images/logo.png'

const Navbar = () => {

    const pageLink = <>
        <NavLink
            className={({ isActive, isPending }) =>
                isPending
                    ? "pending"
                    : isActive
                        ? " font-bold  text-primary"
                        : "hover:text-orange font-bold"
            }
            to={"/"}
        >
            <li>
                <span>Home</span>
            </li>
        </NavLink>
        <NavLink
            className={({ isActive, isPending }) =>
                isPending
                    ? "pending"
                    : isActive
                        ? " font-bold  text-primary"
                        : "hover:text-orange font-bold"
            }
            to={"/buy"}
        >
            <li>
                <span>Buy</span>
            </li>
        </NavLink>

        <NavLink
            className={({ isActive, isPending }) =>
                isPending
                    ? "pending"
                    : isActive
                        ? " font-bold  text-primary"
                        : "hover:text-orange font-bold"
            }
            to={"/propertyDetails/1"}
        >
            <li>
                <span>Sell</span>
            </li>
        </NavLink>
        <NavLink
            className={({ isActive, isPending }) =>
                isPending
                    ? "pending"
                    : isActive
                        ? " font-bold  text-primary"
                        : "hover:text-orange font-bold"
            }
            to={"/about"}
        >
            <li>
                <span>Service</span>
            </li>
        </NavLink>
        <NavLink
            className={({ isActive, isPending }) =>
                isPending
                    ? "pending"
                    : isActive
                        ? " font-bold  text-primary"
                        : "hover:text-orange font-bold"
            }
            to={"/about"}
        >
            <li>
                <span>About</span>
            </li>
        </NavLink>
    </>
    return (
        <div className="navbar bg-[#ecf5ff] 2xl:px-72 lg:h-[64px] shadow-xl ">
            <div className="navbar-start hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {pageLink}
                </ul>
            </div>
            <div className="navbar-center">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[10] p-2 shadow bg-base-100 rounded-box w-52">
                        {/* mobile page link */}

                        {pageLink}
                    </ul>
                </div>
                <div className="">

                    <img className="w-7" src={logo} alt="" />
                </div>
            </div>

            <div className="navbar-end space-x-4">

                <NavLink className="hover:text-orange font-bold hidden lg:flex "><span>Manage Rentals</span></NavLink>
                <Link ><button className="hidden lg:flex lg:ml-4 py-1 px-4  rounded-lg text-blue-700  bg-[#c5e2ff] ">sign in</button></Link>

            </div>
        </div>
    );
};

export default Navbar;