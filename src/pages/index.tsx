import Layout from "../components/Layout";
import Table from "../components/Table";
import Cliente from "../core/Cliente";
import Botao from "../components/Botao";
import Formulario from "../components/Formulario";
import { useState } from "react";

export default function TesteJs(){
   const clientes = [
       new Cliente ('Pedro', '21'),
   ]
   function saveCliente(cliente:Cliente){
      console.log(cliente)
   }
   const [visivel, setVisivel]= useState<'table'|'formulario'>('table')
    return (
    <div className={`
    flex h-screen justify-center items-center 
    bg-gradient-to-r from-green-500 via-green-400 to-green-300 
    text-gray-700
    
    `}>
        <Layout title="Cadastro">
           {visivel === 'table'? (
            <>
            <div className="flex justify-end">
            <Botao onClick={() => setVisivel('formulario')}>Novo Cliente</Botao>
            </div>
            <Table clientes={clientes}></Table>
            </>
           ): (
            <Formulario 
             cliente={clientes[0]}
             clienteChange ={saveCliente}
             cancelar={() => setVisivel('table')}></Formulario>
           )}
        </Layout>
    </div>
    )
}
