// variables
let gridContainer;
// create grid fuction
function createGrid(initSize = 16) {
    // create grid container
    gridContainer = document.createElement('div');
    gridContainer.setAttribute('class', 'grid');
    gridContainer.classList.add('flex-container');
    gridContainer.classList.add('flex-item');

    body.appendChild(gridContainer);

    for (let x = 0; x < initSize; x++) {
        const container = document.createElement('div');
        container.setAttribute('class', 'row');
        container.classList.add('flex-container');
        container.classList.add('flex-item');
    
        gridContainer.appendChild(container);
        //loop 16 times to create 16 rows of divs
        for (let y = 0; y < initSize; y++) {
            const block = document.createElement('div');
            block.setAttribute('class', 'block');
            block.classList.add('flex-item');
            // test text
            // block.textContent = 'X';
            container.appendChild(block);
            
            // add event listener for when the mouse enters the block to change it black        
            block.addEventListener('mouseenter', function (e) {
                block.classList.add('hover');
            })
        }
        
    }
}

// create main container
const body = document.querySelector('body');
body.classList.add('flex-container');

//create button allow user to select grid size
const changeSizeButton = document.createElement('button');
changeSizeButton.setAttribute('class', 'button');
changeSizeButton.classList.add('flex-item');
changeSizeButton.textContent = "Change Grid Size";
body.appendChild(changeSizeButton);


// create initial grid
createGrid();

// if new grid size is decided create the grid
changeSizeButton.addEventListener('click', function (f) {
    let newSize = parseInt(prompt('Please enter new grid size ?x? (0-100)', 16));
    if (newSize > 0 && newSize <= 100 && Number.isInteger(newSize)) {
        body.removeChild(gridContainer);
        createGrid(newSize);
    }
    

    
})


