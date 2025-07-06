// Importación de hooks de React y componentes personalizados
import { useEffect, useState, useCallback } from "react";
import Button from "../ui/Button"; // Botón reutilizable
import FilterPanel from "../ui/FilterPanel"; // Componente para aplicar filtros
import Container from "../ui/Container"; // Componente principal que renderiza la vista

// Definición del grupo de filtros disponibles
const groups = [
  {
    label: "Estado", // Título del grupo de filtro
    key: "state", // Clave que se usará para filtrar
    options: ["Perdido", "Encontrado"], // Opciones disponibles
  },
];

// Botón de regreso que usa el historial del navegador
const btnBack = (
  <Button
    icon="/back.svg" // Icono del botón
    style="w-7 h-5 translate-y-[-2rem] absolute right-7" // Estilos de Tailwind CSS
    onClick={() => history.back()} // Acción al hacer clic
  />
);

// Componente principal que representa la página de reportes
export default function ReportList() {
  // Estados para manejar la información y la UI
  const [miniCardsList, setMiniCardsList] = useState<any[]>([]); // Lista completa de reportes
  const [filteredCards, setFilteredCards] = useState<any[]>([]); // Lista filtrada según filtros
  const [loading, setLoading] = useState(true); // Indica si los datos están cargando
  const [error, setError] = useState(""); // Mensaje de error si falla la carga

  // Efecto que se ejecuta al montar el componente para cargar los datos
  useEffect(() => {
    fetch("http://backforpaws.test/api/v1/report/all") // Llama a la API
      .then((res) => {
        if (!res.ok) throw new Error("No se pudo cargar la información"); // Valida la respuesta
        return res.json(); // Convierte la respuesta a JSON
      })
      .then((data) => {
        const api_base = "http://backforpaws.test/storage/"; // Ruta base de imágenes

        // Transforma cada reporte en un objeto simplificado
        const cards = data.map((report: any) => {
          const rawDate = new Date(report.created_at); // Fecha en formato Date
          const shortDate = rawDate.toLocaleDateString("es-ES", {
            day: "2-digit",
            month: "short",
            year: "numeric",
          }); // Formatea la fecha

          // Retorna un objeto con los datos necesarios
          return {
            image: report.pet_image
              ? `${api_base}${report.pet_image}`
              : undefined,
            name: report.pet_name,
            state: report.pet_state,
            lastPlace: report.last_place,
            date: shortDate,
          };
        });

        // Guarda los datos en los estados
        setMiniCardsList(cards); // Lista original
        setFilteredCards(cards); // Lista filtrada (por defecto igual)
        setLoading(false); // Termina la carga
      })
      .catch((err) => {
        // Si hay error, lo guarda en el estado
        setError(err.message || "Error al cargar los datos");
        setLoading(false);
      });
  }, []); // Se ejecuta una vez al montar el componente

  // Función para manejar los filtros seleccionados
  const handleFilterChange = useCallback(
    (filters: { [key: string]: string[] }) => {
      // Filtra la lista según los filtros seleccionados
      const filtered = miniCardsList.filter((card) => {
        return Object.entries(filters).every(([key, selectedOptions]) => {
          if (selectedOptions.length === 0) return true; // No hay filtros aplicados
          return selectedOptions.includes(card[key]); // Compara con el valor del card
        });
      });

      setFilteredCards(filtered); // Actualiza la lista filtrada
    },
    [miniCardsList] // Dependencia: se actualiza si cambia la lista original
  );

  // Propiedades que se pasan al componente Container
  const sliderProps = {
    image: "img-main.jpeg", // Imagen de cabecera
    title: "Lista de Reportes", // Título
    text: <FilterPanel groups={groups} onFilterChange={handleFilterChange} />, // Filtro embebido
    miniCards: filteredCards, // Tarjetas filtradas que se mostrarán
  };

  // Renderiza diferentes estados según la situación
  if (loading) return <div>Cargando...</div>; // Mientras carga
  if (error) return <div className="text-red-500">{error}</div>; // Si hay error

  // Renderiza el componente principal con los props necesarios
  return <Container button={btnBack} mainCard={sliderProps} />;
}
