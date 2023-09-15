'use client'

import React, {ChangeEvent, useEffect, useState} from "react";
import Card from "@/app/components/Card";
import BaseButton from "@/app/components/button/BaseButton";
import {encodes} from "@/script/util";
import Copy from "@/app/components/button/Copy";

interface GlobalEncodeProps{
    id: string;
    title: string;
    encodeType: string;
    options?: string[];
    functionIndex: number
}


const GlobalEncode: React.FC<GlobalEncodeProps> = ({id, title, options, encodeType, functionIndex}) => {
    const [content, setContent] = useState('');
    const [codeContent, setCodeContent] = useState('');
    const [selectValue, setSelectValue] = useState('0');

    const handlerContentChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setContent(event.target.value)
        if(!event.target.value){
            setCodeContent('');
        }
    }
    const handlerSelectChange = (value: string) => {
        setSelectValue(value)
    }
    function handlerEncode(){
        if(!content){
            const message = selectValue === '0' ? '待编码的字符串不能为空！' : '待解码的字符串不能为空！';
            alert(message)
        }
        const handlerEncode = encodes[functionIndex];
        setCodeContent(handlerEncode(content, selectValue));
    }
    return (
        <>
            <Card id={id} title={title} options={options} onSelectChange={handlerSelectChange}>
                <div>
                    <textarea className="border-2 border-gray-50 bg-gray-50 rounded-md w-full text-gray-700 h-40 p-2 focus:outline-none focus:border-blue-300 resize-none"
                              placeholder={selectValue === '0' ? '请输入待编码的字符串...' : '请输入待解码的字符串...'}
                              value={content}
                              onChange={handlerContentChange}
                    />
                </div>
                <div className="flex justify-around mt-4">
                    <BaseButton text={selectValue === '0' ? encodeType + '编码' : encodeType + '解码'}
                                onChildEvent={handlerEncode}
                    />
                </div>
                {codeContent && (
                    <div className="mt-3 fade-show">
                        <div className="flex justify-end">
                            <div className="relative top-8 right-2 ">
                                <Copy value={codeContent} />
                            </div>
                        </div>
                        <textarea
                            className="
                            border-2 border-gray-50 bg-gray-50 rounded-md w-full text-gray-700 h-40 p-2 pr-4
                            focus:outline-none break-words scrollbar-none resize-none" disabled
                            value={codeContent}
                        />
                    </div>
                )}
            </Card>
        </>
    )
}

export default GlobalEncode