import Navbar from "../../components/Navbar";
import About from "../../components/About";
import ScrollAnimations from "../../components/ScrollAnimations";

export const metadata = {
  title: "About | Muhammad Hasnain",
};

export default function AboutPage() {
  return (
    <div style={{ minHeight: "100vh", background: "#0b0d13", color: "#e8eaf0" }}>
      <ScrollAnimations />
      <Navbar />
      <main><About /></main>
    </div>
  );
}
