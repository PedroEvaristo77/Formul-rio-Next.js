interface BotaoProps {
    children:any
    onClick?:()=> void
}
export default function Botao(props:BotaoProps){
    return(
        <button className="bg-green-100 p-1 rounded-md mb-3">
            {props.children}
        </button>
    )
}