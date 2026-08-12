import { Manrope } from "next/font/google";
import "./globals.css";
import SplashScreen from "./components/SplashScreen";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export const metadata = {
  title: "Chukwunonso Ofili — Fullstack Developer",
  description:
    "Chukwunonso Ofili is a Fullstack Developer from Nigeria building thoughtful web applications, digital products, and scalable systems.",
  keywords: [
    "Chukwunonso Ofili",
    "Fullstack Developer",
    "Software Developer",
    "Web Developer",
    "Nigeria Developer",
    "React Developer",
    "Next.js Developer",
  ],
  authors: [{ name: "Chukwunonso Ofili" }],
  creator: "Chukwunonso Ofili",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Chukwunonso Ofili - Fullstack Developer",
    description:
      "Fullstack Developer building thoughtful web applications, digital products, and scalable systems.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chukwunonso Ofili — Fullstack Developer",
    description:
      "Fullstack Developer building thoughtful web applications, digital products, and scalable systems.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={manrope.variable}>
        <SplashScreen />
        {children}
      </body>
    </html>
  );
}
