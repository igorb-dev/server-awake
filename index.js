import fetch from "node-fetch";

const URL = "https://the-news-backend.onrender.com/auth/server-awake";

async function wakeUpServer() {
  try {
    const response = await fetch(URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: "Server waking up!" }),
    });

    const data = await response.json();
    console.log("✅ Resposta do servidor:", data);
  } catch (error) {
    console.error("❌ Erro ao chamar o servidor:", error);
  }
}

wakeUpServer();
