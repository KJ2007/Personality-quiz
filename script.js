var a = 0
var b = 0
var c = 0
var d = 0

var qsCount = 0

var result = document.getElementById("result");

var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");
var q1a4 = document.getElementById("q1a4");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q2a3 = document.getElementById("q2a3");
var q2a4 = document.getElementById("q2a4");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var q3a3 = document.getElementById("q3a3");
var q3a4 = document.getElementById("q3a4");

var q4a1 = document.getElementById("q4a1");
var q4a2 = document.getElementById("q4a2");
var q4a3 = document.getElementById("q4a3");
var q4a4 = document.getElementById("q4a4");

restart.addEventListener("click", restartUpdate);

q1a1.addEventListener("click", aS);
q1a2.addEventListener("click", bS);
q1a3.addEventListener("click", cS);
q1a4.addEventListener("click", dS);

q2a1.addEventListener("click", aS);
q2a2.addEventListener("click", bS);
q2a3.addEventListener("click", cS);
q2a4.addEventListener("click", dS);

q3a1.addEventListener("click", aS);
q3a2.addEventListener("click", bS);
q3a3.addEventListener("click", cS);
q3a4.addEventListener("click", dS);

q4a1.addEventListener("click", aS);
q4a2.addEventListener("click", bS);
q4a3.addEventListener("click", cS);
q4a4.addEventListener("click", dS);

function aS() {
  a += 1;
  qsCount += 1;
  console.log("qsCount = " + qsCount + "a = " + a);
  if (qsCount == 4) {
    console.log("The quiz is done!")
    resultUpdate();
}
}

function bS() {
  b += 1;
  qsCount += 1;
  console.log("qsCount = " + qsCount + "b = " + b);
  if (qsCount == 4) {
    console.log("The quiz is done!")
    resultUpdate();
}
}

function cS() {
  c += 1;
  qsCount += 1;
  console.log("qsCount = " + qsCount + "c = " + c);
  if (qsCount == 4) {
    console.log("The quiz is done!")
    resultUpdate();
}
}

function dS() {
  d += 1;
  qsCount += 1;
  console.log("qsCount = " + qsCount + "d = " + d);
  if (qsCount == 4) {
    console.log("The quiz is done!")
    resultUpdate();
}
}

function resultUpdate() {
  if (a == b && a == c && a == d) {
    result.innerHTML = "You have diverse travel preferences and are open to a variety of experiences!";
    console.log("You have diverse travel preferences and are open to a variety of experiences!")
  } else {
  
    if (a > b && a > c && a > d) {
      result.innerHTML = "Your dream destination is the Swiss Alps!";
      console.log("Your dream destination is the Swiss Alps!")
    }
    
    if (b > a && b > c && b > d) {
      result.innerHTML = "Your dream destination is the Maldives!";
      console.log("Your dream destination is the Maldives!")
    }
  
    if (c > a && c > b && c > d) {
      result.innerHTML = "Your dream destination is the Amazon Rainforest!";
      console.log("Your dream destination is the Amazon Rainforest!")
    }
  
    if (d > a && d > b && d > c) {
      result.innerHTML = "Your dream destination is Barcelona, Spain!";
      console.log("Your dream destination is Barcelona, Spain!")
    }

    if (a == b) {
      result.innerHTML = "Your dream destination is either the Swiss Alps or Maldives!";
      console.log("Your dream destination is either the Swiss Alps or Maldives!")
    }

    if (a == c) {
      result.innerHTML = "Your dream destination is either the Swiss Alps or the Amazon Rainforest!";
      console.log("Your dream destination is either the Swiss Alps or the Amazon Rainforest!")
    }

    if (a == d) {
      result.innerHTML = "Your dream destination is either the Swiss Alps or Barcelona, Spain!";
      console.log("Your dream destination is either the Swiss Alps or Barcelona, Spain!")
    }

    if (b == c) {
      result.innerHTML = "Your dream destination is either Maldives or the Amazon Rainforest!";
      console.log("Your dream destination is either Maldives or the Amazon Rainforest!")
    }

    if (b == d) {
      result.innerHTML = "Your dream destination is either Maldives or Barcelona, Spain!";
      console.log("Your dream destination is either Maldives or Barcelona, Spain!")
    }

    if (c == d) {
      result.innerHTML = "Your dream destination is either the Amazon Rainforest or Barcelona, Spain!";
      console.log("Your dream destination is either the Amazon Rainforest or Barcelona, Spain!")
    }
  }
}

function restartUpdate() {
  a = 0
  b = 0
  c = 0
  d = 0
  qsCount = 0
  document.getElementById("result").innerHTML = "Your result is...";
}
