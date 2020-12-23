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
