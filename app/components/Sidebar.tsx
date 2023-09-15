'use client'

import {elementList} from "@/script/data";
import Image from "next/image";
import {useRef, useState} from "react";

export default function Sidebar() {
    const [isShow, setIsShow] = useState(false);
    function handleSidebarShow(){
        setIsShow(!isShow);
    }
    function handleSidebarClose(){
        setIsShow(false);
    }
    return (
        <>
            <div className="z-50 top-0 left-0 pt-3 pl-2 fixed">
                <button onClick={handleSidebarShow}>
                    <Image src="/list.svg" alt="展开" width="24" height="24" />
                </button>
            </div>
            <div id="sidebar" className={`pt-8 slider ${isShow && 'active'}`}>
                {elementList.map((item, index) => (
                    <a href={'#' + item.id} key={index} onClick={handleSidebarClose}>
                        <div className="pl-6 py-5 hover:bg-sky-200 text-sm text-gray-800 font-medium">
                            {item.name}
                        </div>
                    </a>
                ))}
            </div>
            {isShow && (
                <div id="overlay" className="overlay" onClick={handleSidebarClose}></div>
            )}
        </>
    )
}