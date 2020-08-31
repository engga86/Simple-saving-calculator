(function() {
  var cal = document.querySelector("#calculate");
  var reset = document.querySelector("#reset");

  function calcuateSaving() {

    var goal = document.querySelector("#goal-amount").value;
    var year = document.querySelector("#year").value;
    var method = document.querySelector("#saving-type").value;

    var type = document.querySelector("#type");
    var payment = document.querySelector("#payment");

    var daily = 365;
    var weekly = 52;
    var monthly = 12;

    //Validation for input
    if(goal == 0 || goal === "" || isNaN(goal)){
      alert("Please enter appropriate goal amount");
      return;
    }

    //Loop all the values of select options from 1 to 10
    for (var i = 1; i <= 10; i++) {
      if(year == i && method == 1){
        var total = goal / (daily * i);
        total = Math.round(total * 100)/100;
        payment.innerHTML = total;
        type.innerHTML = "day";
        console.log(total);
      }
      if(year == i && method == 2){
        var total = goal / (weekly * i);
        total = Math.round(total * 100)/100;
        payment.innerHTML = total;
        type.innerHTML = "week";
        console.log(total);
      }
      if(year == i && method == 3){
        var total = goal / (monthly * i);
        total = Math.round(total * 100)/100;
        payment.innerHTML = total;
        type.innerHTML = "month";
        console.log(total);
      }
    }
  }

  function resetBtn() {
    document.querySelector("#goal-amount").value = "";
    document.querySelector("#year").selectedIndex = 0;
    document.querySelector("#saving-type").selectedIndex = 0;
    payment.innerHTML = "00";
    type.innerHTML = "D/W/M";

  }

  cal.onclick = function() {
    calcuateSaving();
  }

  reset.onclick = function() {
    resetBtn();
  }
}());
