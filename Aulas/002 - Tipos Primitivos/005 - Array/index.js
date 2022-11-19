const array = ["Kaere", "Alarcon"]

console.log([1,2,3,45,"teste", true]);
// array

console.log(["Kaere", "Alarcon"]);
// para percorrer o array, sempre se inicia com 0, ou seja 0 = Kaere e 1 = Alarcon

console.log(["Kaere", "Alarcon"].length);
// retornar 2, que é a quantidade de itens do array, mesmo começando com 0, o que é contato são os elementos e não a posição dos mesmos

["Kaere", "Alarcon"].forEach((res, index) => {
    console.log(res, index);
});

array.filter((res, index) => console.log(res === "Kaere"));
// retorna a resposta (Kaere e Alarcon) junto do index de cada um (0 e 1)