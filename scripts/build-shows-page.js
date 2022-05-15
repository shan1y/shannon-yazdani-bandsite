const showsMain = document.querySelector("main");

const showsSection = document.createElement("ul");
showsSection.classList.add("shows");

showsMain.appendChild(showsSection);

const showsSectionTitle = document.createElement("h2");
showsSectionTitle.classList.add("shows__section-heading");
showsSectionTitle.textContent = "Shows";

showsSection.appendChild(showsSectionTitle);

const showsHeadingMobileContainer = document.createElement("li");
showsHeadingMobileContainer.classList.add("shows__tablet");

const showsHeadingMobileDate = document.createElement("p");
showsHeadingMobileDate.classList.add("shows__tablet-item");
showsHeadingMobileDate.textContent = "Date";

const showsHeadingMobileVenue = document.createElement("p");
showsHeadingMobileVenue.classList.add("shows__tablet-item");
showsHeadingMobileVenue.textContent = "Venue";

const showsHeadingMobileLocation = document.createElement("p");
showsHeadingMobileLocation.textContent = "Location";
showsHeadingMobileLocation.classList.add("shows__tablet-item");

const showsHeadingMobileEmpty = document.createElement("p");
showsHeadingMobileEmpty.textContent = " ";
showsHeadingMobileEmpty.classList.add("shows__tablet-item");

showsSection.appendChild(showsHeadingMobileContainer);
showsHeadingMobileContainer.appendChild(showsHeadingMobileDate);
showsHeadingMobileContainer.appendChild(showsHeadingMobileVenue);
showsHeadingMobileContainer.appendChild(showsHeadingMobileLocation);
showsHeadingMobileContainer.appendChild(showsHeadingMobileEmpty);

let showsData = [
  {
    id: "1",
    date: "Mon Sept 06 2021",
    venue: "Ronald Lane",
    location: "San Francisco, CA",
  },
  {
    id: "2",
    date: "Tue Sept 21 2021",
    venue: "Pier 3 East",
    location: "San Francisco, CA",
  },
  {
    id: "3",
    date: "Fri Oct 15 2021",
    venue: "View Lounge",
    location: "San Francisco, CA",
  },
  {
    id: "4",
    date: "Sat Nov 06 2021",
    venue: "Hyatt Agency",
    location: "San Francisco, CA",
  },
  {
    id: "5",
    date: "Fri Nov 26 2021",
    venue: "Moscow Center",
    location: "San Francisco, CA",
  },
  {
    id: "6",
    date: "Wed Dec 15 2021",
    venue: "Press Club",
    location: "San Francisco, CA",
  },
];

showsData.forEach((item) => {
  //Create Element Container
  const showsInfoContainer = document.createElement("li");
  showsInfoContainer.classList.add("shows__container");
  showsInfoContainer.classList.add("shows__container--unselected");

  //Append container to HTML section
  showsSection.appendChild(showsInfoContainer);

  //Create Date Group
  const showsInfoHeadingsContainer = document.createElement("div");
  showsInfoHeadingsContainer.classList.add("shows__headings-container");
  showsInfoContainer.appendChild(showsInfoHeadingsContainer);

  //Create Date Title Element
  const showsInfoDateHeading = document.createElement("p");
  showsInfoDateHeading.classList.add("shows__heading");
  showsInfoDateHeading.textContent = "Date";

  //Get Date from Object
  const showsInfoDate = document.createElement("p");
  showsInfoDate.classList.add("shows__description--date");
  showsInfoDate.textContent = item.date;

  //Append Date to container
  showsInfoHeadingsContainer.appendChild(showsInfoDateHeading);
  showsInfoHeadingsContainer.appendChild(showsInfoDate);

  //Creat Venue Group
  const VenueContainer = document.createElement("div");
  VenueContainer.classList.add("shows__headings-container");
  showsInfoContainer.appendChild(VenueContainer);

  //Create Venue Title Element
  const showsInfoVenueHeading = document.createElement("p");
  showsInfoVenueHeading.classList.add("shows__heading");
  showsInfoVenueHeading.textContent = "Venue";

  //Get Venue from Object
  const showsInfoVenue = document.createElement("p");
  showsInfoVenue.classList.add("shows__description");
  showsInfoVenue.textContent = item.venue;

  //Append Venue to container
  VenueContainer.appendChild(showsInfoVenueHeading);
  VenueContainer.appendChild(showsInfoVenue);

  //Create Location Group
  const LocationContainer = document.createElement("div");
  LocationContainer.classList.add("shows__headings-container");
  showsInfoContainer.appendChild(LocationContainer);

  //Create Location Title Element
  const showsInfoLocationHeading = document.createElement("p");
  showsInfoLocationHeading.classList.add("shows__heading");
  showsInfoLocationHeading.textContent = "Location";

  //Get Location from Object
  const showsInfoLocation = document.createElement("p");
  showsInfoLocation.classList.add("shows__description");
  showsInfoLocation.textContent = item.location;

  LocationContainer.appendChild(showsInfoLocationHeading);
  LocationContainer.appendChild(showsInfoLocation);

  //Create Button Element
  const showsInfoButton = document.createElement("button");
  showsInfoButton.classList.add("shows__button");
  showsInfoButton.textContent = "Buy Tickets";

  //Append button to container
  showsInfoContainer.appendChild(showsInfoButton);

  showsInfoContainer.addEventListener("click", () => {
    if (document.querySelector(".shows__container--selected")) {
      document
        .querySelector(".shows__container--selected")
        .classList.remove("shows__container--selected");
    }
    showsInfoContainer.classList.toggle("shows__container--selected");
    showsInfoContainer.classList.add("shows__container--unselected");
  });
});
