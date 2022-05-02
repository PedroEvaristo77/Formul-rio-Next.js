import Cliente from "../core/Cliente";
interface TableProps{
    clientes:Cliente[]
}
export default function Table(props){
    function renderizarCabecalho(){
        return(
            <tr>
                <th className="text-left p-1">Nome</th>
                <th className="text-left p-1">Idade</th>
            </tr>
        )
    }
    
    function renderizarClientes(){
        return(
            <tr>
                <th className="text-left p-1">Pedro</th>
                <th className="text-left p-1">21</th>
            </tr>
            
        )
    }

    return(
        <table className="w-full rounded-xl overflow-hidden">
            <thead className={`
            bg-gradient-to-r from-green-400 to-green-300
            text-black
            `}>
            {renderizarCabecalho()}
            </thead>
            <tbody>{renderizarClientes()}</tbody>
        </table>
    )
}