console.log("applyform loaded");

//** Form Navigation **//
let applyStep1 = document.getElementById("applyStep1");
let applyStep2 = document.getElementById("applyStep2");
let applyStep3 = document.getElementById("applyStep3");

let nextStep1 = document.getElementById("nextStep1");
let nextStep2 = document.getElementById("nextStep2");
let nextStep3 = document.getElementById("nextStep3");

let nextButton1 = document.getElementById('nextButton1');
let nextButton2 = document.getElementById('nextButton2');
let backButton1 = document.getElementById('backButton1');
let backButton2 = document.getElementById('backButton2');

let progressStep1 = document.getElementById('progressStep1');
let progressStep2 = document.getElementById('progressStep2');
let progressStep3 = document.getElementById('progressStep3');

applyStepOne = function ApplyStepOne() {
  applyStep1.classList.add("hide");
  nextStep1.classList.add("hide");
  applyStep2.classList.remove("hide");
  nextStep2.classList.remove("hide");
  progressStep1.classList.add("complete");
  progressStep1.classList.remove("inactiveLink");
  progressStep1.classList.add("activeLink");
  progressStep2.classList.add("active");
}

applyStepTwo = function ApplyStepTwo() {
  applyStep2.classList.add("hide");
  nextStep2.classList.add("hide");
  applyStep3.classList.remove("hide");
  nextStep3.classList.remove("hide");
  progressStep2.classList.add("activeLink");
  progressStep2.classList.remove("inactiveLink");
  progressStep2.classList.add("complete");
  progressStep3.classList.add("active");
}

backStepOne = function BackStepOne() {
  applyStep1.classList.remove("hide");
  nextStep1.classList.remove("hide");
  applyStep2.classList.add("hide");
  nextStep2.classList.add("hide");
  progressStep1.classList.remove("complete");
  progressStep2.classList.remove("active");
  progressStep2.classList.add("inactiveLink");
}

backStepTwo = function BackStepTwo() {
  applyStep2.classList.remove("hide");
  nextStep2.classList.remove("hide");
  applyStep3.classList.add("hide");
  nextStep3.classList.add("hide");
  progressStep2.classList.remove("activeLink");
  progressStep2.classList.add("inactiveLink");
  progressStep2.classList.remove("complete");
  progressStep3.classList.remove("active");
}

nextButton1.onclick = function() {
  console.log("NextStep1 Clicked");
  applyStepOne()
  scrollToTop();
}

nextButton2.onclick = function() {
  console.log("NextStep2 Clicked");
  applyStepTwo()
  scrollToTop();
}

backButton1.onclick = function() {
  console.log("BackStep1 Clicked");
  backStepOne()
  scrollToTop();
}

backButton2.onclick = function() {
  console.log("BackStep2 Clicked");
  backStepTwo()
  scrollToTop();
}

progressStep1.onclick = function() {
  console.log("progressStep1 Clicked");
  applyStep1.classList.remove("hide");
  nextStep1.classList.remove("hide");
  applyStep2.classList.add("hide");
  nextStep2.classList.add("hide");
  applyStep3.classList.add("hide");
  nextStep3.classList.add("hide");

  progressStep1.classList.remove("activeLink");
  progressStep2.classList.remove("activeLink");
  progressStep2.classList.remove("active");
  progressStep3.classList.remove("active");
  progressStep1.classList.remove("complete");
  progressStep2.classList.remove("complete");

  progressStep1.classList.add("inactiveLink");
  progressStep2.classList.add("inactiveLink");
  scrollToTop();
}

progressStep2.onclick = function() {
  console.log("progressStep2 Clicked");

  applyStep1.classList.add("hide");
  nextStep1.classList.add("hide");
  applyStep2.classList.remove("hide");
  nextStep2.classList.remove("hide");
  applyStep3.classList.add("hide");
  nextStep3.classList.add("hide");

  progressStep2.classList.remove("activeLink");
  progressStep3.classList.remove("active");
  progressStep2.classList.remove("complete");

  progressStep1.classList.add("inactiveLink");
  progressStep2.classList.add("inactiveLink");
  scrollToTop();
}
