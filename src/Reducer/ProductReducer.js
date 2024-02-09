export default (currentState, action) => {
  switch (action.type) {
    case "All":
      return { ...currentState, productsFiltred: [...currentState.products] };

    case "FILTER__PRODUCTS":
      return {
        ...currentState,
        productsFiltred: currentState.products.filter((product) => {
          if (
            product.categorie === action.payload.categorie &&
            product.isTopCollection === true
          ) {
            return { ...product };
          }
        }),
      };
    case "TOP__COLLECTION":
      return {
        ...currentState,
        productsFiltred: currentState.products.filter((product) => {
          if (product.isTopCollection) {
            return { ...product };
          }
        }),
      };
    case "ADD__PRODUCT":
      return {
        ...currentState,
        shopingList: [
          ...currentState.shopingList,
          {
            id: action.payload.id,
            img: action.payload.image,
            title: action.payload.title,
            price: action.payload.price,
            qty: 1,
          },
        ],
      };

    case "ADD__QUANTITY":
      return {
        ...currentState,
        shopingList: currentState.shopingList.map((item) => {
          if (item.id === action.payload.idProduct) {
            return { ...item, qty: item.qty + 1 };
          }
        }),
      };

    case "MIN__QUANTITY":
      return {
        ...currentState,
        shopingList: currentState.shopingList.map((item) => {
          if (item.id === action.payload.idProduct) {
            if (item.qty > 0) {
              return { ...item, qty: item.qty - 1 };
            } 
          } 
          
        }),
      };

    case "DELETE__PRODUCT":
      return {
        ...currentState,
        shopingList: currentState.shopingList.filter((item) => {
          if (item.id !== action.payload.idProduct) {
            return { ...item };
          }
        }),
      };

    default:
      console.Error("Action type is not defined: " + action.type);
      return { ...currentState };
  }
};
