import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom";



export function FakestoreDetails(){
    let param=useParams();
    const[products,setProducts]=useState([{id:0,title:'',image:'',price:0,describes:'',category:'',rating:{rate:0,count:0}}])
    

    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products/${param.id}`)
        .then(response=>{
            setProducts(response.data);
        })
    },[])


    return(
        <div>
            <h2>Details</h2>
            <dl style={{width:'200px'}}>
                <img src={products.image} height="200" width="200"/>
                <dt>Title</dt>
                <dd>{products.title}</dd>
                <dt>Price</dt>
                <dd>{products.price}</dd>

            </dl>
            <Link to={`/products/${products.category}`}> Back to Home</Link>
        </div>
    )
}