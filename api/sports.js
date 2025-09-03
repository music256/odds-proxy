export default async function handler(req, res) {
  try {
    const response = await fetch(
      `https://api.the-odds-api.com/v4/sports/?apiKey=eb3db6ad48c8d563a220c9a155856991`
    );

    if (!response.ok) {
      return res.status(response.status).json({ error: await response.text() });
    }

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
