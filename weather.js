const form = document.querySelector("form");
const background = document.querySelector(".maindiv2");
const wrapper = document.querySelector(".swiper-wrapper");
const d1 = new Date();
const dayNumber = d1.getDate();
const system = new Date();
hourSystem = system.getHours();
const wrapper2 = document.querySelector(".uswip");
// const input = document.querySelector("#search");
// input.addEventListener("change", () => {
//   input.style.backgroundColor = "white";
// });
// const fetchAPICountry = async function () {
//   try {
//     await fetch("https://restcountries.com/v3.1/all")
//       .then((response) => response.json())
//       .then((data) => {
//         search(data);
//         fetchAPIWeather(data);
//       })
//       .catch((error) => console.log("Error", error));
//   } catch (error) {
//     console.log(error);
//   }
// };

const fetchAPI = async function () {
  try {
    fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=d209d87fcf504c448de63901230603&q=london&days=7`
    )
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        swip(data);
      })
      .catch((error) => console.log("Error", error));
  } catch (error) {
    console.log(error);
  }
};
fetchAPI();
const fetchAPIWeather = async function (searchResult) {
  try {
    fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=d209d87fcf504c448de63901230603&q=${searchResult}&days=7`
    )
      .then((response) => response.json())
      .then((data) => {
        swip(data);
      })
      .catch((error) => console.log("Error", error));
  } catch (error) {
    console.log(error);
  }
};

search();
function search() {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const searchInput = form.elements.search.value;
    if (searchInput) {
      wrapper.innerHTML = "";
      fetchAPIWeather(searchInput.toLowerCase());
      e.target.search.value = "";
    } else {
      alert("You Dont Write anything");
    }
  });
}

function list(data) {
  data.map((it) => {
    const lswip = document.createElement("li");
    lswip.classList.add("swiper-slide");
    lswip.classList.add("lis2");
    lswip.textContent = it.time.slice(11, 16);
    // console.log(lswip);
    wrapper2.append(lswip);
    const div = document.createElement("div");
    div.style.marginTop = "100px";
    div.style.display = "flex";
    div.style.flexDirection = "column";
    div.style.alignItems = "center";
    lswip.append(div);
    const img = document.createElement("img");
    img.src = `https://${it.condition.icon.slice(2)}`;
    img.style.height = "50px";
    img.style.width = "50px";
    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    p2.innerHTML = '<i class="fa-regular fa-compass"></i>';
    // console.log(p2);
    const p3 = document.createElement("p");
    const p4 = document.createElement("p");
    p1.textContent = `${Math.floor(it.temp_c)}°`;
    p3.textContent = `${it.wind_kph}°`;
    p4.textContent = `${it.humidity}%`;
    div.append(img);
    div.append(p1);

    p3.style.marginTop = "10px";
    p4.style.marginTop = "50px";
    p4.style.marginBottom = "2px";
    // p3.style.marginBottom = "50px";
    div.append(p3);
    div.append(p4);
    div.append(p2);
  });
}
const locatName = document.querySelector(".locatName");
function swip(data) {
  locatName.innerHTML = "";
  const span = document.createElement("span");
  span.textContent = data.location.name;
  locatName.append(span);
  data.forecast.forecastday.map((item) => {
    const li = document.createElement("li");
    li.classList.add("swiper-slide");
    const date = document.createElement("p");
    date.style.marginBottom = "0";
    const div = document.createElement("div");
    const divv = document.createElement("div");
    const pdiv1 = document.createElement("p");
    const pdiv2 = document.createElement("p");
    pdiv1.textContent = `${Math.floor(item.day.maxtemp_c)}°`;
    pdiv2.textContent = `${Math.floor(item.day.mintemp_c)}°`;
    pdiv1.style.marginBottom = "0";
    pdiv1.style.marginTop = "5px";
    pdiv2.style.marginTop = "0";
    pdiv2.style.marginBottom = "0";
    divv.append(pdiv1);
    divv.append(pdiv2);
    divv.style.padding = "0px";
    divv.style.height = "0%";
    div.append(divv);
    div.style.display = "flex";
    div.style.justifyContent = "center";
    const img = document.createElement("img");
    img.style.height = "50px";
    img.style.marginLeft = "10px";
    img.src = `https://${item.day.condition.icon.slice(2)}`;
    div.append(img);
    const seasonNumber = Number(dayNumber).toLocaleString("en-US", {
      minimumIntegerDigits: 2,
    });
    if (item.date.slice(8, 10) === seasonNumber) {
      const image = changeImg(item.day.condition.text);
      background.style.backgroundImage = `url(${image[0].src})`;
      date.textContent = `Today ${item.date.slice(8, 10)}th`;
      const arrHour = item.hour.filter(
        (h) => h.time.slice(11, 13) >= hourSystem
      );
      list(arrHour);
    } else {
      const d2 = item.date;
      function getDayName(dateStr, locale) {
        let date = new Date(dateStr);
        return date.toLocaleDateString(locale, { weekday: "long" });
      }
      let day = getDayName(d2, "en-en");
      if (item.date.slice(8, 10)[0] >= 1) {
        date.textContent = `${day} ${item.date.slice(8, 10)}th`;
      } else {
        date.textContent = `${day} ${item.date.slice(9, 10)}th`;
      }
    }
    li.append(date);
    li.append(div);
    li.addEventListener("click", () => {
      const image = changeImg(item.day.condition.text);
      background.style.backgroundImage = `url(${image[0].src})`;
      wrapper2.innerHTML = "";
      if (date.textContent === `Today ${item.date.slice(9, 10)}th`) {
        const arrHour = item.hour.filter(
          (h) => h.time.slice(11, 13) >= hourSystem
        );
        list(arrHour);
      } else {
        list(item.hour);
      }
    });
    wrapper.append(li);
  });
}

// var swiper = new Swiper(".swiper", {
//   slidesPerView: 3,
//   direction: getDirection(),
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
//   // on: {
//   //   resize: function () {
//   //     swiper.changeDirection(getDirection());
//   //   },
//   // },
// });

function getDirection() {
  var direction = "horizontal";

  return direction;
}

const imgArray = [
  {
    name: "rain",
    src: "img/pexels-rain.jpg",
  },
  {
    name: "sunny",
    src: "img/pexels-lukas-296234.jpg",
  },
  {
    name: "foggy",
    src: "img/pexels-eberhard-grossgasteiger-2086620.jpg",
  },
  {
    name: "snow",
    src: "img/pexels-jill-wellington-259583.jpg",
  },
  {
    name: "cloudy",
    src: "img/pexels-pixabay-268917.jpg",
  },
];

function changeImg(text) {
  // console.log(text);
  const arrimg = imgArray.filter(
    (item) => text.toLowerCase().indexOf(item.name) !== -1
  );
  // console.log(arrimg);
  return arrimg;
}

var swiper = new Swiper(".swiper", {
  slidesPerView: 3,
  direction: getDirection(),
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // on: {
  //   resize: function () {
  //     swiper.changeDirection(getDirection());
  //   },
  // },
});

const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".remove");
const main = document.querySelector("main");

window.onresize = () => {
  if (window.innerWidth > 610) {
    main.classList.remove("main");
    menu.classList.remove("menu");
  }
};
hamburger.addEventListener("click", () => {
  main.classList.toggle("main");
  menu.classList.toggle("menu");
});
