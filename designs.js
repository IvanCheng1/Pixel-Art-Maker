// Select color input
const colorPicker = document.getElementById('colorPicker');

// Select size input
const height = document.getElementById('inputHeight');
const width = document.getElementById('inputWidth');

const sizePicker = document.getElementById('sizePicker');
const pixelCanvas = document.getElementById('pixelCanvas');

//============================================================================

// create the grid according to input vars
function makeGrid() {
    // loop through each row from the user input: height
    for (row = 1; row <= height.value; row++) {
        // create element 'tr'
        const tr = document.createElement('tr');
        // loop through each column/cell from the user input: width
        for (column = 1; column <= width.value; column++) {
            // create element 'td'
            const td = document.createElement('td');
            // add 'td' (a square) to 'tr' (each row)
            tr.appendChild(td);
        };
        // add 'tr' (each row) to the bottom of the pixelCanvas (bottom of page)
        pixelCanvas.appendChild(tr);
        // add click listener
        tr.addEventListener('click', respondToTheClick);
    }
};

// click listener function
function respondToTheClick(event) {
    // get color from picker
    var color = colorPicker.value
    // check if listener is in 'td' (each square)
    if (event.target.tagName === 'TD') {
        // change color
        event.target.style.backgroundColor = color;
    }
}

//============================================================================

// When user clicks the submit button
document.addEventListener('submit', function() {
    // prevents from the default uploading
    event.preventDefault();
    // remove the grid if exists
    pixelCanvas.innerHTML = '';
    // make the grid from the makeGrid function
    makeGrid();
});
