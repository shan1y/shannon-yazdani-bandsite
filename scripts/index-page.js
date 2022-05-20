const commentsSection = document.querySelector(".comments");
const form = document.querySelector("form");
const nameInput = document.querySelector(".form__name");
const commentInput = document.querySelector(".form__comment");

const apiKey = "fa513836-10f7-42dc-bfeb-55ce0941005e";
const BaseURL = "https://project-1-api.herokuapp.com";

//Get request for comments. This gives us the argument to pass into "Display Comments"
function loadComments() {
  return axios
    .get(`${BaseURL}/comments/?api_key=${apiKey}`)
    .then(function (response) {
      let receivedData = response.data.sort(
        (a, b) => b.timestamp - a.timestamp
      );

      displayComments(response.data);
      console.log(response.data);
    })
    .catch((err) => {
      console.log(err);
    });
}

//This function updates the HTML element contents when called.
function displayComments(commentsObject) {
  commentsObject.forEach((info) => {
    const commentsContainer = document.createElement("div");
    commentsContainer.classList.add("comments__container");
    commentsSection.appendChild(commentsContainer);

    const commentsImagePlaceholder = document.createElement("div");
    commentsImagePlaceholder.classList.add("comments__image-placeholder");
    commentsContainer.appendChild(commentsImagePlaceholder);

    const commentsSectionRight = document.createElement("div");
    commentsSectionRight.classList.add("comments__section--right");
    commentsContainer.appendChild(commentsSectionRight);

    const commentsSectionTextWrapper = document.createElement("div");
    commentsSectionTextWrapper.classList.add("comments__text-wrapper");
    commentsSectionRight.appendChild(commentsSectionTextWrapper);

    let commentsName = document.createElement("div");
    commentsName.classList.add("comments__name");
    commentsName.textContent = info.name;
    commentsSectionTextWrapper.appendChild(commentsName);

    let commentsDate = document.createElement("div");
    commentsDate.classList.add("comments__date");
    info.timestamp = new Date(info.timestamp).toLocaleDateString();
    commentsDate.textContent = info.timestamp;
    commentsSectionTextWrapper.appendChild(commentsDate);

    const commentsComment = document.createElement("div");
    commentsComment.classList.add("comments__comment");
    commentsComment.textContent = info.comment;
    commentsSectionRight.appendChild(commentsComment);
  });
}

//Post request to add new comments to API
function addComment(newObject) {
  return axios
    .post(`${BaseURL}/comments/?api_key=${apiKey}`, newObject)
    .then((response) => {
      const commentsSectionAppended = document.querySelectorAll(
        ".comments__container"
      );
      commentsSectionAppended.forEach((container) => {
        container.remove();
      });

      loadComments();
    })
    .catch((err) => {
      console.log(err);
    });
}

//Event listener for submission
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const objName = e.target.userName.value;
  const objComment = e.target.userComment.value;

  if (objName.trim().length == 0 && objComment.trim().length === 0) {
    nameInput.classList.add("form__name--error");
    commentInput.classList.add("form__comment--error");
  } else if (objName.trim().length == 0 && objComment) {
    nameInput.classList.add("form__name--error");
    commentInput.classList.remove("form__comment--error");
  } else if (objName && objComment.trim().length === 0) {
    nameInput.classList.remove("form__name--error");
    commentInput.classList.add("form__comment--error");
  } else {
    nameInput.classList.remove("form__name--error");
    commentInput.classList.remove("form__comment--error");

    let newObject = { name: objName, comment: objComment };

    addComment(newObject);

    nameInput.value = "";
    commentInput.value = "";
  }
});

//On page load, load comments.
loadComments();
