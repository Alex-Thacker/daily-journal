/*
    Define the keys and value for a JavaScript object that
    represents a journal entry about what you learned today
*/
// objects are now stored in json
// const entry1 = {
//     date: '3-1-19',
//     concepts: 'lab day',
//     entry: 'lab day to work on exercises',
//     mood: 'happy'
// };

// const entry2 = {
//     date: '2-28-19',
//     concepts: 'functions, strings, loops',
//     entry: 'the concept of functions was pretty straight forward, but creating them and using them in line with loops and conditional statements was more of a challenge',
//     mood: 'aight'
// };



// take entries and plug them in an array
// these aren't needed anymore because of how they are now stored
// const objectAll = [];
// objectAll.push(entry1);
// objectAll.push(entry2);



// this fetch call will take an object and post it to json
// fetch("http://localhost:8088/entries", {
//     method: "POST",
//     body: JSON.stringify(testObject),
//     headers: {
//         "Content-Type": "application/json"
//     }
// })
//     .then(response => response.json())




//create variable thats link to class on html document
//daily journal version 4 start
const entryLog = document.querySelector('.entryLog')

fetch("http://localhost:8088/entries")
    .then(response => response.json())
    .then(myParsedEntry => {
        let string = `<div>`

        //loop through object to obtain what i want to be displayed
        for (i = 0; i < myParsedEntry.length; i++) {
            string += `<h1>${myParsedEntry[i].date}</h1>
                        <h3>${myParsedEntry[i].concepts}</h3>
                        <p>${myParsedEntry[i].entry}</p>
                        <p>${myParsedEntry[i].mood}</p>`
        }
        string += `</div>`

        entryLog.innerHTML = string;
    })
//daily journal version 4 end




//function to create elements and add objects into elements to display on dom
//entryObject is for empty array with journal entries
// function createDom(entryObject) {
//     let string = `<div>`

//     //loop through object to obtain what i want to be displayed
//     for (i = 0; i < entryObject.length; i++) {
//         string += `<h1>${entryObject[i].date}</h1>
//                     <h3>${entryObject[i].concepts}</h3>
//                     <p>${entryObject[i].entry}</p>
//                     <p>${entryObject[i].mood}</p>`
//     }
//     string += `</div>`

//     entryLog.innerHTML = string;

// }

// createDom(objectAll)