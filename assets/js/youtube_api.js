var apiKey = "AIzaSyBy-9ESszRKdMNtQIBtG6pghl7EnLtF3TE";
var apiBase = "https://www.googleapis.com/youtube/v3/search?";
var word = $("#nme");
var targetLanguage = $("#dropdown");
var searchKey = "how to pronounce " + word + " in " + targetLanguage;

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
                $("#youtube-list").append("<li data-vidID='" + response.result.items[i].id.videoId + "'><p>" + response.result.items[i].snippet.title + "</p><img src='" + response.result.items[i].snippet.thumbnails.default.url + "'/></li>");
            };
              },
              function(err) { console.error("Execute error", err); });
  }
async function init() {
  await gapi.load("client");
  };

init();

// 2. This code loads the IFrame Player API code asynchronously.
// var tag = document.getElementById('player');

// tag.src = "https://www.youtube.com/iframe_api";
// var firstScriptTag = document.getElementsByTagName('vidPlayer')[0];
// firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
// var player;
// function onYouTubeIframeAPIReady(vidid) {
//   console.log('YTiFrameAPIReady');
//   console.log(vidid);
//   player = new YT.Player('player', {
//     height: '390',
//     width: '640',
//     videoId: '5nBbD1yj20s',
//     // videoId: videoid,
//     playerVars: {
//       'playsinline': 1
//     },
//     events: {
//       'onReady': onPlayerReady,
//       'onStateChange': onPlayerStateChange
//     }
//   });
//   // player.loadVideoById(vidid,0)
// }

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
  event.target.playVideo();
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
var done = false;
function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING && !done) {
    setTimeout(stopVideo, 6000);
    done = true;
  }
}
function stopVideo() {
  player.stopVideo();
}

$("#btn-search").on("click", async function () {
  $("#youtube-list").innerHTML = "";
  word = word[0].value;
  targetLanguage = targetLanguage.text;
  var searchKey = "how to pronounce " + word + " in " + targetLanguage;
  console.log(searchKey);
  
  await loadClient();
  execute();
});

$("#youtube-list").on("click", "li", function (event) {
  var vid = $(event.target);
  console.log(vid.data("vidid"));
  $("#player").attr("src","https://www.youtube.com/embed/" + vid.data("vidid") + "?enablejsapi=1")
  onPlayerReady();
  
});