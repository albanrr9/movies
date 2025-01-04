const twoembed = document.getElementById("2embed");
const superembed = document.getElementById("superembed");

function handleSearch() {
  const selectedRadio = document.querySelector('input[name="watchtype"]:checked');
  const searchInput = document.getElementById('searchInput').value.trim().toLowerCase();

  if (!selectedRadio) { // If no radio button is selected
    alert('Please select a search type (Movie or TV Show)!');
    return; // Stop further execution
  }

  if (!searchInput) {
    alert('Please enter a search query!');
    return;
  }

  let id = searchInput.startsWith("tt");

  if (selectedRadio.value === "movie") {
    if (id == true) {
      var superembedurl = "https://multiembed.mov/directstream.php?video_id=" + searchInput;
      var twoembedurl = "https://www.2embed.cc/embed/" + searchInput;
    }
    else {
      var superembedurl = "https://multiembed.mov/directstream.php?video_id=" + searchInput + "&tmdb=1";
      var twoembedurl = "https://www.2embed.cc/embed/" + searchInput;
    }
  }
  else if (selectedRadio.value === "tvshow") {
    if (id == true) {
      var superembedurl = "https://multiembed.mov/directstream.php?video_id=" + searchInput + "&s=1&e=1";
      var twoembedurl = "https://www.2embed.cc/embedtv/" + searchInput + "&s=1&e=1";
    }
    else {
      var superembedurl = "https://multiembed.mov/directstream.php?video_id=" + searchInput + "&tmdb=1&s=1&e=1";
      var twoembedurl = "https://www.2embed.cc/embedtv/" + searchInput + "&s=1&e=1";
    }
  }
  superembed.innerHTML = `<iframe src="${superembedurl}" width="100%" height="100%" frameborder="0" scrolling="no" allowfullscreen></iframe>`
  twoembed.innerHTML = `<iframe src="${twoembedurl}" width="100%" height="100%" frameborder="0" scrolling="no" allowfullscreen></iframe>`
}