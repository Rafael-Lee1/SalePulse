
import { motion } from "framer-motion";

interface FilterOption {
  id: string;
  label: string;
}

interface SalesFilterBarProps {
  filters: FilterOption[];
  selectedFilter: string;
  onFilterChange: (filterId: string) => void;
}

export function SalesFilterBar({ filters, selectedFilter, onFilterChange }: SalesFilterBarProps) {
  return (
    <div className="flex justify-between items-center mb-6">
      <h2 className="text-white text-[15px] font-semibold">Sales Statistics</h2>
      
      <div className="flex gap-2">
        {filters.map((filter) => (
          <button
            key={filter.id}
            className={`px-3 py-1 text-xs rounded-full transition-all ${
              selectedFilter === filter.id
                ? "bg-[#A9DFD8] text-[#171821] font-medium"
                : "bg-[#2B2B36] text-[#87888C] hover:bg-[#2B2B36]/80"
            }`}
            onClick={() => onFilterChange(filter.id)}
          >
            {filter.label}
          </button>
        ))}
      </div>
    </div>
  );
}
