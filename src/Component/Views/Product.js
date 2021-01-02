import { React} from "react";
import { BrowserRouter as Router, 

    withRouter
     } from "react-router-dom";
import { useParams } from "react-router";
import Loader from "../Loader";
import { useAxiosGet } from "../../Hooks/HttpRequests";
function Product(){
    const { id } = useParams()
    const url = `https://5e9623dc5b19f10016b5e31f.mockapi.io/api/v1/products/${id}`
    let content = []
    let product = useAxiosGet(url)
    if(product.loading){
        content = 
        <Loader/>
    }
    if(product.error){
        content =
        <p>The product does not exist. Please try again with a valid product ID</p>
    }
    if(product.data){
        
        //for(let i = 0; i<3; i++){
            content.push( 
                <div className="pt-3 w-4/5 b-1 text-center m-auto flex flex-col bg-gray-200 h-full mt-10">
                    <div>
                        <h1 className= "text-2xl font-bold mb-3">
                            {product.data.name}
                        </h1>
                    </div>
                    <div className="m-auto">
                        <img 
                        src = {product.data.images[0].imageUrl}
                        alt = {product.data.name}
                        />
                    </div>
                    <div className="font-bold mb-3 text-xl">
                        ₹ {product.data.price*70.00}
                    </div>
                    <div className = "font-light text-sm">
                        {product.data.description}
                    </div>
                </div>
            )
        //}
        //content.shift()
    }
    return(
        <div>
            {content}
       </div>
    )
}
export default withRouter(Product)