import { useState } from "react"

export function EventDemo(){
    const [styobj,setstyleobj]=useState({color:'black'})


        function handleMouseover(e){
            setstyleobj({color:e.target.id})

        }
        function handleMouseout(e){
            setstyleobj({coloy:'black'})
        }

    return(
       <div className="container-fluid">
        <h2 >Mouse Events</h2>
        <div  className="d-flex p-4 text-white text-center">
            <div onMouseOut={handleMouseout} id="red"  onMouseOver={handleMouseover} style={{width:'100px',background:'red'}}>Red</div>
            <div onMouseOut={handleMouseout} id="green" onMouseOver={handleMouseover} style={{width:'100px',background:'green'}}>Green</div>
            <div onMouseOut={handleMouseout} id="blue" onMouseOver={handleMouseover} style={{width:'100px',background:'blue'}}>Blue</div>



        </div>
        <h3 style={styobj}>Sample Text</h3>
       </div>


    )



}