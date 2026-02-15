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
  icons: {
    icon: [
      {
        url: "/images/logo-light.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/images/logo-dark.png",
        media: "(prefers-color-scheme: dark)",
      },
    ],
  },
};
