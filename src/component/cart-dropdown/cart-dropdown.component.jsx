import CustomButon from '../custom-button/custom-button.component'

import './cart-dropdown.styles.scss'

const CartDropdown =() => {
    return (
        <div className='cart-dropdown'>
            <div className='cart-items'/>
            <CustomButon>GO TO CHECKOUT</CustomButon>
        </div>
    )
}

export default CartDropdown;