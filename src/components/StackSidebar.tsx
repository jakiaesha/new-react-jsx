import { X } from "lucide-react";
import type { Technology } from "../types/technology";

interface Props {
  stack: Technology[];
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
}

const StackSidebar = ({ stack, onRemove, onRemoveAll }: Props) => {
  return (
    <div className="flex w-full flex-col gap-4 rounded-xl bg-gray-50 p-6 lg:w-80">
      <div>
        <h3 className="text-lg font-semibold text-gray-900">Your Stack</h3>
        <p className="text-sm text-gray-500">{stack.length} Technology Selected</p>
      </div>

      {stack.length === 0 ? (
        <p className="text-sm text-gray-400">Your stack is empty</p>
      ) : (
        <div className="flex flex-col gap-1">
          {stack.map((tech) => (
            <div
              key={tech.id}
              className="flex items-center gap-3 rounded-lg bg-white px-3 py-2 shadow-sm"
            >
              <img src={tech.icon} alt={tech.name} className="h-6 w-6" />
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">{tech.name}</p>
                <p className="text-xs text-gray-400">{tech.category}</p>
              </div>
              <button onClick={() => onRemove(tech.id)} aria-label={`Remove ${tech.name}`}>
                <X className="h-4 w-4 text-gray-400 hover:text-gray-700" />
              </button>
            </div>
          ))}
        </div>
      )}

      <button
        onClick={onRemoveAll}
        disabled={stack.length === 0}
        className="mt-2 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-red-500 disabled:cursor-not-allowed disabled:text-gray-300"
      >
        Remove All
      </button>
    </div>
  );
};

export default StackSidebar;