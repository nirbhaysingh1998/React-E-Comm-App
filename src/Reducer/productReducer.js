

const productReducer = (state, action) => {
    switch (action.type) {
        case "set_loading": return { ...state, isLoading: true, };
        case "my_api_data":
            const featureData = action.payload.filter((curElem) => {
                return curElem.featured === true;
            });
            return { ...state, isLoading: false, products: action.payload, featureProducts: featureData }
        case "api_error": return { ...state, isLoading: false, isError: true };
        case "set_single_loading": return { ...state, isSingleLoading: true, };
        case "my_single_product": return { ...state, singleProduct: action.payload, isSingleLoading: false };
        case "single_api_error": return { ...state, isSingleLoading: false, isError: true };
        case "sorting_data":
            let usersort = document.getElementById('sort');
            let sort_value = '';
            if (usersort != null) {
                sort_value = usersort.options[usersort.selectedIndex].value;
            }
            // console.log(sort_value)
            return { ...state, sortingvalue: sort_value }
        case "sort_data":
            let newsort;
            //  let products1 = action.payload
            let tempdata = [...action.payload];
            console.log(state.sortingvalue)
            if (state.sortingvalue === 'lowest') {
                const sortingProducts = (a, b) => {
                    return a.price - b.price;
                }
                newsort = tempdata.sort(sortingProducts);
            }
            if (state.sortingvalue === 'highest') {
                const sortingProducts = (a, b) => {
                    return b.price - a.price;
                }
                newsort = tempdata.sort(sortingProducts);
            }
            if (state.sortingvalue === 'a-z') {
                newsort = tempdata.sort((a, b) => a.name.localeCompare(b.name));
                //  console.log(newsort)
            }
            if (state.sortingvalue === 'z-a') {
                newsort = tempdata.sort((a, b) => b.name.localeCompare(a.name));
                //  console.log(newsort)
            }
            if (newsort) {


                return { ...state, products: newsort }
            }
            else {
                return { ...state, products: tempdata }
            }

        default:
            return state;
    }

}

export default productReducer
