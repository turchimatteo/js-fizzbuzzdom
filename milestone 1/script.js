const boxesContainer = document.querySelector('.container');

for(let i = 0; i <= 100; i++) {
    const newBox = `
        <div class="box">${i}</div>
    `;

    boxesContainer.innerHTML += newBox;
}

for(let i = 0; i <= 100; i++) {
    console.log(i);

    let evenOrOdd;
    if( i % 3 === 0 ) {
        evenOrOdd = 'multiplo di 3'
    } else if ( i % 5 === 0 ) {
        evenOrOdd = 'multiplo di 5'
    } else {
        evenOrOdd = 'non multiplo'
    }

    console.log(evenOrOdd);

    
}