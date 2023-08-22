// change the background to black


// create main container
const body = document.querySelector('body');
body.classList.add('flex-container');

// const mainContainer = document.createElement('div');
// mainContainer.setAttribute('class', 'flex-container');

// body.appendChild(mainContainer);
//loop 16 times to create 16 columns
for (let x = 0; x < 16; x++) {
    const container = document.createElement('div');
    container.setAttribute('class', 'row');
    container.classList.add('flex-container');
    body.appendChild(container);
    //loop 16 times to create 16 rows of divs
    for (let y = 0; y < 16; y++) {
        const block = document.createElement('div');
        block.setAttribute('class', 'block');
        block.classList.add('flex-item');
        // test text
        // block.textContent = 'X';
        container.appendChild(block);
        
        // add event listener for when the mouse enters the block to change it black        
        block.addEventListener('mouseenter', function (e) {
            console.log(e);
            block.classList.add('hover');
        })
    }
    
}



