document.querySelector(".btnSpeak").style.display = "none";
var strWord = $("#nme");

var wordList=$("#word-ul");


function getWord(word) {
  if (!word) {
    alert("please enter a valid word");
    return;
  }
  fetch("https://wordsapiv1.p.rapidapi.com/words/" + word + "/definitions", {
    headers: {
      "x-rapidapi-host": "wordsapiv1.p.rapidapi.com",
      "x-rapidapi-key": "a4ba826bffmshdef196afc9f018cp1d1ebajsn6a07f04a0a7c",
    },
  })
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((data) => {
      console.log(data);
      $("h1").text(word);
      wordList.empty();
      for (i = 0; i < data.definitions.length; i++) {
        $("#word-ul").append($("<li>").text(data.definitions[i].definition));
      }
    })
    .catch((err) => {
      console.error(err);
      // alert(err);
    });
} 

$("#btn-search").on("click", function (e) {
  e.preventDefault();
  console.log(strWord[0].value);
  getWord(strWord[0].value);
  document.querySelector(".btnSpeak").style.display = "block";
});

function speak() {
  speechSynthesis.speak(new SpeechSynthesisUtterance(strWord[0].value));
}
