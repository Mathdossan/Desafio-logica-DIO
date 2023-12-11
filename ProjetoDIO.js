// Digite o nome do herói
let nome = "Marreta"
// Digite o nível de experiência
let experiencia = 0

if(experiencia<=1000){
    console.log("O herói " + nome + " está no nível de ferro")}
else if(experiencia<=2000){
    console.log("O herói " + nome + " está no nível de bronze")}
else if(experiencia<=5000) {
    console.log("O herói " + nome + " está no nível de prata")}
else if(experiencia<=7000) {
    console.log("O herói " + nome + " está no nível de ouro")}
else if(experiencia<=8000) {
    console.log("O herói " + nome + " está no nível de platina")}
else if(experiencia<=9000) {
    console.log("O herói " + nome + " está no nível ascendente")}
else if(experiencia<=10000) {
    console.log("O herói " + nome + " está no nível imortal")}
else if(10000<experiencia) {
    console.log("O herói " + nome + " está em um nível RADIANTE")}
else {
    console.log("Nível de experiência inválido")
}


/* ## Objetivo

Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

Se XP for menor do que 1.000 = Ferro
Se XP for entre 1.001 e 2.000 = Bronze
Se XP for entre 2.001 e 5.000 = Prata
Se XP for entre 6.001 e 7.000 = Ouro
Se XP for entre 7.001 e 8.000 = Platina
Se XP for entre 8.001 e 9.000 = Ascendente
Se XP for entre 9.001 e 10.000= Imortal
Se XP for maior ou igual a 10.001 = Radiante

## Saída

Ao final deve se exibir uma mensagem:
"O Herói de nome **{nome}** está no nível de **{nivel}**" */