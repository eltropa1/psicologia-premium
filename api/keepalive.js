/**
 * Endpoint para mantener activa la base de datos de Supabase.
 * Vercel Cron lo ejecutará automáticamente.
 */

export default async function handler(req, res) {

  try {

    const response = await fetch(
      `${process.env.SUPABASE_URL}/rest/v1/articles?select=id&limit=1`,
      {
        headers: {
          apikey: process.env.SUPABASE_SERVICE_ROLE_KEY,
          Authorization: `Bearer ${process.env.SUPABASE_SERVICE_ROLE_KEY}`
        }
      }
    );

    if (!response.ok) {
      throw new Error("Supabase query failed");
    }

    const data = await response.json();

    return res.status(200).json({
      ok: true,
      message: "Supabase keepalive success",
      timestamp: new Date().toISOString(),
      rows: data.length
    });

  } catch (error) {

    console.error(error);

    return res.status(500).json({
      ok: false,
      error: error.message
    });

  }

}