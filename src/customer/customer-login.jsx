import { useState } from "react"
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { TextField, Button } from "@mui/material";


export function CustomerLogin(){

    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');
    const [cookies, setCookie, removeCookie] = useCookies(['userid']);

    let navigate = useNavigate();

    function handleIdChange(e){
        setUserId(e.target.value);
    }
    function handlePassword(e){
        setPassword(e.target.value);
    }

    function handlLoginClick(){

            if(userId==="john_nit") {
                setCookie("userid", userId);
                navigate("/categories");
            } else {
                navigate("/error");
            }

    }

    return(
        <div className="row">
           <div className="col">
                <dl className="w-50">
                    <h4>Bootstrap Design</h4>
                    <dt>User Id</dt>
                    <dd><input type="text" className="form-control" onChange={handleIdChange} /></dd>
                    <dt>Password</dt>
                    <dd><input type="password" className="form-control" onChange={handlePassword} /></dd>
                    <button onClick={handlLoginClick} className="btn w-100 btn-primary">Login</button>
                </dl>
           </div>
            <div className="col">
                <h4>MUI Design</h4>
                <div>
                    <TextField  onChange={handleIdChange} className="w-50" label="User Id" variant="standard" ></TextField>
                </div>
                <div >
                    <TextField onChange={handlePassword} className="w-50" label="Password" variant="standard" ></TextField>
                </div>
                <div className="my-4">
                    <Button onClick={handlLoginClick} color="error" className="w-50" variant="contained" > Login </Button>
                </div>
            </div>
        </div>
    )
}
