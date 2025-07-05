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

const inputEmail = (
  <Input label="Correo electrónico:" name="email" type="email" />
);

const inputContactTel = (
  <Input label="Número de contacto:" name="contactTel" type="number" />
);

const inputUserName = (
  <Input label="Nombre de usuario:" name="userName" type="text" />
);

const inputPassword = (
  <Input label="Contraseña:" name="password" type="password" />
);

const registerForms = {
  title: "Registro",
  image: "img-main.jpeg",
  inputs: [inputEmail, inputUserName, inputContactTel, inputPassword],
  button: btnConfirm,
};

const btnBack = (
  <Button
    icon="/back.svg"
    style="w-7 h-5 translate-y-[-2rem] absolute right-7"
    onClick={() => history.back()}
  />
);

export default function Register() {
  return <Container button={btnBack} form={registerForms} />;
}
