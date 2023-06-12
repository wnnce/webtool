import '../globals.css';
import Header from "@/app/components/Header";
import Sidebar from "@/app/components/Sidebar";
import React from "react";
import GlobalEncode from "@/app/components/item/GlobalEncode";
import GlobalEncrypt from "@/app/components/item/GlobalEncrypt";
import Timestamp from "@/app/components/item/Timestamp";
import UUID from "@/app/components/item/UUID";
import JsonFormat from "@/app/components/item/JsonFormat";
import {elementList} from "@/script/data";
import RandomNum from "@/app/components/item/RandomNum";
import Footer from "@/app/components/Footer";

export default function Page() {
    return (
        <div className="bg-gray-100 min-h-full min-w-fullv font-mono">
            <Header />
            <div className="min-h-full flex">
                <Sidebar />
                <div className="w-full pt-5 mt-12">
                    <div className="md:w-3/4 xl:2/3 w-11/12 mx-auto">
                        <div className="mb-5">
                            <JsonFormat id={elementList[0].id} title={elementList[0].name} />
                        </div>
                        <div className="mb-5">
                            <GlobalEncrypt id={elementList[1].id} title={elementList[1].name} functionIndex={0} />
                        </div>
                        <div className="mb-5">
                            <GlobalEncrypt id={elementList[2].id} title={elementList[2].name} functionIndex={1} />
                        </div>
                        <div className="mb-5">
                            <GlobalEncrypt id={elementList[3].id} title={elementList[3].name} functionIndex={2} />
                        </div>
                        <div className="mb-5">
                            <GlobalEncode id={elementList[4].id} title={elementList[4].name} encodeType="URL" options={['编码', '解码']} functionIndex={0} />
                        </div>
                        <div className="mb-5">
                            <GlobalEncode id={elementList[5].id} title={elementList[5].name} encodeType="Base64" options={['编码', '解码']} functionIndex={1} />
                        </div>
                        <div className="mb-5">
                            <Timestamp id={elementList[6].id} title={elementList[6].name} />
                        </div>
                        <div className="mb-5">
                            <UUID id={elementList[7].id} title={elementList[7].name} />
                        </div>
                        <div className="mb-5">
                            <RandomNum id={elementList[8].id} title={elementList[8].name} />
                        </div>
                    </div>
                    <div className="bg-white py-4">
                        <Footer />
                    </div>
                </div>
            </div>
        </div>
    )
}
