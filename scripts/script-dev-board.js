// color changing button
const colors = ['lightblue', 'lightgreen', 'lightcoral','lightyellow', 'aquamarine', 'lightpink', 'lightgray', 'purple'];
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


// task assign decrease
const taskCount = document.getElementById('task-assigned');
let convertedTaskCount = parseInt(taskCount.innerText.trim());

// navbar task increase
const navCount = document.getElementById('nav-task');
let convertedNavCount = parseInt(navCount.innerText.trim());
const activityLog = document.getElementById('activity-log')



let f1, f2, f3, f4, f5, f6;
f1 = f2 = f3 = f4 = f5 = f6 = false;

// completed Task Button 1
const completeButton = document.querySelector('.complete-task-btn-1');

if (completeButton) {
    completeButton.addEventListener('click', function () {
        completeButton.disabled = true;
        alert("Board updated successfully!");
        convertedTaskCount -= 1;
        taskCount.innerText = convertedTaskCount;

        convertedNavCount += 1;
        navCount.innerText = convertedNavCount;
        f1 = true;
        if (f1 && f2 && f3 && f4 && f5 && f6) {
            alert('Congrats!! You have completed all the task successfully!!');
        }

        const cardName = completeButton.closest('.task-card')

        const Title = document.getElementById('title-id-1')
        const cardTitle = Title.innerText;

        // Getting current time
        const now = new Date();
        const options = {
            timeZone: "Asia/Dhaka",
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
            hour12: true,
        };
        const timeString = new Intl.DateTimeFormat("en-BD", options).format(now);
        // Update activity log
        const Entry = document.createElement("p");
        Entry.innerText = `You have completed the task "${cardTitle}" at ${timeString}`;
        Entry.classList.add("bg-[#F4F7FF]", "mt-4", "rounded-2xl", "p-3")
        activityLog.append(Entry)

    });
}


// completed Task Button 2
const completeButton2 = document.querySelector('.complete-task-btn-2');

if (completeButton2) {
    completeButton2.addEventListener('click', function () {
        completeButton2.disabled = true;
        alert("Board updated successfully");
        convertedTaskCount -= 1;
        taskCount.innerText = convertedTaskCount;
        convertedNavCount += 1;
        navCount.innerText = convertedNavCount;
        f2 = true;
        if (f1 && f2 && f3 && f4 && f5 && f6) {
            alert('Congrats! You have completed all the task successfully!');
        }


        const cardName = completeButton.closest('.task-card')

        const Title = document.getElementById('title-id-2')
        const cardTitle = Title.innerText;

        // Getting current time
        const now = new Date();
        const options = {
            timeZone: "Asia/Dhaka",
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
            hour12: true,
        };
        const timeString = new Intl.DateTimeFormat("en-BD", options).format(now);
        // Update activity log
        const Entry = document.createElement("p");
        Entry.innerText = `You have completed the task "${cardTitle}" at ${timeString}`;
        Entry.classList.add("bg-[#F4F7FF]", "mt-4", "rounded-2xl", "p-3")
        activityLog.append(Entry)

    });
}
// completed Task Button 3
const completeButton3 = document.querySelector('.complete-task-btn-3');

if (completeButton3) {
    completeButton3.addEventListener('click', function () {
        completeButton3.disabled = true;
        alert("Board updated successfully");
        convertedTaskCount -= 1;
        taskCount.innerText = convertedTaskCount;
        convertedNavCount += 1;
        navCount.innerText = convertedNavCount;

        f3 = true;
        if (f1 && f2 && f3 && f4 && f5 && f6) {
            alert('Congrats! You have completed all the task successfully!');
        }

        const cardName = completeButton.closest('.task-card')

        const Title = document.getElementById('title-id-3')
        const cardTitle = Title.innerText;

        // Getting current time
        const now = new Date();
        const options = {
            timeZone: "Asia/Dhaka",
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
            hour12: true,
        };
        const timeString = new Intl.DateTimeFormat("en-BD", options).format(now);
        // Update activity log
        const Entry = document.createElement("p");
        Entry.innerText = `You have completed the task "${cardTitle}" at ${timeString}`;
        Entry.classList.add("bg-[#F4F7FF]", "mt-4", "rounded-2xl", "p-3")
        activityLog.append(Entry)

    });
}
// completed Task Button 4
const completeButton4 = document.querySelector('.complete-task-btn-4');

