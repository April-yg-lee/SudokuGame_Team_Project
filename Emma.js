'use strict';

// create each container from html element
const container1 = document.querySelector('#container1');
const container2 = document.querySelector('#container2');
const container3 = document.querySelector('#container3');
const container4 = document.querySelector('#container4');
const container5 = document.querySelector('#container5');
const container6 = document.querySelector('#container6');
const container7 = document.querySelector('#container7');
const container8 = document.querySelector('#container8');
const container9 = document.querySelector('#container9');

// make level obj, and number arrays
const levelObj = {
    'easy-1' : {
        "0" : [4,6,2,1,3,9,7,5,8],
        "1" : [5,9,1,6,8,7,3,4,2],
        "2" : [3,8,7,4,2,5,1,9,6],
        "3" : [6,9,1,5,2,3,8,7,4],
        "4" : [7,3,8,9,6,4,2,1,5],
        "5" : [2,5,4,7,1,8,9,6,3],
        "6" : [9,8,7,3,1,5,2,4,6],
        "7" : [4,2,6,8,7,9,1,5,3],
        "8" : [5,3,1,6,4,2,8,7,9],
    },

    'easy-2' : {
        "0" : [4,6,2,1,3,9,7,5,8],
        "1" : [5,9,1,6,8,7,3,4,2],
        "2" : [3,8,7,4,2,5,1,9,6],
        "3" : [6,9,1,5,2,3,8,7,4],
        "4" : [7,3,8,9,6,4,2,1,5],
        "5" : [2,5,4,7,1,8,9,6,3],
        "6" : [9,8,7,3,1,5,2,4,6],
        "7" : [4,2,6,8,7,9,1,5,3],
        "8" : [5,3,1,6,4,2,8,7,9],
    },

    'hard-1' : {
        "0" : [3,8,7,5,4,2,9,1,6],
        "1" : [5,2,1,6,3,9,4,8,7],
        "2" : [9,6,4,1,7,8,5,2,3],
        "3" : [7,6,8,2,3,1,4,9,5],
        "4" : [1,4,5,9,7,8,3,6,2],
        "5" : [2,3,9,4,5,6,7,8,1],
        "6" : [6,2,9,1,7,3,8,5,4],
        "7" : [8,5,4,2,9,6,7,1,3],
        "8" : [3,1,7,8,4,5,6,9,2],
    },
    
    'hard-2' : {
        "0" : [9,7,6,1,5,8,2,3,4],
        "1" : [5,1,3,6,4,2,7,9,8],
        "2" : [2,4,8,7,9,3,5,1,6],
        "3" : [7,6,1,8,2,3,5,4,9],
        "4" : [8,3,5,4,7,9,1,2,6],
        "5" : [9,2,4,1,6,5,8,3,7],
        "6" : [6,9,7,3,1,5,4,8,2],
        "7" : [3,5,1,2,8,4,9,6,7],
        "8" : [4,8,2,6,7,9,3,5,1],

    },
}
selectLev(levelObj);

// choose level
function selectLev(levelObj){
    // if(button.innerHTML == 'basic')
    if(true){
        createInput(levelObj['lev1']);
        } else {
        createInput(levelObj['lev2']);
        }
}

// create Input boxes 
function createInput(selectedLev){
    for(let i= 0; i < 9; i++){
        for(let g=0; g < 9; g++){
            container1.innerHTML += `<div value=${selectedLev[i][g]}>${selectedLev[i][g]}</div>`;
        }
    }
}


// 1. how to create each container
// 2. how about using index instead of class?