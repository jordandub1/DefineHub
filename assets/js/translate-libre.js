
var searchBtn = $("#btn-search")
var wordToTranslate;

var sourceLanguage = "en";
// var targetLanguage = "fr";
var targetLanguage = document.getElementById("dropdown");

//On Dropdown change word will be translated to the chosen language
targetLanguage.addEventListener("change", function (event) {
  event.preventDefault();
  // Getting the selected value from dropdown list
  // console.log(event.target.value);
  var targetLanguage1 =
    targetLanguage.options[targetLanguage.selectedIndex].value;
  //Getting the Searched Word from h1 tag
   wordToTranslate = document.getElementById("nme").value;

  //Fetching the LibreTranslate API to translate the searched word
  fetch("https://libretranslate.de/translate", {
    method: "POST",
    body: JSON.stringify({
      q: wordToTranslate,
      source: sourceLanguage,
      target: targetLanguage1,
    }),
    headers: { "Content-Type": "application/json" },
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

searchBtn.on("click",function(event){
  wordToTranslate = document.getElementById("nme").value;
  var targetLanguage1 =
    targetLanguage.options[targetLanguage.selectedIndex].value;
  console.log("fetching translate...")
  fetch(
    "https://libretranslate.de/translate?q=" +
      wordToTranslate +
      "&source=" +
      sourceLanguage +
      "&target=" +
      targetLanguage1 +
      "&format=text&api_key=xxxxxxxx-xxx-xxxx-xxxx-xxxxxxxxxxxx",
    {
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }
  )
    .then((response) => {
      //   console.log(response);
      return response.json();
    })
    .then((data) => {
      console.log(data);
      //   console.log(data.translatedText);
      $("h3").text(data.translatedText);
    })
    .catch((err) => {
      console.error(err);
      alert(err);
    });
});