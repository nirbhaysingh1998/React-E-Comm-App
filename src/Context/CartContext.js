import { createContext, useReducer, useContext, useEffect } from "react";
import reducer from '../Reducer/Cart_reducer'
// if export is default use can import with ant name
const CartContext = createContext();
const getLocalCartdata = () => {
    let newcartData = localStorage.getItem("cartItem");
    if (newcartData === []) {


        return [];
    }
    else {
        return JSON.parse(newcartData);
    }
}

const initialState = {
    //cart: [],
    cart: getLocalCartdata(),
    total_item: "",
    total_amount: "",
    shipping_cost: 5000,
};

const CartProvider = ({ children }) => {



    const [state, dispatch] = useReducer(reducer, initialState);

    const addtocart = (product, amount, id, color) => {
        dispatch({ type: "add_to_cart", payload: { product, amount, id, color } })
    };
    const DeleteItem = (id) => {
        dispatch({ type: "delete_item", payload: id })
        //console.log(id)
    }
    useEffect(() => {

        localStorage.setItem("cartItem", JSON.stringify(state.cart));



    }, [state.cart]);
    return <CartContext.Provider value={{ ...state, addtocart, DeleteItem }}>{children}</CartContext.Provider>


};

// to set value in localstorage


const useCartContext = () => {
    return useContext(CartContext)
};
export { CartProvider, useCartContext }