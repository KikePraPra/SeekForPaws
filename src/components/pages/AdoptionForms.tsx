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

const inputTempOwner = (
  <Input label="Nombre de propietario temporal:" name="tempOwner" type="text" />
);

const inputContactTel = (
  <Input label="Número de contacto:" name="contactTel" type="number" />
);

const inputMeetingPlace = (
  <Input
    label="Lugar de reunión:"
    name="meetingPlace"
    type="location"
    // isLocationSelector
  />
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
  <Input
    label="Datos adicionales:"
    name="additionalInfo"
    type="textArea"
    // isTextArea
  />
);

const adoptionForms = {
  title: "Adopción de Mascotas",
  image: "img-main.jpeg",
  inputs: [
    inputTempOwner,
    inputContactTel,
    inputMeetingPlace,
    inputPetImage,
    inputAdditionalInfo,
  ],
  button: btnConfirm,
};

const btnBack = (
  <Button
    icon="/back.svg"
    text=""
    style="w-7 h-5 translate-y-[-1.5rem]"
    onClick={() => history.back()}
  />
);

export default function Login() {
  return <Container button={btnBack} form={adoptionForms} />;
}
