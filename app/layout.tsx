export const metadata = {
  title: 'Web工具',
  description: 'Web开发常用工具合集',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-cn">
      <body>{children}</body>
    </html>
  )
}
