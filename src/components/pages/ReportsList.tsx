import { useEffect, useState, useCallback } from "react"; // Importa hooks de React para estado, efectos y memoización
import Button from "../ui/Button"; // Componente botón reutilizable
import FilterPanel from "../ui/FilterPanel"; // Componente para mostrar filtros
import Container from "../ui/Container"; // Contenedor principal de la UI

// Definición de los grupos de filtros que estarán disponibles en la interfaz
const groups = [
  {
    label: "Estado", // Título del filtro
    key: "state",   // Clave para filtrar por este campo
    options: ["Perdido", "Encontrado"], // Opciones disponibles para filtrar
  },
  {
    label: "Provincia",
    key: "lastPlace", // Clave para filtrar por provincia, debe coincidir con la propiedad del objeto de datos
    options: [
      "San José",
      "Alajuela",
      "Cartago",
      "Heredia",
      "Guanacaste",
      "Puntarenas",
      "Limón",
    ],
  },
];

// Definición del botón de volver a la página anterior usando el historial del navegador
const btnBack = (
  <Button
    icon="/back.svg" // Icono del botón
    style="w-7 h-5 translate-y-[-2rem] absolute right-7" // Clases Tailwind para posicionar y tamaño
    onClick={() => history.back()} // Acción para ir atrás al hacer clic
  />
);

// Componente principal que muestra la lista de reportes con filtros
export default function ReportList() {
  // Estado para guardar la lista completa de reportes obtenidos del backend
  const [miniCardsList, setMiniCardsList] = useState<any[]>([]);
  // Estado para guardar la lista de reportes ya filtrada
  const [filteredCards, setFilteredCards] = useState<any[]>([]);
  // Estado para controlar la carga de datos
  const [loading, setLoading] = useState(true);
  // Estado para almacenar mensajes de error si ocurren
  const [error, setError] = useState("");

  // useEffect para cargar datos una vez que el componente se monta
  useEffect(() => {
    fetch("http://backforpaws.test/api/v1/report/all") // Llamada a la API para obtener reportes
      .then((res) => {
        if (!res.ok) throw new Error("No se pudo cargar la información"); // Si la respuesta no es correcta, lanza error
        return res.json(); // Convierte la respuesta a JSON
      })
      .then((data) => {
        const api_base = "http://backforpaws.test/storage/"; // URL base para las imágenes

        // Mapeo de cada reporte para transformarlo a un formato que la UI usará
        const cards = data.map((report: any) => {
          const rawDate = new Date(report.created_at); // Convierte la fecha cruda a objeto Date
          const shortDate = rawDate.toLocaleDateString("es-ES", {
            day: "2-digit",
            month: "short",
            year: "numeric",
          }); // Formatea la fecha en formato corto y local español

          return {
            image: report.pet_image
              ? `${api_base}${report.pet_image}` // Si hay imagen, arma la URL completa
              : undefined,
            name: report.pet_name,
            state: report.pet_state,
            lastPlace: report.last_place, // Lugar, usado también para filtro de provincia
            date: shortDate, // Fecha formateada
          };
        });

        // Guarda la lista original y la filtrada (inicialmente sin filtro)
        setMiniCardsList(cards);
        setFilteredCards(cards);
        setLoading(false); // Marca como que terminó la carga
      })
      .catch((err) => {
        // En caso de error guarda el mensaje y marca carga terminada
        setError(err.message || "Error al cargar los datos");
        setLoading(false);
      });
  }, []); // El arreglo vacío asegura que esto solo corra una vez al montar

  // Función que maneja los cambios en los filtros
  const handleFilterChange = useCallback(
    (filters: { [key: string]: string[] }) => {
      // Filtra la lista original según los filtros aplicados
      const filtered = miniCardsList.filter((card) => {
        return Object.entries(filters).every(([key, selectedOptions]) => {
          if (selectedOptions.length === 0) return true; // Si no hay filtros para esta clave, pasa todos
          return selectedOptions.includes(card[key]); // Si el valor del card está en los filtros seleccionados
        });
      });

      // Actualiza la lista de reportes mostrada con los filtrados
      setFilteredCards(filtered);
    },
    [miniCardsList] // Solo recalcula si cambia la lista original de reportes
  );

  // Props que se pasan al componente Container para renderizar la UI
  const sliderProps = {
    image: "img-main.jpeg", // Imagen principal de encabezado
    title: "Lista de Reportes", // Título visible
    text: <FilterPanel groups={groups} onFilterChange={handleFilterChange} />, // Panel de filtros
    miniCards: filteredCards, // Lista filtrada para mostrar
  };

  // Mientras se carga, muestra mensaje de carga
  if (loading) return <div>Cargando...</div>;
  // Si hubo error, muestra el mensaje
  if (error) return <div className="text-red-500">{error}</div>;

  // Renderiza el contenedor principal con botón atrás y la lista de reportes filtrada
  return <Container button={btnBack} mainCard={sliderProps} />;
}
