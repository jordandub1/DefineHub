var strWord = "tree";


function getWord(word) {
    if (!word) {
        alert("please enter a valid word");
        return;
    }
    fetch("https://wordsapiv1.p.rapidapi.com/words/" + strWord +"/definitions", {
        "headers": {
            "x-rapidapi-host": "wordsapiv1.p.rapidapi.com",
            "x-rapidapi-key": "a4ba826bffmshdef196afc9f018cp1d1ebajsn6a07f04a0a7c"
        }
    })
        .then(response => {
            console.log(response);
            return response.json();
        })
        .then(data => {
            console.log(data);
            $("h1").text(word);
            $("h1").append($("<p>").text(data.definitions[0].definition));

        })
        .catch(err => {
            console.error(err);
            alert(err);
        })
};

getWord(strWord);
