'use client'

import Card from "@/app/components/Card";
import React, {ChangeEvent, useState} from "react";
import {encrypts} from "@/script/util";
import BaseButton from "@/app/components/button/BaseButton";
import OutInput from "@/app/components/input/OutInput";

interface GlobalEncryptProps {
    id: string;
    title: string;
    functionIndex: number;
}

const GlobalEncrypt: React.FC<GlobalEncryptProps> = ({id, title, functionIndex}) => {
    const [content, setContent] = useState('');
    const [encryptContent, setMd5Content] = useState('');
    const handlerContentChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setContent(event.target.value)
        if(!event.target.value){
            setMd5Content('')
        }
    }
    function handlerEncrypt() {
        if(!content){
            alert("待加密字符串不能为空！");
        }else {
            const handlerEncrypt = encrypts[functionIndex];
            setMd5Content(handlerEncrypt(content))
        }
    }
    return (
        <Card id={id} title={title}>
            <div>
                <textarea className="border-2 border-gray-50 bg-gray-50 rounded-md w-full text-gray-700 h-40 p-2 focus:outline-none focus:border-blue-300 resize-none"
                          placeholder="请输入待加密的字符串..." value={content} onChange={handlerContentChange}/>
            </div>
            <div className="text-center mt-4">
                <BaseButton text={title} onChildEvent={handlerEncrypt} />
            </div>
            {encryptContent && (
                <div className="mt-3 fade-show">
                    <div>
                        <OutInput value={encryptContent} message="加密结果(小写)" />
                    </div>
                    <div className="mt-3">
                        <OutInput value={encryptContent.toUpperCase()} message="加密结果(大写)" />
                    </div>
                </div>
            )}
        </Card>
    )
}

export default GlobalEncrypt;