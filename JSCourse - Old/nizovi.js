// {
//     let array = new Array();
//     array.push(10);
//     console.log(array);
// }

// let porudzbine = [120, 650, 340, 210];
// // Potrebno je ubaciti porudzbinu od 250 dinara.
// porudzbine.push(250);

// // Nakon toga ispisati sve porudzbine.
// console.log(porudzbine);

// // Potrebno je da se ispisu porudzbine vece od 300 dinara.

// // for(let i = 0; i < porudzbine.length; i++) {
// //     if(porudzbine[i] > 300) console.log(porudzbine[i]);
// // }
// // for(let element of porudzbine) {
// //     if(element > 300) {
// //         console.log(element);
// //     }
// // }

// porudzbine.forEach(element => {
//     if(element > 300) {
//         console.log(element);
//     }
// });
// console.log(porudzbine.filter(x => x > 300));

// let max = 0;
// for(let element of porudzbine) {
//     max = Math.max(max, element);
// }
// console.log(max);
// console.log(Math.max(...porudzbine));
// console.log(porudzbine.reduce((acc, current) => current > acc ? current : acc));

// let niz1 = [1, 2, 3];
// let niz2 = [4, 5, 6];
// niz1.push(...niz2);
// console.log(niz1);

function menjaNiz(array) {
    array.push(20);
}
function menjaPromenljivu(broj) {
    broj *= 2;
}
function menjaString(poruka) {
    poruka = 'Promenjena';
}
{
    let niz = [1, 2, 3];
    console.log(niz);
    menjaNiz(niz);
    console.log(niz);
    let br = 4;
    console.log(br);
    menjaPromenljivu(br);
    console.log(br);
    
    let poruka = 'Dobar dan!';
    menjaString(poruka);
    console.log(poruka);

    let matrica = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
    let elemN = matrica[1];
    console.log(elemN);
    console.log(elemN[1]);
    console.log(elemN[3]);

}