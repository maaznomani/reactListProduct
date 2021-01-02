import { React, useEffect, useState } from "react";
import axios from "axios";
import Loader from "../Loader";
import ProductCard from '../ProductCard'
import { useAxiosGet } from "../../Hooks/HttpRequests";

function Home(){
    let content = null
    const url = `https://5e9623dc5b19f10016b5e31f.mockapi.io/api/v1/products?page=1&limit=10`
    let products = useAxiosGet(url)
    if(products.loading){
        content = 
        <Loader/>
    }
    if(products.error){
        content =
        <p>The product does not exist. Please try again with a valid product ID</p>
    }
    if(products.data){
        content = 
        products.data.map((product, key)=>
        <div key= {key}>
            <ProductCard
            product={product}/>
        </div>
        )
    }
    return(
        
        <div 
        className="text-blue-800 font-medium p-1 mt-5 h-screen  w-3/5 m-auto text-center">
            <h1 className="font-bold text-2xl mb-10">Best Seller</h1>
            {content}
            </div> 
    )
}
export default Home