// Desafio Target - Estágio Ribeirão Preto

/* 
  1) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores 
(exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele 
calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência. 
*/

function isFibonacci(num) {
  if(num === 0 || num === 1) return true;

  let prev = 0;
  let current = 1;
  let next = prev + current;

  while(next <= num) {
    if(next === num) return true;

    prev = current;
    current = next;
    next = prev + current;
  };
  
  return false;
};

console.log(`1) `);
console.log(`\nO número 3 pertence a sequência de Fibonacci? ${isFibonacci(3)}`);
console.log(`O número 4 pertence a sequência de Fibonacci? ${isFibonacci(4)}`);

/* 
  2) Escreva um programa que verifique, em uma string, a existência da letra ‘a’, seja maiúscula ou minúscula, além de 
informar a quantidade de vezes em que ela ocorre.
*/

function verifyLetterInString(string, char) {
  let upperCount = 0; 
  let lowerCount = 0;

  for(const letter of string) {
    if(letter === char.toUpperCase()) upperCount++;
    if(letter === char.toLowerCase()) lowerCount++;
  }

  return (upperCount === 0 && lowerCount === 0) 
    ? `A letra ${char} não está presente na string.` 
    : `A letra ${char} está presente na frase um total de ${upperCount + lowerCount} vezes, ${upperCount} vez(es) em maiúscula e ${lowerCount} vez(es) em minúscula.`;
};

console.log(`\n2)`);
console.log(verifyLetterInString("Letra A aparece?", "a"));

/*
  3) Observe o trecho de código abaixo: int INDICE = 12, SOMA = 0, K = 1; enquanto K < INDICE faça { K = K + 1; SOMA = SOMA + K; } imprimir(SOMA);
Ao final do processamento, qual será o valor da variável SOMA?
*/

console.log('\n3)')
console.log(`O valor total da soma será todos os valores até 12 somados, começando a partir do 2. Resultando em 77`);

/*
  4) Descubra a lógica e complete o próximo elemento:
a) 1, 3, 5, 7, ___
b) 2, 4, 8, 16, 32, 64, ____
c) 0, 1, 4, 9, 16, 25, 36, ____
d) 4, 16, 36, 64, ____
e) 1, 1, 2, 3, 5, 8, ____
f) 2,10, 12, 16, 17, 18, 19, ____
*/

console.log(`\n4)`);
console.log(`a) 1, 3, 5, 7, 9`);
console.log(`b) 2, 4, 8, 16, 32, 64, 128`);
console.log(`c) 0, 1, 4, 9, 16, 25, 36, 49`);
console.log(`d) 4, 16, 36, 64, 100`);
console.log(`e) 1, 1, 2, 3, 5, 8, 13`);
console.log(`f) 2, 10, 12, 16, 17, 18, 19, 20`);

/*
  5) Você está em uma sala com três interruptores, cada um conectado a uma lâmpada em salas diferentes. Você não pode ver as 
lâmpadas da sala em que está, mas pode ligar e desligar os interruptores quantas vezes quiser. Seu objetivo é descobrir qual 
interruptor controla qual lâmpada. Como você faria para descobrir, usando apenas duas idas até uma das salas das lâmpadas, 
qual interruptor controla cada lâmpada?  
*/

console.log(`\n5)`);
console.log(`Primeiramente ligaria o primeiro interruptor(INTERRUPTOR A).
Depois ligaria o segundo interruptor(INTERRUPTOR B).
Deixaria o terceiro interruptor desligado(INTERRUPTOR C).
Após alguns minutos desligaria o INTERRUPTOR A.
Ir até a sala de duas lâmpadas diferentes e verificar o estado:
  Lâmpada A(ligada ao interruptor A) vai estar apagada mas quente por ter ficada alguns minutos ligada.
  Lâmpada B(ligada ao interruptor B) vai estar ligada.
  Lâmpada C(ligada ao interruptor C) vai estar desligada.
`);