var strWord = $("#nme");


function getWord(word) {
    if (!word) {
        alert("please enter a valid word");
        return;
    }
    fetch("https://wordsapiv1.p.rapidapi.com/words/" + word +"/definitions", {
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
            for (i = 0; i < data.definitions.length; i++) {
                $("#word-ul").append($("<li>").text(data.definitions[i].definition));
            };

        })
        .catch(err => {
            console.error(err);
            // alert(err);
        })
};

$("#btn-search").on("click", function (e) {
    e.preventDefault();
    console.log(strWord[0].value);
    getWord(strWord[0].value);
});
