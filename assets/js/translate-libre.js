var wordToTranslate = "book";
var sourceLanguage = "en";
var targetLanguage = "fr";


fetch("https://libretranslate.de/translate?q=" + wordToTranslate + 
    "&source=" + sourceLanguage + 
    "&target=" + targetLanguage + "&format=text&api_key=xxxxxxxx-xxx-xxxx-xxxx-xxxxxxxxxxxx", {
    method:"POST",
    "headers": {
        "accept": "application/json",
        "Content-Type": "application/x-www-form-urlencoded"
    }
})
        .then(response => {
            console.log(response);
            return response.json();
        })
        .then(data => {
            console.log(data);
            console.log(data.translatedText);
        })
        .catch(err => {
            console.error(err);
            alert(err);
        });
    
// fetch("https://libretranslate.de/translate", {
//     method: "POST",
//     body: JSON.stringify({
//         q: "tree",
//         source: "en",
//         target: "es"
//     }),
//     headers: { "Content-Type": "application/json" }
// })
//     .then(response => {
//         console.log(response);
//         return response.JSON();
//     })
//     .then(data => {
//         console.log(data);
//     });

// const res = fetch("https://libretranslate.de/translate", {
//         method: "GET",
//         body: JSON.stringify({
//             q: "",
//             source: "en",
//             target: "es"
//         }),
//         headers: { "Content-Type": "application/json" }
//     });
    
//     console.log(res);