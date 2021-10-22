import React,{useState, useRef } from 'react'
import '../../estilados/App.css'
import {db} from '../Firebase/Firebase'

function Checkout(props) {
    // Ref
    const emailRef = useRef()
    const email2Ref = useRef()
    // Variables
    const {cartItems,setCartItems} = props;
    const [error, setError] = useState("")

    // FireStore
    const [compras,setCompras] = useState([]);
    
    const baseDeDatos = (e)=>{
        if (emailRef.current.value !== email2Ref.current.value) {
            return setError("Emails do not match")
          }
        e.preventDefault();
        const { direccion, email } = e.target.elements;
        const dire = direccion.value;
        const mail = email.value;

        db.collection("orders").add({usuario: mail, direcc: dire, articulos:cartItems, createdAt: new Date()})
        const comprasArray = []
        db.collection("orders").where('createdAt','<',new Date()).limit(1).orderBy("createdAt", "desc").get().then((snapshot)=>{
            snapshot.docs.forEach(doc=>{
            comprasArray.push(doc.id)
            setCompras(comprasArray)
           
            })
        }) 
    }
    
    // Return 
    return(
        <div>
            <form className='compra' onSubmit={baseDeDatos}>
            <div>
                <label>
                Direccion
                <input name="direccion" type="text" required placeholder="" />
                </label>  
            </div>
            <div>
                <label>
                Telefono
                <input name="telefono" type="text" required placeholder="" />
                </label>  
            </div>
            <div>
                <label>
                e-Mail
                <input name="email" ref={emailRef} type="email" required/>
                </label>
            </div>
            <div>
                <label>
                Repetir e-Mail
                <input name="repetir_email" ref={email2Ref} type="email" required/>
                </label>
            </div>
            <div>
            <button className='clasico' type="submit">Comprar</button>
            </div>
            </form>
            <div className='compra_end'>
                <h2>Tu ID de compra es:</h2>
                <div className='compra_id'><h3>{compras.at(-1)}</h3></div>
                <h4>- segun Firestore</h4>
            </div>
        </div>
        
    )
}

export default Checkout
