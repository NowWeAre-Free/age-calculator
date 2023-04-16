"use strict";
// get submit button
const button = document.querySelector(".arrow__button");

//get input and output elements
const inputDay = document.getElementById("inputDay");
const inputMonth = document.getElementById("inputMonth");
const inputYear = document.getElementById("inputYear");

const outputDay = document.getElementById("day");
const outputMonth = document.getElementById("month");
const outputYear = document.getElementById("year");

button.addEventListener("click", calcDate);

function calcDate() {
  const inputDate = dayjs();
}
