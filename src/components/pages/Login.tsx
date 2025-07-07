import { useState } from "react";
import Button from "../ui/Button";
import Input from "../ui/Input";
import Container from "../ui/Container";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("http://backforpaws.test/api/v1/account/all");
      if (!res.ok) throw new Error("Error de conexión");
      const accounts = await res.json();
      const found = accounts.find(
        (acc: any) => acc.username === username && acc.password === password
      );
      if (found) {
        window.location.href = "/start";
      } else {
        setError("Usuario o contraseña incorrectos");
      }
    } catch (e) {
      setError("No se pudo conectar al servidor");
    }
    setLoading(false);
  };

  const btnConfirmar = (
    <Button
      text={loading ? "Validando..." : "Confirmar"}
      style="pb-5.5 h-12 mb-5 w-80 rounded-2xl pt-2 bg-verde-oscuro text-white border-2 font-fredoka cursor-pointer border-verde-oscuro hover:bg-transparent hover:text-gris-oscuro duration-400"
      onClick={handleLogin}
      // Desactiva el botón mientras carga
      // @ts-ignore
      disabled={loading}
    />
  );

  const inputUsername = (
    <div>
      <Input
        label="Nombre de usuario"
        name="username"
        type="text"
        // @ts-ignore
        value={username}
        // @ts-ignore
        onChange={(e) => {
          setUsername(e.target.value);
          setError("");
        }}
      />
    </div>
  );

  const inputPassword = (
    <div>
      <Input
        label="Contraseña"
        name="password"
        type="password"
        // @ts-ignore
        value={password}
        // @ts-ignore
        onChange={(e) => {
          setPassword(e.target.value);
          setError("");
        }}
      />
    </div>
  );

  const login = {
    title: "Inicio de sesión",
    image: "img-main.jpeg",
    inputs: [
      error && (
        <div className="text-red-500 text-center" key="error">
          {error}
        </div>
      ),
      inputUsername,
      inputPassword,
    ],
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

  return <Container button={btnBack} form={login} />;
}
