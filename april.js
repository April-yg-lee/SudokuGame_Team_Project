const levelObj = {
  'easy-1-answer': {
      "0": [4, 6, 2, 1, 3, 9, 7, 5, 8],
      "1": [5, 9, 1, 6, 8, 7, 3, 4, 2],
      "2": [3, 8, 7, 4, 2, 5, 1, 9, 6],
      "3": [6, 9, 1, 5, 2, 3, 8, 7, 4],
      "4": [7, 3, 8, 9, 6, 4, 2, 1, 5],
      "5": [2, 5, 4, 7, 1, 8, 9, 6, 3],
      "6": [9, 8, 7, 3, 1, 5, 2, 4, 6],
      "7": [4, 2, 6, 8, 7, 9, 1, 5, 3],
      "8": [5, 3, 1, 6, 4, 2, 8, 7, 9],
  },

  'easy-2-answer': {
      "0": [3, 5, 2, 1, 6, 8, 7, 4, 9],
      "1": [4, 7, 6, 9, 5, 2, 8, 1, 3],
      "2": [1, 8, 9, 7, 3, 4, 6, 2, 5],
      "3": [4, 2, 5, 6, 8, 3, 9, 7, 1],
      "4": [6, 9, 7, 2, 4, 1, 5, 3, 8],
      "5": [8, 1, 3, 5, 9, 7, 4, 6, 2],
      "6": [8, 9, 7, 2, 1, 4, 5, 3, 6],
      "7": [3, 6, 5, 7, 8, 9, 1, 2, 4],
      "8": [2, 4, 1, 3, 5, 6, 9, 7, 8],
  },

  'hard-1-answer': {
      "0": [3, 8, 7, 5, 4, 2, 9, 1, 6],
      "1": [5, 2, 1, 6, 3, 9, 4, 8, 7],
      "2": [9, 6, 4, 1, 7, 8, 5, 2, 3],
      "3": [7, 6, 8, 2, 3, 1, 4, 9, 5],
      "4": [1, 4, 5, 9, 7, 8, 3, 6, 2],
      "5": [2, 3, 9, 4, 5, 6, 7, 8, 1],
      "6": [6, 2, 9, 1, 7, 3, 8, 5, 4],
      "7": [8, 5, 4, 2, 9, 6, 7, 1, 3],
      "8": [3, 1, 7, 8, 4, 5, 6, 9, 2],
  },

  'hard-2-answer': {
      "0": [9, 7, 6, 1, 5, 8, 2, 3, 4],
      "1": [5, 1, 3, 6, 4, 2, 7, 9, 8],
      "2": [2, 4, 8, 7, 9, 3, 5, 1, 6],
      "3": [7, 6, 1, 8, 2, 3, 5, 4, 9],
      "4": [8, 3, 5, 4, 7, 9, 1, 2, 6],
      "5": [9, 2, 4, 1, 6, 5, 8, 3, 7],
      "6": [6, 9, 7, 3, 1, 5, 4, 8, 2],
      "7": [3, 5, 1, 2, 8, 4, 9, 6, 7],
      "8": [4, 8, 2, 6, 7, 9, 3, 5, 1],
  },
  'easy-1-question': {
      "0": [4, 0, 2, 1, 0, 9, 0, 0, 8],
      "1": [0, 0, 0, 6, 0, 7, 3, 0, 0],
      "2": [3, 8, 0, 4, 0, 0, 1, 0, 6],
      "3": [0, 9, 0, 0, 2, 3, 8, 0, 0],
      "4": [0, 3, 0, 9, 6, 4, 0, 1, 0],
      "5": [0, 0, 4, 7, 1, 0, 0, 6, 0],
      "6": [9, 0, 7, 0, 0, 5, 0, 4, 6],
      "7": [0, 0, 6, 8, 0, 9, 0, 0, 0],
      "8": [5, 0, 0, 6, 0, 2, 8, 0, 9],
  },

  'easy-2-question': {
      "0": [0, 5, 2, 1, 6, 0, 0, 4, 9],
      "1": [0, 0, 6, 9, 0, 0, 8, 0, 3],
      "2": [0, 0, 0, 0, 0, 4, 6, 2, 0],
      "3": [4, 0, 0, 0, 8, 3, 0, 0, 1],
      "4": [0, 0, 0, 2, 0, 1, 0, 0, 0],
      "5": [8, 0, 0, 5, 9, 0, 0, 0, 2],
      "6": [0, 9, 7, 2, 0, 0, 0, 0, 0],
      "7": [3, 0, 5, 0, 0, 9, 1, 0, 0],
      "8": [2, 4, 0, 0, 5, 6, 9, 7, 0],
  },

  'hard-1-question': {
      "0": [0, 0, 7, 0, 0, 2, 0, 0, 6],
      "1": [5, 2, 0, 0, 0, 9, 4, 0, 7],
      "2": [0, 6, 0, 0, 0, 8, 0, 0, 0],
      "3": [7, 6, 8, 0, 3, 1, 4, 0, 0],
      "4": [0, 0, 5, 0, 0, 0, 3, 0, 0],
      "5": [0, 0, 9, 4, 5, 0, 7, 8, 1],
      "6": [0, 0, 0, 1, 0, 0, 0, 5, 0],
      "7": [8, 0, 4, 2, 0, 0, 0, 1, 3],
      "8": [3, 0, 0, 8, 0, 0, 6, 0, 0],
  },

  'hard-2-question': {
      "0": [9, 0, 6, 0, 5, 8, 0, 3, 0],
      "1": [0, 1, 3, 0, 0, 0, 0, 0, 0],
      "2": [0, 0, 8, 0, 9, 0, 0, 1, 0],
      "3": [0, 6, 0, 0, 0, 3, 0, 4, 9],
      "4": [8, 0, 0, 4, 0, 9, 0, 0, 6],
      "5": [9, 2, 0, 1, 0, 0, 0, 3, 0],
      "6": [0, 9, 0, 0, 1, 0, 4, 0, 0],
      "7": [0, 0, 0, 0, 0, 0, 9, 6, 0],
      "8": [0, 8, 0, 6, 7, 0, 3, 0, 1],
  }
}

