'use client'

import Card from "@/app/components/Card";
import OutInput from "@/app/components/input/OutInput";
import React, {useState} from "react";
import BaseButton from "@/app/components/button/BaseButton";
import {generateUUID} from "@/script/util";
interface  UUIDProps {
    id: string
    title: string
}

const UUID:React.FC<UUIDProps> = ({id, title}) => {
    const [uuid, setUuid] = useState('');
    function handleMakeUUID(){
        setUuid(generateUUID);
    }
    return(
        <Card id={id} title={title}>
            <div>
                <OutInput value={uuid} />
            </div>
            <div className="mt-4 text-center">
                <BaseButton text="生成随机UUID" onChildEvent={handleMakeUUID} />
            </div>
        </Card>
    )
}

export default UUID;