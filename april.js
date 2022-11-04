let inputBox = $(".container div div div div");

// Event for When you click the input box
$(document).on("click", ".container div div div div", function () {
  inputBox = $(".container div div div div");
  let index = inputBox.index(this);
  let number = inputBox.eq(index).text();

  inputBox.removeClass("wrong");

  if ($(this).hasClass("active")) {
    inputBox.eq(index).removeClass("active");
  } else {
    inputBox.removeClass("active");
    inputBox.eq(index).addClass("active");
  }
  checkSameValue(number);
});

// Event for When you click the selected number 1 to 9
$(document).on("click", ".select1to9 li", function () {
  let targetBox = $(".container div").find(".active");

  if (targetBox.length > 0) {
    let selectNumber = $(".select1to9 li").index(this) + 1;
    let position = targetBox.prop("id").split("-");
    let positionX = position[0];
    let positionY = position[1];

    checkSameValue();

    if (checkForQuestion(positionX, positionY)) {
      if (checkValueInPosition(selectNumber, positionX, positionY)) {
        targetBox.removeClass("active");
        targetBox.removeClass("wrong");
        targetBox.text(selectNumber);
      } else {
        targetBox.text("");
        targetBox.addClass("wrong");
      }
    }
  }

  if (checkValueCompleted()) {
    if (checkForAnswer()) {
      completedSound(); // Matt's function

      $("#recordTime").text($(".minute").text());
      needToStop = true;
      clearInput();

      $("#sudoku").fadeOut("slow");
      $("#comp-easy").fadeIn("slow");
    } else {
      wrongChoiceAudio();
    }
  }
});

// check if the value is '0' or not (0 means it's empty box to solve)
function checkForQuestion(positionX, positionY) {
  let question = levelObj[gameTypeQuestion][positionX][positionY];

  if (question === 0) {
    return true;
  } else {
    return false;
  }
}

// check if the answer is correct with comparing
function checkValueInPosition(selectNumber, positionX, positionY) {
  let level = gameTypeAnswer.split("-")[0];

  if (level === "easy") {
    let answer = levelObj[gameTypeAnswer][positionX][positionY];

    if (answer !== selectNumber) {
      wrongChoiceAudio(); // Matt's function
      return false;
    } else {
      return true;
    }

    // Hard level: Level's gonna be checked after inputting every number
    // Even though you input wrong number, it's still gonna input in the cell without warning.
  } else if (level === "hard") {
    return true;
  }
}

// check if every cell has number
function checkValueCompleted() {
  let isCompleted = false;

  inputBox.each(function () {
    if ($(this).text() === "") {
      isCompleted = false;
      return false;
    } else {
      isCompleted = true;
    }
  });
  return isCompleted;
}

// check the answer if every cell is correct with answer
function checkForAnswer() {
  let isCorrected = false;

  inputBox.each(function () {
    let inputValue = parseInt($(this).text()); // current input number
    let position = $(this).prop("id").split("-");
    let positionX = position[0];
    let positionY = position[1];
    let answer = levelObj[gameTypeAnswer][positionX][positionY];

    if (inputValue !== answer) {
      isCorrected = false;
      swal("Ooops!", "Seems like some answer went wrong!", "error");
      return false;
    } else {
      isCorrected = true;
    }
  });
  return isCorrected;
}
