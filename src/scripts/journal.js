/*
    Define the keys and value for a JavaScript object that
    represents a journal entry about what you learned today
*/
const entry1 = {
    date: '3-1-19',
    concepts: 'lab day',
    entry: 'lab day to work on exercises',
    mood: 'happy'
};

const entry2 = {
    date: '2-28-19',
    concepts: 'functions, strings, loops',
    entry: 'the concept of functions was pretty straight forward, but creating them and using them in line with loops and conditional statements was more of a challenge',
    mood: 'aight'
};

// take entries and plug them in an array
const objectAll = [];
objectAll.push(entry1);
objectAll.push(entry2);

//create variable thats link to class on html document
const entryLog = document.querySelector('.entryLog')

//function to create elements and add objects into elements to display on dom
//entryObject is for empty array with journal entries
function createDom(entryObject) {
    let string = `<div>`

    //loop through object to obtain what i want to be displayed
    for (i = 0; i < entryObject.length; i++) {
        string += `<h1>${entryObject[i].date}</h1>
                    <h3>${entryObject[i].concepts}</h3>
                    <p>${entryObject[i].entry}</p>
                    <p>${entryObject[i].mood}</p>`
    }
    string += `</div>`

    entryLog.innerHTML = string;

}

createDom(objectAll)