function getLyrics() {
  const artist = document.getElementById('artist').value.trim();
  const song = document.getElementById('song').value.trim();
  const lyricsDisplay = document.getElementById('lyrics');

  if (!artist || !song) {
    lyricsDisplay.textContent = "Please enter both artist and song name.";
    return;
  }

  lyricsDisplay.textContent = "Fetching lyrics...";

  fetch(`https://api.lyrics.ovh/v1/${artist}/${song}`)
    .then(response => {
      if (!response.ok) {
        throw new Error("Lyrics not found.");
      }
      return response.json();
    })
    .then(data => {
      lyricsDisplay.textContent = data.lyrics || "No lyrics found.";
    })
    .catch(error => {
      lyricsDisplay.textContent = "Error: " + error.message;
    });
}
