function processResults() {
  event.preventDefault();
  var inputs = [];
  var yesCount = 0;
  var noCount = 0;
  var huhCount = 0; //confused count (its funnier this way)
  var formRaw = $("form").serializeArray();
  //iterate through responses and add them to the input array
  for (var i = 0; i < formRaw.length; i++) {
    inputs.push(formRaw[i].value);
  }
  console.log(inputs);
  //iterate through the inputs array and grab the frequencies of each response
  for (var i = 0; i < inputs.length; i++) {
    if (inputs[i] == "yes") {
      yesCount++;
    }
    if (inputs[i] == "no") {
      noCount++;
    }
    if (inputs[i] == "confused") {
      huhCount++;
    }
  }
  //this probably can be broken if you do it right
  //can't remember the more efficient way to do this
  if (yesCount > noCount) {
    if (huhCount < yesCount) {
      $("#yes").css("display", "block");
    } else if (huhCount > yesCount) {
      $("#confused").css("display", "block");
    }
  } else if (noCount > huhCount) {
    $("#no").css("display", "block");
  } else if (huhCount > noCount) {
    $("#confused").css("display", "block");
  }
}
