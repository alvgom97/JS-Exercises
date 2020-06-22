// Un palíndromo es una palabra que se escribe igual del derecho que del revés por ejemplo orejero, rallar o somos.
// Edita la función querecibirá una cadena de texto y deberá devolver si es un palíndromo o no.

// si la función no recibe una cadena de texto o está vacía 'no es un formato correcto'

let esPalindromo= (palabra) => {
    // Aquí tu código.  Desde aquí:
    if(typeof palabra === 'string' && palabra.length > 0){
        let end = false;
        let palim = true;
        let i = 0; let j = palabra.length-1;
        while (!end){
            if (i >= j){
                end = true;
            }
            else if(palabra.charAt(i) !== palabra.charAt(j)){
                palim = false;
                end = true;
            }
            i++;
            j--;
        }

        return palim;
    } 
    else {
        return 'no es un formato correcto';
    }
    //Hasta aqui.
}


let test = require('../test.js');

test(esPalindromo, ['castellon'], false);
test(esPalindromo, ['rallar'], true);
test(esPalindromo, [{}], 'no es un formato correcto');
test(esPalindromo, [''], 'no es un formato correcto');
test(esPalindromo, ['o'], true);
