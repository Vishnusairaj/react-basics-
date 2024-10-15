import { useRef, useState } from "react";


export function TimeOut(){
   const [msg, setMsg] = useState('');
   const [styleObj, setStyleObj] = useState({position:'', top:'', left:'', width:'250px'})

   function GetDetails(message, e)
   {
       console.log(e);
       setMsg(message);
   }

   function MoveAd(e){
       setStyleObj({
           position: 'fixed',
           left: e.touches[0].clientX + 'px',
           top: e.touches[0].clientY + 'px',
           width: '200px'
       })
   }

   return(
      <div className="container-fluid">
              <aside onTouchMove={MoveAd} style={styleObj} className="border border-2 p-3 border-primary">
                  <h4>iPhone</h4>
                  <img src="iphone-green.jpg" width="200" height="200" />
              </aside>
              <img onTouchStart={(e)=> GetDetails('iPhone Green - 128 GB, 65,000', e)} src="m1.jpg"  width="200" height="300" />
              <img onTouchStart={(e)=> GetDetails('iPhone Black - 256 GB  79,000', e)} src="m2.jpg"  width="200" height="300" />

              <div>
                  <h1>{msg}</h1>
              </div>
      </div>
   )
}
