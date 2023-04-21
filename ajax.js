// get fruits
let fruitBtn = document.getElementById('fruitBtn')

fruitBtn.addEventListener('click', fruitHandler)

function fruitHandler() {
  xhr = new XMLHttpRequest()
  xhr.open("GET", "fruit.json", true)
  xhr.onload = function () {
    if (xhr.status === 200) {
      data = JSON.parse(this.responseText)
      str = "";
      for (key in data) {
        str += `<li class="list-group-item">${data[key].name}</li>`
      }
      document.getElementById('fruitList').innerHTML = str;
    }
    else console.log("Error while fetching data")
  }
  xhr.send()
}
// get vegetables
let vegetableBtn = document.getElementById('vegetableBtn')

vegetableBtn.addEventListener('click', vegetableHandler)

function vegetableHandler() {
  xhr = new XMLHttpRequest()
  xhr.open("GET", "vegetable.json", true)
  xhr.onload = function () {
    if (xhr.status === 200) {
      data = JSON.parse(this.responseText)
      str = "";
      for (key in data) {
        str += `<li class="list-group-item">${data[key].name}</li>`
      }
      document.getElementById('vegetableList').innerHTML = str;
    }
    else console.log("Error while fetching data")
  }
  xhr.send()
}