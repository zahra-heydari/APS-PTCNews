const date = document.querySelector(".date");
const d = new Date();
switch (d.getDay()) {
  case 0:
    dayName = "Sunday";
    break;
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday";
    break;
  case 4:
    dayName = "Thursday";
    break;
  case 5:
    dayName = "Friday";
    break;
  default:
    dayName = "Saturday";
}
const usedNums = [];
const mn = d.getMonth();
const mName = getMonthName(mn);
function getMonthName(monthNumber) {
  d.setMonth(monthNumber);

  return d.toLocaleString("en-US", { month: "long" });
}
// const imbod = document.querySelector(".imgbod");
// console.log(imbod);
// let realWidth = imbod.naturalWidth;
// let realHeight = imbod.naturalHeight;
// console.log(realHeight);
// console.log(realWidth);
const dayNumber = d.getDate();
date.innerHTML = `${dayName}, ${dayNumber} ${mName}`;
const find = document.querySelector(".findout");
const arrId = [];
const getMeta = async (url) => {
  const img = new Image();
  img.src = url;
  await img.decode();
  return img;
};
let array;
const fetchAPI = async function () {
  try {
    // const res = await fetch("https://api.tvmaze.com/shows/82/episodes");
    // const data=await res.json();
    // console.log(data);
    await fetch("data.json")
      .then((response) => response.json())
      .then((data) => {
        array = data.data.filter(
          (item) =>
            item.author !== "Saurabh Sinha" && item.author !== "Ayushi Jain"
        );

        // console.log(array.length);
        // console.log(data.data);
        // console.log(typeof array);
        // console.log(typeof data.data);

        randomNews(array);
        swip(array);
      });
  } catch (error) {
    console.log(error);
  }
};
fetchAPI();
const d1 = document.querySelector(".d1");
const d4 = document.querySelector(".d4");
const d5 = document.querySelector(".d5");
const d6 = document.querySelector(".d6");
const d7 = document.querySelector(".d7");

const randomNews = function (arr) {
  const img1 = document.createElement("img");
  const img2 = document.createElement("img");
  const img3 = document.createElement("img");
  const img4 = document.createElement("img");
  const img5 = document.createElement("img");
  const p1 = document.createElement("p");
  const p2 = document.createElement("p");
  const p3 = document.createElement("p");
  const p4 = document.createElement("p");
  const p5 = document.createElement("p");

  for (let i = 0; i < 5; i++) {
    const randNum = randomNum(20, usedNums);
    usedNums.push(randNum);
  }

  img1.src = arr[usedNums[0]].imageUrl;
  p1.textContent = `${arr[usedNums[0]].content.split(" ", 30).join(" ")}`;
  p1.classList.add("locp");
  img1.style.width = "100%";
  img1.style.height = "100%";
  img1.style.objectFit = "cover";
  img1.style.opacity = "0.5";
  // d1.style.backgroundImage = `url(${arr[usedNums[0]].imageUrl})`;
  // d1.style.backgroundImage = `linear-gradient(360deg,rgba(0,0,0,1),transparent),url('${
  //   arr[usedNums[0]].imageUrl
  // }')`;
  // d1.style.backgroundSize = "cover";
  // d1.style.backgroundColor = "rgba(0, 0,0,0.5)";
  d1.append(img1);
  d1.append(p1);
  d1.href = arr[usedNums[0]].url;

  img2.src = arr[usedNums[1]].imageUrl;
  p2.textContent = `${arr[usedNums[1]].title}`;
  p2.classList.add("locp1");
  img2.style.width = "100%";
  img2.style.height = "100%";
  img2.style.opacity = "0.5";
  img2.style.objectFit = "cover";
  // d4.style.backgroundImage = `url(${arr[usedNums[1]].imageUrl})`;
  // d4.style.backgroundImage = `linear-gradient(360deg,rgba(0,0,0,1),transparent),url('${
  //   arr[usedNums[1]].imageUrl
  // }')`;
  // d4.style.backgroundSize = "cover";
  // d4.style.backgroundColor = "black";
  d4.append(img2);
  d4.append(p2);
  d4.href = arr[usedNums[1]].url;
  img3.src = arr[usedNums[2]].imageUrl;
  p3.textContent = `${arr[usedNums[2]].title}`;
  p3.classList.add("locp1");
  img3.style.width = "100%";
  d5.style.height = "100%";
  img3.style.opacity = "0.5";
  img3.style.objectFit = "cover";
  // d5.style.backgroundImage = `linear-gradient(360deg,rgba(0,0,0,1),transparent),url('${
  //   arr[usedNums[2]].imageUrl
  // }')`;

  // d5.style.backgroundImage = `linear-gradient(360deg, rgba(0, 0, 0, 0.5), transparent),url('${
  //   arr[usedNums[2]].imageUrl
  // }')`;
  d5.style.backgroundSize = "cover";
  d5.style.backgroundColor = "black";
  d5.append(img3);
  d5.append(p3);
  d5.href = arr[usedNums[2]].url;
  img4.src = arr[usedNums[3]].imageUrl;
  p4.textContent = `${arr[usedNums[3]].title}`;
  p4.classList.add("locp1");
  img4.style.width = "100%";
  img4.style.height = "100%";
  img4.style.opacity = "0.5";
  img4.style.objectFit = "cover";
  // d6.style.backgroundImage = `url(${arr[usedNums[3]].imageUrl})`;
  // d6.style.backgroundImage = `linear-gradient(360deg,rgba(0,0,0,1),transparent),url('${
  //   arr[usedNums[3]].imageUrl
  // }')`;
  // d6.style.backgroundSize = "cover";
  // d6.style.backgroundColor = "black";
  d6.href = arr[usedNums[3]].url;

  d6.append(img4);
  d6.append(p4);
  img5.src = arr[usedNums[4]].imageUrl;
  p5.textContent = `${arr[usedNums[4]].title.split(" ", 12).join(" ")}`;
  p5.classList.add("locp1");
  img5.style.width = "100%";
  img5.style.height = "100%";
  img5.style.opacity = "0.5";
  img5.style.objectFit = "cover";
  d7.href = arr[usedNums[4]].url;
  d7.append(img5);
  // d7.style.backgroundImage = `url(${arr[usedNums[4]].imageUrl})`;
  // d7.style.backgroundImage = `linear-gradient(360deg,rgba(0,0,0,1),transparent),url('${
  //   arr[usedNums[4]].imageUrl
  // }')`;
  // d7.style.backgroundSize = "cover";
  // d7.style.backgroundColor = "black";
  d7.append(p5);

  const besideMusic = document.querySelector(".besideMusic");
  // const row2 = document.querySelectorAll(".row2");
  for (let i = 6; i <= 11; i++) {
    const randNum = randomNum(20, usedNums);
    usedNums.push(randNum);

    const divv = document.createElement("div");
    divv.className = ".divv";
    const img = document.createElement("img");
    const p = document.createElement("p");
    p.style.fontWeight = "bold";
    p.style.marginBottom = "1px";
    const pp = document.createElement("p");
    p.style.width = "100%";
    pp.style.width = "90%";
    p.className = ".locp1";
    img.src = arr[usedNums[i - 1]].imageUrl;
    img.style.width = "100%";
    img.style.height = "40%";
    // img.style.opacity = "0.5";
    img.style.objectFit = "cover";
    p.textContent = `${arr[usedNums[i - 1]].title}`;
    pp.textContent = `${arr[usedNums[i - 1]].content.split(" ", 12).join(" ")}`;

    divv.append(img);
    divv.append(p);
    divv.append(pp);
    besideMusic.append(divv);
    // if (i > 8 && i <= 11) {
    //   const divv = document.createElement("div");
    //   divv.classList.add(".divv");
    //   const img = document.createElement("img");
    //   const p = document.createElement("p");
    //   p.style.marginBottom = "1px";
    //   const pp = document.createElement("p");
    //   img.src = arr[usedNums[i - 1]].imageUrl;
    //   img.style.width = "250px";
    //   img.style.height = "140px";
    //   // img.style.opacity = "0.5";
    //   img.style.objectFit = "cover";
    //   p.textContent = `${arr[usedNums[i - 1]].title}`;
    //   p.style.fontWeight = "bold";
    //   pp.textContent = `${arr[usedNums[i - 1]].content
    //     .split(" ", 28)
    //     .join(" ")}`;
    //   p.style.width = "250px";
    //   pp.style.width = "250px";
    //   divv.append(img);
    //   divv.append(p);
    //   divv.append(pp);
    //   row2.append(divv);
    // }
  }
};

