import { NavLink } from "react-router-dom"
import './header.css'

const Header=()=>{

        return <header className="header">
                <nav>
                    <ul id="#navMenu">
                        <li><NavLink className={({isActive, isPending})=> isPending? "pending" :isActive ? "active":"" } to={"/"}>
                            Home
                        </NavLink> </li>
                        <li><NavLink to={"/about"}>
                            About
                        </NavLink> </li>
                        <li><NavLink to={"/contact"}>
                            Contact
                        </NavLink> </li>
                    </ul>
                </nav>
        </header>
}

export default Header