//localStorage.setItem("Hello", "hello item");
///const testItem = localStorage.getItem("Hello");

function save() {
  let textValue = document.getElementById("answer").value;
  console.log(textValue);
  localStorage.setItem("textfield", textValue);
}

function retrieve() {
  const storeditem = localStorage.getItem("textfield");
  document.getElementById("box2").innerHTML = storeditem;
}

function addCounter() {
  let counter = 0;
  for (let i = 0; i <= i -1; i++) {
    console.log(counter += i);
  }
}