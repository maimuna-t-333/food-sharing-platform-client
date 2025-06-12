
import React, { use } from 'react';
import { Link, useNavigate } from 'react-router';
import logo from '../../assets/logo.png';
import { AuthContext } from '../../Contexts/AuthContext/AuthContext';



const Navbar = () => {
    const { user, logOut } = use(AuthContext);
    const navigate = useNavigate()

    const handleLogout = () => {
        logOut()
            .then(() => {
                console.log('Logged out');
                navigate('/')
            })
            .catch((err) => {
                console.error(err);
            });
    };

    return (
        <div className="">
            <div className="navbar bg-[#c0abda] shadow-sm p-6">

                <div className="navbar-start">
                    <div className="dropdown text-white">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-300 rounded-box z-10 mt-3 w-52 p-2 shadow text-[#555555]"
                        >
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/availableFood">Available Foods</Link></li>
                            {user && (
                                <>
                                    <li><Link to="/addFood">Add Food</Link></li>
                                    <li><Link to="/manageFood">Manage My Foods</Link></li>
                                    <li><Link to="/myFood">My Food Requests</Link></li>
                                </>
                            )}
                        </ul>
                    </div>
                    <h2 className="text-white text-xl font-bold ml-2">Share A Bite</h2>
                    <img className="w-12 h-12 ml-2 rounded-b-full" src={logo} alt="Food Logo" />
                </div>


                <div className="navbar-center space-x-4 text-white hidden md:flex">
                    <Link to="/">Home</Link>
                    <Link to="/availableFood">Available Foods</Link>
                    {user && (
                        <>
                            <li><Link to="/addFood">Add Food</Link></li>
                            <li><Link to="/manageFood">Manage My Foods</Link></li>
                            <li><Link to="/myFood">My Food Requests</Link></li>
                        </>
                    )}
                </div>


                <div className="navbar-end flex items-center gap-4">

                    {user ? ( <>
                        <div className="flex items-center gap-4">

                            {/* <div className="tooltip tooltip-bottom" data-tip={user.displayName || 'User'}>
                                <img
                                    src={user.photoURL || 'https://i.ibb.co/2n4d3kR/default-avatar.png'}
                                    alt="User Avatar"
                                    className="w-10 h-10 rounded-full border-2 border-white"
                                />
                            </div> */}
                            <button
                                onClick={handleLogout}
                                className="text-white text-xl font-bold hover:cursor-pointer"
                            >
                                Logout
                            </button>

                        </div>
                        </>
                    ) :
                        (<>
                            <Link className="text-white text-xl font-bold" to="/login">Login</Link>
                            <Link className="text-white text-xl font-bold" to="/signUp">SignUp</Link>
                        </>

                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;
