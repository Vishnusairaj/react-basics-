import { useEffect,useState } from "react";
import axios from "axios";

import './event.css';


export function Imagehandle(){
    const[theme,setTheme]=useState("bg-ligth")
    const[btnThem,setbtnTheme]=useState('btn btn-dark w-100')

    function themechange(e){
        if(e.target.checked){
            setTheme('bg-dark text-white')
            setbtnTheme('btn btn-light w-100')
        }else{
            setTheme('bg-ligth')
            setbtnTheme('btn btn-dark w-100')
        }

    }
 

return(
    <div className="d-flex justify-content-center justify-item-center">
        <form className={`mt-4 p-4 border border-1 rounded ${theme}`} >
            <div className="form-switch">
                <input type="checkbox" onChange={themechange}  className="form-check-input"/><lable className="form-check-label ms-2">Dark Theme</lable>
            </div>
            <h3 className="bi bi-person-fill">Sign In</h3>
            <dl>
                <dt>userName</dt>
                <dd><input type="text" className="form-control"/></dd>
                <dt>PassWord</dt>
                <dd><input type="password" className="form-control"/></dd>
            </dl>
            <button className={btnThem}>Login</button>
        </form>

    </div>
)

   

} 
