import * as cheerio from 'cheerio';

export default async function handler(req, res) {
  try {
    const response = await fetch('https://www.liputan6.com/tag/game'); 
    const html = await response.text();
    const $ = cheerio.load(html);

    let infoEvent = [];
    $('article h4').each((index, element) => {
      const judul = $(element).text().trim();
      if(judul) {
        infoEvent.push(judul);
      }
    });

    // Menghindari cache di browser/Vercel Edge
    res.setHeader('Cache-Control', 'no-store, max-age=0');

    return res.status(200).json({ 
      status: "Sukses mengambil data!", 
      totalData: infoEvent.length,
      waktuWib: new Date().toLocaleString("id-ID", {timeZone: "Asia/Jakarta"}),
      data: infoEvent 
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}