import { Outlet, Link } from "react-router-dom";
import './Navbar.css';
import logo from '../assets/Vasanta_Lab_img_crop.png'

const Navbar = () => {
    const baseUrl = '/sparklab.github.io/vasanta_research_website';
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
                            <Link to={`${baseUrl}/contact`} relative="path">
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
                            <Link to={`${baseUrl}/github`} relative="path">
                                GitHub
                            </Link>
                        </li>

                        <li id='papers'>
                            <Link to={`${baseUrl}/papers`} relative="path">
                                Papers
                            </Link>
                        </li>

                        <li id='research'>
                            <Link to={`${baseUrl}/research`} relative="path">
                                Research
                            </Link>
                        </li>

                        <li id='team'>
                            <Link to={`${baseUrl}/team`} relative="path">
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