function randomNum(max, used) {
  newNum = Math.floor(Math.random() * max);

  if (!used.includes(newNum)) {
    return newNum;
  } else {
    return randomNum(max, used);
  }
}

var swiper = new Swiper(".swiper", {
  slidesPerView: 3,
  direction: getDirection(),
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  on: {
    resize: function () {
      swiper.changeDirection(getDirection());
    },
  },
});

function getDirection() {
  var windowWidth = window.innerWidth;
  var direction = window.innerWidth <= 760 ? "vertical" : "horizontal";
  return direction;
}

const swiperr = document.querySelector(".swiper-wrapper");
function swip(arr) {
  for (let i = 12; i <= 23; i++) {
    const dins = document.createElement("div");
    dins.classList.add("swiper-slide");
    dins.style.width = "30%";
    // dins.style.position = "absolute";
    // dins.style.bottom = "0";
    const ims = document.createElement("img");
    ims.src = arr[i].imageUrl;
    ims.style.width = "250px";
    ims.style.height = "150px";
    // ims.style.opacity = "0.5";
    ims.style.objectFit = "cover";
    const ps = document.createElement("p");
    const psto = document.createElement("p");
    psto.innerHTML = `<i class="fa-solid fa-clock"></i> ${arr[i].time}`;
    ps.style.position = "relative";
    psto.style.position = "absolute";
    psto.style.bottom = "0";
    psto.style.fontSize = "1vw";
    console.log(arr[i].time);
    ps.style.fontSize = "1.1vw";
    ps.style.fontWeight = "bold";
    ps.style.marginBottom = "0";
    ps.style.width = "37%";
    ps.style.height = "180px";
    ps.style.marginTop = "12px";
    ps.style.textAlign = "left";
    ps.style.paddingLeft = "4px";
    ps.textContent = `${arr[i].title.split(" ", 10).join(" ")}...`;
    ps.style.color = "black";
    dins.append(ims);
    ps.append(psto);
    dins.append(ps);
    swiperr.append(dins);
  }
}

const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".remove");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("menu");
});
