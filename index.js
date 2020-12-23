import "./assets/css/main.scss";
import select from "./select";
const articleShow = document.querySelector("#article-show");
// addes active class to the current url
[...document.querySelectorAll(".url-side")].map(item => {
  const { pathname } = document.location,
    list = item.innerText;
  console.log(list);
  if (pathname === "/") {
    [...document.querySelectorAll(".url-side")][0].parentElement.classList.add(
      "active"
    );
  }
  if (pathname.includes(item.innerText.toLowerCase())) {
    console.log(item.parentElement.classList);

    item.parentElement.classList.add("active");
  }
});

articleShow.onchange = function (e) {
  const value = e.target.value;
  if (!!value) {
    console.log(value);
    const element = document.querySelectorAll('[data-request="hide"]')[
      value - 1
    ];
    element.classList.toggle("show");
    if (element.previousElementSibling)
      element.previousElementSibling.classList.remove("show");

    if (element.nextElementSibling)
      element.nextElementSibling.classList.remove("show");

    element.classList.add("show");
    console.log(document.querySelectorAll('[data-request="hide"]')[value - 1]);
  }
};
