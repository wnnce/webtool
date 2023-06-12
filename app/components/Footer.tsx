export default function Footer() {
    return (
        <div>
            <p className="text-gray-700 text-center">
                一个Web开发常用工具站，使用
                <a className="text-sky-400 hover:underline" href="https://nextjs.org" target="_blank">Next.js</a>
                和
                <a className="text-sky-400 hover:underline" href="https://vercel.com" target="_blank">Vercel</a>
                驱动 |
                <a className="text-sky-400 hover:underline" href="https://github.com/wnnce/webtool" target="_blank"> Github</a>
                地址
            </p>
            <div className="flex mt-2 justify-center">
                <span className="px-2">
                    <img src="https://img.shields.io/static/v1?style=appveyor&logo=github&label=Github&message=webtool&color=green" alt="Github" />
                </span>
                <span className="px-2">
                    <img src="https://img.shields.io/static/v1?style=appveyor&logo=next.js&label=Next.js&message=13.4.4&color=block" alt="Next.js"/>
                </span>
                <span className="px-2">
                    <img src="https://img.shields.io/static/v1?style=appveyor&logo=vercel&label=Vercel&message=wnnce&color=blue" alt="Vercel"/>
                </span>
            </div>
        </div>
    )
}