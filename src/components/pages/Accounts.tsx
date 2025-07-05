import { useEffect, useState } from "react";
import Button from "../ui/Button";
import Container from "../ui/Container";

const btnBack = (
  <Button
    icon="/back.svg"
    style="w-7 h-5 translate-y-[-2rem] absolute right-7"
    onClick={() => history.back()}
  />
);

export default function Accounts() {
  const [miniCardsList, setMiniCardsList] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const api_base = "http://backforpaws.test/storage/";
    fetch("http://backforpaws.test/api/v1/account/all")
      .then((res) => {
        if (!res.ok) throw new Error("No se pudo cargar la información");
        return res.json();
      })
      .then((data) => {
        const cards = data.map((account: any) => ({
          image: account.profile_picture
            ? `${api_base}${account.profile_picture}`
            : undefined,
          name: account.username,
          correo: account.email,
          numero: account.phone_number,
        }));
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
    title: "Lista de Cuentas",
    miniCards: miniCardsList,
  };

  if (loading) return <div>Cargando...</div>;
  if (error) return <div className="text-red-500">{error}</div>;

  return <Container button={btnBack} mainCard={sliderProps} />;
}