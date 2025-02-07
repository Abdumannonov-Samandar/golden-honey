import RootProvider from "@/components/global/provider";
import SiteFooter from '@/components/global/site-footer'
import SiteHeader from '@/components/global/site-header'
import "@/styles/globals.css";
import { baseURL, createMetadata } from "@/utils/metadata";
import { Viewport } from "next";
import { Lora } from "next/font/google";

const lora = Lora({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });


export const metadata = createMetadata({
  title: {
    template: "%s | Honey",
    default: "Honey",
  },
  description: "Best place to buy honey.",
  metadataBase: baseURL,
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "black" },
    { media: "(prefers-color-scheme: light)", color: "white" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${lora.className} antialiased`}>
        <SiteHeader />
        <RootProvider>{children}</RootProvider>
        <SiteFooter />
      </body>
    </html>
  );
}
