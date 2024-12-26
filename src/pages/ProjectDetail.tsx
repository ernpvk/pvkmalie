import { useParams, useNavigate } from "react-router-dom";
import { PROJECTS } from "../shared/projects";
import { ArrowLeft } from "lucide-react";

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = PROJECTS.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-headline text-stone-600">Project not found</h1>
        <button onClick={() => navigate("/")} className="text-primary hover:underline font-button">
          Back to Home
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white py-10 md:py-18">
      <div className="container mx-16">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-stone-600 hover:text-primary-2 transition-colors mb-8 font-button text-sm md:text-lg md:hidden block"
        >
          <ArrowLeft size={18} />
        </button>
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-stone-600 hover:text-primary-2 transition-colors mb-8 font-button text-sm md:text-lg hidden md:flex"
        >
          <ArrowLeft size={18} /> Back to Home
        </button>
      </div>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-cols justify-center">
          <h1 className="font-headline text-primary text-4xl lg:text-6xl">{project.name}</h1>
        </div>
      </div>
    </div>
  );
}
