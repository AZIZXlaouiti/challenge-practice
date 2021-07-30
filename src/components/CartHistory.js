import React,{useState,useEffect} from 'react'

const CartHistory = () => {
    const [itemHistory,setitemHistory] = useState([])
    useEffect(()=>{
     fetch('http://localhost:3001/carts')
     .then(resp=>resp.json())
     .then(setitemHistory)
    },[])
    return (
        <div>
            {itemHistory.map((item)=><p>Totalitem : {item.items.length} || ${item.total}</p>)}
        </div>
    )
}

export default CartHistory
