import React from "react";
import SHOP_DATA from "./shop.data.js";
import CollectionPreview from '../../Collection-Preview/Collection-Preview.component.jsx'
class ShopPages extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            Collection : SHOP_DATA,
        }
    }

    render() {
        const {Collection} = this.state
        return (
             <div className="shop-page">
                 {
                     Collection.map(({id, ...othercollectionprops}) =>(
                         <CollectionPreview key={id}{...othercollectionprops}/>
                     ))
                 }
             </div>
        );
    }
}

export default ShopPages;