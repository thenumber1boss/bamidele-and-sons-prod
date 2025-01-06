import  Navbar  from '@components/header/Navbar'
import Footer from '@components/footer/footer';
import StickySocials from '@components/ui/stickySocials';
import type { Metadata } from "next";
import "@app/globals.css";

export const metadata: Metadata = {
  title: "Bamidele and Sons Metal Steel World",
  description: "Bamidele and Sons Metal Steel World is a leading steel company in Nigeria. We deal in sales and instalations of all kinds of stainless and aluminum products for interior and exterior use cases in homes and offices such as balcony and stair railings, gates, doors, bathroom panes, windows, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
        <StickySocials />
      </body>
    </html>
  );
}
