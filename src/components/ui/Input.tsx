interface InputProps {
  label: string;
  name: string;
  type: string;
  isTextArea?: boolean;
  isLocationSelector?: boolean;
  icon?: string;
}

// required

export default function Input(props: InputProps) {
  let inputElement;

  if (props.isTextArea) {
    inputElement = (
      <textarea
        name={props.name}
        className="rounded-lg border-2 border-verde-claro w-80 mt-4.5 pl-2 pt-2 text-lg text-semibold"
        rows={4}
      ></textarea>
    );
  } else if (props.isLocationSelector) {
    inputElement = (
      <select
        name={props.name}
        className="rounded-lg border-2 border-verde-claro h-12 w-80 mt-4.5
        text-left pl-2 text-lg text-semibold"
      ></select>
    );
  } else if (props.type === "file") {
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
        <input name={props.name} type="file" className="hidden" />
      </label>
    );
  } else {
    inputElement = (
      <input
        name={props.name}
        type={props.type}
        className="rounded-lg border-2 border-verde-claro h-12 w-80 mt-4.5 text-left pl-2 text-lg text-semibold"
      ></input>
    );
  }

  return (
    <div className="flex flex-col w-max font-fredoka">
      <label>{props.label}</label>
      {inputElement}
    </div>
  );
}
