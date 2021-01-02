import { React } from "react";
import { Link } from "react-router-dom";

function ProductCard(props){
    return (
        <div className="border mb-8 rounded overflow-hidden">
            <Link to={`products/${props.product.id}`}>
                <div
                style={{"background":`url('${props.product.images[0].imageUrl}')`, 
                }}
                className="w-full h-64 bg-blue bg-cover"
                >
                
                </div>
            </Link>
            <div className="p-3">
                <h3 className="font-bold text-xl mb-3">
                    <Link to={`products/${props.product.id}`}>
                        {props.product.name}
                    </Link>
                </h3>
            </div>
            <div className="mb-3">
                ₹{props.product.price * 70}
            </div>
            <Link to={`products/${props.product.id}`}
            className="bg-blue-500 text-white flex justify-center "
            >
                View
            </Link>
        </div>
    )
}

export default ProductCard