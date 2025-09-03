// api/sports.js

export default async function handler(req, res) {
  try {
    const response = await fetch(
      "https://api.the-odds-api.com/v4/sports",
      {
        headers: {
          "x-api-key": "eb3db6ad48c8d563a220c9a155856991", // 👈 วาง API KEY จริงตรงนี้
        },
      }
    );

    const data = await response.json();
    res.status(response.status).json(data);
  } catch (error) {
    res.status(500).json({ error: "Proxy error", details: error.message });
  }
}
