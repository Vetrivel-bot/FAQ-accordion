const hideButtons = document.querySelectorAll(".hide");
const queries = document.querySelectorAll(".query");

hideButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    const answer = queries[index].querySelector(".innerdiv");
    const isHidden = answer.style.display === "none" || !answer.style.display;

    hideButtons.forEach((btn, idx) => {
      queries[idx].querySelector(".innerdiv").style.display = "none";
      btn.style.backgroundImage = "url('./assets/images/icon-plus.svg')";
    });

    if (isHidden) {
      answer.style.display = "block";
      button.style.backgroundImage = "url('./assets/images/icon-minus.svg')";
    } else {
      answer.style.display = "none";
      button.style.backgroundImage = "url('./assets/images/icon-plus.svg')";
    }
  });
});
