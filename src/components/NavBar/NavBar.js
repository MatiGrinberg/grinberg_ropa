import '../../estilados/App.css'
import {Link} from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'
import React from "react";

function NavBar(prop) {

    // Return
    return (
          
        <nav className='header'>
            <Link to='/' className='header_link'>
                <img className="logo" src='/Assets/Logo.jpeg' alt='logo'></img>
            </Link>
            <Link to='/' className='header_link'>
                <h1 className='nombreNegocio'>Grinberg_Ropa</h1>
            </Link>
            <div className='navBar'>
                <Link to='/zapato/zapato' className='header_link'>
                    <div className='header_option'>
                        <span className='header_option_lineOne'>Zapato </span>            
                    </div>    
                </Link>
                <Link to='/campera/campera' className='header_link'>
                    <div className='header_option'>
                        <span className='header_option_lineOne'>Campera</span>            
                    </div>    
                </Link>
                <Link to='/category' className='header_link'>
                    <div className='header_option'>
                        <span className='header_option_lineOne'>Categorias</span>            
                    </div>    
                </Link>
                <Link to='/cart' className='header_link'>
                    <div className='header_basket'>
                        <CartWidget countCartItems={prop.countCartItems} />
                    </div>    
                </Link>
            </div> 
        </nav>
    );
}

export default NavBar
