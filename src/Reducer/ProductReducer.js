export default (currentState, action) => {
    switch(action.type) {
        case "All": 
        return {...currentState, productsFiltred:[...currentState.products]}

        case "FILTER__PRODUCTS":
            return {
                ...currentState,
                productsFiltred: currentState.products.filter(product => {
                    if(product.categorie === action.payload.categorie && product.isTopCollection === true) {
                        return {...product};
                    } 
                }) 
            } 
        case "TOP__COLLECTION":
            return  {
                ...currentState,
                productsFiltred: currentState.products.filter(product => {
                    if(product.isTopCollection) {
                        return {...product};
                    } 
                }) 
            } 

        default:
            console.Error("Action type is not defined: " + action.type);
            return {...currentState};
    }
}