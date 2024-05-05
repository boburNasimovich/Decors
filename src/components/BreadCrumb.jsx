import React from 'react'
import { Link, useLocation } from "react-router-dom";


const BreadCrumb = () => {
    const location = useLocation();
    const pathArr = location.pathname.split("/");

    const tayyorArr = pathArr.filter((path) => path !== "" && path !== 'users');
    return (
        <ul className="flex px-5 space-x-5 w-full max-w-[767px] sm:max-w-[1023px] lg:max-w-7xl mx-auto py-3 sm:py-5 lg:py-10 items-center">
            <li>
                <Link className="font-normal text-[20px]" to="/">
                    Glavnaya
                </Link>
            </li>
            {tayyorArr.map((path, index) => {
                return (
                    <li key={index}>
                        {index !== tayyorArr.length - 1 ? (

                            <Link className="font-normal text-[20px]" to={path}>
                                {path}
                            </Link>
                        ) : (
                            <span>/ {path}</span>
                        )}
                    </li>
                );
            })}
        </ul>
    )
}

export default BreadCrumb