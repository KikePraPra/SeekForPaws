import { useState, useEffect } from "react";

// Define el tipo para cada grupo de filtros
type FilterGroup = {
  label: string;      // Nombre visible del grupo de filtro
  key: string;        // Clave que identifica el grupo (usado para filtrar)
  options: string[];  // Opciones disponibles para seleccionar dentro del grupo
};

// Props que recibe el componente FilterPanel
type Props = {
  groups: FilterGroup[];  // Array de grupos de filtros para mostrar
  onFilterChange: (filters: { [key: string]: string[] }) => void; // Callback cuando cambian los filtros
};

export default function FilterPanel({ groups, onFilterChange }: Props) {
  // Estado para controlar si el panel de filtros está abierto o cerrado
  const [open, setOpen] = useState(false);

  // Estado que guarda qué opciones están seleccionadas en cada grupo
  // Inicialmente es un objeto con arrays vacíos para cada grupo (no seleccionado)
  const [filters, setFilters] = useState(() =>
    groups.reduce(
      (acc, group) => {
        acc[group.key] = [];
        return acc;
      },
      {} as { [key: string]: string[] }
    )
  );

  // Cada vez que cambian los filtros, se notifica al componente padre a través del callback
  useEffect(() => {
    onFilterChange(filters);
  }, [filters, onFilterChange]);

  // Función para alternar la selección de una opción dentro de un grupo
  const toggleFilter = (key: string, option: string) => {
    setFilters((prev) => {
      // Verifica si la opción ya está seleccionada
      const isSelected = prev[key].includes(option);
      // Si está seleccionada, la elimina; si no, la agrega
      const updated = isSelected
        ? prev[key].filter((item) => item !== option)
        : [...prev[key], option];
      // Devuelve el nuevo estado con la actualización para ese grupo
      return { ...prev, [key]: updated };
    });
  };

  return (
    // Contenedor principal del panel, con ancho máximo fijo para evitar desarmes
    <section className="w-full mt-4 max-w-md min-w-[300px] font-fredoka">
      {/* Botón que abre/cierra el panel de filtros */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full border border-gray-300 bg-white text-gray-700 px-4 py-2 rounded-lg flex justify-between items-center"
        aria-expanded={open}
      >
        {/* Texto cambia según el estado abierto/cerrado */}
        <span>{open ? "Ocultar filtros" : "Mostrar filtros"}</span>
        {/* Flecha hacia arriba o abajo */}
        <span>{open ? "▲" : "▼"}</span>
      </button>

      {/* Si el panel está abierto, muestra las opciones de filtros */}
      {open && (
        <div className="border border-gray-300 rounded-lg bg-white p-4">
          {/* Itera sobre cada grupo de filtros */}
          {groups.map(({ label, key, options }) => (
            <section key={key} className="mb-4">
              {/* Título del grupo */}
              <p className="text-base font-semibold mb-2">{label}</p>
              {/* Lista de opciones */}
              <ul className="space-y-2">
                {options.map((option) => (
                  <li key={option}>
                    {/* Cada opción es un checkbox con etiqueta */}
                    <label className="flex items-center gap-2 cursor-pointer font-light">
                      <input
                        type="checkbox"
                        checked={filters[key]?.includes(option)} // Estado del checkbox
                        onChange={() => toggleFilter(key, option)} // Al cambiar, alterna la selección
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
