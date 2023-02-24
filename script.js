var datetime = document.getElementById("datetime");
var timeRow = document.getElementById("timeRow");
timeRow.classList.add("hidden");

var SubmitButton = document.getElementById("submit");

const playAudio = new Audio("tic-tac-27828.mp3");

SubmitButton.addEventListener("click", StartTimer);

function StartTimer(e) {
  e.preventDefault();

  var targetDate = datetime.value;
  console.log(targetDate);
  let tday = parseInt(targetDate.substring(8, 10));
  let tmonth = parseInt(targetDate.substring(5, 7));
  let tyear = parseInt(targetDate.substring(0, 4));
  let th = parseInt(targetDate.substring(11, 13));
  let tm = parseInt(targetDate.substring(14, 16));
  let ts = 0;

  var date2 = new Date(tyear, tmonth - 1, tday, th, tm, ts);

  //////////////////////////////////////////////

  var countDownDate = date2.getTime();

  // Update the count down every 1 second
  var x = setInterval(function () {
    playAudio.play();
    timeRow.classList.remove("hidden");

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var cdays = Math.floor(distance / (1000 * 60 * 60 * 24));
    var chours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var cminutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var cseconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="demo"
    document.getElementById("days").innerHTML = cdays;
    document.getElementById("hour").innerHTML = chours;
    document.getElementById("minute").innerHTML = cminutes;
    document.getElementById("second").innerHTML = cseconds;
    // If the count down is over, write some text
    if (distance < 0) {
      clearInterval(x);
      // document.getElementById("demo").innerHTML = "EXPIRED";
      document.getElementById("days").innerHTML = "";
      document.getElementById("hour").innerHTML = "";
      document.getElementById("minute").innerHTML = "";
      document.getElementById("second").innerHTML = "";
      timeRow.classList.add("hidden");
      playAudio.pause();
      //   pauseAudio();
      return;
    }
    console.log("running " + cseconds);
  }, 1000);

  /////////////////////////////////////////
}
