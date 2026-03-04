import { supabase } from "./supabaseClient";

/**
 * Hace una consulta mínima a Supabase para registrar actividad
 * y evitar que la base de datos entre en pausa.
 */
export async function keepSupabaseAlive() {
  try {

    await supabase
      .from("articles")
      .select("id")
      .limit(1);

  } catch (error) {
    console.warn("Supabase keepalive error:", error);
  }
}