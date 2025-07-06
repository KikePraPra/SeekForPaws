import Button from "../ui/Button";
import FilterPanel from "../ui/FilterPanel";
import Container from "../ui/Container";
import { useEffect, useState } from "react";

const groups = [
  { label: "Estado", key: "state", options: ["Extraviado", "En adopción"] },
  {
    label: "Provincia",
    key: "province",
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

const btnBack = (
  <Button
    icon="/back.svg"
    style="w-7 h-5 translate-y-[-2rem] absolute right-7"
    onClick={() => history.back()}
  />
);

export default function ReportList() {
  const [miniCardsList, setMiniCardsList] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
      const api_base = "http://backforpaws.test/storage/";
      fetch("http://backforpaws.test/api/v1/report/all")
      
        .then((res) => {
          if (!res.ok) throw new Error("No se pudo cargar la información");
          return res.json();
        })
        
        .then((data) => {
          const cards = data.map((report: any) => {
            const rawDate = new Date(report.created_at);
            const shortDate = rawDate.toLocaleDateString("es-ES", {
              day: "2-digit",
              month: "short",
              year: "numeric",
            });

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
          setMiniCardsList(cards);
          setLoading(false);
        })
        .catch((err) => {
          setError(err.message || "Error al cargar los datos");
          setLoading(false);
        });
    }, []);

    const sliderProps = {
    image: "img-main.jpeg",
    title: "Lista de Reportes",
    text: <FilterPanel groups={groups} onFilterChange={() => {}} />,
    miniCards: miniCardsList,
};

  if (loading) return <div>Cargando...</div>;
  if (error) return <div className="text-red-500">{error}</div>;

  return <Container button={btnBack} mainCard={sliderProps} />;
}
