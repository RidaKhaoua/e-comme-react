/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import {createContext, useContext, useReducer} from "react";
import ProductReducer from "../Reducer/ProductReducer";
const ProductContext = createContext([]);

const initialState = {
    products: [
        {
            id:1,
            productName: "Nike Air Men’s Hoodie -  Imported Hoodie Red ",
            price:150,
            quality: 5,
            imgUrl: "/Images/swet.png",
            categorie: "Clothes",
            isTopCollection: true,
            productYear:2024

        },
        {
            id:2,
            productName: "Armani Frok Ladies -  Imported Fork Blue",
            price:250,
            quality: 5,
            imgUrl:"/Images/fork-blue.png",
            categorie: "Dresses",
            isTopCollection: true,

        },
        {
            id:3,
            productName: "Apple Watch Series 6 - Sliver Band",
            price:450,
            quality: 5,
            imgUrl:"/Images/apple-watch-series-2.png",
            categorie: "Accessories",
            isTopCollection: true,
            productYear:2024
        },
        {
            id:4,
            productName: "Pngtree—hand drawn vector minimalist",
            price:150,
            quality: 5,
            imgUrl: "/Images/—Pngtree—hand drawn vector minimalist cartoon.png",
            categorie: "Clothes",
            productYear: 2024,
            isTopCollection: false,

        },
        {
            id:5,
            productName: "Summer-New-Men-Hawaiian-Short",
            price:150,
            quality: 5,
            imgUrl: "/Images/Summer-New-Men-Hawaiian-Short.png",
            categorie: "Clothes",
            productYear: 2024,
            isTopCollection: false,

        },
        {
            id:6,
            productName: "microphone-headphones-gaming-headset-pc-game-gaming-computer",
            price:150,
            quality: 5,
            imgUrl: "/Images/microphone-headphones-lx50-gaming-headset-pc-game-gaming-computer.png",
            categorie: "Clothes",
            productYear: 2024,
            isTopCollection: false,

        },
        {
            id:7,
            productName: "apricot lady tot women s_4423236",
            price:150,
            quality: 5,
            imgUrl: "/Images/apricot lady tot women s_4423236 1.png",
            categorie: "Clothes",
            productYear: 2024,
            isTopCollection: false,

        },
        {
            id:8,
            productName: "nike-air-max-nike-tiempo-football-boot-nike-mercurial-vapor",
            price:150,
            quality: 5,
            imgUrl: "/Images/nike-air-max-nike-tiempo-football-boot-nike-mercurial-vapor.png",
            categorie: "Clothes",
            productYear: 2024,
            isTopCollection: false,

        },
        {
            id:9,
            productName: "talon-women",
            price:150,
            quality: 5,
            imgUrl: "/public/Images/talon-women.png",
            categorie: "Clothes",
            productYear: 2024,
            isTopCollection: false,

        },

    ],
    productsFiltred: [
        {
            id:1,
            productName: "Nike Air Men’s Hoodie -  Imported Hoodie Red ",
            price:150,
            quality: 5,
            imgUrl: "/Images/swet.png",
            categorie: "Clothes",
            isTopCollection: true,
            productYear:2024

        },
        {
            id:2,
            productName: "Armani Frok Ladies -  Imported Fork Blue",
            price:250,
            quality: 5,
            imgUrl:"/Images/fork-blue.png",
            categorie: "Dresses",
            isTopCollection: true,

        },
        {
            id:3,
            productName: "Apple Watch Series 6 - Sliver Band",
            price:450,
            quality: 5,
            imgUrl:"/Images/apple-watch-series-2.png",
            categorie: "Accessories",
            isTopCollection: true,
        },
        {
            id:4,
            productName: "Pngtree—hand drawn vector minimalist",
            price:150,
            quality: 5,
            imgUrl: "/Images/—Pngtree—hand drawn vector minimalist cartoon.png",
            categorie: "Clothes",
            productYear: 2024,
            isTopCollection: false,

        },
        {
            id:5,
            productName: "Summer-New-Men-Hawaiian-Short",
            price:150,
            quality: 5,
            imgUrl: "/Images/Summer-New-Men-Hawaiian-Short.png",
            categorie: "Clothes",
            productYear: 2024,
            isTopCollection: false,

        },
        {
            id:6,
            productName: "microphone-headphones-gaming-headset-pc-game-gaming-computer",
            price:150,
            quality: 5,
            imgUrl: "/Images/microphone-headphones-lx50-gaming-headset-pc-game-gaming-computer.png",
            categorie: "Clothes",
            productYear: 2024,
            isTopCollection: false,

        },
        {
            id:7,
            productName: "apricot lady tot women s_4423236",
            price:150,
            quality: 5,
            imgUrl: "/Images/apricot lady tot women s_4423236 1.png",
            categorie: "Clothes",
            productYear: 2024,
            isTopCollection: false,

        },
        {
            id:8,
            productName: "nike-air-max-nike-tiempo-football-boot-nike-mercurial-vapor",
            price:150,
            quality: 5,
            imgUrl: "/Images/nike-air-max-nike-tiempo-football-boot-nike-mercurial-vapor.png",
            categorie: "Clothes",
            productYear: 2024,
            isTopCollection: false,

        },
        {
            id:9,
            productName: "talon-women",
            price:150,
            quality: 5,
            imgUrl: "/public/Images/talon-women.png",
            categorie: "Clothes",
            productYear: 2024,
            isTopCollection: false,

        },

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

    return (
        <ProductContext.Provider value={{
            products: productState.products,
            productsFiltred: productState.productsFiltred, 
            filterProducts,
            getAllProducts,
            getTopCollection
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