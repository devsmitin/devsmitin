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
  metadataBase: new URL("https://devsmit.in"),
  title: "Smit Modi — Senior Shopify Developer",
  description:
    "10 years of agency-side Shopify work — custom themes, checkout extensions, platform migrations, and API integrations for international brands.",
  openGraph: {
    title: "Smit Modi — Senior Shopify Developer",
    description:
      "10 years of agency-side Shopify work — custom themes, checkout extensions, platform migrations, and API integrations for international brands.",
    url: "https://devsmit.in",
    siteName: "Smit Modi",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Smit Modi — Senior Shopify Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Smit Modi — Senior Shopify Developer",
    description:
      "10 years of agency-side Shopify work — custom themes, checkout extensions, platform migrations, and API integrations for international brands.",
    images: ["/og-image.png"],
  },
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
