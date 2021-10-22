import React from 'react'
import '../../estilados/App.css'
import {Link} from 'react-router-dom'

function Item(props) {
    // Variables    
    const {product} = props
    // Return
    return (
    <div className='individual'>
        <div className='home_img'>
            <Link to={'/'+product.link+'/'+product.link} className='header_link'>
            <img className='home_img' src={product.image} alt='product'/>
            </Link>
        </div>
        <div className='texto_prod'>
            <Link to={'/'+product.link+'/'+product.link} className='header_link'>
            <h3>{product.title}</h3>
            </Link>
        </div>
    </div>
    )
}

export default Item
