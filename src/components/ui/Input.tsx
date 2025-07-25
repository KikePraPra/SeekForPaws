import { useState } from "react";
interface InputProps {
  label: string;
  name: string;
  type: string;
  icon?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
}

const provinces = [
  { id: "1", nombre: "San José" },
  { id: "2", nombre: "Alajuela" },
  { id: "3", nombre: "Cartago" },
  { id: "4", nombre: "Heredia" },
  { id: "5", nombre: "Guanacaste" },
  { id: "6", nombre: "Puntarenas" },
  { id: "7", nombre: "Limón" },
];

// required

export default function Input(props: InputProps) {
  const [selectedProvinse, setSelectedProvinse] = useState("");
  let inputElement;

  switch (props.type) {
    case "textArea":
      inputElement = (
        <textarea
          name={props.name}
          className="rounded-lg border-2 border-verde-claro w-80 mt-4.5 pl-2 pt-2 text-lg text-semibold"
          rows={4}
          value={props.value}
          onChange={props.onChange}
        ></textarea>
      );
      break;

    case "location":
      inputElement = (
        <select
          name={props.name}
          className="rounded-lg border-2 border-verde-claro h-12 w-80 mt-4.5
        text-left pl-2 text-lg text-semibold focus:outline-none"
          value={selectedProvinse}
          onChange={(e) => {
            setSelectedProvinse(e.target.value);
            if (props.onChange) props.onChange(e);
          }}
        >
          <option value="">Seleccione provincia</option>
          {provinces.map((prov) => (
            <option key={prov.id} value={prov.nombre}>
              {prov.nombre}
            </option>
          ))}
        </select>
      );
      break;

    case "file":
      inputElement = (
        <label
          htmlFor={props.name}
          className="rounded-lg border-2 border-verde-claro h-12 w-80 mt-4.5 flex
        items-center cursor-pointer pl-2 text-lg"
        >
          {props.icon && (
            <img src={props.icon} alt="icon" className="mr-2 w-7 h-7" />
          )}
          <span>Adjuntar imagen</span>
          <input
            id={props.name}
            name={props.name}
            type="file"
            className="hidden"
            onChange={props.onChange as any}
          />
        </label>
      );
      break;

    default:
      inputElement = (
        <input
          name={props.name}
          type={props.type}
          className="rounded-lg border-2 border-verde-claro h-12 w-80 mt-4.5 text-left pl-2 text-lg text-semibold"
          value={props.value}
          onChange={props.onChange}
        />
      );
  }

  return (
    <div className="flex flex-col w-max mx-auto font-fredoka">
      <label>{props.label}</label>
      {inputElement}
    </div>
  );
}
