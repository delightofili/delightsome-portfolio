import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export const metadata = {
  title: "Chukwunonso Ofili — Fullstack Developer",
  description:
    "Portfolio of Chukwunonso Ofili, a Fullstack Developer building thoughtful digital products and scalable web applications.",
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
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={manrope.variable}>{children}</body>
    </html>
  );
}
