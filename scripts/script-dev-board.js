// color changing button
const colors = ['lightblue', 'lightgreen', 'lightcoral', 'lightpink', 'lightgray', 'purple'];
const changeColorBtn = document.getElementById('changeColorBtn');

let colorIndex = 0;
changeColorBtn.addEventListener('click', function () {
    document.body.style.backgroundColor = colors[colorIndex];
    colorIndex = (colorIndex + 1) % colors.length;
});
// page changing
const discoverButton = document.getElementById('discover-btn');
discoverButton.addEventListener('click', function () {
    window.location.href = 'question-page.html';
});

//completed Task Button 1
const completeButton = document.querySelector('.complete-task-btn-1');
completeButton.addEventListener('click', function () {
    completeButton.disabled = true;
    alert("Board updated successfully");
});

//completed Task Button 2
const completeButton2 = document.querySelector('.complete-task-btn-2');
completeButton2.addEventListener('click', function () {
    completeButton2.disabled = true;
    alert("Board updated successfully");
});

//completed Task Button 3
const completeButton3 = document.querySelector('.complete-task-btn-3');
completeButton3.addEventListener('click', function () {
    completeButton3.disabled = true;
    alert("Board updated successfully");
});

//completed Task Button 4 
const completeButton4 = document.querySelector('.complete-task-btn-4');
completeButton4.addEventListener('click', function () {
    completeButton4.disabled = true;
    alert("Board updated successfully");
});

//completed Task Button 5 
const completeButton5 = document.querySelector('.complete-task-btn-5');
completeButton5.addEventListener('click', function () {
    completeButton5.disabled = true;
    alert("Board updated successfully");
});

//completed Task Button 6 
const completeButton6 = document.querySelector('.complete-task-btn-6');
completeButton6.addEventListener('click', function () {
    completeButton6.disabled = true;
    alert("Board updated successfully");
});

// Current time JS

function updateDate() {
    const now = new Date();

    const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    const dayOfWeek = dayNames[now.getDay()];
    const month = monthNames[now.getMonth()];
    const day = now.getDate();
    const year = now.getFullYear();

    const newDate = `${dayOfWeek}, ${month} ${day} ${year}`;
    document.getElementById('currentDate').innerHTML = `${dayOfWeek},<br><span class="font-bold">${month} ${day}, ${year}</span>`;
}
updateDate();

