import React from "react";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/Cart/cart.action";
import {ReactComponent as ShoppingIcon} from './shopping-bag.svg'

import './cart-icon.styles.scss'

const CartIcon = ({toggleCartHidden, itemCount}) => {
    return(
        <div className="cart-icon" onClick={() => toggleCartHidden}>
            <ShoppingIcon className="shopping-icon"/>
            <span className="item-count">{itemCount}</span>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

const mapStatetoProps = ({cart:cartItems}) => ({
    itemCount : cartItems.reduce((accumlatedQuantity, cartItem) => accumlatedQuantity + cartItem.quantity, 0) || []
})

export default connect(mapStatetoProps,mapDispatchToProps)(CartIcon);

