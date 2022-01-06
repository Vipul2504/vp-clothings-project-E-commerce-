import { Link } from "react-router-dom";
import { ReactComponent as Logo } from '../../assests/crown.svg';
import './header.styles.scss';
import { auth } from "../../firebas/firebas.utils";

const Header = ({currentUser}) => (
    <div className="header">
        <Link to="/">
            <Logo className="logo"/>
        </Link>
        <div className="options">
            <Link className="option" to="/shop">
                SHOP
            </Link>
            <Link className="option" to="/shop">
                CONTACT
            </Link>
            {
                currentUser ? 
                <div className="option" onClick={() => auth.signOut}>Sign Out</div>
                :
                <Link className="option" to='/Sign'>Sign IN</Link>
            }
        </div>
    </div>
)

export default Header;