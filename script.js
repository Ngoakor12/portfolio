// if freelance option is selected
// - show the budget fields
// else if general option is selected
// - hide budget fields

const selectField = document.getElementById("form-subject");
const freelanceField = document.getElementsByClassName("freelance-field")[0];

selectField.addEventListener("change", () => {
  if (selectField.value === "freelance") {
    freelanceField.style.display = "flex";
  } else {
    freelanceField.style.display = "none";
  }
});
