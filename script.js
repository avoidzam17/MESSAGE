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
  fetch("https://discord.com/api/webhooks/1416816308049416256/VemaHBgbcNsaySNIFD83BIpYJ6KpMNNAyfETBEgO5rL71ekLpgL2oQYCD8j36yNYneiw", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      content: `She clicked: "${message}"`
    })
  });

  // Show a goodbye message (optional)
  responseBox.innerText += "\n\nThis page will close in 5 seconds...";

  // Attempt to close the tab after 5 seconds
  setTimeout(() => {
    window.open('', '_self'); // Required for some browsers
    window.close();
  }, 5000);
}



//https://discord.com/api/webhooks/1416816308049416256/VemaHBgbcNsaySNIFD83BIpYJ6KpMNNAyfETBEgO5rL71ekLpgL2oQYCD8j36yNYneiw
