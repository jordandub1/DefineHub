var wordToTranslate = "Excellence";
var sourceLanguage = "en";
// var targetLanguage = "fr";
var targetLanguage = document.getElementById("dropdown");

//On Dropdown change word will be translated to the choosen language
targetLanguage.addEventListener("change", function (event) {
  console.log(event.target.value);
  var targetLanguage1 =
    targetLanguage.options[targetLanguage.selectedIndex].value;
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
