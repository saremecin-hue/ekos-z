// api/generate.js
export default async function handler(req, res) {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: req.body.prompt }],
            max_tokens: 1000 // Yaklaşık 500-530 kelime için yeterli [cite: 39]
        })
    });
    const data = await response.json();
    res.status(200).json({ text: data.choices[0].message.content });
}
