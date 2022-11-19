// Podemos escrever uma string de várias formas, sendo elas
// "código"
// 'código'
// `código`

console.log('texto');
console.log("texto");
console.log(`texto`);

console.log('"texto"');
// console.log('"texto maior um' pouco"'); dessa forma o código fica quebrado, já que parte do texto fica fora da string

console.log(`
"'"''''"
`)
// com a crase, não tem quebra do código, podendo até mesmo ser feito utilizando várias

console.log(String("Teste"));
console.log(String(12312321)); 
// transforma o number em string