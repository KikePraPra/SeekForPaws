import { useEffect, useState, useCallback } from "react";
import Button from "../ui/Button";
import FilterPanel from "../ui/FilterPanel";
import Container from "../ui/Container";

// Grupos de filtros, las claves deben coincidir con las propiedades en miniCardsList
const groups = [
  { label: "Estado", key: "state", options: ["adoptado", "en adopción"] }, // valores en minúscula para coincidir con datos
  {
    label: "Provincia",
    key: "lastPlace", // esta es la clave que usaremos en miniCardsList para filtrar por provincia
    options: [
      "San Jose",
      "Alajuela",
      "Cartago",
      "Heredia",
      "Guanacaste",
      "Puntarenas",
      "Limon",
    ],
  },
];

// Botón para regresar
const btnBack = (
  <Button
    icon="/back.svg"
    style="w-7 h-5 translate-y-[-2rem] absolute right-7"
    onClick={() => history.back()}
  />
);

export default function AdoptionList() {
  const [miniCardsList, setMiniCardsList] = useState<any[]>([]);
  const [filteredCards, setFilteredCards] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("http://backforpaws.test/api/v1/adoption/all")
      .then((res) => {
        if (!res.ok) throw new Error("No se pudo cargar la información");
        return res.json();
      })
      .then((data) => {
        const api_base = "http://backforpaws.test/storage/";

        const cards = data.map((adoption: any) => {
          const rawDate = new Date(adoption.created_at);
          const shortDate = rawDate.toLocaleDateString("es-ES", {
            day: "2-digit",
            month: "short",
            year: "numeric",
          });

          return {
            image: adoption.pet_image
              ? `${api_base}${adoption.pet_image}`
              : undefined,
            name: adoption.pet_name,
            state: adoption.pet_state.replace("_", " ").toLowerCase(), // convierte a minúscula para coincidir con options
            lastPlace: adoption.meeting_place, // la provincia
            date: shortDate,    
          };
        });

        setMiniCardsList(cards);
        setFilteredCards(cards);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message || "Error al cargar los datos");
        setLoading(false);
      });
  }, []);

  // Maneja los cambios en filtros
  const handleFilterChange = useCallback(
    (filters: { [key: string]: string[] }) => {
      const filtered = miniCardsList.filter((card) =>
        Object.entries(filters).every(([key, selectedOptions]) => {
          if (selectedOptions.length === 0) return true;
          return selectedOptions.includes(card[key]);
        })
      );
      setFilteredCards(filtered);
    },
    [miniCardsList]
  );

  const sliderProps = {
    image: "img-main.jpeg",
    title: "Lista de Adopción",
    text: <FilterPanel groups={groups} onFilterChange={handleFilterChange} />,
    miniCards: filteredCards,
  };

  if (loading) return <div>Cargando...</div>;
  if (error) return <div className="text-red-500">{error}</div>;

  return <Container button={btnBack} mainCard={sliderProps} />;
}
