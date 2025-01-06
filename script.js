const twoembed = document.getElementById("2embed");
const superembed = document.getElementById("superembed");

function generateEmbedUrls(searchInput, type, isId) {
  const baseSuperembedUrl = "https://multiembed.mov/directstream.php?video_id=";
  const baseTwoembedUrl = "https://www.2embed.cc/";

  if (type === "movie") {
    return {
      superembedUrl: `${baseSuperembedUrl}${searchInput}${isId ? "" : "&tmdb=1"}`,
      twoembedUrl: `${baseTwoembedUrl}embed/${searchInput}`
    };
  } else if (type === "tvshow") {
    return {
      superembedUrl: `${baseSuperembedUrl}${searchInput}&s=1&e=1${isId ? "" : "&tmdb=1"}`,
      twoembedUrl: `${baseTwoembedUrl}embedtv/${searchInput}&s=1&e=1`
    };
  }

  return { superembedUrl: "", twoembedUrl: "" };
}

function handleSearch() {
  const selectedRadio = document.querySelector('input[name="watchtype"]:checked');
  const searchInput = document.getElementById('searchInput').value.trim().toLowerCase();

  if (!selectedRadio) {
    alert('Please select a search type (Movie or TV Show)!');
    return;
  }

  if (!searchInput) {
    alert('Please enter a search query!');
    return;
  }

  const isId = searchInput.startsWith("tt");
  const { superembedUrl, twoembedUrl } = generateEmbedUrls(searchInput, selectedRadio.value, isId);

  // Adding loading indicator
  superembed.innerHTML = "<p>Loading...</p>";
  twoembed.innerHTML = "<p>Loading...</p>";

  // Embedding the iframes
  setTimeout(() => {
    superembed.innerHTML = `<iframe src="${superembedUrl}" width="100%" height="100%" frameborder="0" scrolling="no" allowfullscreen></iframe>`;
    twoembed.innerHTML = `<iframe src="${twoembedUrl}" width="100%" height="100%" frameborder="0" scrolling="no" allowfullscreen></iframe>`;
  }, 1000); // Simulate loading delay
}
