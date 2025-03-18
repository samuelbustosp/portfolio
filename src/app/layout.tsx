import Navbar from "@/components/Navbar";
import "./globals.css";
import Sidebar from "@/components/Sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        <Sidebar/>
        {children}
      </body>
    </html>
  );
}
