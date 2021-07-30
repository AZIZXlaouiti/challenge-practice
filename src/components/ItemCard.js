import React ,{useState}from 'react'



const ItemCard = ({item,handleAdditem,handleRemoveItem}) => {
    const [onAdd,setOnAdd] = useState(true)
    
    function handleClick(item){
        setOnAdd(!onAdd)
        if (onAdd){

            handleAdditem(item)
        }
        else{

            handleRemoveItem(item)
        }

    }
   

    return (
        <div>
            <p>{item.name}--${item.price} 
            <button onClick={e=>handleClick(item)}>{onAdd?'Add':'Remove'}
            
            </button>
            </p>
            
          
        </div>
    )
}

export default ItemCard
