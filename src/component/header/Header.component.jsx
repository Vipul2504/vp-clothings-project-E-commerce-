import { Link } from "react-router-dom";
import { ReactComponent as Logo } from '../../assests/crown.svg';
import './header.styles.scss';
import { auth } from "../../firebas/firebas.utils";
import { connect } from "react-redux";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { createStore, applyMiddleware } from 'redux'; 

const Header = ({currentUser, hidden}) => (
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
                <div className="option" onClick={() => auth.signOut()}>Sign Out</div>
                :
                <Link className="option" to='/Sign'>Sign IN</Link>
            }
            <CartIcon/>
        </div>
        {
            hidden ? null : <CartDropdown/>
        }
    </div>
)
const store = createStore(() => [], {}, applyMiddleware());
const mapStatetoProps = ({user:{currentUser},cart:{hidden}}) =>({
    currentUser,
    hidden
})
export default connect(mapStatetoProps)(Header);
