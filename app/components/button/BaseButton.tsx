import React from "react";

interface BaseButtonProps {
    text: string,
    onChildEvent: any
}

const BaseButton: React.FC<BaseButtonProps> = ({text, onChildEvent}) => {
    return (
        <button className="bg-blue-900 py-2 text px-4 text-white rounded hover:bg-amber-800" onClick={onChildEvent}>
            {text}
        </button>
    )
}
export default BaseButton;