import { Outlet, Link } from "react-router-dom";
import './Navbar.css';
import logo from '../assets/Vasanta_Lab_img_crop.png'

const Navbar = () => {
    return (
        <>
            <nav className='navbar'>
                <div>
                    {/* <img src={logo} id="logo" alt='Vasanta lab logo' /> */}
                    <a className='navbar-title' href='/'>Vasanta Lab</a>
                </div>

                <div className='collapseNavbarItems'>
                    <ul>
                        <li id='contact'>
                            <Link to='/contact' relative="path">
                                Contact
                            </Link>
                        </li>

                        {/* 
                        <li id='blog'>
                            <Link to='/blog' relative="path">
                                Blog
                            </Link>
                        </li> */}

                        <li id='github'>
                            <Link to='/github' relative="path">
                                GitHub
                            </Link>
                        </li>

                        <li id='papers'>
                            <Link to='/papers' relative="path">
                                Papers
                            </Link>
                        </li>

                        <li id='research'>
                            <Link to='/research' relative="path">
                                Research
                            </Link>
                        </li>

                        <li id='team'>
                            <Link to='/team' relative="path">
                                Team
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <Outlet />
        </>
    );
};

export default Navbar;