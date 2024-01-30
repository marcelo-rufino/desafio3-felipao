class heroi {
    constructor(nome, tipo, ataque){
        this.nome = nome
        this.tipo = tipo
        this.ataque = ataque
    }

    atacar(){
        console.log(`O ${this.tipo} ${this.nome} atacou usando ${this.ataque}.`)
    }
}

let mago = new heroi("Barley", "mago", "Magia")
let guerreiro = new heroi("Fang", "guerreiro", "espada")
let monge = new heroi("Lou", "monge", "artes marcias")
let ninja = new heroi("Ash", "ninja", "shuriken")

mago.atacar()
guerreiro.atacar()
monge.atacar()
ninja.atacar()