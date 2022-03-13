import "./style.scss";

function component() {
  const element = document.createElement("div");

  element.innerHTML = ["Hello", "webpack"].join(" ");
  element.classList.add("hello");

  return element;
}

document.body.appendChild(component());
