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
      <body className="flex">
        <main className="flex-1 flex flex-col">
          <Navbar />
          <div className="flex gap-3">
            <Sidebar />
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
