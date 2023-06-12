import React, {ChangeEvent, ReactNode} from "react";

interface CardProps {
    id: string;
    title: string;
    options?: string[];
    onSelectChange?: any;
    children?: ReactNode;
}

const Card: React.FC<CardProps> = ({ id, title, options, onSelectChange , children }) => {
    const handlerSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
        onSelectChange(event.target.value)
    }
    return (
        <div id={id} className="bg-white rounded-xl p-4 xl:p-6">
            <div className="border-l-4 border-l-cyan-400 px-3 flex justify-between">
                <div>
                    <p className="font-bold text-xl text-gray-700">{title}</p>
                </div>
                <div>{options && (
                    <select className="bg-white focus:outline-none focus:border-cyan-100 border px-2" onChange={handlerSelectChange}>
                        {options.map((item, index) => (
                            <option key={index} value={index}>{item}</option>
                        ))}
                    </select>
                )}
                </div>
            </div>
            {children && (
                <div className="mt-4">
                    {children}
                </div>
            )}
        </div>
    )
}

export default Card