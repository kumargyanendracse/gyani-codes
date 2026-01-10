export async function POST(req) {
  const { prompt } = await req.json();

  const res = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`
    },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: "You are a helpful interview coach." },
        { role: "user", content: prompt }
      ]
    })
  });

  const data = await res.json();
  return Response.json({
    text: data.choices[0].message.content
  });
}
