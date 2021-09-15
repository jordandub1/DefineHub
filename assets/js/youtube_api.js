var apiKey = "AIzaSyBy-9ESszRKdMNtQIBtG6pghl7EnLtF3TE";
var apiBase = "https://www.googleapis.com/youtube/v3/search?";
var searchKey;

function loadClient() {
    gapi.client.setApiKey("AIzaSyBy-9ESszRKdMNtQIBtG6pghl7EnLtF3TE");
    return gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
        .then(function() { console.log("GAPI client loaded for API"); },
              function(err) { console.error("Error loading GAPI client for API", err); });
  }
  // Make sure the client is loaded before calling this method.
  function execute() {
    return gapi.client.youtube.search.list({
      "part": [
        "snippet"
      ],
      "maxResults": 10,
      "q": searchKey
    })
        .then(function(response) {
                // Handle the results here (response.result has the parsed body).
            console.log("Response", response);
            for (i = 0; i < response.result.items.length; i++) {
                // $("#results").append("<div>")
                // console.log(response.result.items[i].snippet.title);
                $("#results").append("<a href='https://www.youtube.com/watch?v=" + response.result.items[i].id.videoId + "><div><p>" + response.result.items[i].snippet.title + "</p><img src='" + response.result.items[i].snippet.thumbnails.default.url + "'/><div></a>");
                // console.log($("#results"));
                // $("#results").append("<img>").attr("src",result.items[i].snippet.thumbnails.default.url);
            };
              },
              function(err) { console.error("Execute error", err); });
  }
gapi.load("client");