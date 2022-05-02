export default class Cliente{
    #nome: string
    #idade: string
   
    constructor(nome:string, idade:string){
        this.#nome = nome
        this.#idade = idade
    }

    static vazio(){
        return new Cliente('','')
    }
    
    get nome(){
        return this.#nome
    }
    get idade(){
        return this.#idade
    }
}