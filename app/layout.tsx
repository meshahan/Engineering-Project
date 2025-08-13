import type React from "react"
import type { Metadata } from "next"
import { Inter, Roboto_Slab } from "next/font/google"
import { StructuredData } from "@/components/structured-data"
import { generateOrganizationSchema, defaultOrganizationData } from "@/lib/structured-data"
import { IntroVideoWrapper } from "@/components/intro-video-wrapper"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto-slab",
})

export const metadata: Metadata = {
  title: {
    default: "Oil & Gas Construction Co. | Industrial Infrastructure Solutions",
    template: "%s | Oil & Gas Construction Co.",
  },
  description:
    "Leading Oil & Gas project construction company specializing in pipeline infrastructure, industrial facilities, and energy sector solutions with over 25 years of experience.",
  generator: "v0.app",
  keywords: [
    "oil and gas construction",
    "pipeline projects",
    "industrial construction",
    "energy infrastructure",
    "construction services",
    "pipeline construction",
    "industrial facilities",
    "HSE management",
    "quality assurance",
  ],
  authors: [{ name: "Oil & Gas Construction Co." }],
  creator: "Oil & Gas Construction Co.",
  publisher: "Oil & Gas Construction Co.",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://ogconstruction.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Oil & Gas Construction Co. | Industrial Infrastructure Solutions",
    description:
      "Leading Oil & Gas project construction company specializing in pipeline infrastructure, industrial facilities, and energy sector solutions.",
    url: "https://ogconstruction.com",
    siteName: "Oil & Gas Construction Co.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Oil & Gas Construction Co. - Industrial Infrastructure Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Oil & Gas Construction Co. | Industrial Infrastructure Solutions",
    description:
      "Leading Oil & Gas project construction company specializing in pipeline infrastructure and industrial facilities.",
    images: ["/og-image.jpg"],
    creator: "@ogconstruction",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  // Added organization structured data to root layout
  const organizationSchema = generateOrganizationSchema(defaultOrganizationData)

  return (
    <html lang="en" className={`${inter.variable} ${robotoSlab.variable} antialiased`}>
      <head>
        <StructuredData data={organizationSchema} />
      </head>
      <body>
        <IntroVideoWrapper>{children}</IntroVideoWrapper>
      </body>
    </html>
  )
}
