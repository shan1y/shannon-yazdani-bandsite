const commentsInfo = [
  {
    name: "Connor Walton",
    date: "02/17/2021",
    comment:
      "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
  },
  {
    name: "Emilie Beach",
    date: "01/09/2021",
    comment:
      "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
  },
  {
    name: "Miles Acosta",
    date: "12/20/2020",
    comment:
      "I can't stop listening. Every Time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
  },
];

const apiKey = "fa513836-10f7-42dc-bfeb-55ce0941005e";
const BaseURL = "https://project-1-api.herokuapp.com";

const displayComments = document.querySelector(".display-comments");

//Get request for comments
axios
  .request(`${BaseURL}/comments/?api_key=${apiKey}`)
  .then(function (response) {
    console.log(response.data);
    displayComments.innerHTML = JSON.stringify(response.data);
  })
  .catch((err) => {
    console.log(err);
  });

//Get Request for show dates
axios
  .request(`${BaseURL}/showdates/?api_key=${apiKey}`)
  .then(function (response) {
    console.log(response.data);
  });

myButton = document.querySelector(".button");
myButton.addEventListener("click", (e) => {
  axios.delete().then(function (response) {});

  axios
    .delete(
      "https://project-1-api.herokuapp.com/comments/85b22d26-6f55-44e9-960c-e0876161a93c?api_key=fa513836-10f7-42dc-bfeb-55ce0941005e"
    )
    .then(function (response) {});
  axios
    .delete(
      "https://project-1-api.herokuapp.com/comments/10dcc51a-0f3a-4daf-9764-3b71f78899f2?api_key=fa513836-10f7-42dc-bfeb-55ce0941005e"
    )
    .then(function (response) {});
  axios
    .delete(
      "https://project-1-api.herokuapp.com/comments/fc5fe6d0-f1a9-48a2-8f94-be7c1a86575e?api_key=fa513836-10f7-42dc-bfeb-55ce0941005e"
    )
    .then(function (response) {});
  axios
    .delete(
      "https://project-1-api.herokuapp.com/comments/19f4de8e-88e5-420b-97b4-be054359a1f6?api_key=fa513836-10f7-42dc-bfeb-55ce0941005e"
    )
    .then(function (response) {});
  axios
    .delete(
      "https://project-1-api.herokuapp.com/comments/7f42f067-a5ef-41a6-a33a-47f9df24614f?api_key=fa513836-10f7-42dc-bfeb-55ce0941005e"
    )
    .then(function (response) {});
  axios
    .delete(
      "https://project-1-api.herokuapp.com/comments/998e37f4-0fc2-4bd5-ae19-81b6f126751e?api_key=fa513836-10f7-42dc-bfeb-55ce0941005e"
    )
    .then(function (response) {});
  axios
    .delete(
      "https://project-1-api.herokuapp.com/comments/4983f75f-0f4c-43a6-9bdd-ad9720221b61?api_key=fa513836-10f7-42dc-bfeb-55ce0941005e"
    )
    .then(function (response) {});
  axios
    .delete(
      "https://project-1-api.herokuapp.com/comments/12bc7b62-66c7-4ba9-9e37-9cdd44ae2a74?api_key=fa513836-10f7-42dc-bfeb-55ce0941005e"
    )
    .then(function (response) {});
  axios
    .delete(
      "https://project-1-api.herokuapp.com/comments/9ff357d1-d41b-482f-b0ed-ffc69dcc3b01?api_key=fa513836-10f7-42dc-bfeb-55ce0941005e"
    )
    .then(function (response) {});
  axios
    .delete(
      "https://project-1-api.herokuapp.com/comments/df34318d-5b9d-44dc-9ee3-1acb7f452e92?api_key=fa513836-10f7-42dc-bfeb-55ce0941005e"
    )
    .then(function (response) {});
});

// //Post Request for comments
// let bodyContent = {
//   name: "Shannon New Yazdani",
//   comment: "Hello Hello.",
// };

// function addComment() {
//   axios
//     .post(`${BaseURL}/comments/?api_key=${apiKey}`, bodyContent)
//     .then((response) => {
//       console.log(response);
//     });
// }
