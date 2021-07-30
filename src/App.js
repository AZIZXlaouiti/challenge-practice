import React ,{useEffect ,useState} from 'react'
import {BrowserRouter as Router , Route,Switch} from "react-router-dom"
import NavBar from './components/NavBar'
import Items from './components/Items'
import CheckOut from './components/CheckOut'
import CartHistory from './components/CartHistory'
const App = () => {
  const [ Cart , setCart ] = useState(0)
  const [ItemsList,setItemList] = useState([])
  const [itemInCart , setIteminCart] = useState([])
    useEffect(()=>{
      fetch(' http://localhost:3001/items')
      .then(resp=>resp.json())
      .then(setItemList)
    },[])
  
  function handleAdditem(itemToAdd) {
    const itemCart = itemInCart.find(
      (item) => item.id === itemToAdd.id
    );
    if (!itemCart) {
      setIteminCart([...itemInCart, itemToAdd]);
      setCart( ( Cart ) => Cart + itemToAdd.price)
    }
  }

  console.log("itemsInCart",itemInCart)
  console.log("price",Cart)

  function handleRemoveItem(itemToRemove) {
    setCart( ( Cart ) => Cart - itemToRemove.price)
    setIteminCart((itemInCart) =>
    itemInCart.filter((item) => item.id !== itemToRemove.id)
   
    );

  }
  return (
    <Router>
      <NavBar Cart={Cart}/>
      <Switch>
       
        <Route exact path ="/"><Items ItemsList={ItemsList} handleAdditem={handleAdditem} handleRemoveItem={handleRemoveItem} /></Route>
        
        <Route exact path ="/checkout" render={(props)=><CheckOut  { ...props } Cart ={Cart} itemInCart={itemInCart} />}/>
        
        <Route exact path = "/history"><CartHistory/></Route>
      </Switch>
    </Router>
   
  )
}

export default App

