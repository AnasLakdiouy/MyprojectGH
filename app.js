function changeColor() {
    // Get the paragraph element by its id
    var textElement = document.getElementById("colorChangeText");

    // Generate a random color
    var randomColor = getRandomColor();

    // Change the text color to the random color
    textElement.style.color = randomColor;
}

function getRandomColor() {
    // Generate a random color in hexadecimal format
    return '#' + Math.floor(Math.random()*16777215).toString(16);
}
