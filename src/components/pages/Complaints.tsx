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
  <Input label="Redacte su inquietud:" name="additionalInfo" type="textArea" />
);

const complaintsCard = {
  image: "img-main.jpeg",
  title: "¿En que podemos mejorar?",
  inputs: [inputComplaints],
  button: btnSend,
  text: "Gracias por su opinión, lo tendremos en cuenta para mejorar",
};

const btnBack = (
  <Button
    icon="/back.svg"
    style="w-7 h-5 translate-y-[-2rem] absolute right-7"
    onClick={() => history.back()}
  />
);

export default function Complaints() {
  return <Container button={btnBack} form={complaintsCard} />;
}
