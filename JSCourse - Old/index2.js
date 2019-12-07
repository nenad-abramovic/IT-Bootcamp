// // var b = '5.23';
// // console.log(b);
// // console.log(typeof(b));
// // console.log(parseFloat(b));
// // console.log(typeof(parseFloat(b)));
// // console.log(parseInt(b));
// // console.log(typeof(parseInt(b)));
// // b = '5.123456E5';
// // console.log(b.slice(1, 5));
// // console.log(b.split('.'));
// // b = 'mala slova';
// // console.log(b.toUpperCase());
// // console.log(parseFloat(b));

// /*let b = 2;

// switch (b > 6) {
//     case 2:
//         console.log('A');
//     case 3:
//         console.log('B');
//         break;
//     case 1:
//         console.log('D');
//     //  break;

//     default: console.log('C');
//         break;
//     case 3:
//         console.log('F');

// }
// */
// /*
// let  b = 6;
// switch(b>5) {
//     case true: console.log('A');
//     case false: console.log('B');
//     break;
//     default: console.log('HOW');
// }
// */

// // let a = 5;
// // let b = 6;

// // console.log(a, b); // 5 6

// // a = a + b;
// // b = a - b;
// // a = a - b;

// // console.log(a, b); // 6 5

// // let a = 7;
// // if (a > 2 && a < 6) {
// //     console.log(`A je u opsegu od 2 do 6.`);
// // } else {
// //     console.log(`a je van opsega`);
// // }

// // let b = 9;
// // if (b % 3 == 0 || b % 5 == 0) {
// //     console.log('B je deljivo sa 3 ili sa 5');
// // } else {
// //     console.log('b nije deljivo sa 3 ili sa 5');
// // }

// // let b = 30;
// // if((b % 3 == 0 || b % 5 == 0) && b % 2 != 0) {
// //     console.log('B je deljivo sa 3 ili sa 5 ali nije deljivo sa 2');
// // }

// // let b = 6;
// // if (b > 5)
// //     console.log("Ovo je vezano za if");
// // else
// //     console.log("Ovo je vezano za else");

// // console.log("Ovo nije vezano za if/else");

// // let b = 8;
// // if (b > 4)
// //     if (b < 7) console.log('A');
// //     else console.log('B'); // else je vezan za prvi najdublji if

// // let b = 1;
// // if(b > 1){
// //     if (b > 2) {

// //     } else {

// //     }
// // } else {
// //     if(b < -2) {

// //     } else {

// //     }
// // }

// // let b = 9;
// // if(b > 2 || b < -2 && b < 9) {
// //     console.log('A');
// // } else {
// //     console.log('B');
// // }

// // let b = 6;
// // let tekst = b > 5 ? 'B vece od 5' : 'B je manje ili jednako 5';
// // // console.log(tekst);

// // tekst = b > 5 ?
// //                  b > 8 ?    
// //                         'B je vece od 8' 
// //                         : 
// //                         'B je 8 ili manje, a vece od 5' 
// // : 'B je 5 ili manje';
// // console.log(tekst);
// {
//     // Suma brojeva od  0 do n, ukljucujuci i n
//     let n = 10;
//     let sum = 0;
//     for (let counter = 0; counter <= n; counter++) {
//         sum += counter;
//         // sum = sum  + counter;
//     }
//     console.log(`Sum of numbers from 0 to ${n} is ${sum}`);
//     console.log('---------------------------------------');
//     // Ispis brojeva od n do nula, ukljucujuci i n

//     for (let counter = n; counter >= 0; counter--) {
//         console.log(`${counter}`);
//     }
// }
// {
//     // Napisati kod koji ispisuje brojeve od DOWN do UP koji su deljivi sa 3
//     // Napisati kod koji sabira brojeve od  DOWN do UP koji su deljivi sa 3
//     // Napisati kod koji sabira brojeve od UP do  DOWN koji su deljivi sa 3
//     // DOWN i UP sami zadajemo
//     console.log('----------------------');
//     let DOWN = 10;
//     let UP = 21;
//     let sum = 0;
//     for (let counter = DOWN; counter <= UP; counter++) {
//         if (counter % 3 == 0) {
//             console.log(`${counter}`);
//         }
//     }
//     console.log('---------------------------');
//     for (let counter = DOWN; counter <= UP; counter++) {
//         if (counter % 3 == 0) {
//             sum += counter;
//         }
//     }
//     console.log(`Sum of numbers from ${DOWN} to ${UP} divisible by 3 is ${sum}`);
//     console.log('---------------------------');

//     for (let counter = UP; counter >= DOWN; counter--) {
//         if (counter % 3 == 0) {
//             console.log(`${counter}`);
//         }
//     }
// }

// {
//     let N = 4;
//     let sum = 0;
//     let partialSum = 0;
//     let partialProduct = 1;
//     for (let counter = 1; counter <= N; counter++) {
//         partialSum += counter;
//         partialProduct *= counter;
//         sum += partialSum / partialProduct;
//     }
//     console.log(`${sum}`);
// }

// {
//     let N = 6;
//     let sum = (N * (N + 1)) / (N + (N * (N - 1)));
//     console.log(sum);
// }

// {
//     let sum = 0;
//     let N = 5;
//     for (let counter = 1; counter <= N; counter += 2) {
//         sum += counter;
//     }
//     console.log(sum);
// }
// {
//     let sumEven = 0, sumOdd = 0;
//     let N = 6;
//     for (let counter = 1; counter < N; counter += 2) {
//         sumOdd += counter;
//         sumEven += counter + 1;
//     }
//     console.log(sumEven / sumOdd);
// }

