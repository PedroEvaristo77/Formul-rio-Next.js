import { useState } from "react";
import Entrada from "./Entrada";
import Cliente from "../core/Cliente";
import Botao from "./Botao";

interface FormularioProps{
    cliente:Cliente
    clienteChange?: (cliente:Cliente) => void
    cancelar?:() => void
}
export default function Formulario(props:FormularioProps){
    
    const[nome, setNome]= useState(props.cliente?.nome?? '')
    const[idade, setIdade]= useState(props.cliente?.idade?? '')
    return (
        <div>
            <Entrada 
                texto="Nome" 
                valor={nome}  
                valorChange={setNome}
           />
            <Entrada 
                texto="Idade" 
                valor={idade} 
                tipo="number" 
                valorChange={setIdade}
            />

            <div className="mt-2 ml-2 flex ">
            <Botao onClick={()=>props.clienteChange?.(new Cliente(nome,idade))}>Salvar</Botao>
            </div>
            
            <div className="m-1 flex justify-end">
            <Botao onClick={props.cancelar}>Cancelar</Botao>
            </div>
        </div>
    
    )
}