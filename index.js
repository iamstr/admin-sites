import "./assets/css/main.scss";
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

[...document.querySelectorAll(".sms-btn")].map(item => {
  item.classList.remove("active");
  item.addEventListener("click", e => {
    classRemove(e.target);

    const confirmation = confirm(
      "are you sure you want to send " + e.target.innerText
    );
    if (confirmation == true) {
      e.target.classList.toggle("active");
      let counter = 10;
      while (counter < 10) {
        setInterval(() => timer(counter, e.target), 1000);
        console.log(counter);
        counter -= 1;
      }
    }
  });
});

function classRemove(e) {
  if (e.previousElementSibling)
    e.previousElementSibling.classList.remove("active");
  if (e.nextElementSibling) e.nextElementSibling.classList.remove("active");
}
function disable(e) {
  if (e.previousElementSibling)
    e.previousElementSibling.setAttribute("disabled", true);
  if (e.nextElementSibling) e.nextElementSibling.setAttribute("disabled", true);
  e.setAttribute("disabled", true);
}
function undisable(e) {
  if (e.previousElementSibling) e.previousElementSibling.disabled = false;
  if (e.nextElementSibling) e.nextElementSibling.disabled = false;
  e.disabled = false;
}
function timer(sec, e) {
  let count = sec;
  if (sec <= 0) {
    undisable(e);
    clearInterval(timer);
  } else {
    document.getElementById("4").innerText = "everything is disabled" + sec;

    disable(e);
  }
}
