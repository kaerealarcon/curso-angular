console.log(123);
// imprime números, sendo interpretado como um número e não string

console.log('123');
// números em texto

console.log('123' + 1);
// concatena (junta)

console.log('123' - 1);
// ele transforma o 123 em número e retira 1, restando 122 ?????????? 

console.log(Number("123") - 1);
console.log(Number("123") + 1);
// o correto (da linha 10) seria transformar a string em number, como feito na linha 13

console.log(Number("123a") - 1);
// no caso da string conter uma letra ou algo que não seja o número, o resultado é NAN

console.log("123" * 2);
console.log("123" / 2);
// essa forma funciona, porém é errada e pode gerar bugs

console.log(Number("123") / 2);
console.log(Number("123") / 2);
// pode ser convertido dessa forma

// para quesito comparativo
console.log(typeof Number("123"));
console.log(typeof 123);
// retorna number

console.log(typeof "123");
// retorna string