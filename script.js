

const container = document.querySelector('#container');

//Creating grid
for(i = 1; i <= 16; i ++) {
    for(j = 1; j <= 16; j++) {
        const square = document.createElement('div');
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

    for(i = 1; i <= canvasSize; i++) {
        for (j = 1; j < canvasSize; j++) {


        }
    }
});