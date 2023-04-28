# This is a JavaScript code that uses AJAX (Asynchronous JavaScript and XML) to retrieve data from two different JSON files and display the information on a web page.

The code has two click event listeners: one for the button with id "fruitBtn" and another for the button with id "vegetableBtn". When the user clicks on either button, the corresponding function is called.

In the function fruitHandler() and vegetableHandler(), an XMLHttpRequest object is created and used to retrieve the data from the JSON files "fruit.json" and "vegetable.json", respectively. If the request is successful (status code 200), the data is parsed from JSON format into a JavaScript object and then displayed on the web page. Otherwise, an error message is logged to the console.

The code loops through the object data using a for...in loop, creating an HTML list item for each object key, which represents a fruit or vegetable. The name of the fruit or vegetable is displayed in the list item. The resulting HTML string is assigned to the innerHTML property of the corresponding HTML element with an id of "fruitList" or "vegetableList".

Note that this code assumes that the HTML file containing this JavaScript code has HTML elements with ids "fruitBtn", "vegetableBtn", "fruitList", and "vegetableList". The JSON files "fruit.json" and "vegetable.json" must be located in the same directory as the HTML file.
