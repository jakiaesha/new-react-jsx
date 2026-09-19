import { Star } from "lucide-react";
import { GRADIENT_BG } from "../lib/theme";
import type { Technology } from "../types/technology";

interface Props {
  tech: Technology;
  isAdded: boolean;
  onAdd: (tech: Technology) => void;
}

const TechnologyCard = ({ tech, isAdded, onAdd }: Props) => {
  return (
    <div className="flex flex-col gap-3 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <img src={tech.icon} alt={tech.name} className="h-8 w-8" />
        <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
          {tech.badge}
        </span>
      </div>

      <h3 className="text-xl font-semibold text-gray-900">{tech.name}</h3>
      <p className="text-sm text-gray-500">{tech.description}</p>

      <div className="mt-1 flex items-center gap-3 text-sm text-gray-500">
        <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium">
          {tech.category}
        </span>
        <span>{tech.difficulty}</span>
        <span className="ml-auto flex items-center gap-1 text-gray-700">
          <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
          {tech.rating}
        </span>
      </div>

      <button
        onClick={() => onAdd(tech)}
        disabled={isAdded}
        className={
          isAdded
            ? "mt-2 cursor-not-allowed rounded-lg bg-gray-200 px-6 py-3 font-medium text-gray-500"
            : `mt-2 rounded-lg px-6 py-3 font-medium text-white ${GRADIENT_BG}`
        }
      >
        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </div>
  );
};

export default TechnologyCard;