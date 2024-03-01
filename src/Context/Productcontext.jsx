/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import {createContext, useContext, useReducer} from "react";
import ProductReducer from "../Reducer/ProductReducer";
const ProductContext = createContext([]);

const initialState = {
    products: [
        {
            id:1,
            title: "Nike Air Men’s Hoodie -  Imported Hoodie Red ",
            price:150,
            quality: 5,
            image: "/Images/swet.png",
            category: "Clothes",
            isTopCollection: true,
            productYear:2024

        },
        {
            id:2,
            title: "Armani Frok Ladies -  Imported Fork Blue",
            price:250,
            quality: 5,
            image:"/Images/fork-blue.png",
            category: "Dresses",
            isTopCollection: true,

        },
        {
            id:3,
            title: "Apple Watch Series 6 - Sliver Band",
            price:450,
            quality: 5,
            image:"/Images/apple-watch-series-2.png",
            category: "Accessories",
            isTopCollection: true,
            productYear:2024
        },
        {
            id:4,
            title: "Pngtree—hand drawn vector minimalist",
            price:150,
            quality: 5,
            image: "/Images/—Pngtree—hand drawn vector minimalist cartoon.png",
            category: "Clothes",
            productYear: 2024,
            isTopCollection: false,

        },
        {
            id:5,
            title: "Summer-New-Men-Hawaiian-Short",
            price:150,
            quality: 5,
            image: "/Images/Summer-New-Men-Hawaiian-Short.png",
            category: "Clothes",
            productYear: 2024,
            isTopCollection: false,

        },
        {
            id:6,
            title: "microphone-headphones-gaming-headset-pc-game-gaming-computer",
            price:150,
            quality: 5,
            image: "/Images/microphone-headphones-lx50-gaming-headset-pc-game-gaming-computer.png",
            category: "Clothes",
            productYear: 2024,
            isTopCollection: false,

        },
        {
            id:7,
            title: "apricot lady tot women s_4423236",
            price:150,
            quality: 5,
            image: "/Images/apricot lady tot women s_4423236 1.png",
            category: "Clothes",
            productYear: 2024,
            isTopCollection: false,

        },
        {
            id:8,
            title: "nike-air-max-nike-tiempo-football-boot-nike-mercurial-vapor",
            price:150,
            quality: 5,
            image: "/Images/nike-air-max-nike-tiempo-football-boot-nike-mercurial-vapor.png",
            category: "Clothes",
            productYear: 2024,
            isTopCollection: false,

        },
        {
            id:9,
            title: "talon-women",
            price:150,
            quality: 5,
            image: "/public/Images/talon-women.png",
            category: "Clothes",
            productYear: 2024,
            isTopCollection: false,

        },

    ],
    productsFiltred: [
        {
            id:1,
            title: "Nike Air Men’s Hoodie -  Imported Hoodie Red ",
            price:150,
            quality: 5,
            image: "/Images/swet.png",
            category: "Clothes",
            isTopCollection: true,
            productYear:2024

        },
        {
            id:2,
            title: "Armani Frok Ladies -  Imported Fork Blue",
            price:250,
            quality: 5,
            image:"/Images/fork-blue.png",
            category: "Dresses",
            isTopCollection: true,

        },
        {
            id:3,
            title: "Apple Watch Series 6 - Sliver Band",
            price:450,
            quality: 5,
            image:"/Images/apple-watch-series-2.png",
            category: "Accessories",
            isTopCollection: true,
        },
        {
            id:4,
            title: "Pngtree—hand drawn vector minimalist",
            price:150,
            quality: 5,
            image: "/Images/—Pngtree—hand drawn vector minimalist cartoon.png",
            category: "Clothes",
            productYear: 2024,
            isTopCollection: false,

        },
        {
            id:5,
            title: "Summer-New-Men-Hawaiian-Short",
            price:150,
            quality: 5,
            image: "/Images/Summer-New-Men-Hawaiian-Short.png",
            category: "Clothes",
            productYear: 2024,
            isTopCollection: false,

        },
        {
            id:6,
            title: "microphone-headphones-gaming-headset-pc-game-gaming-computer",
            price:150,
            quality: 5,
            image: "/Images/microphone-headphones-lx50-gaming-headset-pc-game-gaming-computer.png",
            category: "Clothes",
            productYear: 2024,
            isTopCollection: false,

        },
        {
            id:7,
            title: "apricot lady tot women s_4423236",
            price:150,
            quality: 5,
            image: "/Images/apricot lady tot women s_4423236 1.png",
            category: "Clothes",
            productYear: 2024,
            isTopCollection: false,

        },
        {
            id:8,
            title: "nike-air-max-nike-tiempo-football-boot-nike-mercurial-vapor",
            price:150,
            quality: 5,
            image: "/Images/nike-air-max-nike-tiempo-football-boot-nike-mercurial-vapor.png",
            category: "Clothes",
            productYear: 2024,
            isTopCollection: false,

        },
        {
            id:9,
            title: "talon-women",
            price:150,
            quality: 5,
            image: "/public/Images/talon-women.png",
            category: "Clothes",
            productYear: 2024,
            isTopCollection: false,

        },

    ],
    shopingList: [
    ]
}

const ProductProvider = ({children}) => {
    const [productState, dispatch] = useReducer(ProductReducer, initialState);
    const filterProducts = (catName) => {
        dispatch({type: "FILTER__PRODUCTS", payload:{categorie: catName}})
    }
    const getAllProducts = () => {
        dispatch({type:"All"});
    }

    const getTopCollection = () => {
        dispatch({type:"TOP__COLLECTION"})
    }

    const addProductToShopList = (id, image, price, title) => {
        dispatch({type:"ADD__PRODUCT", payload:{id, image, price, title}})
    }

    const addQuantitiyPlus = (id) => {
        dispatch({type:"ADD__QUANTITY", payload:{idProduct:id}})
    }

    const minQuantitiy = (id) => {
        dispatch({type:"MIN__QUANTITY", payload:{idProduct:id}})
    }

    const deleteProduct = (id) => {
        dispatch({type:"DELETE__PRODUCT", payload:{idProduct: id}})
    }

    return (
        <ProductContext.Provider value={{
            products: productState.products,
            productsFiltred: productState.productsFiltred,
            shopingList: productState.shopingList,
            filterProducts,
            getAllProducts,
            getTopCollection,
            addProductToShopList,
            addQuantitiyPlus,
            minQuantitiy,
            deleteProduct
        }}
        >
            {children}
        </ProductContext.Provider>
    )
}

export const useProducts = () => {
    return useContext(ProductContext);
}

export default ProductProvider;