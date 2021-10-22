import React from 'react'
import ItemList from '../ItemList/ItemList'


function ItemListContainer(props) {
    const {products } = props;
    return(
    <ItemList products={products}></ItemList>
    )
}

export default ItemListContainer
