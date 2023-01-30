let Exercise = function (pType, pMinutes, pCalories) {
    this.type = pType;
    this.minutes = pMinutes;
    this.calories = pCalories;
}

let exercises = [];


document.addEventListener("DOMContentLoaded", function (event) {

    document.getElementById("addBtn").addEventListener("click", function () {
        let minutes = document.getElementById("minutesInput").value;

        let radioButtonGroup = document.getElementsByName("exercise");
        let checkedRadio = Array.from(radioButtonGroup).find((radio) => radio.checked);
        let exerciseType = checkedRadio.value;

        let calories = 0;

        if (exerciseType === "Sit Ups") {
            calories = minutes * 10;
        }

        if (exerciseType === "Push Ups") {
            calories = minutes * 15;
        }

        if (exerciseType === "Jump Rope") {
            calories = minutes * 18;
        }

        document.getElementById("exerciseList").innerHTML = "<li>" + minutes + " minutes</li>";
        let exercise = new Exercise(exerciseType, minutes, calories);
        exercises.push(exercise);
    });

    document.getElementById("mostBurnedBtn").addEventListener("click", function () {

        document.getElementById("mostBurnedInput").value = "clicked";
    });

    document.getElementById("showAllBtn").addEventListener("click", function () {

        document.getElementById("exerciseList").innerHTML = "<li>Show all clicked</li>";
    });
});

