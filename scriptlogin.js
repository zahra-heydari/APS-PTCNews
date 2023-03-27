const input1 = document.querySelector("#input1");
const input3 = document.querySelector("#input3");
const input4 = document.querySelector("#input4");
const allLable = document.querySelectorAll("label");
const allLableT = document.querySelectorAll("label");
const dayInput = document.querySelector("#DayInput");
const monthInput = document.querySelector("#MonthInput");
const yearInput = document.querySelector("#YearInput");
const dayDiv = document.querySelector(".Day");
const monthDiv = document.querySelector(".Month");
const yearDiv = document.querySelector(".Year");
const secondform = document.querySelector(".secondform");
const firstform = document.querySelector(".firstform");
const thirdform = document.querySelector(".thirdform");
const fourform = document.querySelector(".fourform");
const sign = document.querySelector(".sign");
const login = document.querySelector("#login");
const over = document.querySelector(".over");
const continuebut = document.querySelector("#continue");
const continueBut = document.querySelector("#continue");
const form = document.querySelector(".formquestion");
const formInFirstform = document.querySelector("#formInFirstform");
// const register = document.querySelector(".register");

sign.addEventListener("click", () => {
  firstform.style.display = "none";
  secondform.style.display = "block";
  secondform.style.transition = "20s";
});
over.addEventListener("click", () => {
  secondform.style.display = "none";
  thirdform.style.display = "block";
});
continuebut.addEventListener("click", () => {
  fetchAPICountry();
  thirdform.style.display = "none";
  fourform.style.display = "block";
});
dayInput.addEventListener("click", () => {
  for (let i = 0; i < allLable.length; i++) {
    allLableT[i].style.display = "none";
  }
  const lable = document.querySelector("#DayLabel");
  lable.style.display = "block";

  if (dayInput.placeholder === "Day") {
    lable.textContent = dayInput.placeholder;
    monthInput.placeholder = "Month";
    yearInput.placeholder = "Year";
    dayInput.placeholder = "";
  }
});

monthInput.addEventListener("click", () => {
  for (let i = 0; i < allLable.length; i++) {
    allLableT[i].style.display = "none";
  }
  const lable = document.querySelector("#MonthLabel");
  lable.style.display = "block";

  if (monthInput.placeholder === "Month") {
    lable.textContent = monthInput.placeholder;
    dayInput.placeholder = "Day";
    yearInput.placeholder = "Year";
    monthInput.placeholder = "";
  }
});
yearInput.addEventListener("click", () => {
  for (let i = 0; i < allLable.length; i++) {
    allLableT[i].style.display = "none";
  }
  const lable = document.querySelector("#YearLabel");
  lable.style.display = "block";

  if (yearInput.placeholder === "Year") {
    lable.textContent = yearInput.placeholder;
    dayInput.placeholder = "Day";
    monthInput.placeholder = "Month";
    yearInput.placeholder = "";
  }
});

input1.addEventListener("click", () => {
  for (let i = 0; i < allLable.length; i++) {
    allLable[i].style.display = "none";
  }
  const lable = document.querySelector("#email");
  lable.style.display = "block";

  if (input1.placeholder === "Email or username") {
    lable.textContent = input1.placeholder;
    input2.placeholder = "password";
    input1.placeholder = "";
  }
});
const input2 = document.querySelector("#input2");
input2.addEventListener("click", () => {
  for (let i = 0; i < allLable.length; i++) {
    allLable[i].style.display = "none";
  }
  const lable = document.querySelector("#pass");
  lable.style.display = "block";

  if (input2.placeholder === "password") {
    lable.textContent = input2.placeholder;
    input2.placeholder = "";
    input1.placeholder = "Email or username";
  }
});

input4.addEventListener("click", () => {
  for (let i = 0; i < allLable.length - 1; i++) {
    allLable[i].style.display = "none";
  }
  const lable = document.querySelector("#pass2");
  lable.style.display = "block";

  if (input4.placeholder === "password") {
    lable.textContent = input4.placeholder;
    input4.placeholder = "";
    input3.placeholder = "Email or username";
  }
});

