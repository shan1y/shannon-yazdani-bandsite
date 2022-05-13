let commentsInfo = [
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

const commentsSection = document.querySelector(".comments");

const form = document.querySelector("form");

function displayComments(commentsObject) {
  commentsInfo.forEach((info) => {
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
    commentsDate.textContent = info.date;
    commentsSectionTextWrapper.appendChild(commentsDate);

    const commentsComment = document.createElement("div");
    commentsComment.classList.add("comments__comment");
    commentsComment.textContent = info.comment;
    commentsSectionRight.appendChild(commentsComment);
  });
}

form.addEventListener("submit", (e) => {
  const objName = e.target.userName.value;
  const objComment = e.target.userComment.value;
  const objDate = new Date().toLocaleDateString("en-US");
  e.preventDefault();

  let newObject = { name: objName, date: objDate, comment: objComment };
  commentsInfo.unshift(newObject);

  const nameInput = document.getElementById("userName");
  const commentInput = document.getElementById("userComment");
  nameInput.value = "";
  commentInput.value = "";

  commentsSectionAppended = document.querySelectorAll(".comments__container");
  commentsSectionAppended.forEach((container) => {
    container.remove();
  });

  displayComments();
});

displayComments();
