// variables
let gridContainer;
let sizeDisplay;
let currentGridSize = 16;
// Function Declaration
function createGrid(initSize = currentGridSize) {

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

function createGridSizeDisplay(size) {
    sizeDisplay = document.createElement('div');
    sizeDisplay.setAttribute('class', 'sizeDisplay');
    sizeDisplay.classList.add('flex-item');
    sizeDisplay.textContent = `Grid size: ${size} X ${size}`;
    body.appendChild(sizeDisplay);
}

// create main container
const body = document.querySelector('body');
body.classList.add('flex-container');

// create button container
const buttonContainer = document.createElement('div');
buttonContainer.setAttribute('class', 'button-Container');
buttonContainer.classList.add('flex-container');
buttonContainer.classList.add('flex-item');
body.appendChild(buttonContainer);

//create button to allow user to select grid size
const changeSizeButton = document.createElement('button');
changeSizeButton.setAttribute('class', 'button');
changeSizeButton.classList.add('flex-item');
changeSizeButton.textContent = "Change Grid Size";
buttonContainer.appendChild(changeSizeButton);

// create reset button
const resetButton = document.createElement('button');
resetButton.setAttribute('class', 'button');
resetButton.classList.add('flex-item');
resetButton.textContent = 'Clear Grid';
buttonContainer.appendChild(resetButton);

// display size
createGridSizeDisplay(currentGridSize);

// create initial grid
createGrid();

// Event Listeners Declarations
changeSizeButton.addEventListener('click', function a(f) {
    let newSize = prompt('Please enter new grid size ?x? (0-100)', 16);

    if (newSize == null) {
    }else {
        newSize = parseInt(newSize);
        if (newSize > 0 && newSize <= 100 && Number.isInteger(newSize)) {
            currentGridSize = newSize;
    
            body.removeChild(sizeDisplay);
            createGridSizeDisplay(currentGridSize);
    
            body.removeChild(gridContainer);
            createGrid(currentGridSize);
            
        } else {
            alert(`not a valid input`);
            a();
        }
    }
     
    

    
})

resetButton.addEventListener('click', function (f) {
    body.removeChild(gridContainer);
    createGrid(currentGridSize);

})





