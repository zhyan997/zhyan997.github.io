// "use strict"

function howdy(firstName){
    alert("Howdy " + firstName);
};

// 
function conditional() {
    var currentHour = new Date().getHours();
    if (currentHour < 10) {
        alert("Good morning!");
    } else if (currentHour < 18) {
        alert("Good day!");
    } else {
        alert("Good evening!");
    }
};

function evalNumber() {
    var userInput = prompt("Please enter a 5-digit number:")
    alert("You entered: " + userInput)
    console.log("Is integer: "+Number.isInteger(Number(userInput)))
    if (isNaN(userInput) || userInput.length > 5 || userInput.length == 0 || !Number.isInteger(Number(userInput))) {
        alert("Please Enter a valid number.")
    } else if (userInput % 2 == 0) {
        alert(userInput + " is an even number.")
    } else {
        alert(userInput + " is an odd number.")
    }
};

function changeTitle() {
    let selectedElement = document.getElementById("programCard");
    console.log(selectedElement);
    selectedElement.innerText = "DIGS";
};

function getMinute() {
    let selectedElement = document.getElementById("minute");
    let currentMinute = new Date().getMinutes();
    selectedElement.innerText = currentMinute
};

function getTime() {
    let selectedElement = document.getElementById("time");
    let currentMinute = new Date().toTimeString();
    selectedElement.innerText = "Current Time: " + currentMinute
};

function disappear() {
    let selectedElement = document.getElementById("time");
    selectedElement.style.display = "none"
};

function retrieve() {
    let selectedElement = document.getElementById("time");
    selectedElement.style.display = ""
};

function welcome() {
    alert("Welcome to my site!")
};

// var mapSetting = {
//     id: "mapID",
//     zoomOffset: -1,
//     center: latLng
// };

// courses.push("new elem")
// president[45] = "elem" - Add element to specific position

var courses = ['Digital Text', 'Data Publication', "Data Analysis"];

function coursesAlert(array) {
    for (let i = 0; i < array.length; i++) {
        alert(array[i])
    };
};

function parseArray() {

    var fruit1 = document.getElementById("fruit1").value;
    var fruit2 = document.getElementById("fruit2").value;
    var fruit3 = document.getElementById("fruit3").value;
    var fruit4 = document.getElementById("fruit4").value;
    var formArray = [fruit1, fruit2, fruit3, fruit4];
    var fruitArraySort = formArray.sort();
    let selectedElement = document.getElementById("sortFruit");
    selectedElement.innerText = fruitArraySort;

};

function addElements(){
    var valueArray = ['first', 'second', 'third'];
    for (i in valueArray){
        var newDiv = document.createElement("div");
        newDiv.setAttribute("class", 'row');
        newDiv.setAttribute('id', 'div '+i);
        document.getElementById('addElements').appendChild(newDiv);
        newDiv.innerText = valueArray[i];
    };
};