import Navbar from "../../components/Navbar";
import Contact from "../../components/Contact";
import ScrollAnimations from "../../components/ScrollAnimations";

export const metadata = {
  title: "Contact | Muhammad Hasnain",
};

export default function ContactPage() {
  return (
    <div style={{ minHeight: "100vh", background: "#0b0d13", color: "#e8eaf0" }}>
      <ScrollAnimations />
      <Navbar />
      <main><Contact /></main>
    </div>
  );
}
