import Navbar from "../../components/Navbar";
import Skills from "../../components/Skills";
import ScrollAnimations from "../../components/ScrollAnimations";

export const metadata = {
  title: "Skills | Muhammad Hasnain",
};

export default function SkillsPage() {
  return (
    <div style={{ minHeight: "100vh", background: "#0b0d13", color: "#e8eaf0" }}>
      <ScrollAnimations />
      <Navbar />
      <main><Skills /></main>
    </div>
  );
}
