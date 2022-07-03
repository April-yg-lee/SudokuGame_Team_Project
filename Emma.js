'use strict';

const container = document.querySelector('.container');
const gameTimer = document.querySelector('.timer');
const timerText = document.querySelector('.minute');
const GAME_DURATON_SEC = 10;
let timer = undefined;

// make level obj, and number arrays
const levelObj = {
    'easy-1-answer' : {
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

    'easy-2-answer' : {
        "0" : [3,5,2,1,6,8,7,4,9],
        "1" : [4,7,6,9,5,2,8,1,3],
        "2" : [1,8,9,7,3,4,6,2,5],
        "3" : [4,2,5,6,8,3,9,7,1],
        "4" : [6,9,7,2,4,1,5,3,8],
        "5" : [8,1,3,5,9,7,4,6,2],
        "6" : [8,9,7,2,1,4,5,3,6],
        "7" : [3,6,5,7,8,9,1,2,4],
        "8" : [2,4,1,3,5,6,9,7,8],
    },

    'hard-1-answer' : {
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
    
    'hard-2-answer' : {
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
        createInput(levelObj['easy-1-answer']);
        } else {
        createInput(levelObj['easy-2-answer']);
        }
}

// create Input boxes 
function createInput(selectedLev){
    let boxNum = 1;
    for(let i= 0; i < 9; i++){
        for(let g=0; g < 1; g++){
          document.querySelector(`.box${boxNum}`).innerHTML += `
            <div class="n1to3">
                <div class="n1" id=${i}-0>${selectedLev[i][g]}</div>
                <div class="n2" id=${i}-1>${selectedLev[i][g+1]}</div>
                <div class="n3" id=${i}-2>${selectedLev[i][g+2]}</div>
                </div>
            <div class="n4to6">
                <div class="n4" id=${i}-3>${selectedLev[i][g+3]}</div>
                <div class="n5" id=${i}-4>${selectedLev[i][g+4]}</div>
                <div class="n6" id=${i}-5>${selectedLev[i][g+5]}</div>
            </div>
            <div class="n7to9">
                <div class="n7" id=${i}-6>${selectedLev[i][g+6]}</div>
                <div class="n8" id=${i}-7>${selectedLev[i][g+7]}</div>
                <div class="n9" id=${i}-8>${selectedLev[i][g+8]}</div>
            </div>`  
            document.querySelector(`.box${boxNum}`).style.borderBottom = '5px solid #7B40E7';
        }
        boxNum++;
    }
}

// Timer 
function StartgameTimer(){
    let remainingTimeSec = GAME_DURATON_SEC;
    updateTimerText(remainingTimeSec);
    timer =  setInterval(()=>{
        if(remainingTimeSec <= 0){
            clearInterval(timer);
            return;
        }   
           updateTimerText(--remainingTimeSec);  
  },1000)   
}

StartgameTimer();
function updateTimerText(time){
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    timerText.innerHTML = `${minutes} : ${seconds}`;
}