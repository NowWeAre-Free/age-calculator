const inputDay = document.querySelector("#inputDay");
const inputMonth = document.querySelector("#inputMonth");
const inputYear = document.querySelector("#inputYear");
const error = document.querySelectorAll(".date_error");
const dateInput = document.querySelectorAll(".date__input");

const errorDay = document.querySelector(".errorDay");
const errorMonth = document.querySelector(".errorMonth");
const errorYear = document.querySelector(".errorYear");

const button = document.querySelector(".btn");

const ageYear = document.querySelector("#year");
const ageMonth = document.querySelector("#month");
const ageDay = document.querySelector("#day");

const now = new Date();
let yearsDiff = now.getFullYear() - inputYear.value;
let monthsDiff = now.getMonth() - inputMonth.value;
let daysDiff = now.getDate() - inputDay.value;

const inputRequiredError = "This field is required";
const inputDayError = "Must be a valid day";
const inputMonthError = "Must be a valid month";
const inputYearError = "Must be in the past";

//checks if day input is valid
const validDay = () => {
  let value = inputDay.value;
  if (value === "") {
    errorDay.innerHTML = inputRequiredError;
  } else if (value < 1 || value > 31) {
    errorDay.innerHTML = inputDayError;
  }
};

//checks if month input is valid
const validMonth = () => {
  let value = inputMonth.value;
  if (value === "") {
    errorMonth.innerHTML = inputRequiredError;
  } else if (value < 1 || value > 12) {
    errorMonth.innerHTML = inputMonthError;
  }
};

//checks if year input is valid
const validYear = () => {
  let value = inputYear.value;
  if (value === "") {
    errorYear.innerHTML = inputRequiredError;
  } else if (value < 1900 || value > now.getFullYear()) {
    errorYear.innerHTML = inputYearError;
  }
};

button.addEventListener("click", () => {
  validDay();
  validMonth();
  validYear();
});
