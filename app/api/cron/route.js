import { NextResponse } from 'next/server';
import * as cheerio from 'cheerio';

export const revalidate = 0;

export async function GET(request) {
  try {
    const response = await fetch('https://liputan6.com'); 
    const html = await response.text();
    const $ = cheerio.load(html);

    let infoEvent = [];
    $('article h4').each((index, element) => {
      const judul = $(element).text().trim();
      infoEvent.push(judul);
    });

    return NextResponse.json({ 
      status: "Sukses mengambil data!", 
      totalData: infoEvent.length,
      data: infoEvent 
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
