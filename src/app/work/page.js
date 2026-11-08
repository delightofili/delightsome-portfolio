import Work from "../components/Work";
import Footer from "../components/Footer";

export const metadata = {
  title: "Work | Chukwunonso Ofili",
  description:
    "Digital health tools and fullstack products built by Chukwunonso Ofili.",
};

export default function WorkPage() {
  return (
    <main className="pt-16">
      <Work showAll />
      <Footer />
    </main>
  );
}
