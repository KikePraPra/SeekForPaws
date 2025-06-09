import Button from "../ui/Button";
import Input from "../ui/Input";
import Container from "../ui/Container";

const btnConfirm = (
  <Button
    text="Confirmar"
    style="pb-5.5 h-12 mb-5 w-80 rounded-2xl pt-2 bg-verde-oscuro text-white border-2 font-fredoka cursor-pointer border-verde-oscuro hover:bg-transparent hover:text-gris-oscuro duration-400"
    onClick={() => history.back()}
  />
);

const inputPetName = (
  <Input label="Nombre de la mascota:" name="petName" type="text" />
);

const inputContactTel = (
  <Input label="Número de contacto:" name="contactTel" type="number" />
);

const inputManagerName = (
  <Input label="Nombre del encargado:" name="managerName" type="text" />
);

const inputLastPlace = (
  <Input label="Último lugar visto:" name="lastPlace" type="location" />
);

const inputPetImage = (
  <Input
    label="Imagen de la mascota:"
    name="petImage"
    type="file"
    icon="/icon_adjuntar.png"
  />
);

const inputAdditionalInfo = (
  <Input label="Datos adicionales:" name="additionalInfo" type="textArea" />
);

const reportForms = {
  title: "Reportes",
  image: "img-main.jpeg",
  inputs: [
    inputPetName,
    inputManagerName,
    inputContactTel,
    inputLastPlace,
    inputPetImage,
    inputAdditionalInfo,
  ],
  button: btnConfirm,
};

const btnBack = (
  <Button
    icon="/back.svg"
    text=""
    style="w-7 h-5 translate-y-[-2rem] absolute right-7"
    onClick={() => history.back()}
  />
);

export default function ReportForms() {
  return <Container button={btnBack} form={reportForms} />;
}
