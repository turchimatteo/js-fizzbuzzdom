/* const boxesContainer = document.querySelector('.container');

for(let i = 0; i <= 100; i++) {
    const newBox = `
        <div class="box">${i}</div>
    `;

    boxesContainer.innerHTML += newBox;
} */

for(let i = 1; i <= 100; i++) {
    console.log(i);

    let evenOrOdd;
    if( i % 3 === 0 ) {
        evenOrOdd = 'Fizz'
    } else if ( i % 5 === 0 ) {
        evenOrOdd = 'Buzz'
    } else if (( i % 3 === 0 ) && ( i % 5 === 0 )) {
        evenOrOdd = 'FizzBuzz'
    } else {
        evenOrOdd = 'Non multiplo'
    }

    console.log(evenOrOdd);

    
}