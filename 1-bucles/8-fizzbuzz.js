// ej 8
// Crea un bucle  que imprima por consola números del 1 al 100
// pero que los múltiplos de 3 imprima GEEKS en lugar del numero
// y los múltiplos de 5 imprima HUBS.
// Además los múltiplos de 3 y 5 ha de imprimir GEEKSHUBS

for (let i = 1; i <= 100; i++){

    let res = "";

    if(i%3 == 0){
        res += "GEEKS";
    }

    if(i%5 == 0){
        res += "HUBS";
    }

    if (res == ""){
        res = i;
    }

    console.log(res);
}