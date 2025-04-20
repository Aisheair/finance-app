import { Outlet } from "react-router"
import Footer from "./components/Footer/Footer"
import MouseFollower from "./components/Mouse/ MouseFollower"
import Navbar from "./components/navbar/navbar"
import React from "react"

export default function Layout() {

    return (
        <><MouseFollower /><Navbar></Navbar><Outlet /><Footer></Footer></>
    )
}