if (completeButton4) {
    completeButton4.addEventListener('click', function () {
        completeButton4.disabled = true;
        alert("Board updated successfully");
        convertedTaskCount -= 1;
        taskCount.innerText = convertedTaskCount;
        convertedNavCount += 1;
        navCount.innerText = convertedNavCount;

        f4 = true;
        if (f1 && f2 && f3 && f4 && f5 && f6) {
            alert('Congrats! You have completed all the task successfully!');
        }

        const cardName = completeButton.closest('.task-card')

        const Title = document.getElementById('title-id-4')
        const cardTitle = Title.innerText;

        // Getting current time
        const now = new Date();
        const options = {
            timeZone: "Asia/Dhaka",
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
            hour12: true,
        };
        const timeString = new Intl.DateTimeFormat("en-BD", options).format(now);
        // Update activity log
        const Entry = document.createElement("p");
        Entry.innerText = `You have completed the task "${cardTitle}" at ${timeString}`;
        Entry.classList.add("bg-[#F4F7FF]", "mt-4", "rounded-2xl", "p-3")
        activityLog.append(Entry)

    });
}

// completed Task Button 5
const completeButton5 = document.querySelector('.complete-task-btn-5');

if (completeButton5) {
    completeButton5.addEventListener('click', function () {
        completeButton5.disabled = true;
        alert("Board updated successfully");
        convertedTaskCount -= 1;
        taskCount.innerText = convertedTaskCount;
        convertedNavCount += 1;
        navCount.innerText = convertedNavCount;

        f5 = true;
        if (f1 && f2 && f3 && f4 && f5 && f6) {
            alert('Congrats! You have completed all the task successfully!');
        }

        const cardName = completeButton.closest('.task-card')

        const Title = document.getElementById('title-id-5')
        const cardTitle = Title.innerText;

        // Getting current time
        const now = new Date();
        const options = {
            timeZone: "Asia/Dhaka",
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
            hour12: true,
        };
        const timeString = new Intl.DateTimeFormat("en-BD", options).format(now);
        // Update activity log
        const Entry = document.createElement("p");
        Entry.innerText = `You have completed the task "${cardTitle}" at ${timeString}`;
        Entry.classList.add("bg-[#F4F7FF]", "mt-4", "rounded-2xl", "p-3")
        activityLog.append(Entry)

    });
}

// completed Task Button 6
const completeButton6 = document.querySelector('.complete-task-btn-6');

if (completeButton6) {
    completeButton6.addEventListener('click', function () {
        completeButton6.disabled = true;
        alert("Board updated successfully");
        convertedTaskCount -= 1;
        taskCount.innerText = convertedTaskCount;
        convertedNavCount += 1;
        navCount.innerText = convertedNavCount;
        f6 = true;
        if (f1 && f2 && f3 && f4 && f5 && f6) {
            alert('Congrats! You have completed all the task successfully!');
        }
        const cardName = completeButton.closest('.task-card')

        const Title = document.getElementById('title-id-6')
        const cardTitle = Title.innerText;

        // Getting current time
        const now = new Date();
        const options = {
            timeZone: "Asia/Dhaka",
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
            hour12: true,
        };
        const timeString = new Intl.DateTimeFormat("en-BD", options).format(now);
        // Update activity log
        const Entry = document.createElement("p");
        Entry.innerText = `You have completed the task "${cardTitle}" at ${timeString}`;
        Entry.classList.add("bg-[#F4F7FF]", "mt-4", "rounded-2xl", "p-3")
        activityLog.append(Entry)


    });
}

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

// clear history

document.getElementById("clear-history").addEventListener("click", function () {
    const activityLog = document.getElementById("activity-log");
    const Entries = activityLog.querySelectorAll("p");
    Entries.forEach(entry => entry.remove());
});
