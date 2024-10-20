import axios from "axios";
import { Formik,Form,Field,ErrorMessage } from "formik";
import React from "react";
import * as yup from "yup";
import { SideBar } from "../slid-bar/fakestore-index";

export class UserLogin extends React.Component
{
    constructor(){
       super();   
    }


    render() {
         return(
            <div className="container-fluid">
                <header className="mt-4">
                    <SideBar title="Shopper." navitems={['Home', 'Shop', 'Blog', 'Page', 'Contact']} />
                </header>
            </div>
         )
    }
}


