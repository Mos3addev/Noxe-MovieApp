import React , {useState} from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

export default function RouterLayout({userData , logOut}) {
return<>
    <Navbar userData={userData} logOut={logOut}/>
    <div className="container">
        <Outlet></Outlet>
    </div>
    <Footer/>
</>
}