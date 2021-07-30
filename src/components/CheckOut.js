import React from 'react'

const CheckOut = ({itemInCart,Cart,  history, match, location}) => {
    console.log(match)
    function handleSubmit(e){
        e.preventDefault()
        fetch('http://localhost:3001/carts',{
            method:"POST",
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({ "items":itemInCart, "total":Cart})
        })
        .then(history.push("/"))

    }
    return (
        <form onSubmit={(e)=>handleSubmit(e)}>

            <h3>Item In Cart</h3>
            <ul>
            {itemInCart.map((item)=><li> <p>{item.name}--${item.price}</p> </li>)}
            </ul>
            <h3>Total: ${Cart}</h3>
            <button type="submit" >checkout</button>

        </form>
    )
}

export default CheckOut
