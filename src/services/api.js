//precisei porque o genius só aceita com autenticação via token
const API_URL = "https://api.genius.com";
const TOKEN = "I14qVyQRS2Y-F7FpIIMbbpxL8ZqybuTsr94lolvmwzdmE-4ECQzlSyoA8TGGfhN2";

export async function buscarMusicas(termo) {
  const proxy = "https://cors-anywhere.herokuapp.com/";
  const res = await fetch(`${proxy}${API_URL}/search?q=${encodeURIComponent(termo)}`, {
    headers: {Authorization: `Bearer ${TOKEN}`,},
  });

  if (!res.ok) throw new Error("Erro ao buscar músicas");
  const data = await res.json();
  return data.response.hits;
}

// POST para enviar música "favoritada" para o JSONPlaceholder
export async function favoritarMusica(musica) {
  const payload = {
    title: musica.result.title,
    artist: musica.result.primary_artist.name,
    image: musica.result.song_art_image_thumbnail_url,
  };

  const res = await fetch("https://jsonplaceholder.typicode.com", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!res.ok) throw new Error("Erro ao salvar favorito");
  return await res.json();
}