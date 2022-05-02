interface EntradaProps{
    tipo?: 'text' | 'number'
    texto:string
    valor:any
    valorChange?:(valor:any)=> void
}
export default function Entrada(props:EntradaProps){
    return (
        <div className="flex flex-col">
            <label className="mg-3">
                {props.texto}
            </label>
            <input 
            value= {props.valor}
            type={props.tipo ?? 'text'} 
            onChange={e => props.valorChange?.(e.target.value)}
            className="border border-green-300 rounded-lg focus p-1"
            >
            </input>
        </div>
    )
}