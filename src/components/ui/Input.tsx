interface InputProps {
  label: string,
  name: string,
  type: string,
}

// required

export default function Input(props: InputProps) {

    return (
        
        <div className="flex flex-col w-max font-fredoka">
            <label>{props.label}</label>
            <input className="rounded-lg border-2 border-verde-claro h-12 w-80 mt-4.5 text-left pl-2 text-lg text-semibold"name={props.name} type={props.type}></input>
        </div>
    )

}