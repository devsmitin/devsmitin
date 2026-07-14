import { Inter, DM_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata = {
  title: "Smit Modi — Senior Shopify Developer",
  description:
    "10 years of agency-side Shopify work — custom themes, checkout extensions, platform migrations, and API integrations for international brands.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${dmMono.variable}`}>
      <head>
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
      </head>
      <body>
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-EC1PWSL2KS"
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              if (!(navigator.doNotTrack == "1" || window.doNotTrack == "1")) {
                window.dataLayer = window.dataLayer || [];
                function gtag(){window.dataLayer && window.dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-EC1PWSL2KS', {"send_page_view": false});
              }
            `,
          }}
        />
        {children}
      </body>
    </html>
  );
}
