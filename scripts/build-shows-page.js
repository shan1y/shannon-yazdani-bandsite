const showsSection = document.querySelector(".shows-info");

const showsSectionTitle = document.createElement("h2");
showsSectionTitle.classList.add("shows-info__section-heading");
showsSectionTitle.textContent = "Shows";

showsSection.appendChild(showsSectionTitle);

let information = [
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

information.forEach((item) => {
  //Create Element Container
  const showsInfoContainer = document.createElement("ul");
  showsInfoContainer.classList.add("shows-info__container");

  //Append container to HTML section
  showsSection.appendChild(showsInfoContainer);

  //Create Date Title Element
  const showsInfoDateHeading = document.createElement("li");
  showsInfoDateHeading.classList.add("shows-info__heading");
  showsInfoDateHeading.textContent = "Date";

  //Get Date from Object
  const showsInfoDate = document.createElement("li");
  showsInfoDate.classList.add("shows-info__description--date");
  showsInfoDate.textContent = item.date;

  //Append Date to container
  showsInfoContainer.appendChild(showsInfoDateHeading);
  showsInfoContainer.appendChild(showsInfoDate);

  //Create Venue Title Element
  const showsInfoVenueHeading = document.createElement("li");
  showsInfoVenueHeading.classList.add("shows-info__heading");
  showsInfoVenueHeading.textContent = "Venue";

  //Get Venue from Object
  const showsInfoVenue = document.createElement("li");
  showsInfoVenue.classList.add("shows-info__description");
  showsInfoVenue.textContent = item.venue;

  //Append Venue to container
  showsInfoContainer.appendChild(showsInfoVenueHeading);
  showsInfoContainer.appendChild(showsInfoVenue);

  //Create Location Title Element
  const showsInfoLocationHeading = document.createElement("li");
  showsInfoLocationHeading.classList.add("shows-info__heading");
  showsInfoLocationHeading.textContent = "Location";

  //Get Location from Object
  const showsInfoLocation = document.createElement("li");
  showsInfoLocation.classList.add("shows-info__description");
  showsInfoLocation.textContent = item.location;

  //Create Button Element
  const showsInfoButton = document.createElement("button");
  showsInfoButton.classList.add("shows-info__button");
  showsInfoButton.textContent = "Buy Tickets";

  //Append Location to container
  showsInfoContainer.appendChild(showsInfoLocationHeading);
  showsInfoContainer.appendChild(showsInfoLocation);

  //Append button to container
  showsInfoContainer.appendChild(showsInfoButton);
});
