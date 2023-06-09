'use client'

import Card from "@/app/components/Card";
import React, {ChangeEvent, useState} from "react";
import BaseButton from "@/app/components/button/BaseButton";
import Copy from "@/app/components/button/Copy";
import {highlightJSON} from "@/script/util";

interface JsonFormatProps {
    id: string
    title: string
}

const JsonFormat:React.FC<JsonFormatProps> = ({id, title}) => {
    const [content, setContent] = useState('');
    const [objContent, setObjContent] = useState('');
    const [result, setResult] = useState(false);
    const handleContentChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setContent(event.target.value);
        if(!event.target.value){
            setObjContent('')
        }
    }
    function handleJsonFormat(){
        if(!content){
            alert("JSON字符串不能为空！");
            return;
        }
        try{
            const tempObj = JSON.parse(content);
            setResult(true);
            setObjContent(highlightJSON(JSON.stringify(tempObj, null, 4)));
        }catch (ex){
            setResult(false)
            setObjContent(content)
        }
    }
    return (
        <>
            <Card id={id} title={title}>
                <div>
                    <textarea className="border-2 border-gray-50 bg-gray-50 rounded-md w-full text-gray-700 h-40 p-2 focus:outline-none focus:border-blue-300 resize-none"
                              placeholder="请输入待格式化的JSON字符串..."
                              value={content}
                              onChange={handleContentChange}
                    />
                </div>
                <div className="mt-4 text-center">
                    <BaseButton text="格式化JSON" onChildEvent={handleJsonFormat} />
                </div>
                {objContent && (
                    <div className="mt-3 fade-show">
                        <div className="flex justify-between py-2">
                            <div className="pl-3">
                                <p className={result ? 'text-green-500' : 'text-red-500'}>{result ? '正确的JSON格式' : 'JSON格式错误'}</p>
                            </div>
                            <div className="relative top-10 right-2 ">
                                <Copy value={objContent} />
                            </div>
                        </div>
                        <div dangerouslySetInnerHTML={{__html: objContent}}
                             className="border-2 border-gray-50 bg-gray-50 rounded-md w-full text-gray-700 h-auto p-2 pr-8 whitespace-pre-wrap json-highlight ">
                        </div>
                    </div>
                )}
            </Card>
        </>
    )
}

export default JsonFormat;