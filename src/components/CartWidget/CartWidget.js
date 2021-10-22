import '../../estilados/App.css'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import React from "react";

function CartWidget(prop) {
    return (
        <div>
        { prop.countCartItems!==0 && 
        <div>
            <ShoppingBasketIcon/>            
            <span className='basketCount'>{prop.countCartItems}</span>
        </div> }  
        </div>
    )
}

export default CartWidget
                        
                        
                        