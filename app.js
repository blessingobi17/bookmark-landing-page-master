const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", () => {
  const navList = document.querySelector(".nav-list");

  if (navList.style.display == "block") {
    navList.style.display = "none";
  } else {
    navList.style.display = "block";
  }
});

const closeBtn = document.querySelector(".close");

closeBtn.addEventListener("click", () => {
  const navList = document.querySelector(".nav-list");

  navList.style.display = "none";
});

const simpleB = document.querySelector(".simpleB");

simpleB.addEventListener("click", () => {
  const simpleB = document.querySelector(".simpleB-body");
  const simpleBLine = document.querySelector(".simpleB-line");
  const speedyS = document.querySelector(".speedyS-body");
  const speedySLine = document.querySelector(".speedyS-line");
  const easyS = document.querySelector(".easyS-body");
  const easySLine = document.querySelector(".easyS-line");

  simpleB.style.display = "flex";
  simpleBLine.style.display = "block";
  speedyS.style.display = "none";
  speedySLine.style.display = "none";
  easyS.style.display = "none";
  easySLine.style.display = "none";
});

const speedyS = document.querySelector(".speedyS");

speedyS.addEventListener("click", () => {
  const simpleB = document.querySelector(".simpleB-body");
  const simpleBLine = document.querySelector(".simpleB-line");
  const speedyS = document.querySelector(".speedyS-body");
  const speedySLine = document.querySelector(".speedyS-line");
  const easyS = document.querySelector(".easyS-body");
  const easySLine = document.querySelector(".easyS-line");

  simpleB.style.display = "none";
  simpleBLine.style.display = "none";
  speedyS.style.display = "flex";
  speedySLine.style.display = "block";
  easyS.style.display = "none";
  easySLine.style.display = "none";
});

const easyS = document.querySelector(".easyS");

easyS.addEventListener("click", () => {
  const simpleB = document.querySelector(".simpleB-body");
  const simpleBLine = document.querySelector(".simpleB-line");
  const speedyS = document.querySelector(".speedyS-body");
  const speedySLine = document.querySelector(".speedyS-line");
  const easyS = document.querySelector(".easyS-body");
  const easySLine = document.querySelector(".easyS-line");

  simpleB.style.display = "none";
  simpleBLine.style.display = "none";
  speedyS.style.display = "none";
  speedySLine.style.display = "none";
  easyS.style.display = "flex";
  easySLine.style.display = "block";
});

const q1Header = document.querySelector(".question1-header");

q1Header.addEventListener("click", () => {
  const question1Content = document.querySelector(".question1-content");
  const arrow1 = document.querySelector("#arrow1");

  if (question1Content.style.display == "block") {
    question1Content.style.display = "none";
    arrow1.style.transform = "rotate(0)";
  } else {
    question1Content.style.display = "block";
    arrow1.style.transform = "rotate(180deg)";
  }
});

const q2Header = document.querySelector(".question2-header");

q2Header.addEventListener("click", () => {
  const question2Content = document.querySelector(".question2-content");
  const arrow2 = document.querySelector("#arrow2");

  if (question2Content.style.display == "block") {
    question2Content.style.display = "none";
    arrow2.style.transform = "rotate(0)";
  } else {
    question2Content.style.display = "block";
    arrow2.style.transform = "rotate(180deg)";
  }
});

const q3Header = document.querySelector(".question3-header");

q3Header.addEventListener("click", () => {
  const question3Content = document.querySelector(".question3-content");
  const arrow3 = document.querySelector("#arrow3");

  if (question3Content.style.display == "block") {
    question3Content.style.display = "none";
    arrow3.style.transform = "rotate(0)";
  } else {
    question3Content.style.display = "block";
    arrow3.style.transform = "rotate(180deg)";
  }
});

const q4Header = document.querySelector(".question4-header");

q4Header.addEventListener("click", () => {
  const question4Content = document.querySelector(".question4-content");
  const arrow4 = document.querySelector("#arrow4");

  if (question4Content.style.display == "block") {
    question4Content.style.display = "none";
    arrow4.style.transform = "rotate(0)";
  } else {
    question4Content.style.display = "block";
    arrow4.style.transform = "rotate(180deg)";
  }
});

function validate() {
  const invalidMail = "whoops, make sure it's an email";
  const email = document.form.email.value;
  const at = email.indexOf("@");
  const dot = email.lastIndexOf(".");

  if (email == "") {
    document.querySelector(".error-bg").style.display = "block";
    document.querySelector(".error-text").innerHTML = "Email field is empty";
    document.querySelector(".error").style.display = "block";
    return false;
  }

  if (at < 1 || dot - at < 2) {
    document.querySelector(".error-text").innerHTML = invalidMail;
    return false;
  } else {
    document.querySelector(".error-bg").style.display = "none";
    document.querySelector(".error-text").style.display = "none";
    document.querySelector(".error").style.display = "none";
  }
}
