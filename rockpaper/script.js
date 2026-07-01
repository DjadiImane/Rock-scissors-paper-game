let name = document.querySelector(".input");
let btn = document.querySelector(".start");
let inputdiv = document.querySelector(".inputdiv");
let inputname = "";
let userscore = 0;
let computerscore = 0;
let firstfenetre = document.querySelector(".firstpagecontainer");
let secfenetre = document.querySelector(".Secondpagecontainer");
let imgdivuser = document.querySelector(".imgdivuser");
let imgdivcomp = document.querySelector(".imgdivcomp");
let milieu = document.querySelector(".milieu");
let puserscore = document.querySelector(".puserscore");
let pcompscore = document.querySelector(".pcomputerscore");
let username = document.querySelector(".username");
function secendfent() {
  if (name.value === "") {
    if (!document.querySelector(".nonname")) {
      let p1 = document.createElement("p");
      p1.textContent = "please input your name";
      p1.classList = "nonname";
      p1.style.color = "red";
      inputdiv.append(p1);
    }
  } else {
    const p1 = document.querySelector(".nonname");
    if (p1) {
      p1.remove();
    }
    inputname = name.value;

    console.log(inputname);
    name.value = "";
    console.log(name.value);
    firstfenetre.classList.replace(
      "firstpagecontainer",
      "firstpagecontainerhide",
    );
    secfenetre.classList.replace(
      "Secondpagecontainer",
      "Secondpagecontainershow",
    );

    username.textContent = inputname;
  }
}

function computerplay() {
  let compchoix = document.querySelector(".compchoose");

  if (compchoix) {
    compchoix.remove();
  }
  let random = Math.floor(Math.random() * 3);
  let array = ["paper", "Rock", "scissors"];
  let choose = array[random];

  const choosenimg = document.createElement("img");
  choosenimg.src = choose + ".svg";
  choosenimg.alt = choose + "img";
  choosenimg.classList = "compchoose";
  imgdivcomp.append(choosenimg);

  return choose;
}
function choosen(name) {
  let userchoix = document.querySelector(".imgchoosen");

  if (userchoix) {
    userchoix.remove();
  }
  const choosenimg = document.createElement("img");
  choosenimg.src = name + ".svg";
  choosenimg.alt = name + "img";
  choosenimg.classList = "imgchoosen";
  imgdivuser.append(choosenimg);
  let result = document.querySelector(".presultclass");
  if (result) {
    result.remove();
  }
  let choose = computerplay();

  let presult = document.createElement("p");
  presult.classList = "presultclass";
  if (name === choose) {
    presult.textContent = "You are equal 😊";
  } else {
    if (
      (name === "Rock" && choose === "paper") ||
      (name === "paper" && choose === "scissors") ||
      (name === "scissors" && choose === "Rock")
    ) {
      computerscore++;
      presult.textContent = "You failed 😥";
    } else {
      userscore++;
      presult.textContent = "You won 🥳";
    }
  }
  milieu.append(presult);
  pcompscore.textContent = `Computer score: ${computerscore}`;
  puserscore.textContent = ` ${inputname} score: ${userscore}`;
  if (computerscore > userscore) {
    puserscore.style.color = " #8b2441";
    pcompscore.style.color = " #1e6f2a";
  } else {
    if (computerscore < userscore) {
      puserscore.style.color = "  #1e6f2a";
      pcompscore.style.color = " #8b2441";
    } else {
      puserscore.style.color = "#fdfdfd";
      pcompscore.style.color = " #fdfdfd";
    }
  }
}
