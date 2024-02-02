import { Link } from "react-router-dom";
import './App.css';


function Header() {
    return (
        <header>
            <div className="topheader">
                <div className="head">
                    <div className="left_head">
                        <div className="head_text">
                            <p>JSONplaceholder</p>
                        </div>
                    </div>
                    <div className="main_menu">
                        <ul className="menu">
                            <li>
                                <a><Link to="/post">posts</Link></a>
                            </li>
                            <li>
                                <a><Link to="/Comment">comments</Link></a>
                            </li>
                            <li>
                                <a><Link to="/Album">albums</Link></a>
                            </li>
                            <li>
                                <Link to="/Photo"><a>Photos</a></Link>
                            </li>
                            <li>
                                <Link to="/Todo"><a>todos</a></Link>
                            </li>
                            <li>
                                <Link to="/User"><a>users</a></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;