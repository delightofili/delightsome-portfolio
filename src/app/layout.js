import { Manrope, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import Providers from "./components/Providers";

// body font
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });

// display font for big headings, gives the site its character
const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
});

const description =
  "Chukwunonso Ofili is a digital health and fullstack software developer from Nigeria. He builds offline first health tools like Prima and MedCore HMS, and fullstack web products end to end.";

export const metadata = {
  metadataBase: new URL("https://delightsome.vercel.app"),
  title: "Chukwunonso Ofili | Digital Health & Fullstack Developer",
  description,
  keywords: [
    "Chukwunonso Ofili",
    "Digital Health Developer",
    "Health Tech Developer Nigeria",
    "Fullstack Developer",
    "Next.js Developer",
    "NestJS Developer",
    "Prima",
    "MedCore HMS",
  ],
  authors: [{ name: "Chukwunonso Ofili" }],
  creator: "Chukwunonso Ofili",
  robots: { index: true, follow: true },
  openGraph: {
    title: "Chukwunonso Ofili | Digital Health & Fullstack Developer",
    description,
    type: "website",
    locale: "en_US",
    images: ["/projects/prima.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chukwunonso Ofili | Digital Health & Fullstack Developer",
    description,
    images: ["/projects/prima.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${display.variable}`}>
        {/* Providers holds everything that lives on every page: splash, cursor, navbar, scroll bar */}
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
