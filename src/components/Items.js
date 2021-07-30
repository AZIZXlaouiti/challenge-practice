import React from 'react'
import ItemCard from './ItemCard'

function Items({ItemsList,handleAdditem,handleRemoveItem}) {
    
    return (
        <div className="App">
            <h3>Items : </h3>
            {ItemsList.map((item)=><ItemCard handleRemoveItem={handleRemoveItem} handleAdditem={handleAdditem} key = {item.id} item={item}/>)}
        </div>
    )
}

export default Items
