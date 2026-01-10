export async function POST(req) {
  try {
    const { prompt } = await req.json();

    const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.GROQ_API_KEY}`
      },
      body: JSON.stringify({
        model: "llama-3.1-8b-instant",
        messages: [
          { role: "system", content: "You are an expert interview coach." },
          { role: "user", content: prompt }
        ]
      })
    });

    const data = await res.json();

    if (!data.choices) {
      return Response.json({ text: JSON.stringify(data) });
    }

    return Response.json({
      text: data.choices[0].message.content
    });

  } catch (e) {
    return Response.json({ text: e.message });
  }
}

