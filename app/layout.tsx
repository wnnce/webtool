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
          <head>
            <meta name="baidu-site-verification" content="codeva-kEnfIut94G" />
            <title>{metadata.title}</title>
          </head>
          <body>{children}</body>
      </html>
    )
}
