// Zadatak 1
// Napisati funckiju koja vraca prosek brojeva deljivih sa 7 
// izmedju poslatih brojeva M i N uklkjucujuci i njih.
// Parametri: M, N
// Izlaz: Prosek brojeva izmedju M i N, deljivih sa 7.

function prosek(M, N, k) {
    if(M > N) return "M must be less than N";
    let prosek = 0, counter = 0;
    for(let i = M; i <= N; i++) {
        if(i % k == 0) {
            prosek += i;
            counter++;
        } 
    }
    return prosek / counter;
}

console.log(prosek(5, 65, 7));

// Napsiati funkciju koja ispisuje potrosnju goriva automobila
// ukoliko su poslati parametri daljina u km i potrosnja l/100km;
// Potrebno je napisati funkciju koja vraca potrosnju 
// Potrosnja goriva se racuna kao rezultat=(daljina/100)*potrosnja

function ispisiPotrosnju(daljina, potrosnja) {
    let rezultat = vratiPotrosnju(daljina, potrosnja);
    console.log(rezultat);
}

function vratiPotrosnju(daljina, potrosnja) {
    return daljina / 100 * potrosnja;
}

ispisiPotrosnju(400, 20);

// urimuumiru
// aleksandarradnaskela
// anavolimilovana

function jePalindrom(poruka) {
    // ''.toLowerCase().replace(' ', '');
    // poruka = poruka.toLowerCase().replace(/ /g, '');
    poruka = poruka.toLowerCase().split(' ').join('');
    let i = 0;
    let j = poruka.length - 1;
   
    while(i < j) {
        if(poruka.charAt(i) != poruka.charAt(j)) {
            return false;
        }
        i++;
        j--;
    }
    return true;
}

console.log(jePalindrom('anavolimilovana'));
console.log(jePalindrom('anavolimilovanaa'));
console.log(jePalindrom('ana VOLImilovana'));
