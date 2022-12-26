import React, {useState, useContext} from 'react';

const CartContext = React.createContext([]);
const useCartContext = () => useContext(CartContext)

const CartProviedes = ({children}) => {

    const [cartItem, setCartItem] = useState([]);

    const addItem = (item, cantidad) => {
      if (isInCart(item.id)){
        setCartItem(cartItem.map(element =>{
          /* return element.id === item.id ? { ...element, cantidad: element.cantidad + cantidad} : element */
          if (element.id === item.id){
            if (item.stock >= (element.cantidad + cantidad)){
              console.log("ingrese acumule por ser <=");
              return {...element, cantidad: element.cantidad + cantidad} 
            } else {
              console.log("ingrese a no hacer nada por ser >");
              return element;
            }
          } else {            
            return element; 
          }

        }))
      } else {
        setCartItem([...cartItem, {...item, cantidad}])
      }       
      console.log("El carrito tiene= ", cartItem); 
    };

    const removeItem = (id) => {
        return setCartItem(cartItem.filter(product => product.id !== id) ? true : false);
    };
    
    const clear = () => {
        setCartItem([]);
    };
    
    const isInCart = (id) => {
        return cartItem.find(product => product.id === id) ? true : false;
    };

    return(
      <CartContext.Provider value={{cartItem, setCartItem, addItem, removeItem, clear, isInCart}}>
        {children} 
      </CartContext.Provider>
    )
}

export {CartProviedes, useCartContext} ;