import React from "react";
import Copy from "@/app/components/button/Copy";

interface OutInputProps {
    value: string;
    message?: string;
}

const OutInput: React.FC<OutInputProps> = ({value, message}) => {
    async function handlerCopy() {
        await navigator.clipboard.writeText(value);
    }
    return (
        <>
            {message ? (
                <div className="flex justify-between py-2">
                    <p className="text-gray-700 inline-block">{message}</p>
                    <div className="relative top-10 right-2 ">
                        <Copy value={value} />
                    </div>
                </div>
            ) : (
                <div className="flex justify-end">
                    <div className="relative top-8 right-2 ">
                        <Copy value={value} />
                    </div>
                </div>
            )}
            <input value={value} className="bg-gray-50 p-2 pr-8 w-full text-gray-700" disabled/>
        </>
    )
}
export default OutInput;