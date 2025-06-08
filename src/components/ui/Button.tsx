import { useRouter } from "@tanstack/react-router";
//clase para definir un boton - CTA
interface ButtonProps {
  icon?: string;
  text: string;
  style: string;
  to?: string;
  onClick?: () => void;
}
export default function Button(props: ButtonProps) {
  const router = useRouter();

  const handleClick = () => {
    if (props.onClick) {
      props.onClick();
    }
    if (props.to) {
      router.navigate({ to: props.to });
    }
  };
  return (
    <button className={props.style} onClick={handleClick}>
      {props.icon && <img src={props.icon} alt="" className="w-15 h-18 m-auto" />}
      {props.text}
    </button>
  );
}
