

const container = document.querySelector('#container');

for(i = 1; i <= 16; i ++) {
    for(j = 1; j <= 16; j++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.gridColumn = i;
        square.style.gridRow = j;
      

        container.appendChild(square);
        
    }
    
}