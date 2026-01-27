import "@/app/globals.css";
import Header from "@/components/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="text-gray-900 antialiased">
        <Header />
        {children}
      </body>
    </html>
  );
}
