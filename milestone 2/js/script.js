
for(let i = 0; i <= 100; i++) {
    let newNumber;
    if( i % 3 === 0 ) {
        newNumber = 'Fizz'
    } else if ( i % 5 === 0 ) {
        newNumber = 'Buzz'
    } else if (( i % 3 === 0 ) && ( i % 5 === 0 )) {
        newNumber = 'FizzBuzz'
    } else {
        newNumber = i
    }
    const newBox = `
        <div class="box">${newNumber}</div>
    `;
    const itemsContainer = document.querySelector('.container');
    itemsContainer.innerHTML += newBox
}

