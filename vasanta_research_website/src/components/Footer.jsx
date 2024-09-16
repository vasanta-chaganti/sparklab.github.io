import { Outlet, Link } from "react-router-dom";
import './Footer.css';

function Footer() {
    const baseUrl = '/sparklab.github.io/vasanta_research_website';
    return (
        <>
            <nav className='footer'>
                <div className='footer-department'>
                    <ul>
                        <li><a className='navbar-title' href='https://www.swarthmore.edu/computer-science' target="_blank">Department of Computer Science</a></li>
                        <li><a className='navbar-title' href='https://www.swarthmore.edu/' target="_blank">Swarthmore College</a></li>
                    </ul>
                </div>

                <div className='collapseFooterItems'>
                    <ul>
                        <li id='about'>
                            <Link to={`${baseUrl}/about`} relative="path">
                                About
                            </Link>
                        </li>

                        <li id='join'>
                            <Link to={`${baseUrl}/contact`} relative="path">
                                Join
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
};

export default Footer;