import React  from 'react'
import '../../estilados/App.css'

function ItemCount(props) {
    // Variables + Funciones
    const {prod, cartItems, onAdd, onRemove, onAddFirst} = props;
    
    // Return
    return (
            <div className='cart'> 
                <div className="cart_text">
                    { cartItems.length===0 && <h2>No tenes items seleccionados</h2>}
                </div>
                <div className='subt'>
                <button class='clasico' onClick={()=>onAddFirst(prod)}>Agregar</button>
                    {cartItems.map((item)=>(
                        <div key={item.id} className='subt'>
                            { item.id===prod.id && 
                            <div> 
                                <div>{ item.qty<10 &&<button className='btn_cart' onClick={()=>onAdd(item)}>+</button>}</div>
                                <span className='actual'>{item.qty}</span>
                                <div><button className='btn_cart' onClick={()=>onRemove(item)}>-</button></div>
                            </div>
                            }
                        </div>
                    ))}
                </div>
            </div> 
              
        )
}

export default ItemCount

