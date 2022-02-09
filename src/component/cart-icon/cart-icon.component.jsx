import React from "react";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/Cart/cart.action";
import { selectCartItemsCount } from "../../redux/Cart/cart.selectors";
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

const mapStatetoProps = state => ({
    itemCount : selectCartItemsCount(state)
})

export default connect(mapStatetoProps,mapDispatchToProps)(CartIcon);

