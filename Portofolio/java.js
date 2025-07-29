 const music = document.getElementById("bg-music");
  const playLink = document.querySelector(".play-music");

  playLink.addEventListener("click", function(e) {
    e.preventDefault(); // Mencegah reload
    music.play();
  });