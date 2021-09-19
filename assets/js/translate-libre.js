var wordToTranslate = "Excellence";
var sourceLanguage = "en";
// var targetLanguage = "fr";
var targetLanguage = document.getElementById("dropdown");

//On Dropdown change word will be translated to the choosen language
targetLanguage.addEventListener("change", function (event) {
  event.preventDefault();
  // Getting the selected value from dropdown list
  // console.log(event.target.value);
  var targetLanguage1 = event.target.value;
  //Getting the Searched Word from h1 tag
  var wordToTranslate = $("h1").text();

  //Fetching the LibreTranslate API to translate the searched word
  fetch("https://libretranslate.de/translate", {
    method: "POST",
    headers: {
      accept: "application/json",
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body:
      "q=" +
      wordToTranslate +
      "&source=" +
      sourceLanguage +
      "&target=" +
      targetLanguage1 +
      "&format=text&api_key=xxxxxxxx-xxx-xxxx-xxxx-xxxxxxxxxxxx",
  })
    .then((response) => {
      //   console.log(response);
      return response.json();
    })
    .then((data) => {
      console.log(data);
      //Assigning the Translated word to h3 tag
      //   console.log(data.translatedText);
      $("h3").text(data.translatedText);
    })
    .catch((err) => {
      console.error(err);
      // alert(err);
    });
});