input3.addEventListener("click", () => {
  for (let i = 0; i < allLable.length - 1; i++) {
    allLable[i].style.display = "none";
  }
  const lable = document.querySelector("#email2");
  lable.style.display = "block";

  if (input3.placeholder === "Email or username") {
    lable.textContent = input3.placeholder;
    input3.placeholder = "";
    input4.placeholder = "password";
  }
});

form.addEventListener("submit", (e) => {
  const age = ageCalculate(
    `${e.target.YearInput.value}${e.target.MonthInput.value}${e.target.DayInput.value}`
  );
  console.log(age);
  if (age >= 16) {
    dayDiv.style.borderBottom = "4px solid green";
    monthDiv.style.borderBottom = "4px solid green";
    yearDiv.style.borderBottom = "4px solid green";
  } else {
    alert("Sorry,you need to be 16 or over");
  }
});
// yearInput.addEventListener("click", () => {
//   for (let i = 0; i < allLable.length; i++) {
//     allLableT[i].style.display = "none";
//   }
//   const lable = document.querySelector("#YearLabel");
//   lable.style.display = "block";

//   if (yearInput.placeholder === "Year") {
//     lable.textContent = yearInput.placeholder;
//     dayInput.placeholder = "Day";
//     monthInput.placeholder = "Month";
//     yearInput.placeholder = "";
//   }
// });

// input1.addEventListener("click", () => {
//   for (let i = 0; i < allLable.length; i++) {
//     allLable[i].style.display = "none";
//   }
//   const lable = document.querySelector("#email");
//   lable.style.display = "block";

//   if (input1.placeholder === "Email or username") {
//     lable.textContent = input1.placeholder;
//     input2.placeholder = "password";
//     input1.placeholder = "";
//   }
// });
// const input2 = document.querySelector("#input2");
// input2.addEventListener("click", () => {
//   for (let i = 0; i < allLable.length; i++) {
//     allLable[i].style.display = "none";
//   }
//   const lable = document.querySelector("#pass");
//   lable.style.display = "block";

//   if (input2.placeholder === "password") {
//     lable.textContent = input2.placeholder;
//     input2.placeholder = "";
//     input1.placeholder = "Email or username";
//   }
// });

function ageCalculate(dob) {
  const year = Number(dob.substr(0, 4));
  const month = Number(dob.substr(4, 2)) - 1;
  const day = Number(dob.substr(6, 2));
  const today = new Date();
  const age = today.getFullYear() - year;
  if (
    today.getMonth() < month ||
    (today.getMonth() == month && today.getDate() < day)
  ) {
    age--;
  }
  return age;
}

const fetchAPICountry = async function () {
  try {
    await fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        option(data);
      })
      .catch((error) => console.log("Error", error));
  } catch (error) {
    console.log(error);
  }
};

const select = document.querySelector("select");
function option(data) {
  data.map((it) => {
    const optionSelect = document.createElement("option");
    optionSelect.textContent = it.name.common;
    optionSelect.value = it.name.common;
    select.append(optionSelect);
    optionSelect.style.backgroundColor = "white";
    optionSelect.style.color = "black";
  });
}

login.addEventListener("click", () => {
  // e.preventDefault();
  // console.log("reach the value by id : ", e.target.username.value);
  // console.log("reach the value by id : ", e.target.tweet.value);

  const usernameInput = formInFirstform.elements.input1.value;
  const passwordInput = formInFirstform.elements.input2.value;

  // validation
  if (!usernameInput || !passwordInput) {
    alert("You dont write anything");
    return;
  } else {
    if (usernameInput === "Patrick" && passwordInput === "123456789") {
      // const a = document.querySelector("#aaa");
      // window.location.href = "index.html";
      formInFirstform.action = "index.html";
    } else {
      alert("password or username is incorrect");
    }
  }
});
