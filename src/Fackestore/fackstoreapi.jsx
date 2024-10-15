
import {useState,useEffect } from "react";
import axios from "axios";


export function Fakestore(){
    const [categories,setCategories]=useState([ ]);
    const[products,setproducts]=useState([{id:0,title:'',price:0,description:'',image:'',rating:{rate:0,count:0}}]);
    const[cartitems,setcartitems]=useState([]);
    const[cartCount,setcartCount]=useState(cartitems.length);
    const[searchString,setSearchString]=useState('');
   

    function LoadCategories(){
        axios.get('https://fakestoreapi.com/products/categories')
        .then(response=>{
            response.data.unshift('all');
            setCategories(response.data);
        })
    }
    function LoadProducts(url){
        axios.get(url)
        .then(response=>{
            setproducts(response.data);
        })
    }
    useEffect(()=>{
        LoadCategories();
        LoadProducts('https://fakestoreapi.com/products');
        GetCartCount();
    },[])

    function handleCategoryChange(e){
        if(e.target.value==="all"){
            LoadProducts('https://fakestoreapi.com/products');
        }else{
            LoadProducts(`https://fakestoreapi.com/products/category/${e.target.value}`);
        }

    }
    function handleAddToCartClick(id){
        axios.get(`https://fakestoreapi.com/products/${id}`)
        .then(response=>{
            cartitems.push(response.data);
            alert(`${response.data.title}\nAdded to cart`);
            GetCartCount();
    })

    }
    function GetCartCount(){
        setcartCount(cartitems.length);
    }
    function handleChange(e){
        setSearchString(e.target.value.toLowerCase());
    }
    function handleSearchClick(){
        LoadProducts(`https://fakestoreapi.com/products/category/${searchString}`)
    }
    

    return(
        <div className="container-fluid">
            <header className="d-flex bg-dark text-light fs-5 justify-content-between p-2 border m-2">
                <div className="fs-4">
                    <span>Fakestore</span>
                </div>
                <div>
                    <div className="input-type">
                        <input onChange={handleChange} type="text" placeholder="Search by category"/>
                        <button onClick={handleSearchClick}className="btn btn-warning bi bi-search"></button>
                    </div>
                </div>
                <nav>
                    <span>Electronics</span>
                    <span className="mx-2">Mens Clothing</span>
                    <span>Jewelery</span>
                    <span className="ms-2">Women Fashion</span>
                </nav>
                <div >
                    <button className="btn btn-light"><span className="bi bi-person"></span></button>
                    <button className="btn btn-light mx-2"><span className="bi bi-heart"></span></button>
                    <button data-bs-toggle="modal" data-bs-target='#cart' className="btn btn-light bi bi-cart position-relative"><span className="badge bg-danger rounded-circle position-absolute">{cartCount}</span></button>
                     <div className="modal fade" id="cart">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h3 className="text-primary">Your Cart</h3>
                                    <button className="btn btn-close" data-bs-dismiss="modal"></button>
                                </div>
                                <div className="modal-body">
                                    <table className="table table-hover">
                                        <thead>
                                            <tr>
                                                <th>Title</th>
                                                <th>Preview</th>
                                                <th>Price</th>
                                               
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                cartitems.map(items=>
                                                    <tr key={items.id}>
                                                        <td>{items.title}</td>
                                                        <td><img src={items.image} width="50" height="50"/></td>
                                                        <td>{items.price}</td>
                                                        <td><button className="bi bi-trash btn btn-danger"></button></td>
                                                    </tr>
                                                )
                                            }
                                        </tbody>
                                        <tfoot>
                                            <tr>
                                                <th colSpan="2">Total Amount</th>
                                            </tr>
                                        </tfoot>
                                    </table>
                                    
                                </div>
                            </div>

                        </div>

                     </div>
                </div>
            </header>
            <section className="mt-3 row">
                <nav className="col-2">
                    <div>
                        <label className="form-label fw-bold">Select Category</label>
                        <div>
                            <select onChange={handleCategoryChange} className="form-select">
                            {
                                categories.map(category=><option value={category} key={category}>{category.toUpperCase()}</option>)

                            }
                            </select>
                            
                        </div>
                    </div>

                </nav>
                <main className="col-10 d-flex flex-wrap" style={{height:'500px'}}>
                    {
                        products.map(product=>
                            <div  key={product.id}className="card p-2 m-2" style={{width:'200px'}}>
                                <img className="card-img-top" height="100px" src={product.image}/>
                                <div className="card-header" style={{height:'100px'}}>
                                    {product.title}

                                </div>

                                <div className="card-body">
                                    <dl>
                                        <dt>Price</dt>
                                        <dd>{product.price}</dd>
                                        <dt>Rating</dt>
                                        <dd>{product.rating.rate}<span className="bi bi-star-fill"></span></dd>
                                    </dl>

                                </div>
                                <div className="card-footer">
                                    <button onClick={()=>handleAddToCartClick(product.id)}  className="btn btn-warning w-100"><span className="bi bi-cart4">Add to Cart</span></button>

                                </div>

                            </div>

                        )
                    }

                </main>

            </section>

        </div>
    )
}
    
               