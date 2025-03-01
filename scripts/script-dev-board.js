// color changing button
const colors = ['lightblue', 'lightgreen', 'lightcoral', 'lightpink', 'lightgray'];
const changeColorBtn = document.getElementById('changeColorBtn');

let colorIndex = 0;
changeColorBtn.addEventListener('click', function () {
    document.body.style.backgroundColor = colors[colorIndex];
    colorIndex = (colorIndex + 1) % colors.length;
});

// Discover button page change
const discoverButton = document.getElementById('discover-btn');
discoverButton.addEventListener('click', function () {
    window.location.href = 'question-page.html';
});
