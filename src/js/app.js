const inputDay = document.querySelector("#inputDay");
const inputMonth = document.querySelector("#inputMonth");
const inputYear = document.querySelector("#inputYear");

const button = document.querySelector(".btn");

const ageYear = document.querySelector("#year");
const ageMonth = document.querySelector("#month");
const ageDay = document.querySelector("#day");

const now = new Date();
const yearsDiff = now.getFullYear() - inputYear;
const monthsDiff = now.getMonth() - inputMonth;
const daysDiff = now.getDate() - inputDay;

const InputRequiredError = "This field is required";
const InputDayError = "Must be a valid day";
const InputMonthError = "Must be a valid month";
const InputYearError = "Must be in the past";
