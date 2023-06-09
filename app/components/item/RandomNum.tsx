'use client'

import React, {ChangeEvent, useState} from "react";
import Card from "@/app/components/Card";
import {checkIsNumber, generateRandom} from "@/script/util";
import BaseButton from "@/app/components/button/BaseButton";
import OutInput from "@/app/components/input/OutInput";

interface RandomNumProps{
    id: string,
    title: string
}

const RandomNum: React.FC<RandomNumProps> = ({id, title}) => {
    const [minNum, setMinNum] = useState('');
    const [maxNum, setMaxNum] = useState('');
    const [randomNum, setRandomNum] = useState('');
    const handleMinInputChange = (event:ChangeEvent<HTMLInputElement>) => {
        if(!event.target.value){
            setMinNum('')
            return;
        }
        if(checkIsNumber(event.target.value)){
            setMinNum(event.target.value)
        }
    }
    const handleMaxInputChange = (event:ChangeEvent<HTMLInputElement>)=> {
        if(!event.target.value){
            setMaxNum('')
            return;
        }
        if(checkIsNumber(event.target.value)){
            setMaxNum(event.target.value)
        }
    }
    function generateRandomNum(){
        if(!minNum || !maxNum){
            alert('最小数和最大数不能为空！')
            return;
        }
        const min = parseInt(minNum);
        const max = parseInt(maxNum);
        if(min >= max){
            alert('最小数不能大于等于最大数！')
            return;
        }
        setRandomNum(generateRandom(min, max).toString())
    }
    function handleClear(){
        setMaxNum('')
        setMinNum('')
        setRandomNum('')
    }
    return(
        <Card id={id} title={title}>
            <div className="flex justify-between">
                <input value={minNum} onChange={handleMinInputChange} className="bg-gray-50 p-2 pr-8 w-2/5 text-gray-700 focus:outline-none" placeholder="最小数" />
                <input value={maxNum} onChange={handleMaxInputChange} className="bg-gray-50 p-2 pr-8 w-2/5 text-gray-700 focus:outline-none" placeholder="最大数" />
            </div>
            <div className="mt-4 flex justify-center">
                <div className="px-2">
                    <BaseButton text="生成随机数" onChildEvent={generateRandomNum} />
                </div>
                <div className="px-2">
                    <BaseButton text="清 除" onChildEvent={handleClear} />
                </div>
            </div>
            {randomNum && (
                <div className="mt-3">
                    <OutInput value={randomNum} />
                </div>
            )}
        </Card>
    )
}

export default RandomNum;