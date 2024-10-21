import { BrowserRouter,Routes,Route,Link } from "react-router-dom";
import { FakestoreHome } from "./fakestore-home";
import { FakestoreProducts } from "./fakestore-products";
import { FakestoreDetails } from "./fakestore-details";



export function FakestoreIndex(){
    return(
        <div className="container-fluid">
            <BrowserRouter>
            <header className="text-white bg-dark text-center p-1 mt-1">
                <h2>Fakestore</h2>
            </header>
            <section>
                <Routes>
                    <Route path="/" element={<FakestoreHome/>}/>
                    <Route path="products/:category" element={<FakestoreProducts/>}/>
                    <Route path="details/:id" element={<FakestoreDetails/>}/>
                    <Route path="*" element={<h2 className="text-danger">Element Not Found</h2>}/>
                </Routes>
            </section>
            </BrowserRouter>

        </div>
    )
}