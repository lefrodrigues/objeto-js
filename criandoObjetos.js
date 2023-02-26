//usando a notação literal
const obj1 = {}
console.log(obj1)

//objeto em js

console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

//Funçoes construtoras
function Produto (nome, preço, desc) {
    this.nome = nome
    this.getPreçoComDesconto = () => {
        return preço * (1 - desc)
    }
}
const p1 = new Produto('Caneta', 7.99, 0.15)
const p2 = new Produto('Notebook', 2999.99, 0.25)
console.log(p1.getPreçoComDesconto(), p2.getPreçoComDesconto())

//função factory
function criarFuncionario(nome, salarioBase, faltas) {
    return{
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('João', 7900, 4)
const f2 = criarFuncionario('Maria', 11400, 1)
console.log(f1.getSalario().toFixed(2), f2.getSalario())

//object.create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)


//funçao famosa retorna json 
const fromJson = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJson.info)