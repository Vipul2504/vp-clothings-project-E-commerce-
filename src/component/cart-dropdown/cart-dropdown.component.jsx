import CustomButon from '../custom-button/custom-button.component'
import Cartitem from '../cart-item/cart-item.component'
import './cart-dropdown.styles.scss'
import { connect } from 'react-redux'
import { selectCartItems } from '../../redux/Cart/cart.selectors'

const CartDropdown =({cartItems}) => {
    return (
        <div className='cart-dropdown'>
            <div className='cart-items'>
               { cartItems.map(cartItem => (
                    <Cartitem key={cartItem.id} item={cartItem} />
                ))}
            </div>
            <CustomButon>GO TO CHECKOUT</CustomButon>
        </div>
    )
}

const mapStatetoProps = (state) => ({
    cartItems: selectCartItems(state)
})

export default connect(mapStatetoProps)(CartDropdown);