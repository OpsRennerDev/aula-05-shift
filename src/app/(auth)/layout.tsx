export const metadata = {
    title: "Autenticação",
    description: "Uma descrição"
}

export default function RootLayout({ 
  children 
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
        <html lang="pt-br">
            <body>
                {children}
            </body>
        </html>
    )
}