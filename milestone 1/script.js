const boxesContainer = document.querySelector('.container');

for(let i = 0; i <= 100; i++) {
    const newBox = `
        <div class="box">${i}</div>
    `;

    boxesContainer.innerHTML += newBox;
}

