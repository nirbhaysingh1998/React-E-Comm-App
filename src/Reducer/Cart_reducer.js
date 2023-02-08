import React from 'react';

const Cart_reducer = (state, action) => {
    if (action.type === "add_to_cart") {
        let { product, amount, id, color } = action.payload
        let cartProduct;
        cartProduct = {
            id: id + color,
            name: product.name,
            color,
            amount,
            image: product.image[0].url,
            price: product.price,
            max: product.stock,
        }

        return {
            ...state, cart: [...state.cart, cartProduct]
        };

    }
    if (action.type === 'delete_item') {
        let updateCart = state.cart.filter((curElm) => curElm.id !== action.payload)
        // console.log(action.payload.id)
        return {
            ...state, cart: updateCart
        };
    }
    return state;
}

export default Cart_reducer;
