// Select color input
const colorPicker = document.getElementById('colorPicker');

// Select size input
const height = document.getElementById('inputHeight');
const width = document.getElementById('inputWidth');

// More variables
const sizePicker = document.getElementById('sizePicker');
const pixelCanvas = document.getElementById('pixelCanvas');

//============================================================================

// When size is submitted by the user, call makeGrid()

function makeGrid() {
    for (row = 1; row <= height.value; row++) {
        const tr = document.createElement('tr');
        for (column = 1; column <= width.value; column++) {
            const td = document.createElement('td');
            tr.appendChild(td);
        };
        pixelCanvas.appendChild(tr);
        tr.addEventListener('click', respondToTheClick);
    }
};

function respondToTheClick(event) {
    const color = colorPicker.value
    if (event.target.style.backgroundColor === ''){
        event.target.style.backgroundColor = color;
    } else {
        event.target.style.backgroundColor = '';
    }
}

//============================================================================

// When size is submitted by the user, call makeGrid()
document.addEventListener('submit', function() {
    event.preventDefault(); // So it doesn't upload stuff
    pixelCanvas.innerHTML = '';
    makeGrid();
});