// emma -> variable 에 q & a 담기 
let gameTypeQuestion = 'easy-1-question';
let gameTypeAnswer = 'easy-1-answer';



// Event for When you click the input box 
$(document).on("click", ".container div div div div", function () {
  let selectedBox = $(".container div div div div");
  let index = selectedBox.index(this);

  selectedBox.removeClass('wrong');
  // NO any class when user see the screen at first (initialization)

  if ($(this).hasClass('active')) {
      selectedBox.eq(index).removeClass('active');
      // event for When you click same number one more time, color's gonna disappear.
  } else {
      selectedBox.removeClass('active'); // event before you click (initialization)
      selectedBox.eq(index).addClass('active'); // event for when you click the input number
  }
});





// When you click the selected number 1 to 9, function's gonna be executed
$(document).on("click", ".select1to9 li", function () {
  // todo: 9번사용후 비활성화 상태인지 아닌지 확인 후 아래 실행되어야함 
  
  let targetBox = $(".container div").find(".active");
  // check if any inputBox was clicked or not and put into the targetBox variable 

  console.log(targetBox);

  // When user click any one input box, logic's gonna do
  if (targetBox.length > 0) {

      let selectNumber = $(".select1to9 li").index(this) + 1;
      let position = targetBox.prop('id').split('-');
      let positionX = position[0].replace('n', '') - 1;
      let positionY = position[1] - 1;

      if (checkForQuestion(positionX, positionY)) {   
        // check if the number was existed already or it's question(empty) number

          if (checkValueInPosition(selectNumber, positionX, positionY)) { 
            // check the answer is correct with comparing  
              targetBox.removeClass('active');
              targetBox.removeClass('wrong');
              targetBox.text(selectNumber);
          } else { // only fore easy version
              targetBox.text("");
              targetBox.addClass('wrong');
          }
      }
  }

  // check if every cell has number
  if (checkValueCompleted()) { 

      // check the every answer is correct
      let isDone = checkForAnswer();
      console.log('게임완료 여부 : ' + isDone);
  }

});






// check if the value is '0' or not
function checkForQuestion(positionX, positionY) {
  let question = levelObj[gameTypeQuestion][positionX][positionY];

  // Only value '0' can be revised in Question array !
  if (question === 0) {
      return true;
  } else {
      return false;
  }
}





// check if the answer is correct with comparing 
function checkValueInPosition(selectNumber, positionX, positionY) {

  let level = gameTypeAnswer.split('-')[0];

  // Easy level: Answer's gonna be checked everytime inputting 
  if (level === 'easy') {

      let answer = levelObj[gameTypeAnswer][positionX][positionY];

      if (answer !== selectNumber) {
          return false;
      } else {
          return true;
      }

      // Hard level: Level's gonna be checked after inputting every number
      // Even though you input wrong number, it's still gonna input in the cell.
  } else if (level === 'hard') {  
      return true;
  }
}





// check if every cell has number 
function checkValueCompleted() {
  let isCompleted = true;

  $(".container div div div div").each(function () {
      if ($(this).text() === '') {
          isCompleted = false;
          return false;
      }
  });
  return isCompleted;
}






// check the answer if every cell is correct with answer 
function checkForAnswer() {
  let isCorrected = true;

  $(".container div div div div").each(function () {
      let inputValue = parseInt($(this).text());  // current input number 
      let position = $(this).prop('id').split('-');
      let positionX = position[0].replace('n', '') - 1;
      let positionY = position[1] - 1;
      let answer = levelObj[gameTypeAnswer][positionX][positionY];  // answer to be compared

      if (inputValue !== answer) {
          isCorrected = false;
          return false;
      }
  });
  return isCorrected;
}