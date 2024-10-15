import { useState } from "react"



export function EmiCalculator(){
    const[amount,setamount]=useState(100000);
    const[years,setyears]=useState(1);
    const[rate,setrate]=useState(10.45);

    function handleamountChange(e){
        setamount(e.target.value);
    }
    function handleyearChange(e){
        setyears(e.target.value);
    }
    function handlerateChange(e){
        setrate(e.target.value);

    }


    return(
        <div className="container-fluid mt-4 p-2 bg-secondary" style={{height:'100vh'}}>
            <h3 className="text-white text-center">EMI Calculator</h3>
            <div className="bg-light m-4 p-4">
            <div class="row m-3">
                <div className="col">
                   Amount you need &#8377 <input type="text" onChange={handleamountChange} size="15" value={amount}/>
                   </div>
                <div className="col">
                    for<input type="text" onChange={handleyearChange} size="2" value={years}/>years
                </div>
                <div className="col">
                Intrest rate<input type="text" onChange={handlerateChange} size="4" value={rate}/>%
                </div>
                </div>


            <div className="row">
                <div className="col">
                    <input type="range"  className="form-range" onChange={handleamountChange} min="100000"   max="10000000" />
                    <div>
                    <span>&#8377; 1000</span>
                    <span className="float-end">&#8377;10,00,000</span>

                    </div>
                    

                </div>
                <div className="col">
                <input type="range"  className="form-range" onChange={handleyearChange} min="1"   max="5" />
                    <div>
                    <span>1</span>
                    <span className="float-end">5</span>

                    </div>

                </div>
                <div className="col">
                <input type="range"  className="form-range" min="10.45"  onChange={handlerateChange} max="18.45" step="0.01" />
                    <div>
                    <span>10.45%</span>
                    <span className="float-end">18.45</span>

                    </div>

                </div>
                <div class="row my-3">
                    <div className="col text-end">
                        <button className="btn btn-primary">Calculate</button>

                    </div>

                </div>

            </div>
            </div>

        </div>
    )
}