// // {
//     // let n = 0;
//     // do {
//     //     console.log(n);
//     //     n--;
//     // } while(n > 0);

//     // let n = 0;
//     // while(n > 0) {
//     //     console.log(n);
//     //     n--;
//     // }
//     // Napisati program koji ispsuje brojeve u opadajucem poretku dokle god broj ne dodje do broja k

//     // let k = 15;
//     // let up = 30;
//     // let counter = up;
//     // while(counter > k) {
//     //     console.log(counter);
//     //     counter --;
//     // }

//     // for(counter = up; counter > k; counter --) {
//     //     console.log(counter);
//     // }

//     // let key = 2;
//     // switch (key) {
//     //     case 0:
//     //         console.log('A');
//     //         break;
//     //     case 1:
//     //         console.log('B');
//     //     case 2:
//     //     case 3:
//     //         console.log('C');
//     //         break;
//     //     default:
//     //         console.log('D');
//     //         break;
//     //         console.log('E');
//     // }

// //     let k = 15;
// //     let counter = 1;
// //     let n = 35;
// //     // while(counter < n) {
// //     //     if (counter % k == 0) { counter ++; continue;}
// //     //     console.log(counter);
// //     //     counter ++;
// //     // }

// //     for (counter = 1; counter < n; counter ++) {
// //         if(counter % k == 0) continue;
// //         console.log(counter);
// //     }

// // }

// {
//     let m = 4;
//     let n = 3;
//     let text = '';
//     for (let counter = 0; counter < n; counter++) {
//         // console.log(text.repeat(m));
//         for (let secondCounter = 0; secondCounter < m; secondCounter++) {
//             text += '*';
//         }
//         console.log(text);
//         text = '';
//     }
// }

// {
//     let n = 5;
//     let text = '';
//     for (let i = 1; i <= n; i++) {
//         for (let j = n; j > 0; j--) {
//             if(j > i) {
//                 text += ' ';
//             } else {
//                 text += '#';
//             }
//         }
//         console.log(text);
//         text = '';
//     }
// }

{
    let n = 5;
    let text = '*';
    let space = ' ';
    console.log('*'.repeat(n));
    for (let counter = 0; counter < n- 2; counter++) {
        console.log(text + space.repeat(n-2) + text);
    }
    console.log('*'.repeat(n));
}
{
    let n = 5;
    let text;
    for(let counter = -n+1; counter < n; counter += 2) {
        let brojevi = '';
        for(let broj = 1; broj <= (n - Math.abs(counter)) / 2+1; broj++) {
            brojevi += Math.abs(broj);
        }
        let brojevi2 = '';
        for (let i = 1; i < brojevi.length; i++) {
            brojevi2 += brojevi[brojevi.length - i];
        }
        text = ' '.repeat(Math.abs(counter) / 2) + brojevi2 + brojevi + ' '.repeat(Math.abs(counter) / 2);
        console.log(text);
    }
}
{
    let n = 8;
    let m = 4;
    let poklopac = '*'.repeat(n);
    let srednjiDeo = ('*' + ' '.repeat(n - 2) + '*' + "\n").repeat(m - 2);
    console.log(poklopac);
    console.log(srednjiDeo + poklopac);

}
{
    let n = 10;
    let text = '';
    for (let counter = n - 1; counter >= 0; counter--) {
        for (let broj = 10; broj > counter; broj--) {
            text += broj + ' ';
        }
        console.log(text);
        text = '';
    }

    for (let counter = n - 1; counter >= 0; counter--) {
        text += counter ** 2 + ' ';
        console.log(text);
    }
    console.log('-------------------------');
    n = 10;
    for (let counter = 1; counter <= n; counter ++) {
        text = '';
        for (let broj = 1; broj <= n - counter + 1; broj ++) {
            text += broj + ' ';
        }
        console.log(text);   
    }

    console.log('---------------');

    n = 7;
    let space;
    for (let counter = 1; counter <= n; counter+=2) {
        space = (n - counter) / 2;
        console.log(' '.repeat(space) + '*'.repeat(counter) + ' '.repeat(space));
    }
    console.log('*'.repeat(n));
    for(let counter = 0; counter < n - 5; counter++) {
        console.log('*' + ' '.repeat(n -2) + '*');
    }
    console.log('*' + ' '.repeat((n - 5) / 2) + '***' + ' '.repeat((n - 5) / 2) + '*');
    console.log('*' + ' '.repeat((n - 5) / 2) + '* *' + ' '.repeat((n - 5) / 2) + '*');
    console.log('*' + ' '.repeat((n - 5) / 2) + '* *' + ' '.repeat((n - 5) / 2) + '*');
    console.log('*'.repeat(n));
}
{
    // B12 nevidljivi :)
    {
        let N = 4;
        let star = "*";
        let line;
        line = ' '.repeat(N - 1) + star;
        console.log(line);
        for(let counter = -(N - 2); counter <= N - 2; counter++) {
            line = ' '.repeat(N - Math.abs(counter)) + star + ' '.repeat(2 * (N - Math.abs(counter))) + star;
            console.log(line);
        }
        line = ' '.repeat(N - 1) + star;
        console.log(line);
    }
}