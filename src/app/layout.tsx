import Navbar from "@/components/Navbar";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <title>Portfolio - BPS</title> 
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="flex">
        <main className="flex-1 flex flex-col">
          <Navbar/>
          <div className="flex ">
            <aside className="hidden md:block">
              <Sidebar />
            </aside>
            {children}
          </div>
          <Footer/>
        </main>
      </body>
    </html>
  );
}
