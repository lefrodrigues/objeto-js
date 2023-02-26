const pessoa = {nome: 'Joao'}
pessoa.nome = 'Pedro'
console.log(pessoa)


Object.freeze(pessoa)

pessoa.nome = 'Maria'
pessoa.end = 'Rua ABC'
delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({nome: 'Joao'})
pessoaConstante.nome = "maria"
console.log(pessoaConstante)