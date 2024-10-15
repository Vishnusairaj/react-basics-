import {ErrorMessage,Formik,Form, Field, useFormik} from "formik";
import * as yup from "yup";
import {useForm} from "react-hook-form";

export function Forms(){
    const {register, handleSubmit, formState:{errors}} = useForm();

    const submit = (values) => {
        console.log(values);
    }

    return(
        <div className="container-fluid">
            <h2>Register</h2>
            <form onSubmit={handleSubmit(submit)}>
                <dl>
                    <dt>UserName</dt>
                    <dd><input type="text" name="UserName" {...register("UserName", { required:true, minLength:4 })} /></dd>
                    <dd className="text-danger">
                        {
                         ((errors.UserName?.type==="required")?<span>Name Required</span>:<span></span> ) 
                                                        && 
                         ((errors.UserName?.type==="minLength")?<span>Name too short..</span>:<span></span>) 
                        
                        }
                    </dd>
                    <dt>Mobile</dt>
                    <dd><input type="text" name="Mobile" {...register("Mobile",  { required:true, pattern:/\+91\d{10}/ })} /></dd>
                    <dd className="text-danger">
                        {
                         ((errors.Mobile?.type==="required")?<span>Mobile Required</span>:<span></span> ) 
                                                        && 
                         ((errors.Mobile?.type==="pattern")?<span>Invalid Mobile</span>:<span></span>) 
                        
                        }
                    </dd>
                </dl>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

