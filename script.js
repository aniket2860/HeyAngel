const messages = [
  "You're amazing, Angel! ✨",
  "Smile! The world’s better with you in it 🌸",
  "Angel, someone thinks you're really special today 💖",
  "Are you sunshine? Because you light everything up 🌞",
  "Hey Angel, keep being awesome 🎉",
  "You're as lovely as your name 💫"
];

function showMessage() {
  const randomMessage = messages[Math.floor(Math.random() * messages.length)];
  document.getElementById('message').innerText = randomMessage;
}