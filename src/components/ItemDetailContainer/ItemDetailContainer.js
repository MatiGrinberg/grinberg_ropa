import React from 'react'
import {Link} from 'react-router-dom'
import '../../estilados/App.css'

function ItemDetailContainer(props) {
    
    // Almacenamiento de productos
    const {products} = props;
    
    // Return
    return (
        <div>
            <h1 className='cat'>Categorias</h1>
            {products.map((individual) => (
                <Link to={'/'+individual.link+'/'+individual.link} className='header_link'>
                <button className= 'cat'>{individual.link}</button>
                </Link>))
            }
        </div>
    )
}

export default ItemDetailContainer
