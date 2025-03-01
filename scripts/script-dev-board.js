const colors = ['lightblue', 'lightgreen', 'lightcoral', 'lightpink', 'lightgray'];
const changeColorBtn = document.getElementById('changeColorBtn');

let colorIndex = 0;
changeColorBtn.addEventListener('click', function () {
    document.body.style.backgroundColor = colors[colorIndex];
    colorIndex = (colorIndex + 1) % colors.length;
});
