/*
Use fetch to load a greeting from the API and display it 
in the HTML element with the id "greeting-text".

API: https://codeyourfuture.herokuapp.com/api/greetings
Response: A greeting in a random language

To learn more about fetch, refer to the doc:
https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch


================
Expected result
================

Open index.html in your browser. Every time you refresh the page,
a different greeting should be displayed in the box.
*/

let apiAddress = "https://codeyourfuture.herokuapp.com/api/greetings"
let greetingText = document.getElementById("greeting-text");

  fetch(apiAddress)
  .then(response => {
    if(response.status >= 200 && response.status < 300){
     return response.text()}})
  .then(function (greeting) {
    greetingText.innerText = greeting})
    .catch( err => console.log(err));

