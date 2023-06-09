'use client'

import Card from "@/app/components/Card";
import React, {ChangeEvent, useState} from "react";
import BaseButton from "@/app/components/button/BaseButton";
import OutInput from "@/app/components/input/OutInput";
import {dateTimeFormat, timestampFormat} from "@/script/util";

interface TimestampProps {
    id: string
    title: string
}

const Timestamp: React.FC<TimestampProps> = ({id, title}) => {
    const [selectValue, setSelectValue] = useState('0');
    const [timestamp, setTimestamp] = useState('');
    const [value, setValue] = useState('');
    const [toValue, setToValue] = useState('');

    const timer = setInterval(async () => {
        const timestamp = Math.round(new Date().getTime() * 0.001);
        setTimestamp(timestamp.toString());
    }, 1000)

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
        if(!event.target.value){
            setToValue('')
        }
    }
    function handleFormat(){
        if (selectValue === '0'){
            if(!value){
                alert("时间戳不能为空！")
                return;
            }
            const length = value.length;
            if (length !== 10 && length !== 13){
                alert("时间戳格式错误！")
                return;
            }
            let timestamp = Number(value);
            if (isNaN(timestamp)){
                alert("时间戳格式错误！")
                return;
            }
            timestamp = length === 10 ? timestamp * 1000 : timestamp;
            setToValue(timestampFormat(timestamp));
        }else {
            const pattern = /^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/;
            if(pattern.test(value)){
               setToValue(dateTimeFormat(value).toString())
            }else {
                alert("日期时间格式错误！")
            }
        }
    }
    function handleSelectChange(value: string){
        setSelectValue(value);
    }
    return (
        <Card id={id} title={title} options={['时间戳转日期', '日期转时间戳']} onSelectChange={handleSelectChange}>
            <p className="text-gray-700">
                当前时间戳：<span className="hover:text-blue-500">{timestamp}</span>
            </p>
            <div className="mt-3">
                <input value={value}
                       className="border-gray-50 rounded-md border-2 bg-gray-50 p-2 pr-8 w-full text-gray-700 focus:outline-none focus:border-blue-300"
                       placeholder={selectValue === '0' ? "请输入待转换的时间戳，支持10位13位..." : "请输入待转换的时间，yyyy-MM-dd HH:mm:ss格式..."}
                       onChange={handleInputChange}
                />
            </div>
            <div className="text-center mt-4">
                <BaseButton text={selectValue === '0' ? "时间戳转换" : "日期格式转换"} onChildEvent={handleFormat} />
            </div>
            {toValue && (
                <div className="mt-3 fade-show">
                    <OutInput value={toValue} />
                </div>
            )}
        </Card>
    )
}

export default Timestamp;