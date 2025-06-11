import Button from "../ui/Button";
import Input from "../ui/Input";
import Container from "../ui/Container";

const btnConfirmar = (
  <Button
    text="Confirmar"
    style="pb-5.5 h-12 mb-5 w-80 rounded-2xl pt-2 bg-verde-oscuro text-white border-2 font-fredoka cursor-pointer border-verde-oscuro hover:bg-transparent hover:text-gris-oscuro duration-400"
    to="/start"
  />
);

const inputUsername = (
  <Input label="Nombre de usuario" name="username" type="text" />
);

const inputPassword = (
  <Input label="Contraseña" name="password" type="password" />
);

const login = {
  title: "Inicio de sesión",
  image: "img-main.jpeg",
  inputs: [inputUsername, inputPassword],
  button: btnConfirmar,
  text: (
    <>
      ¿No tienes una cuenta?{" "}
      <a className="text-amarillo visited:text-amarillo" href="/register">
        Regístrate
      </a>
    </>
  ),
};

const btnBack = (
  <Button
    icon="/back.svg"
    style="w-7 h-5 translate-y-[-2rem] absolute right-7"
    onClick={() => history.back()}
  />
);

export default function Login() {
  return <Container button={btnBack} form={login} />;
}
