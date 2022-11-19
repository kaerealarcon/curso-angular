// ==, ===, !=, !==, >, <, >=, <=

console.log(1 == 1);
// retorna true

console.log("1" == 1);
// retorna true, pois o JavaScript converte a string (somente números) para number

// == compara quantidades

console.log("1" === 1);
// retorna false

console.log(2 === 1);
// retorna false, pois não é a mesma quantidade, apenas o mesmo tipo

console.log(1 === 1);
// retorna true, pois é o mesmo tipo (number) e quantidade

// === compara tipos e quantidades

console.log(1 != 2);
// retorna true, pois 1 é diferente de 2

console.log(1 != 1);
// retorna false, pois 1 é igual a 1

console.log("1" != 1);
// retorna false, pois 1 é igual a 1, independente do tipo

// != compara se é diferente, sendo diferente ele retorna true

console.log(1 !== "1");
// retorna true, pois number é diferente de string

console.log(1 !== 1);
// retorna false, pois number é igual a number 

// compara tipos, se é diferente, retorna true

console.log(1 > 2);
// retorna false, pois 1 não é maior que 2

console.log(3 > 2);
// retorna true, pois 3 é maior que 2

console.log(1 < 2);
// retorna true, pois 1 não é menor que 2

console.log(3 < 2);
// retorna false, pois 3 é menor que 2

console.log(1 < 1);
console.log(1 > 1);
// retorna false em ambos, pois 1 é igual a 1

console.log(1 >= 1);
// retorna true, pois 1 é igual a 1

console.log(2 >= 1);
// retorna true, pois 2 é maior que 1

// o mesmo se aplica para <



