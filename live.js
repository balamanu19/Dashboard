function sendMessage() {
  const input = document.getElementById("chatInput");
  const message = input.value.trim();
  if (!message) return;

  const chatOutput = document.getElementById("chatOutput");

  // User message
  const userMsg = document.createElement("div");
  userMsg.className = "chat-message user-message";
  userMsg.innerText = message;
  chatOutput.appendChild(userMsg);

  // Bot response (dummy)
  const botMsg = document.createElement("div");
  botMsg.className = "chat-message bot-message";

  if (message.toLowerCase().includes("trust")) {
    botMsg.innerText =
      "📊 The current TrustScore trend is showing an upward growth with an average of 94.";
  } else if (message.toLowerCase().includes("loyalty")) {
    botMsg.innerText = "🎯 450 customers are in the Platinum Loyalty Tier.";
  } else if (message.toLowerCase().includes("transaction")) {
    botMsg.innerText =
      "💰 The latest transaction volume is 1,200 for this period.";
  } else {
    botMsg.innerText =
      "🤖 Sorry, I couldn’t understand. Try asking about TrustScore, Loyalty, or Transactions.";
  }

  chatOutput.appendChild(botMsg);

  // Scroll to bottom
  chatOutput.scrollTop = chatOutput.scrollHeight;

  // Clear input
  input.value = "";
}
