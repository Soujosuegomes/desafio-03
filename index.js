

class personagem{
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo

        if(this.tipo == "mago"){
            this.ataque = "magia"

        }else if(this.tipo == "guerreiro"){
            this.ataque = "espada"

        }else if(this.tipo == "monge"){
            this.ataque = "artes marciais"

        }else if(this.tipo == "ninja"){
            this.ataque = "shuriken"
        }
         
    }
    
    escrever(){
        console.log(`O personagem ${this.nome} tem ${this.idade} anos.Ele é um ${this.tipo} e atacou usando ${this.ataque}`)
    }
}

let personagemMago = new personagem("Lucian", "38", "guerreiro")

let personagemNinja = new personagem("Rocan", "87", "ninja")

personagemMago.escrever()
personagemNinja.escrever()