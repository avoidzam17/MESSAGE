function showMessage() {
  document.getElementById("intro").style.display = "none";
  document.getElementById("confession").classList.remove("hidden");

  const music = document.getElementById("bgMusic");
  music.play().catch(() => {
    document.body.addEventListener("click", () => {
      music.play();
    }, { once: true });
  });
}

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

  // Show closing message
  responseBox.innerText += "\n\nThis page will close in 5 seconds...";

  // Graceful fallback for mobile: replace page content
  setTimeout(() => {
    document.body.innerHTML = `
      <div style="display:flex;flex-direction:column;justify-content:center;align-items:center;height:100vh;text-align:center;padding:20px;">
        <h1 style="font-size:2.5em;color:#3399cc;">Thank you for reading 💙</h1>
        <p style="font-size:1.5em;">You can close this tab now.</p>
      </div>
    `;
  }, 5000);
}

window.addEventListener("load", () => {
  const music = document.getElementById("bgMusic");
  music.play().catch(() => {
    document.body.addEventListener("click", () => {
      music.play();
    }, { once: true });
  });
});
