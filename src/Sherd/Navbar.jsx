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
            to={"gallery"}
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
            to={"gallery"}
        >
            <li>
                <span>Service</span>
            </li>
        </NavLink>
    </>
    return (
        <div className="navbar bg-transparent 2xl:px-32 lg:h-[64px] shadow-xl">
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

                <NavLink
                    className={({ isActive, isPending }) =>
                        isPending
                            ? "pending"
                            : isActive
                                ? " font-bold  text-primary"
                                : "hover:text-orange font-bold"
                    }
                    to={"gallery"}
                >
                    
                        <span>Manage Rentals</span>
                    
                </NavLink>
                <Link to={'/login'}><button className="w-20 px-4 bg-primary text-white py-1 rounded-sm">sign in</button></Link>

            </div>
        </div>
    );
};

export default Navbar;