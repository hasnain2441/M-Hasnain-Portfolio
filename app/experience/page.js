import Navbar from "../../components/Navbar";
import Experience from "../../components/Experience";
import ScrollAnimations from "../../components/ScrollAnimations";

export const metadata = {
  title: "Experience | Muhammad Hasnain",
};

export default function ExperiencePage() {
  return (
    <div style={{ minHeight: "100vh", background: "#0b0d13", color: "#e8eaf0" }}>
      <ScrollAnimations />
      <Navbar />
      <main><Experience /></main>
    </div>
  );
}
