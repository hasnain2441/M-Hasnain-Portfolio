import Navbar from "../../components/Navbar";
import Projects from "../../components/Projects";
import ScrollAnimations from "../../components/ScrollAnimations";

export const metadata = {
  title: "Projects | Muhammad Hasnain",
};

export default function ProjectsPage() {
  return (
    <div style={{ minHeight: "100vh", background: "#0b0d13", color: "#e8eaf0" }}>
      <ScrollAnimations />
      <Navbar />
      <main><Projects /></main>
    </div>
  );
}
