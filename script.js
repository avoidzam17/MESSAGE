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
}

function respond(choice) {
  const responseBox = document.getElementById("finalResponse");
  responseBox.innerText = `You chose: ${choice}\n\nThis page will close in 5 seconds...`;
  responseBox.classList.remove("hidden");

  fetch("https://discord.com/api/webhooks/1416816308049416256/VemaHBgbcNsaySNIFD83BIpYJ6KpMNNAyfETBEgO5rL71ekLpgL2oQYCD8j36yNYneiw", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      content: `She clicked: "${choice}"`
    })
  });

  setTimeout(() => {
    window.open('', '_self');
    window.close();
  }, 5000);
}
