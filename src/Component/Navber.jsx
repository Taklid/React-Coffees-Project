import { Link } from "react-router-dom";


const Navber = () => {
    return (
        <div>
            <div className="navbar backdrop-blur-xl bg-white/30 z-50 fixed">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content font-bold bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <Link to='/'>Home</Link>
                            <Link to='/coffees'>Coffee</Link>
                            <Link to='/dasboard'>Dasboard</Link>
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost font-bold text-xl">Cook_Books</Link>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-2 font-bold">
                        <Link to='/'>Home</Link>
                        <Link to='/coffees'>Coffee</Link>
                        <Link to='/dasboard'>Dasboard</Link>
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Navber;