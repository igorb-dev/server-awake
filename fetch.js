import axios from "axios";

const webhookURL = "https://the-news-backend.onrender.com/auth/server-awake";

async function callWebhook() {
  try {
    const response = await axios.get(webhookURL);
    console.log("✅ Webhook chamado com sucesso:", response.data);
  } catch (error) {
    console.error("❌ Erro ao chamar webhook:", error.message);
  }
}

callWebhook();
