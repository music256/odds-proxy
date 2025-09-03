// api/index.js
export default async function handler(req, res) {
  const { pathname, searchParams } = new URL(req.url, `http://${req.headers.host}`);
  
  // Forward path เช่น /sports
  const forwardPath = pathname.replace(/^\/api/, "");
  
  // เอา query ที่ผู้ใช้ส่งมา + ใส่ apiKey เพิ่ม
  const query = new URLSearchParams(searchParams);
  query.set("apiKey", "eb3db6ad48c8d563a220c9a155856991"); // <== API KEY ของคุณ

  // ส่งไป Odds API
  const oddsUrl = `https://api.the-odds-api.com/v4${forwardPath}?${query.toString()}`;
  const response = await fetch(oddsUrl);

  const data = await response.json();
  res.status(response.status).json(data);
}
