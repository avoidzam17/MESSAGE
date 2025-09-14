function showMessage() {
  document.getElementById("intro").style.display = "none";
  document.getElementById("confession").classList.remove("hidden");
  document.getElementById("reactionButtons").classList.remove("hidden");
}


function respond(message) {
  const responseBox = document.getElementById("finalResponse");
  responseBox.innerText = message;
  responseBox.classList.remove("hidden");
}


window.addEventListener("load", () => {
  const music = document.getElementById("bgMusic");
  music.play().catch(() => {
    // Some browsers block autoplay until user interacts
    document.body.addEventListener("click", () => {
      music.play();
    }, { once: true });
  });
});

//notifies me with her answer
function respond(message) {
  const responseBox = document.getElementById("finalResponse");
  responseBox.innerText = message;
  responseBox.classList.remove("hidden");

  // Send to Discord webhook
  fetch("https://discord.com/channels/1416816100326244406/1416816101194600532/1416817015913451651", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      content: `She clicked: "${message}"`
    })
  });

  // Close the tab after 5 seconds
  setTimeout(() => {
    window.close();
  }, 5000);
}
