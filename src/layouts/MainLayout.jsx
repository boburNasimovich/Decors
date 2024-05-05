import React, {useEffect} from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Outlet, useLocation } from 'react-router-dom'
import Navlink from '../components/Navlink'
import BreadCrumb from '../components/BreadCrumb'

const MainLayout = () => {
    const location = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);
    const isHomePage = location.pathname === "/";
    const isNotPage = location.pathname === "*";


    return (
        <>
            <Header />
            <Navlink />
            <main>
                {!isHomePage && !isNotPage && <BreadCrumb />}
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default MainLayout