const select = (function () {
  let customSelect,
    i,
    j,
    customElementLength,
    selectElementLength,
    selectElement,
    selectSelected,
    selectItems,
    option;
  /*look for any elements with the class "custom-select":*/
  customSelect = document.getElementsByClassName("custom-select");
  customElementLength = customSelect.length;
  for (i = 0; i < customElementLength; i++) {
    selectElement = customSelect[i].getElementsByTagName("select")[0];
    selectElementLength = selectElement.length;
    /*for each element, create a new DIV that will act as the selected item:*/
    selectSelected = document.createElement("DIV");
    selectSelected.setAttribute("class", "select-selected");

    selectSelected.innerHTML =
      selectElement.options[selectElement.selectedIndex].innerHTML;
    customSelect[i].appendChild(selectSelected);
    /*for each element, create a new DIV that will contain the option list:*/
    selectItems = document.createElement("DIV");
    selectItems.setAttribute("class", "select-items select-hide");
    for (j = 1; j < selectElementLength; j++) {
      /*for each option in the original select element,
    create a new DIV that will act as an option item:*/
      option = document.createElement("DIV");
      option.innerHTML = selectElement.options[j].innerHTML;
      option.setAttribute("class", "select-option");
      option.addEventListener("click", function (e) {
        /*when an item is clicked, update the original select box,
        and the selected item:*/
        let y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.previousSibling;
        for (i = 0; i < sl; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            myCustomfunction(s.options[i].value);
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            yl = y.length;
            for (k = 0; k < yl; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
      });
      selectItems.appendChild(option);
    }
    customSelect[i].appendChild(selectItems);
    selectSelected.addEventListener("click", function (e) {
      /*when the select box is clicked, close any other select boxes,
      and open/close the current select box:*/
      e.stopPropagation();
      closeAllSelect(this);
      this.nextSibling.classList.toggle("select-hide");
      this.classList.toggle("select-arrow-active");
    });
  }
  function closeAllSelect(elmnt) {
    /*a function that will close all select boxes in the document,
  except the current select box:*/
    let x,
      y,
      i,
      xl,
      yl,
      arrNo = [];
    x = document.getElementsByClassName("select-items");
    y = document.getElementsByClassName("select-selected");
    xl = x.length;
    yl = y.length;
    for (i = 0; i < yl; i++) {
      if (elmnt == y[i]) {
        arrNo.push(i);
      } else {
        y[i].classList.remove("select-arrow-active");
      }
    }
    for (i = 0; i < xl; i++) {
      if (arrNo.indexOf(i)) {
        x[i].classList.add("select-hide");
      }
    }
  }
  /*if the user clicks anywhere outside the select box,
then close all select boxes:*/
  document.addEventListener("click", closeAllSelect);
})();

function myCustomfunction(value) {
  const element = document.querySelectorAll('[data-request="hide"]')[value - 1];
  element.classList.toggle("show");
  if (element.previousElementSibling)
    element.previousElementSibling.classList.remove("show");

  if (element.nextElementSibling)
    element.nextElementSibling.classList.remove("show");

  element.classList.add("show");
  console.log(document.querySelectorAll('[data-request="hide"]')[value - 1]);
}

export default select;
