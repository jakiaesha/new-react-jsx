import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TechnologyCard from "./TechnologyCard";
import StackSidebar from "./StackSidebar";
import type { Technology } from "../types/technology";
import { GRADIENT_TEXT } from "../lib/theme";

const Technologies = () => {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [stack, setStack] = useState<Technology[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/src/data/technologies.json")
      .then((res) => res.json())
      .then((data: Technology[]) => setTechnologies(data))
      .catch(() => toast.error("Failed to load technology data."))
      .finally(() => setLoading(false));
  }, []);

  const handleAdd = (tech: Technology) => {
    const alreadyAdded = stack.some((item) => item.id === tech.id);
    if (alreadyAdded) {
      toast.warning(`${tech.name} is already in your stack.`);
      return;
    }
    setStack((prev) => [...prev, tech]);
    toast.success(`${tech.name} added to your stack.`);
  };

  const handleRemove = (id: string) => {
    const removed = stack.find((item) => item.id === id);
    setStack((prev) => prev.filter((item) => item.id !== id));
    if (removed) toast.info(`${removed.name} removed from your stack.`);
  };

  const handleRemoveAll = () => {
    setStack([]);
    toast.info("Stack cleared.");
  };

  if (loading) {
    return (
      <div className="flex h-64 items-center justify-center">
        <p className="text-gray-400">Loading technologies...</p>
      </div>
    );
  }

  return (
  <div className="px-4 py-10 lg:px-10">
    <div className="mb-8">
      <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
        Explore the <span className={GRADIENT_TEXT}>Technologies</span>
      </h2>
      <p className="mt-2 text-gray-500">
        Pick one technology per category to build your ideal stack.
      </p>
    </div>
    <section className="flex flex-col gap-8 px-4 py-10 lg:flex-row lg:px-10">
      <div className="grid flex-1 grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {technologies.map((tech) => (
          <TechnologyCard
            key={tech.id}
            tech={tech}
            isAdded={stack.some((item) => item.id === tech.id)}
            onAdd={handleAdd}
          />
        ))}
      </div>

      <StackSidebar stack={stack} onRemove={handleRemove} onRemoveAll={handleRemoveAll} />
         </section>

         <ToastContainer position="bottom-right" autoClose={2500} />
       </div>
    

  );
};

export default Technologies;