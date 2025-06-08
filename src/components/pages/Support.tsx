import Button from "../ui/Button";
import Input from "../ui/Input";
import Container from "../ui/Container";

const btnSend = (
  <Button
    text="Enviar"
    style="pb-5.5 h-12 mb-5 w-80 m-auto rounded-2xl pt-2 bg-verde-oscuro text-white border-2 font-fredoka cursor-pointer border-verde-oscuro hover:bg-transparent hover:text-gris-oscuro duration-400"
    to="/"
  />
);

const inputComplaints = (
  <Input
    label="Escribe tu duda:"
    name="additionalInfo"
    type="textArea"
    // isTextArea
  />
);

const complaintsCard = {
  image: "img-main.jpeg",
  title: "Contáctanos",
  inputs: [inputComplaints],
  text: "Su respuesta llegará al correo registrado",
  button: btnSend,
  
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
  return <Container button={btnBack} form={complaintsCard} />;
}
