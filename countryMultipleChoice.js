function startQuiz() {
    document.getElementById("start").style.display = "none";
    document.getElementById("question1").style.display = "block";
}
function showQuestion2() {
    document.getElementById("question1").style.display = "none";
    document.getElementById("question2").style.display = "block";
}
function showQuestion3() {
    document.getElementById("question2").style.display = "none";
    document.getElementById("question3").style.display = "block";
}
function showQuestion4() {
    document.getElementById("question3").style.display = "none";
    document.getElementById("question4").style.display = "block";
}
function showQuestion5() {
    document.getElementById("question4").style.display = "none";
    document.getElementById("question5").style.display = "block";
}
function showQuestion6() {
    document.getElementById("question5").style.display = "none";
    document.getElementById("question6").style.display = "block";
}
function showQuestion7() {
    document.getElementById("question6").style.display = "none";
    document.getElementById("question7").style.display = "block";
}
function showQuestion8() {
    document.getElementById("question7").style.display = "none";
    document.getElementById("question8").style.display = "block";
}
function showQuestion9() {
    document.getElementById("question8").style.display = "none";
    document.getElementById("question9").style.display = "block";
}
function showQuestion10() {
    document.getElementById("question9").style.display = "none";
    document.getElementById("question10").style.display = "block";
}
function endOfPage() {
    document.getElementById("question10").style.display = "none";
    document.getElementById("endOfQuiz").style.display = "block";
}
function congratulate() {
    var name = document.getElementById("name").value;
    if (name != "") {
        document.getElementById("congratulateText").innerHTML = "Congratulations, " + name + "! You finished the quiz! If you enjoyed it, you can share the quiz to you friends."
    } else {
        document.getElementById("congratulateText").innerHTML = "Congratulations! You finished the quiz! If you enjoyed it, you can share the quiz to you friends."
    }
}
function wrongAnswer() {
    alert("Wrong Answer!");
}
function toggleDarkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
    var button = document.getElementById("darkModeToggle");
    button.classList.toggle("currentlyDark");
}