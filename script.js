

const container = document.querySelector('#container');



function createGrid(size) {
    for(i = 1; i <= size; i ++) {
        for(j = 1; j <= size; j++) {
            let square = document.createElement('div');
            square.classList.add('square');
    
            //Placement
            square.style.gridColumn = i;
            square.style.gridRow = j;
    
            square.addEventListener('mouseover', ()=> {
                square.classList.add('filledSquare');
            });
            container.appendChild(square);
        }
    }
}

createGrid(16);

const resetCanvasButton = document.querySelector('#resetButton');

resetCanvasButton.addEventListener('click', ()=> {
    do{
        var canvasSize = window.prompt("Enter the new grid size.");
        if(canvasSize > 100) {
            window.alert("Please select a value less than 100");
        }
    } while(canvasSize > 100);

    const squares = document.querySelectorAll('.filledSquare');
    squares.forEach((e)=> {
       e.classList.remove('filledSquare');
    });

    //Removing old squares
    // for(i = 1; i <= 16; i++) {
    //     for (j = 1; j < 16; j++) {
    //         container.removeChild(container.lastChild);
    //     }
    // }

    while(container.firstChild) {
        container.removeChild(container.lastChild);
    }
    


    //Adjusting container-grid size
    document.getElementById('container').style.gridTemplateRows = 'repeat(' + canvasSize + ', 1fr)';
    document.getElementById('container').style.gridTemplateRows = '1';
    document.getElementById('container').style.gridTemplateColumns = 'repeat(' + canvasSize + ', 1fr)';
    document.getElementById('container').style.gridTemplateColumns = '1';

    //Adding new squares
    createGrid(canvasSize);
});