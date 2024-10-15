import type { Metadata } from "next";
import NavMenu from "./lib/ui/nav/nav-menu";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header>
          <NavMenu />
        </header>
        {children}
      </body>
    </html>
  );
}
