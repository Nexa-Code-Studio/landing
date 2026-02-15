import "@/app/globals.css";
import Header from "@/components/Navbar";
import { LanguageProvider } from "@/i18n/LanguageContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="text-gray-900 antialiased">
        <LanguageProvider>
          <Header />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}

export const metadata = {
  title: "nexacode.dev",
  icons: {
    icon: "/images/logo-light.png",
    shortcut: "/images/logo-light.png",
    apple: "/images/logo-light.png",
  },
};
