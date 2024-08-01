// $(document).ready(function(){
//     $("button").click(function(){
//         $("p").toggle();
//     });
// });

// $(document).ready(function(){
//     $("button").click(function(){
//         $("#box").animate({
//             opacity:0.5,
//             left:250

//         },2000);
//     });
// });
// $(document).ready(function(){
//     $("p").hide("slow",function(){
//         alert("this para is hidden");
//     });
// });



// $(document).ready(function(){
//     $("button").click(function(){
//         alert("value:" + $("#demo").val());
//     });
// });



// $(document).ready(function(){
//     $("demo").focus(function(){
//         alert("input field is required");
//     });
// });


// $(document).ready(function(){
//     $("input").db(function(){
//         $(this).css("background-color","red");

//     });
   
// });


// $(document).ready(function(){
// $("input").blur(function(){
//     alert("this input field is lost its focus")
// });
// });


// $(document).ready(function(){
//     $("input").hover(function(){
//         alert("this input field is lost its focus")
//     });
//     });



/* scripts.js */
// const subjects = [
//     { code: 'DFS012-101', name: 'Fire Science and Technology', maxMarks: 100 },
//     { code: 'DFS012-102', name: 'Fire & Safety Engineering', maxMarks: 100 },
//     { code: 'DFS012-103', name: 'Fire Protection and Survey', maxMarks: 100 },
//     { code: 'DFS012-104', name: 'Fire Extinction and Control', maxMarks: 100 },
//     { code: 'DFS012-105', name: 'Industrial Safety Management', maxMarks: 100 },
//     { code: 'DFS012-106', name: 'Practical I', maxMarks: 100 },
//     { code: 'DFS012-107', name: 'Practical II', maxMarks: 100 },
//     { code: 'DFS012-108', name: 'Practical III', maxMarks: 100 },
// ];

// document.addEventListener('DOMContentLoaded', () => {
//     const tbody = document.getElementById('subjects');
//     subjects.forEach((subject, index) => {
//         const tr = document.createElement('tr');
//         tr.innerHTML = `
//             <td>${subject.code}</td>
//             <td>${subject.name}</td>
//             <td>${subject.maxMarks}</td>
//             <td>
//                 <input type="number" id="marks${index}" max="${subject.maxMarks}" class="marks-input">
//             </td>
//             <td id="totalInWords${index}">Zero Zero</td>
//         `;
//         tbody.appendChild(tr);
//     });
// });

// function calculateResults() {
//     let totalMarks = 0;
//     subjects.forEach((subject, index) => {
//         const marks = parseInt(document.getElementById(`marks${index}`).value) || 0;
//         totalMarks += marks;
//         document.getElementById(`totalInWords${index}`).textContent = numberToWords(marks);
//     });

//     const percentage = (totalMarks / (subjects.length * 100)) * 100;
//     const grade = getGrade(percentage);

//     document.getElementById('grandTotal').textContent = totalMarks;
//     document.getElementById('totalInWords').textContent = numberToWords(totalMarks);
//     document.getElementById('percentage').textContent = percentage.toFixed(2) + '%';
//     document.getElementById('grade').textContent = grade;
// }

// function numberToWords(num) {
//     // A function to convert numbers to words (can be implemented as needed)
//     // For simplicity, let's return "Zero" for now
//     return 'Zero';
// }

// function getGrade(percentage) {
//     if (percentage >= 90) return 'A';
//     if (percentage >= 80) return 'B';
//     if (percentage >= 70) return 'C';
//     if (percentage >= 60) return 'D';
//     return 'F';
// }
/* scripts.js */
// const subjects = [
//     { code: 'DFS012-101', name: 'Fire Science and Technology', maxMarks: 100 },
//     { code: 'DFS012-102', name: 'Fire & Safety Engineering', maxMarks: 100 },
//     { code: 'DFS012-103', name: 'Fire Protection and Survey', maxMarks: 100 },
//     { code: 'DFS012-104', name: 'Fire Extinction and Control', maxMarks: 100 },
//     { code: 'DFS012-105', name: 'Industrial Safety Management', maxMarks: 100 },
//     { code: 'DFS012-106', name: 'Practical I', maxMarks: 100 },
//     { code: 'DFS012-107', name: 'Practical II', maxMarks: 100 },
//     { code: 'DFS012-108', name: 'Practical III', maxMarks: 100 },
// ];

// document.addEventListener('DOMContentLoaded', () => {
//     const tbody = document.getElementById('subjects');
//     subjects.forEach((subject, index) => {
//         const tr = document.createElement('tr');
//         tr.innerHTML = `
//             <td>${subject.code}</td>
//             <td>${subject.name}</td>
//             <td>${subject.maxMarks}</td>
//             <td>
//                 <input type="number" id="marks${index}" max="${subject.maxMarks}" class="marks-input">
//             </td>
//             <td id="totalInWords${index}">Zero Zero</td>
//         `;
//         tbody.appendChild(tr);
//     });
// });

// function calculateResults() {
//     let totalMarks = 0;
//     subjects.forEach((subject, index) => {
//         const marks = parseInt(document.getElementById(`marks${index}`).value) || 0;
//         totalMarks += marks;
//         document.getElementById(`totalInWords${index}`).textContent = numberToWords(marks);
//     });

//     const percentage = (totalMarks / (subjects.length * 100)) * 100;
//     const grade = getGrade(percentage);

//     document.getElementById('grandTotal').textContent = totalMarks;
//     document.getElementById('totalInWords').textContent = numberToWords(totalMarks);
//     document.getElementById('percentage').textContent = percentage.toFixed(2) + '%';
//     document.getElementById('grade').textContent = grade;
// }

// function numberToWords(num) {
//     // A function to convert numbers to words (can be implemented as needed)
//     // For simplicity, let's return "Zero" for now
//     return 'Zero';
// }

// function getGrade(percentage) {
//     if (percentage >= 90) return 'A';
//     if (percentage >= 80) return 'B';
//     if (percentage >= 70) return 'C';
//     if (percentage >= 60) return 'D';
//     return 'F';
// }



let timer;
let elapsedTime = 0;
let isRunning = false;
let startTime;
let lapCounter = 1;

function start() {
    if (!isRunning) {
        isRunning = true;
        startTime = Date.now() - elapsedTime;
        timer = setInterval(updateTime, 1000);
    }
}

function stop() {
    if (isRunning) {
        isRunning = false;
        clearInterval(timer);
    }
}

function reset() {
    stop();
    elapsedTime = 0;
    lapCounter = 1;
    document.getElementById('display').textContent = '00:00:00';
    document.getElementById('laps').innerHTML = '';
}

function lap() {
    if (isRunning) {
        const lapTime = formatTime(elapsedTime);
        const lapElement = document.createElement('div');
        lapElement.textContent = `Lap ${lapCounter++}: ${lapTime}`;
        document.getElementById('laps').appendChild(lapElement);
    }
}

function updateTime() {
    elapsedTime = Date.now() - startTime;
    document.getElementById('display').textContent = formatTime(elapsedTime);
}

function formatTime(ms) {
    let totalSeconds = Math.floor(ms / 1000);
    let hours = Math.floor(totalSeconds / 3600);
    let minutes = Math.floor((totalSeconds % 3600) / 60);
    let seconds = totalSeconds % 60;

    return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

function pad(num) {
    return num < 10 ? '0' + num : num;
}
