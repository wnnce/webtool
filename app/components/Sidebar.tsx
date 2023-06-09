'use client'

import {elementList} from "@/script/data";
import Image from "next/image";
import {useRef, useState} from "react";

export default function Sidebar() {
    const [isShow, setIsShow] = useState(false);
    function handleSidebarShow(){
        setIsShow(!isShow)
    }
    function handleSidebarClose(){
        setIsShow(false)
    }
    return (
        <>
            <div className="md:hidden z-50 top-0 left-0 pt-3 pl-2 fixed">
                <button onClick={handleSidebarShow}>
                    <Image src="/list.svg" alt="展开" width="24" height="24" />
                </button>
            </div>
            <div id="sidebar" className={`bg-white md:w-80 w-1/3 hidden fixed md:block z-10 h-screen md:sticky top-0 pt-12 ${isShow && 'sidebar-show'}`}>
                {elementList.map((item, index) => (
                    <a href={'#' + item.id} key={index} onClick={handleSidebarClose}>
                        <div className="pl-6 py-5 hover:bg-sky-200 text-sm text-gray-800 font-medium">
                            {item.name}
                        </div>
                    </a>
                ))}
            </div>
        </>

    )
}