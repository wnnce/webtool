import React from "react";
import Image from "next/image";

interface CopyProps {
    value: string;
    alt?: string;
    width?: number;
    height?: number;
}

const Copy: React.FC<CopyProps> = ({value, alt = '复制', width = 20 , height = 20}) => {
    async function handleCopy(){
        if(value){
            await navigator.clipboard.writeText(value);
        }
    }
    return (
        <Image src="copy.svg" alt={alt} width={width} height={height}
               className="hover:cursor-pointer"
               onClick={handleCopy}
        />
    )
}

export default Copy;