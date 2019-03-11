// first attempt to do exercise. journal.js has cleaned up code. 


/*
    Define the keys and value for a JavaScript object that
    represents a journal entry about what you learned today
*/
const objectAll = [{
        date: '3-1-19',
        concepts: 'lab day',
        entry: 'lab day to work on exercises',
        mood: 'happy'
    },
    {
        date: '2-28-19',
        concepts: 'functions, strings, loops',
        entry: 'the concept of functions was pretty straight forward, but creating them and using them in line with loops and conditional statements was more of a challenge',
        mood: 'aight'
    }
]



// Function for DOM elements

const frag = document.createDocumentFragment()
const entryLog = document.querySelector('.entryLog');



function createElement(object) {
    const div = document.createElement('div');
    const el1 = document.createElement('h1');
    el1.textContent = object.concepts;
    div.appendChild(el1);
    const el2 = document.createElement('h3');
    el2.textContent = object.date;
    div.appendChild(el2);
    const el3 = document.createElement('p');
    el3.textContent = object.entry;
    div.appendChild(el3);
    const el4 = document.createElement('p');
    el4.textContent = object.mood;
    div.appendChild(el4);
    frag.appendChild(div);
}

for (let i = 0; i < objectAll.length; i++) {
    createElement(objectAll[i]);
}


entryLog.appendChild(frag);