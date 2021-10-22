import React, { useState, useEffect }  from 'react'
import '../../estilados/App.css'
import ItemCount from '../ItemCount/ItemCount'
import {useParams, Link} from 'react-router-dom'
import {db} from '../Firebase/Firebase'

function ItemDetail(props) {

    // Loading Product desde FireStore usando la URL Parametros
    const ref = db.collection("ItemCollection")
    const {ropa_id} = useParams()
    const [doc, setDoc] = useState()
    
    function getProduct() {
        ref.doc(ropa_id).get().then((snapshot) => {
          setDoc(snapshot.data())})
      }
    
      useEffect(() => {
        getProduct();
      });
    
    // Return
    if (!doc) {
        return <div>Loading...</div>;
      }

    if(doc){
    return (
        <div className='individual'>
            <div className='home_img'>
                <img src={doc.image} alt='product'/>  
            </div>
            <div className='texto_prod'>   
                <h2 className='des'>{doc.desc}</h2> 
                <h3>$ {doc.price}</h3>           
            </div>
            <div>
            <ItemCount prod={doc} onAddFirst={props.onAddFirst} onAdd={props.onAdd} onRemove={props.onRemove} cartItems={props.cartItems}/>
            </div>
            <div>
                <Link to='/'>
                <button class='clasico'>Volver</button>
                </Link>
            </div>
            <div >
                <Link to='/cart'>
                    <button class='clasico'>Terminar mi compra</button>
                </Link>  
            </div>
        </div>
    )}
}

export default ItemDetail
