//main "shows" section selector
const showsSection = document.querySelector(".shows");

//Create Elements
const showsTitle = document.createElement("h2");
showsTitle.classList.add("shows__title");
showsTitle.innerText = "Shows";

const showsInfoContainer = document.createElement("div");
showsInfoContainer.classList.add("shows-info__container");

const showsHeading = document.createElement("h1");
showsHeading.classList.add("shows__title");
showsHeading.innerHTML = "Shows";

const showsInfoTitle = document.createElement("p");
showsInfoTitle.classList.add("shows-info__title");
showsInfoTitle.innerHTML = "Date";

const showsInfoData = document.createElement("p");
showsInfoData.classList.add("shows-info__data");
showsInfoData.innerHTML = "Wed Dec 15 2021";

const showsButton = document.createElement("button");
showsButton.classList.add("shows__button");
showsButton.innerHTML = "Buy Tickets";

// <!-- <h1 class="shows__title"></h1>
// <div class="shows-info__container">
//     <p class="shows-info__title">date</p>
//     <p class="shows-info__data">test test test</p>
// </div> -->

showsSection.appendChild(showsTitle);
showsSection.appendChild(showsInfoContainer);
showsInfoContainer.appendChild(showsInfoTitle);
showsInfoContainer.appendChild(showsInfoData);
showsInfoContainer.appendChild(showsButton);
