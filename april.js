let inputBox = $(".container div div div div");

// Event for When you click the input box 
$(document).on("click", ".container div div div div", function () {
    let index = inputBox.index(this);

    inputBox.removeClass('wrong');
    // NO any class when user see the screen at first (initialization)

    if ($(this).hasClass('active')) {
        inputBox.eq(index).removeClass('active');
        // event for When you click same number one more time, color's gonna disappear.
    } else {
        inputBox.removeClass('active'); // event before you click (initialization)
        inputBox.eq(index).addClass('active'); // event for when you click the input number
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
        let positionX = position[0];
        let positionY = position[1];

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

        let level = gameTypeAnswer.split('-')[0];

        $('#sudoku').fadeOut("slow");
        if (level === 'easy') {
            $('#comp-easy').fadeIn("slow");

        } else if (level === 'hard') {
            $('#comp-hard').fadeIn("slow");

        }

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

    inputBox.each(function () {
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

    inputBox.each(function () {
        let inputValue = parseInt($(this).text());  // current input number 
        let position = $(this).prop('id').split('-');
        let positionX = position[0];
        let positionY = position[1];
        let answer = levelObj[gameTypeAnswer][positionX][positionY];  // answer to be compared

        if (inputValue !== answer) {
            isCorrected = false;
            return false;
        }
    });
    return isCorrected;
}