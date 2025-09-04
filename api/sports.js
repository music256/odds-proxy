// api/sports.js
export default async function handler(req, res) {
  try {
    const response = await fetch(
      `https://api.the-odds-api.com/v4/sports/?apiKey=eb3db6ad48c8d563a220c9a155856991`
    );

    const data = await response.json();
    res.status(response.status).json(data);
  } catch (error) {
    res.status(500).json({ error: "Proxy request failed", details: error.message });
  }
}
