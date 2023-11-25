import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";

const dm_sans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Social share",
  description: "Get social shareable links",
  openGraph: {
    images: [
      "https://res.cloudinary.com/bolub/image/upload/v1700942131/Social%20Share/Figma_OgImage.png",
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={dm_sans.className}>
        <Navbar />

        {children}
      </body>
    </html>
  );
}
