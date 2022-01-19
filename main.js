/*jslint browser:true, long:true, for:true */
/*jshint esversion: 6 */

/*
2022-01-19 mlf
Inspired by https://life-cal.com/
Memento mori!

TODO: build a form for user to enter dob and end age data
*/

(function () {
    "use strict";

    function lifeCalendar(dobStr, endAge) {
        let boxContainer = document.getElementById("box-container");

        let dob = new Date(dobStr);
        let today = new Date();
        let daysDiff = Math.round((today - dob) / (1000 * 60 * 60 * 24));
        let weeksDiff = Math.floor(daysDiff / 7);

        for (let i = 0; i < endAge; i += 1) {
            let age = document.createElement("span");
            age.className = "age";
            age.innerText = (i % 5 === 0 ? i : "");
            boxContainer.append(age);

            for (let j = 0; j < 52; j += 1) {
                let newDiv = document.createElement("div");
                let weekNum = i * 52 + j;
                newDiv.className = (weekNum < weeksDiff ? "box-dark" : "box");
                boxContainer.appendChild(newDiv);
            }

            boxContainer.appendChild(document.createElement("div"));
        }

        let quotes = [
            "We have two lives, and the second begins when we realize we only have one - Confucius",
            "This is your life, and it's ending one minute at a time - Chuck Palahniuk",
            "What have you done in the last week that you will remember on your death bed? - Anon",
            "You could leave life right now. Let that determine what you do and say and think - Marcus Aurelius"
        ];
        document.getElementById("quote").innerText = quotes[Math.floor(Math.random() * quotes.length)];
    }

    lifeCalendar("1/1/2022", 1);  // dob, end age; try e.g., 1/1/1970 and 65
}());
