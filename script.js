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

let counter = 0;


function addCounter() {
    counter++ 
    document.getElementById("counter").style.display = "block";
    console.log(counter);
    document.getElementById('counter').innerHTML = counter;

  }

  function minusCounter() {
    if (counter > 0) {
    counter -- 
    } 
    
    if (counter <= 0 ) {
      document.getElementById("counter").style.display = "none";
      
    }
    console.log(counter);
    document.getElementById('counter').innerHTML = counter;

  }

  // function displayCounter (){
  //   document.getElementById('counter').innerHTML = counter;
  // }