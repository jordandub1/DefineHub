var wordSearchHistory;

$("#btn-search").on("click", function () {
    var word = $("#nme")[0].value;
    if (!word) {
        return
    } else {        
        word = word.toLowerCase();
        console.log(word);
        if (wordSearchHistory.indexOf(word) < 0) {
            wordSearchHistory.push(word);
            localStorage.setItem("WordHistory", JSON.stringify(wordSearchHistory));
        };
    };
    console.log(wordSearchHistory)
});

function init() {
    var storedWordSearchHistory = JSON.parse(localStorage.getItem("WordHistory"));
    console.log(storedWordSearchHistory);
    if (storedWordSearchHistory) {
        wordSearchHistory = storedWordSearchHistory;
        console.log(wordSearchHistory);
    } else {
        wordSearchHistory = [];
        console.log(wordSearchHistory);
    }
};

init();

$("#nme").autocomplete({
    source: wordSearchHistory
});
