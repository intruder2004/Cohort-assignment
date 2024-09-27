let ctr = 1;

function deletetodo(index) {
  const element = document.getElementById(index);
  if (element) {
    element.classList.add("fade-out");
    setTimeout(function () {
      element.remove();
    }, 300);
  }
}

function addTodo() {
  const inputEl = document.getElementById("inputBox");
  if (inputEl.value.trim() === "") {
    alert("Please enter a task.");
    return;
  }

  const newDivEl = document.createElement("div");
  const uniqueId = `task-${ctr}`;

  newDivEl.setAttribute("id", uniqueId); // unique ID

  // span and delete button for each task
  const spanEl = document.createElement("span");
  const buttonEl = document.createElement("button");

  spanEl.innerHTML = inputEl.value;
  buttonEl.innerHTML = "DELETE";

  //event listener for delete button
  buttonEl.addEventListener("click", function () {
    deletetodo(uniqueId);
  });

  newDivEl.appendChild(spanEl);
  newDivEl.appendChild(buttonEl);

  document.getElementById("todocontainer").appendChild(newDivEl);

  inputEl.value = "";
  ctr += 1;
}
