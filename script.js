/*
const nome = prompt(`Digite seu nome: `);
const corFavorita = prompt(`Digite sua cor favorita: `);
const citacao = prompt(`Digite sua frase favorita: `);
const nomeMaiusc = nome.toUpperCase()

function funCorFavorita (nome, corFavorita, citacao){
    console.log(`Nome: ${nomeMaiusc}, tem ${nomeMaiusc.length} caracteres.
Tem A no nome ${nomeMaiusc}? ${nomeMaiusc.includes('A')}:
Cor favorita: ${corFavorita}
Frase favorita: "${citacao}"`)
}
funCorFavorita(nome, corFavorita, citacao)
*/

const nome = prompt(`Digite seu nome: `);
const email = prompt(`Digite seu e-mail: `);
const incluiArroba = email.includes('@')

function funCadastro (nome, email){
   const mensagem = `E-mail ${email} cadastrado com sucesso! Boas vindas, ${nome}. Seu nome tem ${nome.length} caracteres.`  
   console.log(mensagem.replaceAll('r', 'x').replaceAll('R', 'X'))
   console.log(`O e-mail cadastrado inclui @? ${incluiArroba}`)
}
funCadastro(nome, email)