const { isNumber } = require('util');
const { isNumberObject } = require('util/types');

const prompt = require('prompt-sync')({ sigint: true });

let people = new Array;
let exit = false;
let exit2 = null;
let manualCount = 0;

do {
    if (manualCount > 65536) {
        console.clear();
        manualCount = 0;
    }
    people.push(parseInt(prompt("Say your age: ")));

    if (isNaN(people[people.length - 1])) {
        console.log("Say numbers only.");
        people.pop();

    } else {
        console.log("Age added.");
        console.log("You had: " + (people[people.length - 1] * parseInt(12)) + " months, " + (people[people.length - 1] * parseInt(365)) + " days, " + (people[people.length - 1] * parseInt(365 * 24)) + " hours, " + (people[people.length - 1] * parseInt(365 * 24 * 60)) + " minutes lived.");
        console.log(`Ages: ${people}`);

        manualCount++;

    }

    exit2 = String(prompt("Exit? "));

    if (exit2 != null && isNaN(exit2) && exit2 != "") {
        if (exit2 == "yes" || exit2 == "YES" || exit2 == "yES" || exit2 == "Yes" || exit2 == "y" || exit2 == "Y" || exit2 == "yEs" || exit2 == "YeS" || exit2 == true) {
            exit = true;

        } else {
            exit = false;

        }

    } else {
        console.log("Say Yes or No.");

    }

} while (exit == false);