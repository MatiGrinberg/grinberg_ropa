import React from 'react'
import Item from '../Item/Item'

function ItemList(props) {
   // Variables y Funciones
   const {products} = props;
    
//   Return
   return (
       <div className='home'>
            {products.map((product) => (
               <Item key={product.id} product={product}></Item>
            ))
            }
           </div>
   )  
} 

export default ItemList
