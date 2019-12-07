// PRVI ZADATAK
{
    let sum = 0;
    let n = 9;
    let k = 5;

    for (let counter = 0; counter < n; counter++) {
        sum += ((-1) ** (counter)) * (1 + counter) / (k + counter);
    }
    console.log(`The result is ${sum}`);
}

// DRUGI ZADATAK
{
    let M = 4;
    let N = 14;
    let sum = 0;
    let numberCount = 0;
    let average;
    if (M > N) {
        console.log("ERROR");
    } else {
        for (let counter = M; counter <= N; counter++) {

            if (counter % 7 == 0) {
                sum += counter;
                numberCount++;
            }
        }
        average = sum / numberCount;
        console.log(`The average of numbers divisible by 7 between ${M} and ${N} is ${average}`);
    }
}

// TRECI ZADATAK
{
    let N = 10;
    let star = "*";
    let line;
    let divStars = document.getElementById('show-stars');
    line = ' '.repeat(N - 1) + star;
    console.log(line);
    divStars.innerHTML += `<p>${line}</p>`;
    for (let counter = -(N - 2); counter <= N - 2; counter++) {
        line = ' '.repeat(Math.abs(counter)) + star + ' '.repeat(2 * (N - Math.abs(counter) - 1) - 1) + star;
        console.log(line);
        divStars.innerHTML += `<p>${line}</p>`;
    }
    line = ' '.repeat(N - 1) + star;
    console.log(line);
    divStars.innerHTML += `<p>${line}</p>`;
}

// CETVRTI ZADATAK
{
    let choosenMonth = 1;
    let leapYear = true;
    let numberOfDays;
    switch (choosenMonth) {
        case 0:
        case 2:
        case 4:
        case 6:
        case 7:
        case 9:
        case 11:
            numberOfDays = 31;
            break;
        case 1:
            if (leapYear) numberOfDays = 29;
            else numberOfDays = 28;
            break;
        case 3:
        case 5:
        case 8:
        case 10:
            numberOfDays = 30;
            break;
        default:
            numberOfDays = 'ERROR';
    }
    console.log(`Chosen month have ${numberOfDays} days.`);
}