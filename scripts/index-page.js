const commentsSection = document.querySelector(".comments");
const form = document.querySelector("form");
const nameInput = document.querySelector(".form__name");
const commentInput = document.querySelector(".form__comment");
let clicks = 0;
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
    })
    .catch((err) => {
      console.log(err);
    });
}

//This function updates the HTML element contents when called.
function displayComments(commentsObject) {
  const commentsSectionAppended = document.querySelectorAll(
    ".comments__container"
  );

  commentsSectionAppended.forEach((container) => {
    container.remove();
  });
  createElements(commentsObject);
}

function createElements(commentsObject) {
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

    const commentsButtons = document.createElement("div");
    commentsButtons.classList.add("comments__buttons");
    commentsSectionRight.appendChild(commentsButtons);

    const commentsLike = document.createElement("div");
    commentsLike.classList.add("comments__like");
    commentsButtons.appendChild(commentsLike);

    const commentsTrash = document.createElement("div");
    commentsTrash.classList.add("comments__trash");
    commentsButtons.appendChild(commentsTrash);

    const likeButton = document.createElement("button");
    likeButton.classList.add("comments__like-buttons");
    commentsLike.appendChild(likeButton);

    const likeCounter = document.createElement("span");
    likeCounter.classList.add("comments__like-counter");
    likeCounter.textContent = info.likes;

    const likeIcon = document.createElement("div");
    likeIcon.classList.add("comments__like-icon");

    if (info.likes !== 0) {
      likeCounter.classList.add("comments__like-counter--display");
    }

    likeIcon.addEventListener("click", () => {
      let id = info.id;
      likeCounter.classList.add("comments__like-counter--display");
      axios
        .put(`${BaseURL}/comments/${id}/like/?api_key=${apiKey}`)
        .then(function (response) {
          likeCounter.textContent = response.data.likes;
        });
    });

    likeButton.appendChild(likeIcon);
    likeButton.appendChild(likeCounter);

    const trashButton = document.createElement("button");
    trashButton.classList.add("comments__trash-button");
    commentsTrash.appendChild(trashButton);
    trashButton.addEventListener("click", () => {
      let id = info.id;
      axios
        .delete(`${BaseURL}/comments/${id}?api_key=${apiKey}`)
        .then(function (response) {
          commentsContainer.remove();
        })
        .catch((error) => {
          console.log(err);
        });
    });
  });
}

//Post request to add new comments to API
function addComment(newObject) {
  return axios
    .post(`${BaseURL}/comments/?api_key=${apiKey}`, newObject)
    .then((response) => {
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
