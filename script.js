window.addEventListener("load", () => {
  const music = document.getElementById("bgMusic");
  music.play().catch(() => {
    document.body.addEventListener("click", () => {
      music.play();
    }, { once: true });
  });
});

function showMessage() {
  document.getElementById("intro").classList.add("hidden");
  document.getElementById("confession").classList.remove("hidden");
  document.getElementById("reactionButtons").classList.remove("hidden");
}

function respond(choice) {
  const responseBox = document.getElementById("finalResponse");
  responseBox.innerText = `You chose: ${choice}\n\nThis page will close in 5 seconds...`;
  responseBox.classList.remove("hidden");

  // Send to Discord webhook
  fetch("https://discord.com/api/webhooks/YOUR_WEBHOOK_URL", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      content: `She clicked: "${choice}"`
    })
  });

  // Attempt to close tab
  setTimeout(() => {
    window.open('', '_self');
    window.close();
  }, 5000);
}
