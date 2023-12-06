import { Link, NavLink } from "react-router-dom"
import logo from '../../assets/portfolio-logo.png'
import '../Headers/Headers.css'

// Creating a header 
const Headers = () => {
    return (
        <>
            <nav className="max-w-screen-2xl flex justify-around content-center">
                <div className="logo">
                    <Link to='/'>
                        <img
                            className="h-full w-full rounded"
                            src={logo}
                            alt="Your Company"
                        />
                    </Link>
                </div>
                <div className="mt-5">
                    <ul className='text-base navlist flex gap-10 content-center'>
                        <li className=''>
                            <NavLink to='/'>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/project'>
                                Project
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/resume'>
                                Resume
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/about'>
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/skills'>
                                Skills
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/contactme'>
                                Contact me
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div>
                    <button className="hireBtn font-bold text-sm mt-4 py-2 px-3">
                        <Link to='/hireme'>
                            Hire Me!
                            <span><i className="ml-1 text-xs fa-solid fa-angles-right"></i></span>
                        </Link>
                    </button>
                </div>
            </nav >
        </>
    )
}

export default Headers