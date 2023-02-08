import { createContext, useContext, useEffect, useReducer } from "react";
import axios from 'axios';
import reducer from '../Reducer/productReducer'



const api = "https://api.pujakaitem.com/api/products";

const initialState = {
    isLoading: false,
    isError: false,
    products: [],
    featureProducts: [],
    isSingleLoading: false,
    singleProduct: {},
    sortingvalue: "lowest",
    cartItem: [],
    amount: [],
}

const AppContext = createContext();

const AppProvider = ({ children }) => {


    const [state, dispatch] = useReducer(reducer, initialState);
    // const [product, setproduct] = useState();
    const getProduct = async () => {
        dispatch({ type: "set_loading" });
        try {
            const response = await axios.get(api);
            const products = response.data
            dispatch({
                type: "my_api_data", payload: products,
            });
        } catch (error) {
            console.error(error);
            dispatch({ type: "api_error" })
        }
    }

    const getSingleProduct = async (url) => {
        dispatch({ type: "set_single_loading" });
        try {
            const response = await axios.get(url);
            const singleproduct = response.data;
            dispatch({
                type: "my_single_product", payload: singleproduct,
            });
        } catch (error) {
            console.error(error);
            dispatch({ type: "single_api_error" })
        }
    }
    const sorting = async () => {
        dispatch({ type: "sorting_data" });
        try {
            const response = await axios.get(api);
            const products = response.data
            // console.log(products)
            dispatch({
                type: "sort_data", payload: products,
            });
        } catch (error) {
            console.error(error);
            dispatch({ type: "api_error" })
        }
    }

    useEffect(() => {
        sorting()
        //  console.log(state.sortvalue);

    }, [state.sortingvalue]);

    useEffect(() => {
        getProduct();
    }, []);

    return <AppContext.Provider value={{ ...state, getSingleProduct, sorting }}>
        {children}
    </AppContext.Provider>
};

// create custom hook

const useProductContext = () => {
    return useContext(AppContext)
};
export { AppProvider, AppContext, useProductContext }