document.write("hey");
const div = document.createElement("div");
for (let i in 20) {
  div.innerHTML = i;
  document.getElementsByTagName("body")[0].appendChild(div);
}
