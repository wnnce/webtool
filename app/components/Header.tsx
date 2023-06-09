import Image from "next/image";

export default function Header() {
    return (
        <div className="w-full bg-gray-700 py-3 h-12 z-50 fixed top-0">
            <p className="text-xl text-white font-bold text-center sm:text-2xl mx-auto">Web开发常用工具</p>
        </div>
    )
}