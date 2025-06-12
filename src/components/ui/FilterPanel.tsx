import { useState, useEffect } from "react";

type FilterGroup = {
  label: string;
  key: string;
  options: string[];
};

type Props = {
  groups: FilterGroup[];
  onFilterChange: (filters: { [key: string]: string[] }) => void;
};

export default function FilterPanel({ groups, onFilterChange }: Props) {
  const [open, setOpen] = useState(false);

  const [filters, setFilters] = useState(() =>
    groups.reduce(
      (acc, group) => {
        acc[group.key] = [];
        return acc;
      },
      {} as { [key: string]: string[] }
    )
  );

  useEffect(() => {
    onFilterChange(filters);
  }, [filters, onFilterChange]);

  const toggleFilter = (key: string, option: string) => {
    setFilters((prev) => {
      const isSelected = prev[key].includes(option);
      const updated = isSelected
        ? prev[key].filter((item) => item !== option)
        : [...prev[key], option];
      return { ...prev, [key]: updated };
    });
  };

  return (
    <section className="w-full mt-4 max-w-md font-fredoka">
      <button
        onClick={() => setOpen(!open)}
        className="w-full border border-gray-300 bg-white text-gray-700 px-4 py-2 rounded-lg flex justify-between items-center "
        aria-expanded={open}
      >
        <span>{open ? "Ocultar filtros" : "Mostrar filtros"}</span>
        <span>{open ? "▲" : "▼"}</span>
      </button>

      {open && (
        <div className=" border border-gray-300 rounded-lg bg-white p-4 ">
          {groups.map(({ label, key, options }) => (
            <section key={key} className="mb-4">
              <p className="text-base font-semibold mb-2 ">{label}</p>
              <ul className="space-y-2">
                {options.map((option) => (
                  <li key={option}>
                    <label className="flex items-center gap-2 cursor-pointer font-light">
                      <input
                        type="checkbox"
                        checked={filters[key]?.includes(option)}
                        onChange={() => toggleFilter(key, option)}
                      />
                      <span>{option}</span>
                    </label>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      )}
    </section>
  );
}
