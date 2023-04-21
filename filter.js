let fetchBtn = document.getElementById('fetchBtn')

fetchBtn.addEventListener('click', fruitHandler)

function fruitHandler() {
  xhr = new XMLHttpRequest()
  xhr.open("GET", "filter.json", true)
  xhr.onload = function () {
    if (xhr.status === 200) {
      document.getElementById('fruitList').innerHTML = `<li class="list-group-item active">Fruits List</li>`;
      document.getElementById('vegetableList').innerHTML = `<li class="list-group-item active">Vegetables List</li>`;
      data = JSON.parse(this.responseText)
      // console.log(data)
      for (key in data) {
        if (data[key].type === "f") {
          document.getElementById('fruitList').innerHTML += `<li class="list-group-item change-color" onclick="alert(this.innerHTML)">${data[key].name}</li>`
        } else {
          document.getElementById('vegetableList').innerHTML += `<li class="list-group-item change-color" onclick="alert(this.innerHTML)">${data[key].name}</li>`;
        }
      }
    }
    else console.log("Error while fetching data")
  }
  xhr.send()
}



